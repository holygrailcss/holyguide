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

.guide table tbody tr:nth-child(even) {
  background: #f9fafb;
}
.guide table {
  display: block;
  overflow-x: auto;
  max-width: 100%;
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

## Scripts no latinos — fallback tipográfico

Las familias **Suisse Intl** no incluyen glifos de árabe ni CJK (chino, japonés, coreano). Para esos idiomas se declaran `@font-face` *companion*: reutilizan el **mismo nombre de familia** (`suisse-thin`, `suisse-light`, `suisse-regular`, `suisse-medium`, `suisse-semibold`) pero acotados por `unicode-range` a cada script y apuntando a **fuentes del sistema** neutras por SO. El navegador elige la primera que exista y `size-adjust` la agranda para igualar el tamaño visual de la Suisse latina. En los cortes **thin** y **light** se ancla el corte **Regular** del sistema (por su nombre PostScript, p. ej. `PingFangSC-Regular`), para que el texto CJK/árabe no salga demasiado fino.

### Intención del hack

El objetivo es dar a los textos de **árabe y CJK** un equivalente **cultural y estilístico** al rol que cumple la **Suisse Intl** (una grotesca de corte brutalista) y sus *fallbacks* occidentales **Arial / Helvetica**: una tipografía de **palo seco**, neutra y sin serifas, nativa de cada sistema de escritura.

Principios que persigue:

- **Peso cero de descarga.** No se cargan webfonts para estos scripts; se usan **únicamente fuentes ya instaladas** en cada SO (macOS·iOS, Windows, Android/web). Cada `local()` es una fuente del sistema, nunca un archivo `.woff2` remoto.
- **Equivalencia cultural por script.** Se elige en cada idioma la grotesca de referencia del sistema — coherente con el carácter brutalista/neutro de la Suisse: **PingFang SC** (chino), **Hiragino Sans** (japonés), **Apple SD Gothic Neo** (coreano), **SF Arabic** (árabe), con sus equivalentes en Windows/Android.
- **Coherencia de tamaño.** `size-adjust` (120 % en CJK, 130 % en árabe) normaliza el tamaño visual para que estos scripts convivan con la Suisse latina sin verse más pequeños.
- **Sin cortes finos artificiales.** Como esos scripts no tienen cortes *thin/light* equiparables, los roles finos se **anclan al Regular** del sistema para no forzar pesos que se ven rotos o excesivamente delgados.

En resumen: **misma sensación tipográfica (palo seco, neutra, brutalista) en todos los idiomas, con las fuentes que cada cultura ya tiene, y sin coste de descarga.**

> **Limitación en Android.** El hack depende de `local()` para alcanzar las fuentes del sistema, pero **Chrome en Android restringe** el acceso por `local()` a la mayoría de fuentes del sistema (por privacidad). Si ninguna de las candidatas resuelve, el `@font-face` *companion* no se aplica y el texto **cae a la fuente por defecto a 100 %**: no se ve el `size-adjust` ni el anclaje a Regular (esto explica que en árabe/CJK no se aprecie cambio ni aumento de tamaño en Android). Se incluye `Noto Naskh Arabic` y las variantes `Noto Sans *` — las que Android sí suele exponer — como último recurso; si aun así no resuelven, la única forma de garantizar el escalado en Android sería **cargar un webfont** para ese script, a costa del *peso cero*.

> **Firefox (todos los SO).** Firefox resuelve `local()` **solo por nombre completo o PostScript**, no por nombre de familia. Por eso cada `src` incluye también los nombres PostScript (`PingFangSC-Regular`, `HiraginoSans-W4`, `AppleSDGothicNeo-Regular`, `SFArabic-Regular`, `NotoSansSC-Regular`…) además del nombre de familia: así resuelve tanto en Chrome/Safari (por familia) como en Firefox (por PostScript).

### Nombres PostScript y compatibilidad con Firefox

Cada fuente instalada se puede referenciar por **varios nombres**, y `local()` busca una fuente del sistema que coincida con el nombre indicado:

- **Nombre de familia** (family name): `PingFang SC`, `Hiragino Sans`, `SF Arabic` — el que aparece en el menú de fuentes; apunta a **toda la familia**.
- **Nombre completo** (full name): `PingFang SC Regular`, `Hiragino Sans W4`.
- **Nombre PostScript**: `PingFangSC-Regular`, `HiraginoSans-W4`, `SFArabic-Medium` — identificador **único y sin espacios** que apunta a **un corte concreto** (peso/estilo exacto), no a la familia entera.

El problema es que **cada navegador resuelve `local()` con nombres distintos**:

| Navegador | Resuelve `local()` por… |
|---|---|
| Chrome · Edge · Safari | nombre de familia **y** PostScript |
| **Firefox** | **solo** nombre completo o **PostScript** (no por familia) |

Como este hack depende por completo de `local()` para alcanzar fuentes del sistema, en Firefox `local("PingFang SC")` (familia) **no resolvía**, el `@font-face` *companion* no se aplicaba y el texto caía a la fuente por defecto **sin `size-adjust`** (más pequeño y con otra forma). La solución es añadir el **nombre PostScript delante**, dejando la familia como *fallback*:

```css
/* Solo familia — falla en Firefox */
src: local("PingFang SC"), local("Microsoft YaHei"), local("Noto Sans SC");

/* PostScript + familia — resuelve en todos los navegadores */
src: local("PingFangSC-Medium"),   /* Firefox lo encuentra por PostScript */
     local("PingFang SC Medium"),
     local("PingFang SC"),          /* Chrome/Safari fallback por familia */
     local("Microsoft YaHei"),
     local("NotoSansSC-Medium"),
     local("Noto Sans SC");
```

El navegador recorre la lista **en orden** y usa la **primera que exista** en ese sistema; si un nombre PostScript no está instalado, lo salta y continúa, así que añadirlos no tiene riesgo.

Además de arreglar Firefox, el PostScript **fija el corte exacto**:

- En **thin / light** se ancla al corte **`-Regular`** del sistema (`PingFangSC-Regular`, `AppleSDGothicNeo-Regular`…) porque esos scripts no tienen cortes ultrafinos legibles: así se evita un peso 100/300 sintético que se vería roto.
- En **medium / semibold** se usa el corte real por peso: `PingFangSC-Medium` (500) / `PingFangSC-Semibold` (600), `HiraginoSans-W5` / `HiraginoSans-W6`, `AppleSDGothicNeo-Medium` / `-SemiBold`, `SFArabic-Medium` / `-Semibold`, con sus equivalentes Noto (`NotoSansSC-Medium`, `NotoSansKR-SemiBold`…). Así el grosor del árabe/CJK coincide con el del texto latino Suisse a ese mismo peso.

En resumen, el nombre PostScript indica al navegador **«esta fuente exacta, este peso exacto»**, lo que (1) hace que Firefox encuentre la fuente y (2) garantiza el corte correcto en lugar de un peso sintético.

<style>
/* --- Hack trasladado desde web-duttinodefront/_fonts.scss --- */
/* Hangul / coreano */
@font-face { font-family: "suisse-thin"; font-weight: 100; font-display: swap; src: local("AppleSDGothicNeo-Regular"), local("Apple SD Gothic Neo Regular"), local("Malgun Gothic"), local("MalgunGothic"), local("NotoSansKR-Regular"), local("Noto Sans KR"), local("Noto Sans CJK KR"); unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7AF, U+D7B0-D7FF; size-adjust: 120%; }
@font-face { font-family: "suisse-light"; font-weight: 300; font-display: swap; src: local("AppleSDGothicNeo-Regular"), local("Apple SD Gothic Neo Regular"), local("Malgun Gothic"), local("MalgunGothic"), local("NotoSansKR-Regular"), local("Noto Sans KR"), local("Noto Sans CJK KR"); unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7AF, U+D7B0-D7FF; size-adjust: 120%; }
@font-face { font-family: "suisse-regular"; font-weight: 400; font-display: swap; src: local("AppleSDGothicNeo-Regular"), local("Apple SD Gothic Neo Regular"), local("Malgun Gothic"), local("MalgunGothic"), local("NotoSansKR-Regular"), local("Noto Sans KR"), local("Noto Sans CJK KR"); unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7AF, U+D7B0-D7FF; size-adjust: 120%; }
@font-face { font-family: "suisse-medium"; font-weight: 500; font-display: swap; src: local("AppleSDGothicNeo-Medium"), local("Apple SD Gothic Neo Medium"), local("Apple SD Gothic Neo"), local("Malgun Gothic"), local("MalgunGothic"), local("NotoSansKR-Medium"), local("Noto Sans KR"), local("Noto Sans CJK KR"); unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7AF, U+D7B0-D7FF; size-adjust: 120%; }
@font-face { font-family: "suisse-semibold"; font-weight: 600; font-display: swap; src: local("AppleSDGothicNeo-SemiBold"), local("Apple SD Gothic Neo SemiBold"), local("AppleSDGothicNeo-Bold"), local("Apple SD Gothic Neo"), local("MalgunGothicBold"), local("Malgun Gothic"), local("NotoSansKR-SemiBold"), local("Noto Sans KR"), local("Noto Sans CJK KR"); unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7AF, U+D7B0-D7FF; size-adjust: 120%; }
/* Kana / japonés */
@font-face { font-family: "suisse-thin"; font-weight: 100; font-display: swap; src: local("HiraginoSans-W4"), local("Hiragino Sans W4"), local("Hiragino Sans"), local("YuGothicUI-Regular"), local("Yu Gothic UI"), local("Meiryo"), local("NotoSansJP-Regular"), local("Noto Sans JP"), local("Noto Sans CJK JP"); unicode-range: U+3040-309F, U+30A0-30FF, U+31F0-31FF, U+FF00-FFEF; size-adjust: 120%; }
@font-face { font-family: "suisse-light"; font-weight: 300; font-display: swap; src: local("HiraginoSans-W4"), local("Hiragino Sans W4"), local("Hiragino Sans"), local("YuGothicUI-Regular"), local("Yu Gothic UI"), local("Meiryo"), local("NotoSansJP-Regular"), local("Noto Sans JP"), local("Noto Sans CJK JP"); unicode-range: U+3040-309F, U+30A0-30FF, U+31F0-31FF, U+FF00-FFEF; size-adjust: 120%; }
@font-face { font-family: "suisse-regular"; font-weight: 400; font-display: swap; src: local("HiraginoSans-W4"), local("Hiragino Sans W4"), local("Hiragino Sans"), local("YuGothicUI-Regular"), local("Yu Gothic UI"), local("Meiryo"), local("NotoSansJP-Regular"), local("Noto Sans JP"), local("Noto Sans CJK JP"); unicode-range: U+3040-309F, U+30A0-30FF, U+31F0-31FF, U+FF00-FFEF; size-adjust: 120%; }
@font-face { font-family: "suisse-medium"; font-weight: 500; font-display: swap; src: local("HiraginoSans-W5"), local("Hiragino Sans W5"), local("Hiragino Sans"), local("YuGothicUI-Semibold"), local("Yu Gothic UI"), local("Meiryo"), local("NotoSansJP-Medium"), local("Noto Sans JP"), local("Noto Sans CJK JP"); unicode-range: U+3040-309F, U+30A0-30FF, U+31F0-31FF, U+FF00-FFEF; size-adjust: 120%; }
@font-face { font-family: "suisse-semibold"; font-weight: 600; font-display: swap; src: local("HiraginoSans-W6"), local("Hiragino Sans W6"), local("Hiragino Sans"), local("YuGothicUI-Semibold"), local("Yu Gothic UI"), local("Meiryo"), local("NotoSansJP-SemiBold"), local("Noto Sans JP"), local("Noto Sans CJK JP"); unicode-range: U+3040-309F, U+30A0-30FF, U+31F0-31FF, U+FF00-FFEF; size-adjust: 120%; }
/* Han / chino */
@font-face { font-family: "suisse-thin"; font-weight: 100; font-display: swap; src: local("PingFangSC-Regular"), local("PingFang SC Regular"), local("PingFang SC"), local("Microsoft YaHei"), local("MicrosoftYaHei"), local("NotoSansSC-Regular"), local("Noto Sans SC"), local("Noto Sans CJK SC"); unicode-range: U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF; size-adjust: 120%; }
@font-face { font-family: "suisse-light"; font-weight: 300; font-display: swap; src: local("PingFangSC-Regular"), local("PingFang SC Regular"), local("PingFang SC"), local("Microsoft YaHei"), local("MicrosoftYaHei"), local("NotoSansSC-Regular"), local("Noto Sans SC"), local("Noto Sans CJK SC"); unicode-range: U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF; size-adjust: 120%; }
@font-face { font-family: "suisse-regular"; font-weight: 400; font-display: swap; src: local("PingFangSC-Regular"), local("PingFang SC Regular"), local("PingFang SC"), local("Microsoft YaHei"), local("MicrosoftYaHei"), local("NotoSansSC-Regular"), local("Noto Sans SC"), local("Noto Sans CJK SC"); unicode-range: U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF; size-adjust: 120%; }
@font-face { font-family: "suisse-medium"; font-weight: 500; font-display: swap; src: local("PingFangSC-Medium"), local("PingFang SC Medium"), local("PingFang SC"), local("Microsoft YaHei"), local("MicrosoftYaHei"), local("NotoSansSC-Medium"), local("Noto Sans SC"), local("Noto Sans CJK SC"); unicode-range: U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF; size-adjust: 120%; }
@font-face { font-family: "suisse-semibold"; font-weight: 600; font-display: swap; src: local("PingFangSC-Semibold"), local("PingFang SC Semibold"), local("PingFang SC"), local("MicrosoftYaHei-Bold"), local("Microsoft YaHei"), local("NotoSansSC-SemiBold"), local("Noto Sans SC"), local("Noto Sans CJK SC"); unicode-range: U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF; size-adjust: 120%; }
/* Árabe */
@font-face { font-family: "suisse-thin"; font-weight: 100; font-display: swap; src: local("SFArabic-Regular"), local("SF Arabic"), local("GeezaPro"), local("Geeza Pro"), local("Segoe UI"), local("Tahoma"), local("NotoSansArabic-Regular"), local("Noto Sans Arabic"), local("NotoSansArabicUI-Regular"), local("Noto Sans Arabic UI"), local("NotoNaskhArabic-Regular"), local("Noto Naskh Arabic"), local("NotoNaskhArabicUI-Regular"), local("Noto Naskh Arabic UI"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; size-adjust: 130%; }
@font-face { font-family: "suisse-light"; font-weight: 300; font-display: swap; src: local("SFArabic-Regular"), local("SF Arabic"), local("GeezaPro"), local("Geeza Pro"), local("Segoe UI"), local("Tahoma"), local("NotoSansArabic-Regular"), local("Noto Sans Arabic"), local("NotoSansArabicUI-Regular"), local("Noto Sans Arabic UI"), local("NotoNaskhArabic-Regular"), local("Noto Naskh Arabic"), local("NotoNaskhArabicUI-Regular"), local("Noto Naskh Arabic UI"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; size-adjust: 130%; }
@font-face { font-family: "suisse-regular"; font-weight: 400; font-display: swap; src: local("SFArabic-Regular"), local("SF Arabic"), local("GeezaPro"), local("Geeza Pro"), local("Segoe UI"), local("Tahoma"), local("NotoSansArabic-Regular"), local("Noto Sans Arabic"), local("NotoSansArabicUI-Regular"), local("Noto Sans Arabic UI"), local("NotoNaskhArabic-Regular"), local("Noto Naskh Arabic"), local("NotoNaskhArabicUI-Regular"), local("Noto Naskh Arabic UI"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; size-adjust: 130%; }
@font-face { font-family: "suisse-medium"; font-weight: 500; font-display: swap; src: local("SFArabic-Medium"), local("SF Arabic"), local("Segoe UI"), local("Tahoma"), local("GeezaPro"), local("Geeza Pro"), local("NotoSansArabic-Medium"), local("Noto Sans Arabic"), local("NotoSansArabicUI-Regular"), local("Noto Sans Arabic UI"), local("NotoNaskhArabic-Regular"), local("Noto Naskh Arabic"), local("NotoNaskhArabicUI-Regular"), local("Noto Naskh Arabic UI"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; size-adjust: 130%; }
@font-face { font-family: "suisse-semibold"; font-weight: 600; font-display: swap; src: local("SFArabic-Semibold"), local("SF Arabic"), local("Segoe UI"), local("Tahoma"), local("GeezaPro-Bold"), local("Geeza Pro"), local("NotoSansArabic-SemiBold"), local("Noto Sans Arabic"), local("NotoSansArabicUI-Regular"), local("Noto Sans Arabic UI"), local("NotoNaskhArabic-Regular"), local("Noto Naskh Arabic"), local("NotoNaskhArabicUI-Regular"), local("Noto Naskh Arabic UI"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; size-adjust: 130%; }

/* --- Demo --- */
.nl-demo__toolbar { display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0; }
.nl-demo__mode {
  appearance: none; border: 1px solid #d1d5db; border-radius: 999px;
  background: #fff; color: #111827; cursor: pointer;
  font-size: 12px; line-height: 1; padding: 10px 14px;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
.nl-demo__mode[aria-pressed="true"] { background: #111827; border-color: #111827; color: #fff; }
.nl-demo__mode:focus-visible { outline: 2px solid #111827; outline-offset: 2px; }
.nl-demo__grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px; margin: 16px 0 32px;
}
.nl-card { border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; }
.nl-card__head {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 12px 16px; background: #fafafa; border-bottom: 1px solid #eee;
}
.nl-card__title { font-size: 12px; font-weight: 700; }
.nl-card__adjust {
  font-family: monospace; font-size: 10px; font-weight: 700;
  background: #f0fdf4; color: #1a7a3c; padding: 2px 6px; border-radius: 4px;
}
.nl-card__body { padding: 16px; }
.nl-card__sample { margin: 0; }
.nl-demo__grid--raw .nl-card__sample { font-family: sans-serif !important; }
.nl-card__meta {
  margin-top: 12px; padding-top: 12px; border-top: 1px dashed #e5e7eb;
  font-size: 11px; color: #777; font-family: monospace; line-height: 1.8;
}
.nl-card__active-value { color: #1a5e99; font-weight: 700; }
</style>

### Tabla comparativa

Cada ejemplo compara, **al mismo `font-size` (14px)**, el glifo **sin el hack** (fuente del sistema a 100%) con el glifo **con el hack** (token Suisse → regular del sistema + `size-adjust`). La versión con hack se ve más grande: ese es el escalado que iguala el tamaño visual con la Suisse latina. En CJK la *forma* apenas cambia (el sistema ya usa un corte regular), así que **lo que cambia es la escala**. La última columna lista las **fuentes candidatas por orden de prioridad** (`local()`), no la que realmente se aplica; el navegador usa la primera disponible en tu SO. La fuente **realmente aplicada** se detecta en la *Demo en vivo*.

| Script | Sin hack · Con hack | Rango Unicode | `size-adjust` | Candidatas del sistema — orden de prioridad (macOS·iOS → Windows → Android·web) |
|---|---|---|---|---|
| Árabe | <span lang="ar" dir="rtl" style="font-family:'SF Arabic','Segoe UI','Tahoma',sans-serif;font-size:14px">مرحبا</span> &nbsp;·&nbsp; <span lang="ar" dir="rtl" style="font-family:var(--hg-typo-font-family-primary-light);font-size:14px">مرحبا</span> | `0600–06FF` · `0750–077F` · `08A0–08FF` · `FB50–FDFF` · `FE70–FEFF` | 130% | SF Arabic → Segoe UI · Tahoma · Geeza Pro → Noto Sans Arabic · Noto Naskh Arabic |
| Hangul (coreano) | <span lang="ko" style="font-family:'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif;font-size:14px">한국어</span> &nbsp;·&nbsp; <span lang="ko" style="font-family:var(--hg-typo-font-family-primary-light);font-size:14px">한국어</span> | `1100–11FF` · `3130–318F` · `A960–A97F` · `AC00–D7FF` | 120% | Apple SD Gothic Neo → Malgun Gothic → Noto Sans KR · Noto Sans CJK KR |
| Kana (japonés) | <span lang="ja" style="font-family:'Hiragino Sans','Yu Gothic UI','Meiryo',sans-serif;font-size:14px">ひらがな</span> &nbsp;·&nbsp; <span lang="ja" style="font-family:var(--hg-typo-font-family-primary-light);font-size:14px">ひらがな</span> | `3040–309F` · `30A0–30FF` · `31F0–31FF` · `FF00–FFEF` | 120% | Hiragino Sans · Hiragino Kaku Gothic ProN → Yu Gothic UI · Meiryo → Noto Sans JP · Noto Sans CJK JP |
| Han (chino) | <span lang="zh" style="font-family:'PingFang SC','Microsoft YaHei','Noto Sans SC',sans-serif;font-size:14px">汉字</span> &nbsp;·&nbsp; <span lang="zh" style="font-family:var(--hg-typo-font-family-primary-light);font-size:14px">汉字</span> | `3000–303F` · `3400–4DBF` · `4E00–9FFF` · `F900–FAFF` | 120% | PingFang SC → Microsoft YaHei → Noto Sans SC · Noto Sans CJK SC |

### Demo en vivo

Alterna entre el *fallback* con el hack (tokens Suisse + `size-adjust`) y sin el hack (sans-serif del sistema, sin escalado) para ver el cambio de forma y de escala. **Fuente activa** se detecta en tu propio equipo.

<div class="nl-demo__toolbar" role="group" aria-label="Modo de la demo tipográfica">
  <button type="button" class="nl-demo__mode" data-mode="hack" aria-pressed="true">Con hack (tokens + size-adjust)</button>
  <button type="button" class="nl-demo__mode" data-mode="raw" aria-pressed="false">Sin hack (sans-serif del sistema)</button>
</div>

<div class="nl-demo__grid" id="nl-demo-grid">
  <article class="nl-card" data-adjust="130" data-fonts="SF Arabic,Segoe UI,Tahoma,Geeza Pro,Noto Sans Arabic,Noto Naskh Arabic">
    <div class="nl-card__head">
      <span class="nl-card__title">Árabe</span>
      <span class="nl-card__adjust">size-adjust 130%</span>
    </div>
    <div class="nl-card__body">
      <div class="nl-card__sample hg-body-m" lang="ar" dir="rtl">مرحبا بكم في ماسيمو دوتي</div>
      <div class="nl-card__meta">
        rango: U+0600–06FF …<br>
        peso: <span class="nl-card__weight-value">…</span><br>
        escala: <span class="nl-card__scale-value">…</span><br>
        fuente activa: <span class="nl-card__active-value">detectando…</span>
      </div>
    </div>
  </article>
  <article class="nl-card" data-adjust="120" data-fonts="Apple SD Gothic Neo,Malgun Gothic,Noto Sans KR,Noto Sans CJK KR">
    <div class="nl-card__head">
      <span class="nl-card__title">Hangul (coreano)</span>
      <span class="nl-card__adjust">size-adjust 120%</span>
    </div>
    <div class="nl-card__body">
      <div class="nl-card__sample hg-body-m" lang="ko">마시모 두띠에 오신 것을 환영합니다</div>
      <div class="nl-card__meta">
        rango: U+AC00–D7FF …<br>
        peso: <span class="nl-card__weight-value">…</span><br>
        escala: <span class="nl-card__scale-value">…</span><br>
        fuente activa: <span class="nl-card__active-value">detectando…</span>
      </div>
    </div>
  </article>
  <article class="nl-card" data-adjust="120" data-fonts="Hiragino Sans,Hiragino Kaku Gothic ProN,Yu Gothic UI,Meiryo,Noto Sans JP,Noto Sans CJK JP">
    <div class="nl-card__head">
      <span class="nl-card__title">Kana (japonés)</span>
      <span class="nl-card__adjust">size-adjust 120%</span>
    </div>
    <div class="nl-card__body">
      <div class="nl-card__sample hg-body-m" lang="ja">マッシモ・ドゥッティへようこそ</div>
      <div class="nl-card__meta">
        rango: U+3040–30FF …<br>
        peso: <span class="nl-card__weight-value">…</span><br>
        escala: <span class="nl-card__scale-value">…</span><br>
        fuente activa: <span class="nl-card__active-value">detectando…</span>
      </div>
    </div>
  </article>
  <article class="nl-card" data-adjust="120" data-fonts="PingFang SC,Microsoft YaHei,Noto Sans SC,Noto Sans CJK SC">
    <div class="nl-card__head">
      <span class="nl-card__title">Han (chino)</span>
      <span class="nl-card__adjust">size-adjust 120%</span>
    </div>
    <div class="nl-card__body">
      <div class="nl-card__sample hg-body-m" lang="zh">欢迎光临马西莫·杜蒂</div>
      <div class="nl-card__meta">
        rango: U+4E00–9FFF …<br>
        peso: <span class="nl-card__weight-value">…</span><br>
        escala: <span class="nl-card__scale-value">…</span><br>
        fuente activa: <span class="nl-card__active-value">detectando…</span>
      </div>
    </div>
  </article>
</div>

<script>
  (function () {
    const grid = document.getElementById('nl-demo-grid');

    if (!grid) {
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const BASE_FONTS = ['monospace', 'serif', 'sans-serif'];
    const PROBE_SIZE = '48px';

    const measure = (text, family) => {
      ctx.font = `${PROBE_SIZE} ${family}`;
      return ctx.measureText(text).width;
    };

    const isAvailable = (font, text) => BASE_FONTS.some((base) => {
      const baseWidth = measure(text, base);
      const testWidth = measure(text, `"${font}", ${base}`);
      return Math.abs(testWidth - baseWidth) > 0.5;
    });

    const detect = (fonts, text) => fonts.find((font) => isAvailable(font, text)) || null;

    // Los glifos CJK son de ancho fijo (full-width): la medición por canvas no
    // puede distinguir la fuente. En ese caso mostramos la fuente por defecto
    // del sistema operativo detectado (la que el navegador usa de facto).
    const ua = navigator.userAgent || '';
    const platform = /Mac|iPhone|iPad|iPod/.test(navigator.platform || ua) ? 'mac'
      : /Win/.test(navigator.platform || ua) ? 'win' : 'other';
    const OS_DEFAULT = {
      ar: { mac: 'SF Arabic', win: 'Segoe UI', other: 'Noto Sans Arabic' },
      ko: { mac: 'Apple SD Gothic Neo', win: 'Malgun Gothic', other: 'Noto Sans KR' },
      ja: { mac: 'Hiragino Sans', win: 'Yu Gothic UI', other: 'Noto Sans JP' },
      zh: { mac: 'PingFang SC', win: 'Microsoft YaHei', other: 'Noto Sans SC' }
    };

    const setActive = (mode) => {
      grid.querySelectorAll('.nl-card').forEach((card) => {
        const fonts = (card.dataset.fonts || '').split(',').map((font) => font.trim()).filter(Boolean);
        const sample = card.querySelector('.nl-card__sample');
        const output = card.querySelector('.nl-card__active-value');
        const weightOut = card.querySelector('.nl-card__weight-value');
        const scaleOut = card.querySelector('.nl-card__scale-value');

        if (!sample || !output) {
          return;
        }

        const lang = sample.getAttribute('lang');
        const adjust = card.dataset.adjust || '120';

        if (mode === 'raw') {
          if (weightOut) weightOut.textContent = 'Light (300)';
          if (scaleOut) scaleOut.textContent = '100%';
          const fallback = OS_DEFAULT[lang] && OS_DEFAULT[lang][platform];
          output.textContent = fallback ? `${fallback} (sans-serif del sistema)` : 'sans-serif del sistema';
          return;
        }

        if (weightOut) weightOut.textContent = 'Regular (thin/light → regular)';
        if (scaleOut) scaleOut.textContent = `${adjust}% (size-adjust)`;

        const active = detect(fonts, sample.textContent.trim());

        if (active) {
          output.textContent = active;
          return;
        }

        const guess = OS_DEFAULT[lang] && OS_DEFAULT[lang][platform];
        output.textContent = guess || 'fuente por defecto del sistema';
      });
    };

    setActive('hack');

    const buttons = Array.from(document.querySelectorAll('.nl-demo__mode'));

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const mode = button.dataset.mode;
        grid.classList.toggle('nl-demo__grid--raw', mode === 'raw');
        buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        setActive(mode);
      });
    });
  })();
</script>
