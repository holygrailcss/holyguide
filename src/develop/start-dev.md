---
layout: _paginas/develop/_dutti.njk
permalink: /start-dev/
page_section: develop

tags: ["Estructuras modulares", "develop"]

titulo: Start Dev
descripcion: Guía de inicio rápido para configurar y usar holygrail2 en un proyecto desde cero.
date: 2026-03-09
fecha: 9 de marzo de 2026
image: /assets/static/images/1.jpg
imageAlt: Guía de inicio rápido holygrail
badge: updated
---

<style>
.sd-steps { counter-reset: step; margin: 32px 0; }
.sd-step {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px 24px;
  align-items: start;
  margin-bottom: 40px;
}
.sd-step__num {
  counter-increment: step;
  width: 48px; height: 48px;
  background: #000; color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 700;
  flex-shrink: 0;
}
.sd-step__num::before { content: counter(step); }
.sd-step__body { padding-top: 8px; }
.sd-step__title { font-size: 16px; font-weight: 700; margin: 0 0 8px; }
.sd-step__desc { font-size: 13px; color: #555; margin: 0 0 12px; }

.sd-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.sd-option {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
}
.sd-option__tag {
  display: inline-block;
  font-size: 10px; font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 2px 8px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.sd-option__tag--rec { background: #1a7a3c; color: #fff; }
.sd-option__tag--alt { background: #e0e0e0; color: #333; }
.sd-option__title { font-weight: 700; font-size: 14px; margin: 0 0 6px; }
.sd-option__desc { font-size: 12px; color: #666; margin: 0; }

.sd-arch {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
  font-family: monospace;
  font-size: 13px;
  line-height: 1.8;
  background: #fafafa;
}
.sd-arch-folder { color: #1a5e99; font-weight: 700; }
.sd-arch-file { color: #333; }
.sd-arch-comment { color: #999; }

.sd-tip {
  display: flex;
  gap: 12px;
  background: #f0f7ff;
  border-left: 3px solid #1a5e99;
  border-radius: 0 6px 6px 0;
  padding: 14px 16px;
  margin: 16px 0;
  font-size: 13px;
}
.sd-tip__icon { font-size: 18px; flex-shrink: 0; }
.sd-warn {
  display: flex;
  gap: 12px;
  background: #fff8e1;
  border-left: 3px solid #f59e0b;
  border-radius: 0 6px 6px 0;
  padding: 14px 16px;
  margin: 16px 0;
  font-size: 13px;
}

.sd-bps {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}
.sd-bp {
  padding: 16px 12px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
}
.sd-bp:last-child { border-right: none; }
.sd-bp__name { font-size: 16px; font-weight: 700; display: block; }
.sd-bp__val { font-size: 11px; color: #777; font-family: monospace; display: block; margin-top: 4px; }
.sd-bp--xs { background: #f8f8f8; }
.sd-bp--sm { background: #f0f4ff; }
.sd-bp--md { background: #e8efff; }
.sd-bp--lg { background: #dce8ff; }
.sd-bp--xl { background: #cddeff; }
</style>

## Instalación

<div class="sd-options">
  <div class="sd-option">
    <span class="sd-option__tag sd-option__tag--rec">Recomendado</span>
    <p class="sd-option__title">npm</p>
    <p class="sd-option__desc">Integración completa con acceso a SCSS y personalización total</p>
  </div>
  <div class="sd-option">
    <span class="sd-option__tag sd-option__tag--alt">Alternativa</span>
    <p class="sd-option__title">CDN / CSS directo</p>
    <p class="sd-option__desc">Solo CSS precompilado, sin personalización de variables</p>
  </div>
  <div class="sd-option">
    <span class="sd-option__tag sd-option__tag--alt">Sandbox</span>
    <p class="sd-option__title">CodeSandbox</p>
    <p class="sd-option__desc">Prototipado rápido en la nube, sin instalación local</p>
  </div>
</div>

```bash
npm install holygrail2
```


## Setup paso a paso

<div class="sd-steps">
  <div class="sd-step">
    <div class="sd-step__num"></div>
    <div class="sd-step__body">
      <p class="sd-step__title">Crear el archivo de setup</p>
      <p class="sd-step__desc">Define las variables del proyecto antes de importar el sistema. Este archivo sobreescribe los defaults de holygrail2.</p>
    </div>
  </div>
  <div class="sd-step">
    <div class="sd-step__num"></div>
    <div class="sd-step__body">
      <p class="sd-step__title">Importar holygrail2</p>
      <p class="sd-step__desc">Importa el sistema tras definir tus variables para que las sobreescriba correctamente.</p>
    </div>
  </div>
  <div class="sd-step">
    <div class="sd-step__num"></div>
    <div class="sd-step__body">
      <p class="sd-step__title">Crear la estructura HTML base</p>
      <p class="sd-step__desc">Construye las primeras secciones usando containers, rows y columnas.</p>
    </div>
  </div>
  <div class="sd-step">
    <div class="sd-step__num"></div>
    <div class="sd-step__body">
      <p class="sd-step__title">Activar debug (solo en desarrollo)</p>
      <p class="sd-step__desc">Usa los mixins de debug para detectar problemas de estructura antes de que lleguen a producción.</p>
    </div>
  </div>
</div>


## Estructura de archivos recomendada

<div class="sd-arch">
<span class="sd-arch-folder">apps/frontend/src/assets/styles/</span>
<br>├── <span class="sd-arch-folder">abstract/</span>
<br>│   ├── <span class="sd-arch-file">_setup.scss</span>       <span class="sd-arch-comment">← colores, fuentes, containers, escala tipo</span>
<br>│   ├── <span class="sd-arch-file">_variables.scss</span>  <span class="sd-arch-comment">← opacidades, variables secundarias</span>
<br>│   └── <span class="sd-arch-file">_breakpoints.scss</span> <span class="sd-arch-comment">← $break-xs/sm/md/lg/xl/2xl/3xl</span>
<br>├── <span class="sd-arch-folder">base/</span>
<br>│   ├── <span class="sd-arch-file">_fonts.scss</span>       <span class="sd-arch-comment">← @font-face suisse/dutti/massimo</span>
<br>│   ├── <span class="sd-arch-file">_fonts_suisse.scss</span><span class="sd-arch-comment">← familia Suisse Int'l completa</span>
<br>│   └── <span class="sd-arch-file">_base.scss</span>        <span class="sd-arch-comment">← reset y estilos base</span>
<br>├── <span class="sd-arch-folder">components/</span>          <span class="sd-arch-comment">← estilos de componentes UI</span>
<br>├── <span class="sd-arch-folder">elements/</span>            <span class="sd-arch-comment">← pdp2025, stepper, etc.</span>
<br>├── <span class="sd-arch-folder">partials/</span>            <span class="sd-arch-comment">← header, menu, footer</span>
<br>└── <span class="sd-arch-file">styles.scss</span>           <span class="sd-arch-comment">← punto de entrada principal</span>
</div>


## Configuración mínima (`_setup.scss`)

Valores reales del proyecto Massimo Dutti Frontend (`abstract/_setup.scss`):

```scss
// ─── Colores ─────────────────────────────────────────────────────
$c-white:        #ffffff;
$c-black:        #000000;
$c-dark-grey:    #737373;
$c-middle-grey:  #a9a9a9;
$c-light-grey:   #f0f0f0;
$c-primary:      #000000;
$c-error:        #b40016;
$c-info:         #1a32a4;
$c-success:      #12882c;
$c-warning:      #ffc700;
$c-feel:         #fb9962;
$c-feel-dark:    #c94c07;
$c-special:      #b99d6b;    // gold
$bg-light:       #f0f0f0;
$c-bg-cream:     #f4f2ed;
$c-sk-grey:      #e3e3e3;    // skeleton loader

// ─── Fuentes ─────────────────────────────────────────────────────
$font-family-a-l:  'suisse-light',            Helvetica, arial, sans-serif;
$font-family-a-r:  'suisse-regular',           Helvetica, arial, sans-serif;
$font-family-a-m:  'suisse-medium',            Helvetica, arial, sans-serif;
$font-family-a-b:  'suisse-medium',            Helvetica, arial, sans-serif;  // bold → medium
$font-family-a-sb: 'suisse-semibold',          Helvetica, arial, sans-serif;
$font-family-b-m:  'dutti-extended-bold',      arial-black, sans-serif;
$font-family-b-b:  'dutti-extended-extrabold', arial-black, sans-serif;
$font-family-c-r:  'massimo-daily-regular',    'ms-serif', serif;
$font-family-form: 'suisse-light',             Helvetica, arial, sans-serif;

// ─── Pesos ───────────────────────────────────────────────────────
$font-weight-light:    100;
$font-weight-regular:  400;
$font-weight-medium:   500;
$font-weight-semibold: 600;
$font-weight-bold:     500;  // ⚠ mapea a medium

// ─── Botones e inputs ────────────────────────────────────────────
$btn-radius:       0;
$btn-text-full:    13px;
$btn-text-large:   13px;
$btn-text-medium:  13px;
$btn-text-small:   12px;
$text-input-m:     12px;
$text-input-d:     12px;
$padding-mobile:   16px;

// ─── Containers ──────────────────────────────────────────────────
$container-4:  360px;
$container-5:  800px;
$container-12: 800px;
```

### Importar en `style.scss`

```scss
// 1. Primero: tus variables
@import 'abstract/setup';
@import 'abstract/variables';

// 2. Segundo: holygrail2
@import 'node_modules/holygrail2/scss/style';

// 3. Tercero: tus estilos propios
@import 'base/fonts';
@import 'components/header';
```

<div class="sd-tip">
  <span class="sd-tip__icon">💡</span>
  <span>El orden importa. Tus variables deben declararse <strong>antes</strong> de importar holygrail2 para que los <code>!default</code> sean sobreescritos correctamente.</span>
</div>


## Breakpoints del sistema

<div class="sd-bps">
  <div class="sd-bp sd-bp--xs">
    <span class="sd-bp__name">xs</span>
    <span class="sd-bp__val">$break-xs<br>1px</span>
  </div>
  <div class="sd-bp sd-bp--sm">
    <span class="sd-bp__name">sm</span>
    <span class="sd-bp__val">$break-sm<br>768px</span>
  </div>
  <div class="sd-bp sd-bp--md">
    <span class="sd-bp__name">md</span>
    <span class="sd-bp__val">$break-md<br>992px</span>
  </div>
  <div class="sd-bp sd-bp--lg">
    <span class="sd-bp__name">lg</span>
    <span class="sd-bp__val">$break-lg<br>1280px</span>
  </div>
  <div class="sd-bp sd-bp--xl">
    <span class="sd-bp__name">xl</span>
    <span class="sd-bp__val">$break-xl<br>1440px</span>
  </div>
  <div class="sd-bp" style="background:#bcd3ff">
    <span class="sd-bp__name">2xl</span>
    <span class="sd-bp__val">$break-2xl<br>1600px</span>
  </div>
  <div class="sd-bp" style="background:#adc5ff">
    <span class="sd-bp__name">3xl</span>
    <span class="sd-bp__val">$break-3xl<br>1920px</span>
  </div>
</div>

```scss
// Uso con el mixin respond()
.mi-elemento {
  font-size: 12px;                              // xs — móvil (base)
  @include respond($break-sm)  { font-size: 13px; }   // ≥ 768px — tablet
  @include respond($break-md)  { font-size: 14px; }   // ≥ 992px — desktop
  @include respond($break-lg)  { font-size: 16px; }   // ≥ 1280px
  @include respond($break-xl)  { font-size: 18px; }   // ≥ 1440px
  @include respond($break-2xl) { font-size: 20px; }   // ≥ 1600px
  @include respond($break-3xl) { font-size: 22px; }   // ≥ 1920px
}
```


## Estructura HTML base

```html
<section class="ptr-64 pbr-64">
  <div class="container">

    <div class="row">

      <!-- Columna completa en mobile, mitad en desktop -->
      <div class="col-xs-12 col-md-6">
        <h2 class="tit-m bold">Título de sección</h2>
        <p class="hg-body-m">Cuerpo de texto principal.</p>
      </div>

      <div class="col-xs-12 col-md-6">
        <div class="ar-3-4">
          <img class="video-cover" src="imagen.jpg" alt="Descripción" />
        </div>
      </div>

    </div>
  </div>
</section>
```

<div class="sd-warn">
  <span>⚠️</span>
  <span>Usa siempre <code>col-xs-12</code> como base en mobile. Define el responsive de menor a mayor breakpoint: xs → sm → md → lg → xl.</span>
</div>


## Debug en desarrollo

```scss
// Activa solo los que necesites, nunca en producción
@include debug-divs();     // Colorea bloques para ver estructura
@include debug-imgs();     // Detecta imágenes sin alt o sin src
@include debug-links();    // Detecta links sin href o vacíos
@include debug-forms();    // Revisa inputs y formularios
@include debug-headers();  // Audita estructura de h1-h6
@include debug-all();      // Activa todos a la vez
```

<div class="sd-tip">
  <span class="sd-tip__icon">🔍</span>
  <span>Elimina todos los <code>@include debug-*</code> antes del deploy a producción. Añade una regla de linting para detectarlos automáticamente.</span>
</div>


## Próximos pasos

- [Foundations](/foundations/) — Colores, tipografía, espaciado, flexbox
- [Componentes](/components/) — Botones, inputs, modales, accordion
- [Buenas prácticas](/practices/) — Patrones de código recomendados
- [Dutti Frontend](/develop/dutti-overview/) — Arquitectura del proyecto real
