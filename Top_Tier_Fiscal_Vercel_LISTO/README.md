# Top Tier Fiscal — Guía fiscal interactiva

Sitio web de **L.C. Ángel Urrea** para clientes del despacho Top Tier Fiscal. Incluye bienvenida, documentación inicial, calendario, facturación y calculadoras RESICO (IVA 16 % y 8 %; persona física y moral).

## Publicar con GitHub y Vercel

1. Descomprime el ZIP.
2. Crea un repositorio en GitHub, por ejemplo `top-tier-fiscal-guia`.
3. Sube **todos los archivos y la carpeta `assets/`** que están dentro de esta carpeta a la **raíz del repositorio**. El `index.html` debe verse al abrir el repositorio, no dentro de otra carpeta.
4. En Vercel, usa **Add New → Project** e importa ese repositorio. Si ya existe un proyecto en Vercel, verifica en **Settings → Build and Deployment** que el **Root Directory** sea `./` (la carpeta con `package.json`, `vercel.json` e `index.html`).
5. En **Framework Preset** selecciona `Other` (sin framework).
6. `vercel.json` ya configura el comando de construcción `npm run build` y el directorio de salida `dist`. No pongas `public` ni otro directorio de salida.
7. Haz **Deploy**. Si modificas archivos en GitHub, Vercel creará otro despliegue automáticamente.

> **Si sale 404** comprueba que los archivos están en la raíz del repositorio, que el despliegue está listo y que `Root Directory` es correcto. **Si falla la compilación**, abre los logs del despliegue; `build.mjs` indica si falta algún archivo. Compartir el enlace del despliegue o el error permite diagnosticar un problema de configuración particular.

## Publicar directamente sin GitHub

También puedes descomprimir y arrastrar la **carpeta del proyecto**, no únicamente el HTML ni el ZIP, a https://vercel.com/drop. Esta ruta crea un proyecto nuevo que luego puedes conectar con GitHub.

## Probar en tu computadora

Requiere Node.js 18 o superior solo para la construcción:

```bash
npm run build
```

Abre `dist/index.html` o sirve `dist/` con un servidor local, por ejemplo `python -m http.server 8000 --directory dist`.

## Estructura

```
index.html             Página principal
assets/styles.css      Diseño y animaciones
assets/app.js          Interactividad y calculadoras
assets/logo-*.png      Logotipos del despacho
assets/favicon.png     Ícono de la pestaña
package.json           Comando de construcción
build.mjs              Genera la carpeta publicada `dist/`
vercel.json            Configuración de Vercel
.gitignore             Ignora archivos generados
```

Los cálculos son orientativos. El IVA fronterizo al 8 % solo debe utilizarse cuando efectivamente se cumplan los requisitos y obligaciones aplicables.
