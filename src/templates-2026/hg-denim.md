---
layout: _paginas/templates-2026/viewer-hg-denim.njk
permalink: /templates-2026/hg-denim/
page_section: templates-2026
titulo: Denim
descripcion: Landing editorial de categoría. Responsive desde Figma — desktop (1920-DENIM) y mobile (393-DENIM). Maquetada con HolyGrail5.
image: /assets/static/images/1.jpg
author: autor
date: 2026-07-15
tags: ["templates-2026"]
imageAlt: hg-denim
---

## Cuándo usarlo

Landing **editorial de categoría** (aquí, denim). Es una sola maqueta responsive: cambia el header, el subheader y la composición de los bloques según el breakpoint, pero el contenido es el mismo.

Origen en Figma: [desktop `523:2642`](https://www.figma.com/design/cRZIzvtolmCfARaNQnI1SH/-IT--DESARROLLOS?node-id=523-2642&m=dev) · [mobile `523:2469`](https://www.figma.com/design/cRZIzvtolmCfARaNQnI1SH/-IT--DESARROLLOS?node-id=523-2469&m=dev).

## Estructura

1. **Header** — el componente de la sección, incluido tal cual con {% raw %}`{% include '_paginas/templates-2026/hg-header.njk' %}`{% endraw %}: ya trae el menú (Women / Men / MD World), el logo y los accesos, con hamburguesa e iconos en mobile. Solo hay que cargar `/assets/css/hg-header.css`.
2. **Subheader** — desktop: solo categorías (`Denim Silhouettes` activa + `Ver todo`). Mobile: añade `Filtros` y el selector de densidad de rejilla (1 / 2 / 3).
3. **Aperturas** — desktop: dos imágenes a ratio 375/500. Mobile: solo la primera.
4. **Silhouettes** — los 8 fits: en una fila en desktop, con scroll horizontal en mobile.
5. **Bloque editorial** — título, texto y `View all` en un contenedor de 900px.
6. **Antetítulo + imagen editorial** — van agrupados y separados 20px entre sí (el título presenta a la imagen), en lugar de heredar el hueco de 32px que hay entre secciones.
7. **Bloques de fit** — imagen grande con el botón `+` (en blanco, sobre la foto), título/texto/CTA, y un **slider** de 6 imágenes con su contador. En desktop van a dos columnas (933 / 967), con el texto arriba y el slider abajo; en mobile se apilan reordenados: contador → slider → texto.
8. **Cierre** — imagen final, bloque editorial y footer. El footer también es el componente de la sección, incluido tal cual: trae los menús desplegables, los idiomas, el logo y la newsletter, con su propio acordeón. Necesita `/assets/css/hg-footer.css`.

## Maquetado con HolyGrail5

- **Layout → utilidades HG5**: `hg-d-flex`, `hg-flex-column`, `hg-flex-1`, `hg-items-*`, `hg-justify-*`, `hg-gap-8/16/20/24/32`, `hg-px-20`, `hg-text-center`.
- **Tipografía → HG5**: `label-m` para navegación, CTAs y labels — **ya trae el `text-transform: uppercase`** del token (es el `label-m-ttu` de Figma), así que las mayúsculas no se maquetan a mano; `label-m-b` (regular) para títulos de sección y estado activo; `title-m` para los textos largos.
- **Ratios → HG5**: `hg-aspect-3-4` (aperturas, fits, bloques y cierre — es el 375/500 exacto del diseño), `hg-aspect-16-9` (imagen editorial) y `hg-aspect-2-3` (galería), con `hg-aspect-image` en cada `<img>`.
- **Espaciado responsive → HG5**: HG5 tiene variantes por breakpoint con el prefijo **`md:`** (corta en 992px). El espaciado entre secciones es `hg-gap-20 md:hg-gap-32` y el de los bloques `hg-py-80 md:hg-py-160`, sin CSS propio.
- **Color → HG5**: el lienzo es el token **`bg-cream`** (`hg-bg-bg-cream`) y el texto `hg-c-primary`; `hg-c-dark-grey` en los estados inactivos. No queda ningún color a pelo en el CSS.
- **Botones → la guía**: el `hg-btn` del diseño (botón de texto, sin caja) es el **`btn btn-tertiary`** de `style.css` — transparente, sin borde y sin padding lateral. HG5 no publica componente de botón.
- **Visibilidad por breakpoint → HG5**: `hg-d-none md:hg-d-block` (solo desktop) y `hg-d-flex md:hg-d-none` (solo mobile), sin clases propias.
- **CSS propio** (`/assets/css/hg-denim.css`), solo lo que el DS no cubre: medidas del diseño (header 64px, contenedor 900px, proporción 933/967 de los bloques) y los cambios de breakpoint. **El `@media` corta en 992px, el mismo punto que el `md:` de HG5** — mezclar dos breakpoints dejaría una franja incoherente entre ambos.

> HG5 tiene `px`/`py` pero **no** `pt`/`pb` sueltos, así que los paddings de un solo lado (footer, subheader, el `py-64` del texto) siguen en CSS propio.

> Los helpers de visibilidad solo **ocultan** dentro de su media query; nunca fuerzan un `display`, para no pisar el que traen las utilidades HG5.

## Notas de implementación

- **El slider usa Swiper** y se arrastra con ratón y con el dedo (`grabCursor`, drag por defecto). El JS de Swiper (v9) lo carga ya `base-clean.njk`, así que el token solo añade su CSS; el script de la maqueta inicializa dentro de `DOMContentLoaded` para no depender del orden de carga.
- **Slides visibles**: 2,5 en mobile · 5,5 en tablet · 967/(330+8) ≈ 2,86 en desktop. La fila de fits sigue los mismos cortes (con `calc()`, porque no hay helper de anchura fraccionada) y en desktop pasa a `md:hg-flex-1` para que quepan los 8.
- **El tramo tablet (768–991px) es un `@media` propio**: HG5 solo define `mobile: 1px` y `desktop: 992px`, así que no hay breakpoint intermedio que reutilizar.
- **`.hg-denim__gallery { height: auto }` es obligatorio**: `style.css` impone `.swiper { height: 400px }` a todos los sliders de la guía, y esa altura fija rompe el `aspect-ratio` de los slides. El helper `hg-h-auto` no vale aquí, porque HG5 carga antes que `style.css` y pierde por especificidad.
- **El contador marca el último elemento visible**: arranca en `3/6` (las que se ven de entrada) y llega a `6/6` cuando la última está en pantalla. Sale de `visibleSlidesIndexes` de Swiper (que incluye las parcialmente visibles, o sea lo que realmente se está mostrando), con `watchSlidesProgress: true`. El valor del markup es solo el estado inicial.
- **La galería es un slider en los dos breakpoints**: en el diseño desktop la 4ª imagen entra recortada (267px frente a 330px), que es la pista de que el carrusel continúa.
- **Bloques de fit**: el diseño repite el bloque una vez por fit (8 en total). Aquí se renderizan **3** desde un array de Nunjucks — el patrón es el mismo y se amplía añadiendo entradas.
- **Assets**: descargados de Figma (sus URLs caducan a los 7 días) y optimizados a JPG. Logo e iconos van en SVG.
