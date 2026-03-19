---
layout: _paginas/foundations/_tipografia.njk
permalink: /tipografia/

titulo: Tipografias
descripcion: Familias de fuentes, escala tipográfica y helpers del proyecto Massimo Dutti Frontend.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/tipografias.jpg
imageAlt: Escala tipográfica del sistema de diseño Dutti
---

<style>
.font-families {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.font-family-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
.font-family-card__preview {
  padding: 20px 20px 12px;
  background: #fafafa;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -.01em;
}
.font-family-card__info {
  padding: 12px 16px;
  border-top: 1px solid #e0e0e0;
}
.font-family-card__name {
  font-size: 12px; font-weight: 700;
  font-family: monospace;
  display: block; margin-bottom: 4px;
}
.font-family-card__meta {
  font-size: 11px; color: #777;
  font-family: monospace;
}
.font-family-card__vars {
  font-size: 10px; color: #999;
  margin-top: 4px;
}

.type-scale {
  margin: 24px 0;
}
.type-row {
  display: grid;
  grid-template-columns: 140px 60px 68px 48px 80px 80px 1fr;
  gap: 0;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  padding: 10px 0;
  font-size: 12px;
}
.type-row:first-child {
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: #999;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 8px;
}
.type-row__class { font-family: monospace; font-weight: 700; }
.type-row__preview { font-size: 12px; color: #333; }
.tracking-badge {
  display: inline-block;
  font-size: 9px;
  font-family: monospace;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 4px;
}
.tracking-badge--4  { background: #e8f4fd; color: #1a5e99; }
.tracking-badge--16 { background: #f0fdf4; color: #1a7a3c; }
.tracking-badge--0  { background: #f5f5f5; color: #999; }

.weights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 16px 0;
}
.weight-card {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
}
.weight-card__sample {
  font-size: 28px;
  line-height: 1;
  margin-bottom: 8px;
  display: block;
}
.weight-card__name {
  font-size: 11px; font-family: monospace;
  color: #333; display: block; margin-bottom: 2px;
}
.weight-card__val {
  font-size: 10px; color: #999; font-family: monospace;
}
</style>

## Familias de fuentes

El proyecto usa tres familias tipográficas con variantes de peso, mapeadas a variables SCSS del tipo `$font-family-{letra}-{peso}`.

<div class="font-families">
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:'suisse-regular',Helvetica,sans-serif">Aa Bb Cc</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Suisse Int'l (familia A)</span>
      <span class="font-family-card__meta">suisse-light / regular / medium / semibold</span>
      <span class="font-family-card__vars">$font-family-a-l / a-r / a-m / a-b / a-sb</span>
    </div>
  </div>
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:'dutti-extended-bold',arial-black,sans-serif;letter-spacing:-.02em">Aa Bb</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Dutti Extended (familia B)</span>
      <span class="font-family-card__meta">dutti-extended-bold / extrabold</span>
      <span class="font-family-card__vars">$font-family-b-m / b-b</span>
    </div>
  </div>
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:Georgia,serif;font-style:italic">Aa Bb Cc</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Massimo Daily (familia C)</span>
      <span class="font-family-card__meta">massimo-daily-light / regular / bold</span>
      <span class="font-family-card__vars">$font-family-c-r / c-m / c-b</span>
    </div>
  </div>
</div>

### Variables SCSS de fuentes

| Variable | Fuente CSS | Archivo `.woff2` | Uso |
|---|---|---|---|
| `$font-family-a-l` | `suisse-light` | `SuisseIntl-Light.woff2` | Texto fino, body |
| `$font-family-a-r` | `suisse-regular` | `SuisseIntl-Regular.woff2` | Texto principal |
| `$font-family-a-m` | `suisse-medium` | `SuisseIntl-Medium.woff2` | Énfasis medio |
| `$font-family-a-b` | `suisse-medium` | `SuisseIntl-Medium.woff2` | "Bold" → mapea a medium |
| `$font-family-a-sb` | `suisse-semibold` | `SuisseIntl-SemiBold.woff2` | Semi-negrita real |
| `$font-family-b-m` | `dutti-extended-bold` | `dutti-daily-bold.woff2` | Display negrita |
| `$font-family-b-b` | `dutti-extended-extrabold` | `dutti-daily-bold.woff2` | Display extra negrita |
| `$font-family-c-r` | `massimo-daily-regular` | `SuisseWorks-Regular-WebXL.woff2` | Serif regular |
| `$font-family-c-m` | `massimo-daily-light` | `massimo-daily-light.woff2` | Serif ligero |
| `$font-family-c-b` | `massimo-daily-bold` | `massimo-daily-bold.woff2` | Serif negrita |
| `$font-family-form` | `suisse-light` | `SuisseIntl-Light.woff2` | Inputs y formularios |

---

### Pesos de fuente

<div class="weights-grid">
  <div class="weight-card">
    <span class="weight-card__sample" style="font-weight:100">Aa</span>
    <span class="weight-card__name">$font-weight-light</span>
    <span class="weight-card__val">100</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-weight:400">Aa</span>
    <span class="weight-card__name">$font-weight-regular</span>
    <span class="weight-card__val">400</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-weight:500">Aa</span>
    <span class="weight-card__name">$font-weight-medium</span>
    <span class="weight-card__val">500</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-weight:600">Aa</span>
    <span class="weight-card__name">$font-weight-semibold</span>
    <span class="weight-card__val">600</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-weight:500">Aa</span>
    <span class="weight-card__name">$font-weight-bold</span>
    <span class="weight-card__val">500 ⚠️</span>
  </div>
</div>

> **Nota**: `$font-weight-bold` tiene valor `500` (igual que medium). Para negrita real usa `$font-weight-semibold: 600` o la clase `.font-sb`.

---

## Escala tipográfica — `$minheaders`

Clases generadas a partir del mapa `$minheaders` del proyecto. Formato: `(tamaño-móvil, tamaño-desktop, line-height, peso)`.

<div class="type-scale">
  <div class="type-row">
    <span>Clase</span>
    <span>Mobile</span>
    <span>Desktop</span>
    <span>LH</span>
    <span>Peso</span>
    <span>Tracking</span>
    <span>Uso</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.h2</span>
    <span>18px</span><span>24px</span><span>1.2</span><span>bold</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Subtítulo semántico</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.suisse-1</span>
    <span>16px</span><span>20px</span><span>1.5</span><span>regular3</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Suisse grande</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.suisse-2</span>
    <span>13px</span><span>14px</span><span>1.1</span><span>regular3</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Suisse pequeño</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.suisse-body</span>
    <span>10px</span><span>12px</span><span>1.1</span><span>regular3</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Body Suisse compacto</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.p-tag</span>
    <span>9px</span><span>10px</span><span>1</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Tags / chips — TTU</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-l-b</span>
    <span>12px</span><span>13px</span><span>1.4</span><span>regular</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Título regular</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-l</span>
    <span>12px</span><span>13px</span><span>1.4</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Título ligero — TTU</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-m</span>
    <span>12px</span><span>12px</span><span>1.4</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
    <span>Título TTU amplio</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-s</span>
    <span>10px</span><span>10px</span><span>1.4</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Título pequeño — TTU</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.text-m</span>
    <span>12px</span><span>12px</span><span>1.5</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Texto cuerpo alternativo</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.text-l</span>
    <span>12px</span><span>13px</span><span>1.5</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Alias de hg-body-l</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.semantic</span>
    <span>12px</span><span>12px</span><span>1</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
    <span>Texto semántico TTU amplio</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.hg-body-l</span>
    <span>12px</span><span>13px</span><span>1.5</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Body grande ligero</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.hg-body-l-b</span>
    <span>12px</span><span>13px</span><span>1.5</span><span>regular</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Body grande regular</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.hg-body-m</span>
    <span>12px</span><span>12px</span><span>1.5</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Body principal — más usado ✓</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.hg-body-m-b</span>
    <span>12px</span><span>12px</span><span>1.5</span><span>regular</span>
    <span><span class="tracking-badge tracking-badge--4">0.04em</span></span>
    <span>Body principal en negrita</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.label-m</span>
    <span>12px</span><span>12px</span><span>1</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
    <span>Labels — TTU amplio</span>
  </div>
</div>

---

## Tamaños fijos — `$headersFixers`

Clases con tamaño de fuente fijo (no responsive) y line-height estándar.

| Clase CSS | Font-size | Line-height |
|---|---|---|
| `.text-12-r` | 12px | 1.5 |
| `.text-14-r` | 14px | 1.5 |
| `.text-16-r` | 16px | 1.5 |
| `.text-18-r` | 18px | 1.5 |
| `.text-20-r` | 20px | 1.2 |
| `.text-24-r` | 24px | 1.2 |
| `.text-32-r` | 32px | 1.2 |
| `.text-40-r` | 40px | 1.2 |

> **Nota**: El proyecto Dutti **no usa `$headersFluids`** (tipografías fluidas con clamp). Las tipografías fluidas no están definidas en este proyecto.

---

## Interletrado — `letter-spacing`

El sistema define **dos valores de tracking** aplicados globalmente a grupos de clases en `style.scss`. No son opcionales ni heredados: están forzados en cada clase.

<style>
.tracking-demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 20px 0 32px;
}
.tracking-demo-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
.tracking-demo-card__header {
  padding: 12px 16px 8px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
}
.tracking-demo-card__val {
  font-size: 22px;
  font-weight: 700;
  font-family: monospace;
  display: block;
  margin-bottom: 2px;
}
.tracking-demo-card__desc {
  font-size: 11px;
  color: #888;
}
.tracking-demo-card__classes {
  padding: 12px 16px;
  font-size: 11px;
  font-family: monospace;
  line-height: 2;
  color: #555;
}
.tracking-demo-card__sample {
  padding: 16px;
  font-size: 12px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  color: #333;
}
.tracking-demo-card--16 .tracking-demo-card__header { border-left: 3px solid #1a7a3c; }
.tracking-demo-card--4  .tracking-demo-card__header { border-left: 3px solid #1a5e99; }
</style>

<div class="tracking-demo-grid">
  <div class="tracking-demo-card tracking-demo-card--4">
    <div class="tracking-demo-card__header">
      <span class="tracking-demo-card__val">0.04em</span>
      <span class="tracking-demo-card__desc">Tracking ajustado — texto de cuerpo</span>
    </div>
    <div class="tracking-demo-card__classes">
      .p-tag<br>
      .title-l<br>
      .text-m · .text-l<br>
      .title-s<br>
      .input<br>
      .hg-body-m · .hg-body-m-b<br>
      .form-input-label-2 label
    </div>
    <div class="tracking-demo-card__sample" style="letter-spacing:0.04em">
      Massimo Dutti — texto de cuerpo a 0.04em
    </div>
  </div>
  <div class="tracking-demo-card tracking-demo-card--16">
    <div class="tracking-demo-card__header">
      <span class="tracking-demo-card__val">0.16em</span>
      <span class="tracking-demo-card__desc">Tracking amplio — etiquetas TTU</span>
    </div>
    <div class="tracking-demo-card__classes">
      .title-m<br>
      .label-m<br>
      .semantic
    </div>
    <div class="tracking-demo-card__sample" style="letter-spacing:0.16em;text-transform:uppercase">
      Massimo Dutti — etiqueta a 0.16em
    </div>
  </div>
</div>

```scss
// style.scss — interletrado forzado por grupo de clase

// 0.04em — cuerpo de texto, inputs, tags
.p-tag,
.title-l,
.text-m,
.text-l,
.title-s,
.input,
.hg-body-m,
.hg-body-m-b,
.form-input-label-2 label {
  letter-spacing: 0.04em;
}

// 0.16em — etiquetas TTU, labels semánticos
.semantic,
.title-m,
.label-m {
  letter-spacing: 0.16em;
}
```

> **Importante**: El resto de clases (`.hg-body-l`, `.hg-body-l-b`, `.title-l-b`, `.suisse-*`, `.h2`) **no tienen tracking explícito** — heredan el valor por defecto del navegador (`0`).

---

## Clases helper de texto

| Clase | CSS | Descripción |
|---|---|---|
| `.bold` | `font-family: $font-family-a-b` | Negrita (→ suisse-medium) |
| `.semibold` | `font-family: $font-family-a-sb` | Semi-negrita (→ suisse-semibold) |
| `.font-l` | `font-family: $font-family-a-l` | Ligero |
| `.font-r` | `font-family: $font-family-a-r` | Regular |
| `.font-m` | `font-family: $font-family-a-m` | Medium |
| `.font-sb` | `font-family: $font-family-a-sb` | SemiBold |
| `.ttu` | `text-transform: uppercase` | Mayúsculas |
| `.has-ellipsis` | trunca 1 línea | Elipsis en 1 línea |
| `.has-ellipsis-3` | trunca 3 líneas | Elipsis a 3 líneas |
| `.leading-1` | `line-height: 1` | Interlineado 1 |
| `.text-center` | `text-align: center` | Centrado |

---

## Uso en código

```html
<!-- Body principal -->
<p class="hg-body-m">Texto de cuerpo principal a 12px.</p>

<!-- Label en mayúsculas con tracking -->
<span class="label-m ttu">Categoría</span>

<!-- Título con negrita semibold real -->
<h3 class="title-l bold ttu">Título de sección</h3>

<!-- Body en negrita -->
<p class="hg-body-m-b">Descripción importante destacada.</p>
```

```scss
// Usando variables en SCSS
.mi-elemento {
  font-family: $font-family-a-r;
  font-size: 12px;
  line-height: 1.5;
}

.mi-titulo {
  font-family: $font-family-a-sb;  // semibold real
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .16em;
}
```
