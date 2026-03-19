---
layout: _paginas/foundations/_playground.njk
permalink: /playground/

titulo: Playground
descripcion: Espacio de pruebas para experimentar con clases, layouts y componentes del sistema de diseño.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/tipografias.jpg
imageAlt: Playground del sistema de diseño
---

## ¿Para qué sirve el Playground?

El playground es un espacio libre para probar combinaciones de clases, validar comportamientos responsive y experimentar antes de llevar el código a producción.

## Cómo crear un entorno de pruebas rápido

### 1. CodeSandbox (en la nube)

Crea un fork del boilerplate de holygrail2 en CodeSandbox para probar sin instalar nada:

```
https://codesandbox.io/s/holygrail2-starter
```

### 2. Entorno local

Instala holygrail2 como dependencia:

```bash
npm install holygrail2
```

Importa en tu SCSS principal:

```scss
// Importa todo el sistema
@import 'node_modules/holygrail2/scss/style';

// O solo los módulos que necesites
@import 'node_modules/holygrail2/scss/abstract/_all';
@import 'node_modules/holygrail2/scss/base/_helpers';
@import 'node_modules/holygrail2/scss/base/_ratios';
```

### 3. Estructura mínima

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Playground</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <section class="ptr-64 pbr-64">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <p class="hg-body-m">Texto de ejemplo</p>
        </div>
      </div>
    </div>
  </section>
</body>
</html>
```

## Herramientas de debug

El sistema incluye mixins de debug para analizar la maquetación visualmente:

```scss
@include debug-divs();    // Colorea las divs para ver la estructura
@include debug-imgs();    // Detecta imágenes sin alt o con alt vacío en contenido
@include debug-links();   // Analiza los links
@include debug-forms();   // Revisa formularios e inputs
@include debug-headers(); // Analiza los encabezados h1-h6
@include debug-fine();    // Depuración fina de elementos
@include debug-all();     // Activa todos los debugs a la vez
```

## Breakpoints del sistema

| Variable | Valor | Alias |
|---|---|---|
| `$break-xs` | 1px | `xs` |
| `$break-sm` | 768px | `sm` |
| `$break-md` | 992px | `md` |
| `$break-lg` | 1280px | `lg` |
| `$break-xl` | 1440px | `xl` |

```scss
// Uso de breakpoints en SCSS
.mi-elemento {
  font-size: 14px;

  @media (min-width: $break-md) {
    font-size: 16px;
  }
}
```

## Recursos útiles

- [npm: holygrail2](https://www.npmjs.com/package/holygrail2)
- [Espaciado](/espaciado/) — tablas de padding y margin
- [Flexbox](/flexbox/) — helpers de layout
- [Ratios](/ratios/) — proporciones de imagen
- [Tipografías](/tipografia/) — escala tipográfica
