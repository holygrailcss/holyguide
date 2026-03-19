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
