import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Schema for validation
const leadSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = leadSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, company, message } = validationResult.data

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      // In development, we'll simulate success
      if (process.env.NODE_ENV === 'development') {
        console.log('Lead received (dev mode):', { name, email, company, message })
        return NextResponse.json({ 
          success: true, 
          message: 'Lead recibido correctamente (modo desarrollo)' 
        })
      }
      return NextResponse.json(
        { error: 'Servicio de email no configurado' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const resend = new Resend(resendApiKey)

    const emailContent = `
      <h2>Nuevo Lead de Verifactu</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
      ${message ? `<p><strong>Mensaje:</strong></p><p>${message}</p>` : ''}
    `

    const recipientEmail = process.env.LEAD_EMAIL || 'leads@verifactu.business'

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@verifactu.business',
      to: recipientEmail,
      subject: `Nuevo lead: ${name}`,
      html: emailContent,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Lead enviado correctamente' 
    })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
