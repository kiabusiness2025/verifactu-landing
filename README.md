# Verifactu Landing

Landing page estática en HTML y CSS para presentar la plataforma Verifactu.

## Estructura del proyecto

- `index.html`: marcado principal de la landing.
- `styles.css`: estilos y componentes responsivos.
- `.github/workflows/blank.yml`: placeholder que puedes eliminar o reemplazar por tu flujo de CI/CD.

## Desarrollo local

Sirve el directorio raíz con cualquier servidor estático o abre directamente `index.html` en tu navegador.

```bash
python -m http.server 3000
```

Luego navega a `http://localhost:3000`.

## Publicar en GitHub

Si clonas este repositorio en local y aún no tiene remoto configurado:

```bash
git remote add origin https://github.com/kiabusiness2025/verifactu-landing.git
git branch -M main
```

Sube el código a GitHub:

```bash
git push -u origin main
```

> Nota: sustituye la URL por la de tu fork si corresponde y autentícate con un **Personal Access Token** de GitHub.

### Cómo hacer commit y ejecutar `git push`

1. **Revisa el estado de los archivos** que han cambiado.
   ```bash
   git status -sb
   ```
2. **Prepara (stage) los archivos** que quieres subir.
   ```bash
   git add .
   ```
   > Usa `git add <archivo>` si solo quieres incluir cambios concretos.
3. **Crea el commit** con un mensaje descriptivo.
   ```bash
   git commit -m "Describe brevemente el cambio"
   ```
4. **Envía los commits** a GitHub en la rama remota correspondiente.
   ```bash
   git push origin main
   ```
   - Sustituye `main` por el nombre de tu rama si trabajas en otra.
   - La primera vez que pushes desde una rama nueva, usa `git push -u origin <rama>` para crear el seguimiento.
5. **Verifica en Vercel**: cada nuevo commit en la rama conectada disparará un despliegue automático.

## Despliegue en Vercel

1. Inicia sesión en Vercel y elige **Add New → Project**.
2. Selecciona el repositorio `kiabusiness2025/verifactu-landing` (o tu fork).
3. Vercel detectará que es un sitio estático; no necesitas configuraciones adicionales.
4. Pulsa **Deploy**. Una vez finalice, añade el dominio `verifactu.business` en **Settings → Domains** y verifica los DNS.

Para futuras actualizaciones, realiza tus cambios, haz commit y ejecuta `git push`. Vercel reconstruirá la landing automáticamente.
