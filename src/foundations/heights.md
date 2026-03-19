---
layout: _paginas/foundations/_foundations.njk
permalink: /heights/

titulo: Heights
descripcion: Alturas fijas, responsive y variables CSS custom del sistema. Incluye los valores reales del header y offsets del proyecto Dutti.

page_section: foundations
badge: updated
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/heights.jpg
---

<style>
.heights-props {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin: 16px 0 32px;
}
.heights-prop {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}
.heights-prop__bar {
  background: #000;
  transition: height .2s;
}
.heights-prop__info {
  padding: 10px 12px;
}
.heights-prop__name {
  font-size: 11px; font-weight: 700; font-family: monospace;
  display: block; margin-bottom: 2px;
}
.heights-prop__val {
  font-size: 10px; color: #999; font-family: monospace;
}
</style>

## CSS Custom Properties de cabecera

El header en Dutti usa variables CSS para garantizar consistencia en toda la interfaz. Están definidas en `styles.scss` y `partials/_hg-header.scss`.

<div class="heights-props">
  <div class="heights-prop">
    <div class="heights-prop__bar" style="height:48px"></div>
    <div class="heights-prop__info">
      <span class="heights-prop__name">--header-height</span>
      <span class="heights-prop__val">48px (mobile)</span>
    </div>
  </div>
  <div class="heights-prop">
    <div class="heights-prop__bar" style="height:64px"></div>
    <div class="heights-prop__info">
      <span class="heights-prop__name">--hg-header-min-height</span>
      <span class="heights-prop__val">64px (≥ 992px)</span>
    </div>
  </div>
  <div class="heights-prop">
    <div class="heights-prop__bar" style="height:48px;background:#555"></div>
    <div class="heights-prop__info">
      <span class="heights-prop__name">--md-checkout-header-height</span>
      <span class="heights-prop__val">48px mobile / 80px desktop</span>
    </div>
  </div>
  <div class="heights-prop">
    <div class="heights-prop__bar" style="height:64px;background:#1a32a4"></div>
    <div class="heights-prop__info">
      <span class="heights-prop__name">--md-pdp-header-height</span>
      <span class="heights-prop__val">4rem = 64px (≥ 992px)</span>
    </div>
  </div>
</div>

```css
/* Definición en styles.scss */
body {
  --header-height: 48px;
}

/* Definición en partials/_hg-header.scss */
:root {
  --hg-header-min-height: var(--hg-spacing-48);  /* 48px mobile */
}
@media (min-width: 992px) {
  :root {
    --hg-header-min-height: var(--hg-spacing-64);  /* 64px desktop */
  }
}
```

### Cómo calcular offsets de viewport

```scss
// Sección que ocupa toda la pantalla menos el header
.hero-full {
  height: calc(100vh - var(--header-height));
}

// PDP — restar la altura del header de producto
.pdp-content {
  height: calc(100vh - var(--md-pdp-header-height));
}
```


## Alturas porcentuales

| Clase | CSS | Descripción |
|---|---|---|
| `.h-100` | `height: 100%` | Hereda el 100% del padre |
| `.height-100` | `height: 100%` | Alias de `.h-100` |
| `.height-full` | `height: 100vh` | Toda la altura del viewport |
| `.height-home` | `height: calc(100vh - 80px)` | Viewport menos 80px de header |


## Alturas fijas

| Clase | Mobile | Desktop | Descripción |
|---|---|---|---|
| `.height-xs` | 80px | 80px | Altura extra pequeña |
| `.height-sm` | 150px | 150px | Altura pequeña |
| `.height-128` | 128px | 128px | Altura fija de 128px |
| `.height-md` | 350px | 350px | Altura media |
| `.height-lg` | 400px | 400px | Altura grande |
| `.height-xl` | 450px | 450px | Altura extra grande |


## Alturas responsive (hero)

Alturas que escalan entre mobile y desktop para secciones hero.

| Clase | Mobile | Desktop | Uso |
|---|---|---|---|
| `.height-big` | 300px | 500px | Hero grande |
| `.height-medium` | 200px | 400px | Hero medio |
| `.height-mini` | 100px | 300px | Hero pequeño |


## Cómo usar

```html
<!-- Sección hero a pantalla completa menos header -->
<section style="height: calc(100vh - var(--header-height))">
  ...
</section>

<!-- Imagen con altura fija usando clase -->
<div class="height-md">
  <img class="video-cover" src="..." alt="" />
</div>

<!-- Hero responsive con clase helper -->
<div class="height-big">
  <img class="video-cover" src="..." alt="" />
</div>
```
