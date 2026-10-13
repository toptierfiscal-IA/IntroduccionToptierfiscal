# TOP TIER FISCAL — PROYECTO VERCEL ESTÁTICO

Sitio de bienvenida para nuevos clientes del L.C. Ángel Urrea.

## ⚠️ IMPORTANTE: reemplaza el proyecto anterior, no lo mezcles

El ZIP trae una versión nueva sin Node, npm, dist, build.mjs ni package.json. Si en tu repositorio anterior existen estos archivos, **elimínalos** al actualizar para evitar configuraciones mezcladas.

## Estructura correcta (en la raíz del repositorio)

```text
TU_REPOSITORIO/
├── vercel.json
├── README.md
├── index.html          # respaldo autocontenido
└── public/
    ├── index.html      # la página que publica Vercel
    └── diagnostico.html
```

**Ambos index.html contienen el HTML, CSS, JavaScript, logotipos y favicon integrados. No hay dependencias de recursos externos para mostrar la página.** Los enlaces a SAT, WhatsApp e Instagram sí necesitan internet cuando se pulsan.

## Método A: GitHub + Vercel (recomendado)

1. Descomprime el ZIP.
2. En GitHub, borra los archivos viejos del repositorio (`package.json`, `build.mjs`, `dist`, `assets`, `vercel.json`, `index.html` anterior), si existen. Usa un repositorio nuevo si prefieres evitar conflictos.
3. Sube **el contenido** del ZIP directamente a la raíz del repositorio. Debes ver `vercel.json`, `index.html` y `public/` al abrirlo; **no** una sola carpeta llamada `TOP_TIER_FISCAL_VERCEL_FINAL`.
4. Vercel > Add New > Project > Import Git Repository.
5. Framework Preset: **Other**.
6. Root Directory: **./** si el repositorio contiene `vercel.json` en su raíz. Si el proyecto quedó dentro de una subcarpeta en GitHub, ajusta Root Directory a esa subcarpeta.
7. Build Command: vacío/sin comando. Output Directory: **public**. El archivo `vercel.json` ya fija estas opciones para este despliegue.
8. Haz clic en **Deploy**.
9. Visita la URL que genera Vercel. Para confirmar que los archivos se sirvieron, también visita `https://TU_DOMINIO.vercel.app/diagnostico.html`.

## Método B: probar antes de subir

Puedes abrir `index.html` con doble clic. También puedes ejecutar un servidor local en la carpeta `public`:

```bash
python -m http.server 8000 --directory public
```

Y abrir `http://localhost:8000/`.

## Si aún aparece el error

- **404: NOT_FOUND**: comprueba **Root Directory**, que `public/index.html` aparezca en la pestaña *Source* del despliegue y que **Output Directory** sea `public`.
- **DEPLOYMENT_NOT_FOUND**: verifica el enlace exacto del despliegue en Vercel y que siga existiendo.
- **Error de compilación**: este proyecto no usa compilación; revisa que no se haya conservado `package.json` o un comando de compilación del proyecto anterior.
- **Página en blanco**: usa `/diagnostico.html` y comparte el error de la consola del navegador.

No es posible garantizar que tu proyecto de Vercel ya existente funcione sin comprobar sus configuraciones o los logs. Si persiste, comparte URL y código de error para el diagnóstico.

## Guía fiscal

Incluye 11 secciones, calendario, checklist, 4 simuladores de factura e información del IVA 8 % únicamente para operaciones elegibles. Los cálculos son orientativos y deben verificarse antes de emitir CFDI.
