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

.uppercase-languages-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}
.uppercase-languages-table thead tr {
  background: #111827;
  color: #ffffff;
}
.uppercase-languages-table th {
  padding: 12px 14px;
  text-align: left;
  font-weight: 700;
  border-bottom: 1px solid #374151;
}
.uppercase-languages-table td {
  padding: 10px 14px;
  border-bottom: 1px solid #e5e7eb;
}
.uppercase-languages-table tbody tr:nth-child(even) {
  background: #f9fafb;
}
.uppercase-languages-table .is-ttu {
  text-transform: uppercase;
}
.uppercase-language-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
}
.uppercase-language-tab {
  appearance: none;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  background: #ffffff;
  color: #111827;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding: 10px 14px;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
.uppercase-language-tab[aria-selected="true"] {
  background: #111827;
  border-color: #111827;
  color: #ffffff;
}
.uppercase-language-tab:focus-visible {
  outline: 2px solid #111827;
  outline-offset: 2px;
}
.uppercase-language-table--suisse-itl * {
  font-family: "SuisseIntl-Light", Helvetica, arial, sans-serif;
}
.uppercase-language-table--suisse-works * {
  font-family: "massimo-daily-regular", "ms-serif", serif !important;
}
.uppercase-language-table--suisse-helvetica * {
  font-family: Helvetica, Arial, sans-serif !important;
}
</style>

## Familias de fuentes

El sistema usa la familia **Suisse Intl** en sus distintos cortes, expuestos como tokens CSS `--hg-typo-font-family-*` definidos por holygrail5. Hay tres grupos: primaria (thin/light/regular/semibold), secundaria (medium) y monoespaciada (regular/bold).

<div class="font-families">
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:var(--hg-typo-font-family-primary-regular)">Aa Bb Cc</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Primary — Suisse Intl</span>
      <span class="font-family-card__meta">thin · light · regular · semibold</span>
      <span class="font-family-card__vars">--hg-typo-font-family-primary-thin / -light / -regular / -bold</span>
    </div>
  </div>
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:var(--hg-typo-font-family-secondary)">Aa Bb</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Secondary — Suisse Medium</span>
      <span class="font-family-card__meta">medium (500)</span>
      <span class="font-family-card__vars">--hg-typo-font-family-secondary</span>
    </div>
  </div>
  <div class="font-family-card">
    <div class="font-family-card__preview" style="font-family:var(--hg-typo-font-family-mono-regular)">Aa Bb Cc</div>
    <div class="font-family-card__info">
      <span class="font-family-card__name">Mono — Suisse Intl Mono</span>
      <span class="font-family-card__meta">mono-regular / mono-bold</span>
      <span class="font-family-card__vars">--hg-typo-font-family-mono-regular / -mono-bold</span>
    </div>
  </div>
</div>

### Tokens de familia

| Token CSS | Fuente CSS | Archivo `.woff2` | Peso | Uso |
|---|---|---|---|---|
| `--hg-typo-font-family-primary-thin` | `suisse-thin` | `suisse-intl-thin.woff2` | 100 | Display fino |
| `--hg-typo-font-family-primary-light` | `suisse-light` | `SuisseIntl-Light.woff2` | 300 | Texto fino, body |
| `--hg-typo-font-family-primary-regular` | `suisse-regular` | `SuisseIntl-Regular.woff2` | 400 | Texto principal |
| `--hg-typo-font-family-primary-bold` | `suisse-semibold` | `SuisseIntl-SemiBold.woff2` | 600 | Negrita del sistema (semibold real) |
| `--hg-typo-font-family-secondary` | `suisse-medium` | `SuisseIntl-Medium.woff2` | 500 | Énfasis medio |
| `--hg-typo-font-family-mono-regular` | `suisse-mono-regular` | `SuisseIntlMono-Regular-WebS.woff2` | 400 | Monoespaciada |
| `--hg-typo-font-family-mono-bold` | `suisse-mono-bold` | `SuisseIntlMono-Bold-WebS.woff2` | 700 | Monoespaciada negrita |


### Pesos de fuente

<div class="weights-grid">
  <div class="weight-card">
    <span class="weight-card__sample" style="font-family:var(--hg-typo-font-family-primary-thin)">Aa</span>
    <span class="weight-card__name">primary-thin</span>
    <span class="weight-card__val">100</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-family:var(--hg-typo-font-family-primary-light)">Aa</span>
    <span class="weight-card__name">primary-light</span>
    <span class="weight-card__val">300</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-family:var(--hg-typo-font-family-primary-regular)">Aa</span>
    <span class="weight-card__name">primary-regular</span>
    <span class="weight-card__val">400</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-family:var(--hg-typo-font-family-secondary)">Aa</span>
    <span class="weight-card__name">secondary</span>
    <span class="weight-card__val">500</span>
  </div>
  <div class="weight-card">
    <span class="weight-card__sample" style="font-family:var(--hg-typo-font-family-primary-bold)">Aa</span>
    <span class="weight-card__name">primary-bold</span>
    <span class="weight-card__val">600</span>
  </div>
</div>

> **Nota**: la negrita del sistema (`--hg-typo-font-family-primary-bold`) es **suisse-semibold (600)**. El corte `secondary` es suisse-medium (500). Los tokens de peso disponibles en holygrail5 son `--hg-typo-font-weight-100/300/400/500/600/700`.


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
    <span>18px</span><span>24px</span><span>1.2</span><span>semibold</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Subtítulo semántico</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-thin</span>
    <span>24px</span><span>24px</span><span>1</span><span>thin</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Display fino</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.title-xxl</span>
    <span>24px</span><span>24px</span><span>1</span><span>regular</span>
    <span><span class="tracking-badge tracking-badge--0">—</span></span>
    <span>Display grande</span>
  </div>
  <div class="type-row">
    <span class="type-row__class">.p-tag</span>
    <span>9px</span><span>10px</span><span>1</span><span>light</span>
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
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
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
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
    <span><span class="tracking-badge tracking-badge--16">0.16em</span></span>
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


## Interletrado — `letter-spacing`

El sistema define **tres valores de tracking** (0.04em para cuerpo, 0.16em para títulos/labels en mayúsculas y 0.06em para labels pequeños/mono), incrustados en cada clase tipográfica por holygrail5.

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
      .text-l · .text-m<br>
      .hg-body-l · .hg-body-l-b<br>
      .hg-body-m · .hg-body-m-b
    </div>
    <div class="tracking-demo-card__sample" style="letter-spacing:0.04em">
      Massimo Dutti — texto de cuerpo a 0.04em
    </div>
  </div>
  <div class="tracking-demo-card tracking-demo-card--16">
    <div class="tracking-demo-card__header">
      <span class="tracking-demo-card__val">0.16em</span>
      <span class="tracking-demo-card__desc">Tracking amplio — títulos y labels TTU</span>
    </div>
    <div class="tracking-demo-card__classes">
      .title-l · .title-m · .title-s · .title-s-b<br>
      .p-tag<br>
      .label-m · .label-m-b
    </div>
    <div class="tracking-demo-card__sample" style="letter-spacing:0.16em;text-transform:uppercase">
      Massimo Dutti — etiqueta a 0.16em
    </div>
  </div>
</div>

```scss
// holygrail5 — letter-spacing incrustado en cada clase tipográfica

// 0.04em — cuerpo de texto
.text-l, .text-m,
.hg-body-l, .hg-body-l-b,
.hg-body-m, .hg-body-m-b {
  letter-spacing: 0.04em;
}

// 0.16em — títulos y labels en mayúsculas
.title-l, .title-m, .title-s, .title-s-b,
.p-tag, .label-m, .label-m-b {
  letter-spacing: 0.16em;
}

// 0.06em — labels pequeños y monoespaciados
.label-s, .label-s-b,
.label-mono, .label-mono-b {
  letter-spacing: 0.06em;
}
```

> **Importante**: El resto de clases (`.title-thin`, `.title-xxl`, `.title-l-b`, `.h2`) **no tienen tracking explícito** — usan el valor por defecto (`0`).


## Clases helper de texto

| Clase | CSS | Descripción |
|---|---|---|
| `.semibold` | `--hg-typo-font-family-primary-bold` | Semi-negrita real (suisse-semibold 600) |
| `.font-l` | `--hg-typo-font-family-primary-light` | Ligero (suisse-light 300) |
| `.font-r` | `--hg-typo-font-family-primary-regular` | Regular (suisse-regular 400) |
| `.font-m` | `--hg-typo-font-family-secondary` | Medium (suisse-medium 500) |
| `.font-sb` | `--hg-typo-font-family-primary-bold` | SemiBold (suisse-semibold 600) |
| `.ttu` | `text-transform: uppercase` | Mayúsculas |
| `.has-ellipsis` | trunca 1 línea | Elipsis en 1 línea |
| `.has-ellipsis-3` | trunca 3 líneas | Elipsis a 3 líneas |
| `.leading-1` | `line-height: 1` | Interlineado 1 |
| `.text-center` | `text-align: center` | Centrado |


## Uso en código

```html
<!-- Body principal -->
<p class="hg-body-m">Texto de cuerpo principal a 12px.</p>

<!-- Label en mayúsculas con tracking -->
<span class="label-m ttu">Categoría</span>

<!-- Título con negrita semibold real -->
<h3 class="title-l semibold ttu">Título de sección</h3>

<!-- Body en negrita -->
<p class="hg-body-m-b">Descripción importante destacada.</p>
```

```scss
// Usando tokens CSS
.mi-elemento {
  font-family: var(--hg-typo-font-family-primary-regular);
  font-size: 12px;
  line-height: 1.5;
}

.mi-titulo {
  font-family: var(--hg-typo-font-family-primary-bold);  // semibold real (600)
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .16em;
}
```

## Idiomas en uppercase

<div class="uppercase-language-tabs" role="tablist" aria-label="Selector tipográfico para tabla de uppercase">
  <button
    type="button"
    class="uppercase-language-tab"
    role="tab"
    aria-selected="true"
    data-table-font="uppercase-language-table--suisse-itl"
  >
    Suisse Itl
  </button>
  <button
    type="button"
    class="uppercase-language-tab"
    role="tab"
    aria-selected="false"
    data-table-font="uppercase-language-table--suisse-works"
  >
    Suisse Works
  </button>
  <button
    type="button"
    class="uppercase-language-tab"
    role="tab"
    aria-selected="false"
    data-table-font="uppercase-language-table--suisse-helvetica"
  >
    Helvetica
  </button>
</div>

<table class="uppercase-languages-table uppercase-language-table--suisse-itl" id="uppercase-language-table">
  <thead>
    <tr>
      <th>Idioma</th>
      <th>Minúsculas (Input)</th>
      <th>Mayúsculas (Esperado)</th>
      <th>Mayúsculas (ttu) [Simulación CSS]</th>
      <th>Punto crítico a verificar</th>
    </tr>
  </thead>
  <tbody>
    <tr lang="tr-TR"><td>TR</td><td>istanbul</td><td>İSTANBUL</td><td class="is-ttu">istanbul</td><td>¿Aparece el punto sobre la İ?</td></tr>
    <tr lang="tr-TR"><td>TR</td><td>ilginç</td><td>İLGİNÇ</td><td class="is-ttu">ilginç</td><td>¿Ambas i mantienen el punto?</td></tr>
    <tr lang="tr-TR"><td>TR</td><td>ışık</td><td>IŞIK</td><td class="is-ttu">ışık</td><td>¿La ı se convierte en I (sin punto)?</td></tr>
    <tr lang="tr-TR"><td>TR</td><td>iyi</td><td>İYİ</td><td class="is-ttu">iyi</td><td>Si ves "IYI" (sin puntos), falla el atributo lang.</td></tr>
    <tr lang="el-GR"><td>EL</td><td>ελληνικά</td><td>ΕΛΛΗΝΙΚΑ</td><td class="is-ttu">ελληνικά</td><td>¿Se eliminó el acento de la ά?</td></tr>
    <tr lang="el-GR"><td>EL</td><td>άρτα</td><td>ΑΡΤΑ</td><td class="is-ttu">άρτα</td><td>El acento (tonos) debe desaparecer.</td></tr>
    <tr lang="el-GR"><td>EL</td><td>η</td><td>Η</td><td class="is-ttu">η</td><td>No debe quedar ningún rastro de tilde.</td></tr>
    <tr lang="el-GR"><td>EL</td><td>αυλός</td><td>ΑΥΛΟΣ</td><td class="is-ttu">αυλός</td><td>La ό final debe perder el acento.</td></tr>
    <tr lang="de-DE"><td>DE</td><td>straße</td><td>STRASSE</td><td class="is-ttu">straße</td><td>La ß suele pasar a SS (estándar CSS).</td></tr>
    <tr lang="de-DE"><td>DE</td><td>größe</td><td>GRÖSSE</td><td class="is-ttu">größe</td><td>La diéresis sobre la Ö debe persistir.</td></tr>
    <tr lang="de-DE"><td>DE</td><td>maß</td><td>MASS</td><td class="is-ttu">maß</td><td>¿Se transformó la ß correctamente?</td></tr>
    <tr lang="de-DE"><td>DE</td><td>fussball</td><td>FUSSBALL</td><td class="is-ttu">fussball</td><td>Conversión estándar.</td></tr>
    <tr lang="nl-NL"><td>NL</td><td>ijssel</td><td>IJSSEL</td><td class="is-ttu">ijssel</td><td>La IJ debe ser mayúscula.</td></tr>
    <tr lang="nl-NL"><td>NL</td><td>ijsland</td><td>IJSLAND</td><td class="is-ttu">ijsland</td><td>Ambos caracteres del dígrafo en caja alta.</td></tr>
    <tr lang="nl-NL"><td>NL</td><td>bijzonder</td><td>BIJZONDER</td><td class="is-ttu">bijzonder</td><td>Transformación estándar sin pérdida de caracteres.</td></tr>
    <tr lang="ar-AE"><td>AR</td><td>مرحبا</td><td>مرحبا</td><td class="is-ttu">مرحبا</td><td>Sin cambios. El árabe no tiene caja.</td></tr>
    <tr lang="ar-AE"><td>AR</td><td>العربية</td><td>العربية</td><td class="is-ttu">العربية</td><td>Sin cambios.</td></tr>
    <tr lang="zh-CN"><td>ZH</td><td>iphone 你好</td><td>IPHONE 你好</td><td class="is-ttu">iphone 你好</td><td>Solo "IPHONE" cambia; "你好" no varía.</td></tr>
    <tr lang="ru-RU"><td>RU</td><td>москва</td><td>МОСКВА</td><td class="is-ttu">москва</td><td>Conversión cirílica estándar.</td></tr>
    <tr lang="ru-RU"><td>RU</td><td>ёлка</td><td>ЁΛΚΑ</td><td class="is-ttu">ёлка</td><td>La ё (Yo) debe mantener sus dos puntos.</td></tr>
    <tr lang="uk-UA"><td>UK</td><td>київ</td><td>КИЇВ</td><td class="is-ttu">київ</td><td>La ї (Yi) debe mantener los dos puntos.</td></tr>
    <tr lang="uk-UA"><td>UK</td><td>їжак</td><td>ЇЖАК</td><td class="is-ttu">їжак</td><td>Verifica la integridad de la ї.</td></tr>
    <tr lang="uk-UA"><td>UK</td><td>ґанок</td><td>ҐАНОК</td><td class="is-ttu">ґанок</td><td>La ґ (Ghe con gancho) debe ser correcta.</td></tr>
    <tr lang="sr-Cyrl-RS"><td>SR (Cy)</td><td>беοград</td><td>БЕОГРАД</td><td class="is-ttu">беοград</td><td>Cirílico serbio estándar.</td></tr>
    <tr lang="sr-Latn-RS"><td>SR (Lat)</td><td>beograd</td><td>BEOGRAD</td><td class="is-ttu">beograd</td><td>Latino serbio estándar.</td></tr>
  </tbody>
</table>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('uppercase-language-table');
    const tabs = Array.from(document.querySelectorAll('.uppercase-language-tab'));
    const fontClasses = [
      'uppercase-language-table--suisse-itl',
      'uppercase-language-table--suisse-works',
      'uppercase-language-table--suisse-helvetica'
    ];

    if (!table || !tabs.length) {
      return;
    }

    const activateTab = (tab) => {
      const fontClass = tab.dataset.tableFont;

      if (!fontClass) {
        return;
      }

      table.classList.remove(...fontClasses);
      table.classList.add(fontClass);

      tabs.forEach((item) => {
        const isSelected = item === tab;
        item.setAttribute('aria-selected', String(isSelected));
        item.tabIndex = isSelected ? 0 : -1;
      });
    };

    tabs.forEach((tab, index) => {
      tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;

      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];

        activateTab(nextTab);
        nextTab.focus();
      });
    });
  });
</script>
