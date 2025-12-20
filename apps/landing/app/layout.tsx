import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verifactu - Cumple con la facturación digital',
  description: 'Centraliza tus puntos de emisión y automatiza el envío de los libros de facturas al SII con una plataforma segura y certificada.',
  keywords: 'Verifactu, facturación digital, SII, facturas, tickets, automatización',
  authors: [{ name: 'Verifactu' }],
  openGraph: {
    title: 'Verifactu - Cumple con la facturación digital',
    description: 'La forma más simple de emitir y cumplir con Verifactu para tu negocio',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
