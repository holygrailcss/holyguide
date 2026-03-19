---
layout: _paginas/foundations/_flexbox.njk
permalink: /flexbox/
titulo: Flexbox
descripcion: El modelo unidimensional de layout de CSS. Base de la distribución de todos los elementos en las maquetas del sistema de diseño.
descripcion2: Colección completa de clases helper para flexbox — activación, dirección, alineación, orden y wrapping.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/flexbox.jpg
imageAlt: Diagrama de flexbox
---

## Breakpoints del sistema

El sistema de grid y las media queries se basan en estos puntos de corte definidos en `abstract/_breakpoints.scss`:

<style>
.bp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
  margin: 16px 0 32px;
}
.bp-card {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
}
.bp-card__name { font-size: 11px; font-weight: 700; font-family: monospace; display: block; margin-bottom: 4px; }
.bp-card__val  { font-size: 16px; font-weight: 700; display: block; margin-bottom: 4px; }
.bp-card__var  { font-size: 10px; font-family: monospace; color: #999; }
</style>

<div class="bp-grid">
  <div class="bp-card">
    <span class="bp-card__name">xs</span>
    <span class="bp-card__val">1px</span>
    <span class="bp-card__var">$break-xs</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">sm</span>
    <span class="bp-card__val">768px</span>
    <span class="bp-card__var">$break-sm</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">md</span>
    <span class="bp-card__val">992px</span>
    <span class="bp-card__var">$break-md</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">lg</span>
    <span class="bp-card__val">1280px</span>
    <span class="bp-card__var">$break-lg</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">xl</span>
    <span class="bp-card__val">1440px</span>
    <span class="bp-card__var">$break-xl</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">2xl</span>
    <span class="bp-card__val">1600px</span>
    <span class="bp-card__var">$break-2xl</span>
  </div>
  <div class="bp-card">
    <span class="bp-card__name">3xl</span>
    <span class="bp-card__val">1920px</span>
    <span class="bp-card__var">$break-3xl</span>
  </div>
</div>

```scss
// Cómo usar los breakpoints en SCSS
@include respond($break-sm)  { /* ≥ 768px */ }
@include respond($break-md)  { /* ≥ 992px */ }
@include respond($break-lg)  { /* ≥ 1280px */ }
@include respond($break-xl)  { /* ≥ 1440px */ }
@include respond($break-2xl) { /* ≥ 1600px */ }
@include respond($break-3xl) { /* ≥ 1920px */ }
```

---

## Activar Flexbox

| Clase | CSS | Descripción |
|---|---|---|
| `.is-flex` | `display: flex` | Activa flex en todos los breakpoints |
| `.sm:flex` | `display: flex` desde `sm` (768px+) | Flex a partir de sm |
| `.md:flex` | `display: flex` desde `md` (992px+) | Flex a partir de md |
| `.lg:flex` | `display: flex` desde `lg` (1280px+) | Flex a partir de lg |
| `.xl:flex` | `display: flex` desde `xl` (1440px+) | Flex a partir de xl |
| `.smmax:flex` | `display: flex` hasta `sm - 1` | Flex solo en mobile |
| `.mdmax:flex` | `display: flex` hasta `md - 1` | Flex solo hasta md |
| `.lgmax:flex` | `display: flex` hasta `lg - 1` | Flex solo hasta lg |

---

## Dirección

| Clase | CSS | Descripción |
|---|---|---|
| `.flex-row` | `flex-direction: row` | Horizontal (por defecto) |
| `.flex-col` | `flex-direction: column` | Vertical |
| `.flex-row-reverse` | `flex-direction: row-reverse` | Horizontal invertido |
| `.flex-col-reverse` | `flex-direction: column-reverse` | Vertical invertido |

---

## Alineación — eje principal (justify-content)

| Clase | CSS | Descripción |
|---|---|---|
| `.content-start` | `justify-content: flex-start` | Agrupa al inicio |
| `.content-end` | `justify-content: flex-end` | Agrupa al final |
| `.content-center` | `justify-content: center` | Centra horizontalmente |
| `.content-sp-between` | `justify-content: space-between` | Espacio entre elementos |
| `.content-sp-around` | `justify-content: space-around` | Espacio alrededor |
| `.content-sp-evenly` | `justify-content: space-evenly` | Espacio uniforme |

---

## Alineación — eje cruzado (align-items)

| Clase | CSS | Descripción |
|---|---|---|
| `.align-start` | `align-items: flex-start` | Alinea al inicio del eje cruzado |
| `.align-end` | `align-items: flex-end` | Alinea al final |
| `.align-middle` | `align-items: center` | Centra verticalmente |
| `.align-stretch` | `align-items: stretch` | Estira al 100% de altura |
| `.align-baseline` | `align-items: baseline` | Alinea por baseline de texto |
| `.vert-end` | `align-items: flex-end` | Alinea verticalmente al final |

---

## Alineación — item individual (align-self)

| Clase | CSS | Descripción |
|---|---|---|
| `.self-start` | `align-self: flex-start` | Este item al inicio |
| `.self-end` | `align-self: flex-end` | Este item al final |
| `.self-center` | `align-self: center` | Este item centrado |
| `.self-stretch` | `align-self: stretch` | Este item estirado |

---

## Wrapping

| Clase | CSS | Descripción |
|---|---|---|
| `.flex-wrap` | `flex-wrap: wrap` | Los items se envuelven |
| `.flex-nowrap` | `flex-wrap: nowrap` | Sin envolver (por defecto) |
| `.flex-wrap-reverse` | `flex-wrap: wrap-reverse` | Envuelve en orden inverso |

---

## Grow / Shrink / Basis

| Clase | CSS | Descripción |
|---|---|---|
| `.flex-1` | `flex: 1 1 0%` | Crece y encoge, base 0 |
| `.flex-auto` | `flex: 1 1 auto` | Crece y encoge, base auto |
| `.flex-initial` | `flex: 0 1 auto` | No crece, encoge, base auto |
| `.flex-none` | `flex: 0 0 auto` | No crece ni encoge |

---

## Gap

| Clase | CSS | Descripción |
|---|---|---|
| `.gap-8` | `gap: 8px` | Separación de 8px |
| `.gap-16` | `gap: 16px` | Separación de 16px |
| `.gap-24` | `gap: 24px` | Separación de 24px |
| `.gap-32` | `gap: 32px` | Separación de 32px |

---

## Cómo usar

```html
<!-- Flex horizontal con espacio entre elementos, centrado verticalmente -->
<div class="is-flex content-sp-between align-middle">
  <span>Izquierda</span>
  <span>Derecha</span>
</div>

<!-- Solo flex en desktop -->
<div class="md:flex align-middle gap-16">
  <img src="..." alt="" />
  <p>Texto al lado de imagen, solo en desktop</p>
</div>

<!-- Flex con wrap -->
<div class="is-flex flex-wrap gap-8">
  <div class="flex-1">Item 1</div>
  <div class="flex-1">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>
```
