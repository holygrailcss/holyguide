---
layout: _paginas/develop/_develop.njk
page_section: develop
permalink: /develop/

titulo: Develop
descripcion: Cómo empezar en el sistema de diseño agnóstico holygrail.

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "develop"]
image: /assets/static/images/1.jpg
imageAlt: Ilustración de un diseño de sistema web
buttonTitle: Empezar

seccion1: Diseñadores
url1: /startdesigner

seccion2: Desarrolladores
url2: /startdev

seccion3: Owners
url3: /enlace3
---

<style>
.dev-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 32px 0;
}
.dev-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px 24px;
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.dev-card:hover {
  border-color: #000;
  box-shadow: 0 4px 16px rgba(0,0,0,.08);
  text-decoration: none;
}
.dev-card__label {
  font-size: 10px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .1em;
  color: #999; margin-bottom: 6px;
}
.dev-card__title {
  font-size: 15px; font-weight: 700;
  margin: 0 0 6px;
}
.dev-card__desc {
  font-size: 12px; color: #666;
  margin: 0; line-height: 1.5;
}
.dev-card__badge {
  position: absolute;
  top: 10px; right: 10px;
  font-size: 8px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .08em;
  padding: 2px 6px;
  border-radius: 20px;
  line-height: 1.6;
}
.dev-card--accent .dev-card__badge { background: #000;     color: #fff; }
.dev-card--dutti  .dev-card__badge { background: #1a5e99;  color: #fff; }
.dev-card--warn   .dev-card__badge { background: #f59e0b;  color: #fff; }
.dev-card--green  .dev-card__badge { background: #1a7a3c;  color: #fff; }

.dev-stack {
  margin: 32px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
.dev-stack__row {
  display: grid;
  grid-template-columns: 120px 1fr;
  border-bottom: 1px solid #e0e0e0;
  align-items: stretch;
}
.dev-stack__row:last-child { border-bottom: none; }
.dev-stack__layer {
  padding: 14px 16px;
  background: #f8f8f8;
  font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .08em;
  color: #555;
  display: flex; align-items: center;
  border-right: 1px solid #e0e0e0;
}
.dev-stack__items {
  padding: 12px 16px;
  display: flex; flex-wrap: wrap; gap: 8px;
  align-items: center;
}
.dev-stack__chip {
  font-size: 11px;
  background: #f0f0f0;
  border-radius: 4px;
  padding: 3px 10px;
  font-family: monospace;
}
.dev-stack__chip--key {
  background: #000;
  color: #fff;
}

.dev-flow {
  display: flex;
  align-items: center;
  gap: 0;
  margin: 24px 0;
  overflow-x: auto;
}
.dev-flow__step {
  flex: 1;
  min-width: 110px;
  text-align: center;
  padding: 16px 8px;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  font-size: 12px;
  position: relative;
}
.dev-flow__step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 18px;
  color: #999;
}
.dev-flow__num {
  display: block;
  font-size: 20px; font-weight: 700;
  margin-bottom: 4px;
}
.dev-flow__label {
  display: block;
  font-size: 11px;
  color: #555;
  line-height: 1.3;
}

.dev-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 20px 0;
}
.dev-tool {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 13px;
}
.dev-tool a { font-weight: 700; color: #000; }
.dev-tool p { margin: 4px 0 0; font-size: 11px; color: #777; }
</style>

## ¿Qué es Holygrail?

**Holygrail** es un sistema de diseño CSS agnóstico que proporciona variables, utilidades, componentes y layouts para construir interfaces web consistentes. Compatible con cualquier framework (Angular, React, vanilla HTML).

### Stack tecnológico

<div class="dev-stack">
  <div class="dev-stack__row">
    <div class="dev-stack__layer">Núcleo</div>
    <div class="dev-stack__items">
      <span class="dev-stack__chip dev-stack__chip--key">holygrail2</span>
      <span class="dev-stack__chip">SCSS / Sass</span>
      <span class="dev-stack__chip">CSS custom properties</span>
    </div>
  </div>
  <div class="dev-stack__row">
    <div class="dev-stack__layer">Generador</div>
    <div class="dev-stack__items">
      <span class="dev-stack__chip dev-stack__chip--key">Eleventy (11ty)</span>
      <span class="dev-stack__chip">Nunjucks</span>
      <span class="dev-stack__chip">Markdown</span>
    </div>
  </div>
  <div class="dev-stack__row">
    <div class="dev-stack__layer">Animación</div>
    <div class="dev-stack__items">
      <span class="dev-stack__chip dev-stack__chip--key">GSAP</span>
      <span class="dev-stack__chip">CSS animations</span>
      <span class="dev-stack__chip">Intersection Observer</span>
    </div>
  </div>
  <div class="dev-stack__row">
    <div class="dev-stack__layer">Proyecto</div>
    <div class="dev-stack__items">
      <span class="dev-stack__chip dev-stack__chip--key">Angular</span>
      <span class="dev-stack__chip">TypeScript</span>
      <span class="dev-stack__chip">Angular CDK</span>
    </div>
  </div>
</div>

### Flujo de trabajo

<div class="dev-flow">
  <div class="dev-flow__step">
    <span class="dev-flow__num">01</span>
    <span class="dev-flow__label">Setup<br>variables</span>
  </div>
  <div class="dev-flow__step">
    <span class="dev-flow__num">02</span>
    <span class="dev-flow__label">Import<br>holygrail2</span>
  </div>
  <div class="dev-flow__step">
    <span class="dev-flow__num">03</span>
    <span class="dev-flow__label">HTML<br>estructura</span>
  </div>
  <div class="dev-flow__step">
    <span class="dev-flow__num">04</span>
    <span class="dev-flow__label">Componentes<br>DS</span>
  </div>
  <div class="dev-flow__step">
    <span class="dev-flow__num">05</span>
    <span class="dev-flow__label">Debug &<br>QA</span>
  </div>
</div>


## Secciones de Develop

<div class="dev-cards">
  <a class="dev-card dev-card--accent" href="/start-dev/">
    <span class="dev-card__badge">Inicio</span>
    <p class="dev-card__title">Start Dev</p>
    <p class="dev-card__desc">Instalación, setup mínimo, estructura de archivos y primeros pasos con holygrail2.</p>
  </a>
  <a class="dev-card dev-card--green" href="/practices/">
    <span class="dev-card__badge">Calidad</span>
    <p class="dev-card__title">Buenas Prácticas</p>
    <p class="dev-card__desc">Guía con ejemplos reales de buenas y malas praxis detectadas en el proyecto Dutti.</p>
  </a>
  <a class="dev-card dev-card--warn" href="/develop/effort-impact/">
    <span class="dev-card__badge">Estrategia</span>
    <p class="dev-card__title">Effort vs Impact</p>
    <p class="dev-card__desc">Propuestas de mejora SCSS/HTML clasificadas por esfuerzo e impacto. 19 iniciativas.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-overview/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Visión General</p>
    <p class="dev-card__desc">Arquitectura completa del frontend de Massimo Dutti — estructura de carpetas y convenciones.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-abstract-base/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Abstract & Base</p>
    <p class="dev-card__desc">Variables, breakpoints, mixins, tipografía y declaración de fuentes.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-elements/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Elements</p>
    <p class="dev-card__desc">Modales, filtros, PDP, PLP, Swiper, sidebars, toast y notificaciones. 22 archivos.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-partials/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Partials</p>
    <p class="dev-card__desc">Header, menú HolyGrail, footer, shopcart, search y chat. 17 archivos.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-forms/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Forms</p>
    <p class="dev-card__desc">Inputs, checkboxes, dropdowns, OTP, phone combo y range slider. 11 archivos.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-components/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Components Angular</p>
    <p class="dev-card__desc">Inventario de 86 componentes Angular con estilos encapsulados.</p>
  </a>
  <a class="dev-card dev-card--dutti" href="/develop/dutti-process/">
    <span class="dev-card__badge">Dutti</span>
    <p class="dev-card__title">Process</p>
    <p class="dev-card__desc">Flujos de checkout, mi cuenta, newsletter, citas y herramientas dev. 23 archivos.</p>
  </a>
</div>


### Herramientas de desarrollo

<div class="dev-tools">
  <div class="dev-tool">
    <a href="https://www.mindmaps.app/" target="_blank">Mindmaps</a>
    <p>Mapas mentales visuales para arquitectura</p>
  </div>
  <div class="dev-tool">
    <a href="https://snippet-generator.app/" target="_blank">Snippet Generator</a>
    <p>Genera snippets para VS Code / Cursor</p>
  </div>
  <div class="dev-tool">
    <a href="https://asciiflow.com/#/" target="_blank">ASCIIFlow</a>
    <p>Diagramas en texto plano para comentarios</p>
  </div>
  <div class="dev-tool">
    <a href="https://swiperjs.com/" target="_blank">Swiper API</a>
    <p>Documentación del slider Swiper</p>
  </div>
  <div class="dev-tool">
    <a href="https://codesandbox.io/s/origen-holygrail-ktq12" target="_blank">CodeSandbox</a>
    <p>Boilerplate holygrail2 en la nube</p>
  </div>
  <div class="dev-tool">
    <a href="https://handbrake.fr/" target="_blank">Handbrake</a>
    <p>Compresor de vídeo gratuito</p>
  </div>
</div>

### Boilerplate

Aprende a maquetar desde cero con el sistema Holygrail. Para ello hemos preparado un **Playground** para que practiques en local. También se puede utilizar como Boilerplate.

#### Opciones disponibles:

1. **Codesandbox** - [Descargar boilerplate](https://codesandbox.io/s/origen-holygrail-ktq12)
   - Crea un fork para crear componente o una maqueta con Holygrail en la nube
   - Ideal para prototipado rápido

2. **Github**
   - Crea un entorno de desarrollo desde cero
   - Clona el repositorio y configura tu entorno local

3. **Boilerplate local**
   - Crea un proyecto completo con Parcel y Gulp en tu local
   - Configuración completa para desarrollo profesional

### Debug

Antes de empezar, vamos a elegir qué herramientas vamos a necesitar para poder debugear mientras maquetamos. Holygrail incluye varios mixins de depuración que te ayudarán a identificar problemas comunes.

```scss
// Debug de elementos específicos
@include debug-divs();      // Debug con colores en las divs
@include debug-imgs();      // Análisis de imágenes (uso de alts vacíos)
@include debug-links();     // Análisis de los links (enlaces rotos, sin href)
@include debug-forms();    // Análisis de formularios y buenas prácticas (textarea, inputs erróneos)
@include debug-headers();   // Análisis de encabezados (estructura H1-H6)
@include debug-fine();     // Depuración de elementos finos y detalles

// Debug completo
@include debug-all();       // Depuración de todos los elementos a la vez
```

> **Nota:** Los mixins de debug solo deben usarse en desarrollo. Recuerda eliminarlos antes de hacer deploy a producción.

## Inicialización

Para comenzar a trabajar con Holygrail, necesitas importar el sistema en tu archivo principal de SASS:

```scss
@use "holygrail2/scss/hg-lite/abstract/_index.scss" as *;
```

Una vez importado, tendrás acceso a todas las variables, mixins y utilidades del sistema.

## Configuración

### Font Family

Configuración de fuentes y familias tipográficas disponibles en el sistema:

```scss
// Familia 1: SuisseIntl
$font-family-regular: "SuisseIntl-Regular", Helvetica, arial, sans-serif;
$font-family-medium: "SuisseIntl-Medium", Helvetica, arial, sans-serif;
$font-family-bold: "SuisseIntl-Bold", Helvetica, arial, sans-serif;

// Familia 2: Dutti Extended
$font-family-2-regular: "dutti-extended-regular", Helvetica, arial, sans-serif;
$font-family-2-medium: "dutti-extended-bold", Helvetica, arial, sans-serif;
$font-family-2-bold: "dutti-extended-extrabold", Helvetica, arial, sans-serif;

// Familia 3: Massimo Daily
$font-family-3-regular: "massimo-daily-regular", ms-serif, serif;
$font-family-3-medium: "massimo-daily-light", ms-serif, serif;
$font-family-3-bold: "massimo-daily-bold", ms-serif, serif;
```

### Grosores

Configuración de grosores de fuente. Por defecto, los grosores se heredan de las fuentes personalizadas:

```scss
$font-weight-light: inherit;
$font-weight-regular: inherit;
$font-weight-medium: inherit;
$font-weight-bold: inherit;

// Fuentes para formularios
$font-family-form-placeholder: "SuisseIntl-Regular", Helvetica, arial, sans-serif;
$font-family-form: "SuisseIntl-Regular", Helvetica, arial, sans-serif;
```

### Varios Elementos

Configuración de diversos elementos que se utilizan a lo largo del proyecto:

```scss
// Sistema de columnas
$totalCols: 12px;

// Espaciado global
$padding-global: 8px;
$padding-mobile: 24px;
$padding-desktop: 40px;

// Botones
$padding-button: 8px;
$padding-btn: 16px;
$btn-radius: 8px;

// Formularios
$height-inputs: 48px;

// Colores
$c-primary: #000000;
```

### Containers

Configuración de contenedores con dimensiones específicas. Cada container tiene un ancho máximo definido:

```scss
$container-full: 800px;   // Container principal
$container-fluid: full;   // Container fluido (100% del ancho)
$container: 800px;        // Container estándar
$container-2: 700px;      // Container alternativo 1
$container-3: 900px;      // Container alternativo 2
$container-4: 356px;      // Container pequeño
$container-5: 400px;      // Container pequeño-mediano
$container-6: 442px;      // Container mediano
$container-7: 595px;      // Container mediano-grande
$container-8: 395px;      // Container pequeño
$container-9: 798px;      // Container grande
$container-10: 432px;     // Container mediano
$container-11: 1080px;    // Container extra grande
```

### Configuración de Breakpoints

Establecimiento de puntos de ruptura para diseño responsive. Estos breakpoints se utilizan en todas las media queries del sistema:

```scss
$break-xs: 1px;      // Extra pequeño (móvil)
$break-sm: 768px;    // Pequeño (tablet)
$break-md: 992px;    // Mediano (tablet landscape)
$break-lg: 1280px;   // Grande (desktop)
$break-xl: 1500px;   // Extra grande (desktop grande)
```

**Ejemplo de uso:**

```scss
@media (min-width: $break-md) {
  // Estilos para pantallas medianas y superiores
}
```

### Configuración de Alturas

Control de tamaños mínimos de alturas para diferentes componentes:

```scss
// Alturas relativas
$h-100: 100%;
$height-100: 100%;

// Alturas fijas por tamaño
$height-xs: 80px;
$height-sm: 100px;
$height-md: 350px;
$height-lg: 400px;
$height-xl: 450px;

// Alturas para componentes Hero
$hero-big: 300px;
$hero-medium: 200px;
$hero-mini: 100px;

// Alturas Hero para pantallas pequeñas (pendiente de implementar)
$hero-big-sm: 500px;      // ⚠️ Falta implementar
$hero-medium-sm: 400px;   // ⚠️ Falta implementar
$hero-mini-sm: 300px;     // ⚠️ Falta implementar
```

### Configuración de Modales

Anchos máximos para diferentes tamaños de modales:

```scss
$modalx-xs: 295px;   // Modal extra pequeño
$modalx-sm: 445px;   // Modal pequeño
$modalx-md: 595px;   // Modal mediano
$modalx-lg: 899px;   // Modal grande
$modalx-xl: 995px;   // Modal extra grande
```

### Tamaños Tipográficos

#### Sistema Obsoleto ❌

> **Nota:** El siguiente sistema está marcado como obsoleto. Se recomienda usar el sistema actual (`$minheaders`) en su lugar.

```scss
// ⚠️ OBSOLETO - No usar en nuevos proyectos
$headers: (
  // ... configuración antigua
) !default;
```

#### Sistema Actual ✅

Sistema de tipografías actual recomendado para todos los proyectos:

```scss
$minheaders: (
  // Títulos
  tit-m: (14px, 16px, 1.2, "medium"),    // ✅ Siempre mayúsculas - 36 usos
  tit-s: (12px, 13px, 1.2, "medium"),    // ❌ Deprecado - Reemplazar por p-m
  tit-xs: (11px, 11px, 1.2, "medium"),   // Siempre mayúsculas - 77 usos
  
  // Párrafos
  p-m-b: (12px, 13px, 1.2, "bold"),      // 146 usos (semibold aunque diga bold)
  p-m: (12px, 13px, 1.2, "regular"),     // 384 usos (pasa a ser medium)
  p-m-m: (12px, 13px, 1.2, "medium"),    // 3 usos
  p-s: (12px, 12px, 1.2, "regular"),      // ❌ 598 usos - considerar deprecar
  p-xs: (11px, 11px, 1.2, "regular"),    // 169 usos
  p-s-b: (12px, 13px, 1.3, "bold"),       // ✅ 0 usos - borrar y usar p-m-b
  p-xs-b: (11px, 12px, 1.3, "bold"),      // 35 usos
  p-xxs-b: (9px, 9px, 1.3, "bold"),       // 6 usos
  p-tag: (8px, 10px, 1.3, "regular")      // Siempre en mayúsculas
) !default;
```

**Estructura de cada entrada:**
- `(tamaño-móvil, tamaño-desktop, line-height, peso)`

### Tipografías Fijas

Sistema de tipografías con tamaños fijos y line-height estándar:

```scss
$headersFixers: (
  14: (14px, 1.5),
  16: (16px, 1.5),
  18: (18px, 1.5),
  20: (20px, 1.5),
  24: (24px, 1.5),
  32: (32px, 1.5),
  40: (40px, 1.5),
);
```

### Tipografías Fluidas

Tipografías que se adaptan dinámicamente con los anchos del viewport usando `clamp()`:

```scss
$headersFluids: (
  12: (12px, 12px, 0.9),   // Tamaño mínimo, máximo, factor
  14: (14px, 14px, 0.9),
  16: (16px, 16px, 2),
  18: (18px, 18px, 2),
  20: (20px, 40px, 1),
  50: (30px, 50px, 1),
  100: (50px, 200px, 1),
  150: (50px, 120px, 0.9),
);
```

**Estructura:** `(tamaño-mínimo, tamaño-máximo, factor-de-escala)`

## Creando la Estructura

Como si se tratase de una construcción, empezaremos por los cimientos y la estructura responsive donde más adelante insertaremos los componentes flexibles.

### Sections

Empezaremos maquetando por las **sections**. Nuestras webs se separarán siempre por sections, muy delimitadas y con estructura clara.

**Estructura base de una section:**

```html
<section class="m-48 p-48 bleed-8 has-light">
  <!-- Contenido -->
</section>
```

**Tabla de clases comunes para sections:**

| Elemento base | Márgenes | Paddings | Retícula | Textos     |
| ------------- | -------- | -------- | -------- | ---------- |
| `<section>`   | `.m-48`  | `.p-48`  | `.bleed-8` | `.has-light` |
|               | `.m-48`  | `.p-48`  | `.bleed-0` |            |
|               | `.m-48`  | `.p-48`  |          |            |

### Container

Elige el tipo de container según el ancho máximo que necesites:

| Tipo container   | Ancho máximo | Uso recomendado                    |
| ---------------- | ------------ | ----------------------------------- |
| `.container-full`| 800px        | Contenido principal estándar        |
| `.container-fluid`| 100%        | Contenido que ocupa todo el ancho   |
| `.container`     | 800px        | Contenido principal (igual a full)  |
| `.container-2`   | 700px        | Contenido estrecho                  |
| `.container-3`   | 900px        | Contenido ancho                     |
| `.container-4`   | 356px        | Contenido muy estrecho               |
| `.container-5`   | 400px        | Contenido pequeño                   |
| `.container-6`   | 442px        | Contenido pequeño-mediano           |
| `.container-7`   | 595px        | Contenido mediano                   |
| `.container-8`   | 395px        | Contenido pequeño                   |
| `.container-9`   | 798px        | Contenido grande                    |
| `.container-10`  | 432px        | Contenido mediano                   |
| `.container-11`  | 1080px       | Contenido extra grande              |

**Ejemplo de uso:**

```html
<section class="m-48 p-48">
  <div class="container">
    <!-- Tu contenido aquí -->
  </div>
</section>
```

### Row

El sistema de filas utiliza **Flexbox** por defecto. El row siempre es flex excepto en el primer breakpoint (`sm`).

**Estructura básica:**

```html
<div class="row">
  <!-- Columnas aquí -->
</div>
```

**Orden recomendado de modificadores:**

1. Clase base: `.row`
2. Modificadores de dirección: `.row-reverse`, `.column`, etc.
3. Modificadores de alineación: `.justify-start`, `.align-center`, etc.
4. Modificadores de gap: `.gap-8`, `.gap-16`, etc.

### Columnas

El sistema utiliza un grid de **12 columnas** por defecto. Las columnas se definen con clases responsive.

**Estructura básica:**

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Contenido -->
  </div>
</div>
```

**Sistema de clases:**

- `col-{número}` - Para móvil (hasta `sm`)
- `col-sm-{número}` - Para tablet (desde `sm`)
- `col-md-{número}` - Para desktop (desde `md`)
- `col-lg-{número}` - Para desktop grande (desde `lg`)
- `col-xl-{número}` - Para desktop extra grande (desde `xl`)

**Ejemplo completo:**

```html
<section class="m-48 p-48">
  <div class="container">
    <div class="row gap-16">
      <div class="col-12 col-md-6 col-lg-4">
        <h2>Título</h2>
        <p>Contenido de la columna</p>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <h2>Título</h2>
        <p>Contenido de la columna</p>
      </div>
      <div class="col-12 col-md-12 col-lg-4">
        <h2>Título</h2>
        <p>Contenido de la columna</p>
      </div>
    </div>
  </div>
</section>
```

**Buenas prácticas:**

1. Siempre empieza con `col-12` para móvil (full width)
2. Define breakpoints progresivamente (sm → md → lg → xl)
3. Usa `gap-*` en el row para espaciado entre columnas
4. Mantén la suma de columnas igual a 12 cuando sea posible

## Próximos Pasos

Ahora que conoces la configuración básica, puedes:

1. Revisar los [Componentes](/components/) disponibles
2. Explorar los [Templates](/templates/) predefinidos
3. Consultar las [Fundaciones](/foundations/) del sistema
4. Leer las [Buenas Prácticas](/develop/practices/) de desarrollo
