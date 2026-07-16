---
layout: _paginas/templates-2026/viewer-hg-denim.njk
permalink: /templates-2026/hg-denim/
page_section: templates-2026
titulo: Denim
descripcion: Landing editorial de categoría, responsive desde Figma. Maqueta de referencia y guía de traspaso al Angular de Massimo Dutti.
image: /assets/static/images/1.jpg
author: autor
date: 2026-07-15
tags: ["templates-2026"]
imageAlt: hg-denim
---

Landing **editorial de categoría** (aquí, denim), maquetada con HolyGrail5 desde Figma: [desktop `523:2642`](https://www.figma.com/design/cRZIzvtolmCfARaNQnI1SH/-IT--DESARROLLOS?node-id=523-2642&m=dev) · [mobile `523:2469`](https://www.figma.com/design/cRZIzvtolmCfARaNQnI1SH/-IT--DESARROLLOS?node-id=523-2469&m=dev).

Es una sola maqueta responsive: el contenido es el mismo y cambian el header, el subheader y la composición de los bloques según el breakpoint.

## Estructura

1. **Header** — componente de la sección (`hg-header.njk`), en su variante sin maxilogo: el logo ya está arriba, sin animación. El logo grande solo es para la home.
2. **Subheader** — categorías: `Denim Silhouettes` activa + `Ver todo`.
3. **Aperturas** — dos imágenes a 2:3 en desktop; en mobile solo la primera.
4. **Silhouettes** — los 8 fits. En desktop caben en una fila; en mobile y tablet es un carrusel.
5. **Bloque editorial** — título, texto y `View all` en un contenedor de 900px.
6. **Antetítulo + imagen editorial** — agrupados y separados 20px entre sí, no los 32px que hay entre secciones.
7. **Bloques de fit** — imagen grande con el botón `+`, título/texto/CTA, y un slider de 6 imágenes con contador. En desktop van a dos columnas (933 / 967), texto arriba y slider abajo; en mobile se apilan reordenados: contador → slider → texto.
8. **Cierre** — imagen final, bloque editorial y footer (componente `hg-footer.njk`).

**Slides visibles**: 2,5 en mobile · 5,5 en tablet · 2,86 en desktop (= 967/(330+8), la proporción del diseño).

**Los sliders van a sangre en mobile y tablet**: el contenedor llega a los bordes de la pantalla, pero el primer elemento sigue alineado con el texto (20px). En el de Swiper se hace con `slidesOffsetBefore`, no con padding, porque el padding le descuadra el cálculo de `slidesPerView`.

---

## Traspaso al Angular de Massimo Dutti

Buenas noticias: **dutti ya carga HolyGrail5**, así que el 78% de esta maqueta funciona tal cual.

**El objetivo es quedarse solo con `output.css`**: ni `dutti-theme.css` ni la copia de HG2. Este documento mide qué falta para llegar ahí.

## El punto de partida

Hoy se cargan tres capas de CSS, por `angular.json` en `apps/frontend` (y en `tools/storybook`):

```json
{ "input": "./src/assets/styles/styles.scss",              "bundleName": "styles" },
{ "input": "../../node_modules/holygrail5/dist/output.css", "bundleName": "styles" },
{ "input": "./src/assets/styles/dutti-theme.css",           "bundleName": "styles" }
```

- `styles.scss` → arrastra **HolyGrail2** (`@import "holygrail2/scss/style"`).
- `output.css` → **HolyGrail5**, versión **1.0.23**. Es la única que debería quedar.
- `dutti-theme.css` → 150 líneas que **pisan a HG5** por ir las últimas.

### Qué funciona ya y qué falta

De las 50 clases que usa esta maqueta, medido contra el `output.css` que dutti carga:

| Estado | Nº | Clases |
|---|---|---|
| ✅ **Funcionan hoy** | **39** | Todo el layout (`hg-d-flex`, `hg-flex-*`, `hg-items-*`, `hg-justify-*`, `hg-order-*`, `hg-overflow-x-*`, `hg-position-*`, `hg-z-*`, `hg-w-*`, `hg-cursor-*`, `hg-d-none/block`), los gaps (`hg-gap-8/16/20/32`), `hg-px-20`, `hg-py-80`, la tipografía (`label-m`, `label-m-b`, `title-m`), los ratios (`hg-aspect-2-3`, `hg-aspect-16-9`, `hg-aspect-image`) y **9 variantes `md:`** (la 1.0.23 ya trae 720) |
| ❌ **Faltan** | **11** | `hg-c-dark-grey`, `hg-c-white`, `hg-c-primary`, `hg-bg-bg-cream`, `hg-pt-24`, `hg-pb-4`, `hg-mt-auto`, `md:hg-pt-64`, `md:hg-pt-128`, `md:hg-pr-0`, `md:hg-mt-auto` |

**Las 11 que faltan se arreglan con una sola cosa: subir `holygrail5` de `1.0.23` a `1.0.29`.**

Son exactamente los helpers que se añadieron al DS mientras se maquetaba esto:

- **1.0.28** — los helpers de color: `hg-c-*` y `hg-bg-*`.
- **1.0.29** — los `hg-pt/pb/pl/pr` y `hg-mt/mb/ml/mr` con prefijo `hg-` (antes solo existían sin prefijo), más `hg-mt-auto`, todos con sus variantes `md:`.

No hay "rutas alternativas" ni que copiar nada a mano: es un bump de versión.

### De paso: `_hg-home.scss` duplica el DS

`src/assets/styles/partials/_hg-home.scss` (518 líneas, importado en `styles.scss:49`) copia a mano **9 `hg-aspect-*`**. De esos, **6 ya están en HG5** (`1-1`, `16-9`, `2-1`, `2-3`, `3-4`, `4-3`): duplicación pura, se pueden borrar.

Los otros **3 no existen en HG5** (`1-2`, `3-2`, `9-16`). Esos no se borran: hay que **subirlos al DS** primero, o la home los pierde.

No bloquea este traspaso, pero es deuda que conviene cortar: cada maqueta que llega tiende a duplicar un trozo de HolyGrail5 en un partial.

## Equivalencias en dutti

| En la maqueta | En dutti |
|---|---|
| `hg-header.njk` / `hg-footer.njk` | **No se portan.** Son los componentes de la guía. Dutti ya tiene los suyos. |
| Swiper 9 + `new Swiper()` a mano | **`<md-swiper>`** (`src/app/ui/md-swiper/`), que envuelve Swiper 12 |
| Script del contador | `swiperActiveIndexChange` o `swiperInit` de `md-swiper` |
| `btn btn-tertiary label-m` | Igual: ya existen las dos |
| `ttu` (mayúsculas sobre `title-m`) | Existe en dutti vía **holygrail2**. Ojo: **no está en HG5**, es de las clases que atan a HG2. |
| Las clases `hg-denim__*` | Al `.component.scss`. Son 9 reglas: medidas de este diseño, no del DS. |

### md-swiper

```html
<md-swiper [options]="'carousel'" (swiperActiveIndexChange)="onSlide($event)">
```

`options` acepta un preset (`basic`, `carousel`, `autoplay`, `thumbs`, `vertical`, `coverflow`, `infinite`, `productGrid`) o un `MdSwiperConfig`. Para este slider hace falta config propia, por los `slidesPerView` fraccionados y los breakpoints:

```ts
{ slidesPerView: 2.5, spaceBetween: 8, slidesOffsetBefore: 20, grabCursor: true,
  watchSlidesProgress: true,
  breakpoints: { 768: { slidesPerView: 5.5 }, 992: { slidesPerView: 2.86, slidesOffsetBefore: 0 } } }
```

El contador marca **el último elemento visible** (arranca en `3/6` y llega a `6/6`). Sale de `visibleSlidesIndexes`, que necesita `watchSlidesProgress: true`.

## Quitar `dutti-theme.css`

Son **150 líneas**, y no es un tema: es una **capa de parches** entre HG2 y HG5. Esto es todo lo que hace:

| Qué | Cuántas líneas | ¿Lo cubre HG5? |
|---|---|---|
| Pisa 3 tokens de fuente en `:root` | 3 | Sí — HG5 ya los define |
| Sube a `13px` `.title-m`, `.label-m`, `.hg-body-m` | 8 | Es un override, no algo que falte |
| `letter-spacing: .04em` en `.text-*` / `.hg-body-*` | 3 | Igual: override |
| **Una copia de `.hg-btn-badge` sacada de HG2** | ~70 | **No. HG5 no tiene botones.** |
| Parches de app (`.btn-primary`, `.text-badge`, `.font-m`, `.slot--selected`, `.md-display-filter-cycle`) | ~25 | No son del DS |

El propio archivo lo dice en sus comentarios: *"copiado desde holygrail2/scss/elements/_buttons.scss"*, *"trasladado aquí para anclarlo a la capa de tema y que no dependa del orden frente a HG5"*.

### Lo que se gana al quitarlo

Los dos overrides tipográficos son justo los que separan a dutti del diseño:

- **`--hg-typo-font-family-primary-bold: 'suisse-medium'`** → HG5 usa **`suisse-semibold`**. Con dutti-theme, los bold salen más finos de lo que pide Figma. Quitándolo, se corrige solo.
- **`font-size: 13px`** cuando Figma pide 12. Ojo al media query: `(min-width: 992px) and (max-resolution: 1dppx)` — **solo aplica en pantallas no-retina**. Es un parche de legibilidad para monitores de baja densidad, no una decisión de diseño global.

### Lo que bloquea

**`.hg-btn-badge` no existe en HG5** — ni `.hg-btn`, aunque el diseño de Figma llame así al componente. Por eso dutti-theme tiene que llevarse una copia de HG2. Mientras HG5 no publique los botones, `dutti-theme.css` no se puede borrar del todo.

Ruta: **subir `hg-btn` y `hg-btn-badge` al DS**, y entonces las ~70 líneas de copia se van. Los parches de app no van al tema: van al CSS de sus componentes.

## Un aviso que te va a morder

**Cuidado con las reglas globales sobre `.swiper`.** En la guía, `style.css` tiene `.swiper { height: 400px; max-width: 100% }`. La altura fija rompe el `aspect-ratio` de los slides (se estiran un 41%) y el `max-width` impide sacarlos a sangre. Si en dutti hay una regla global equivalente, aparecerá el mismo problema. Aquí se neutralizan con `height: auto` y `max-width: none`.

## Orden sugerido

**Para montar esta pantalla:**

1. **Subir `holygrail5` a 1.0.29.** Es lo único que bloquea. Con eso, las 50 clases de la maqueta funcionan. El bump solo añade helpers nuevos, no cambia ninguno existente.
2. Montar el componente con la estructura de la maqueta (el botón **CODE** de arriba da el HTML final ya renderizado).
3. Sustituir el Swiper a mano por `<md-swiper>`.
4. Copiar las reglas de `hg-denim.css` al `.component.scss`: son medidas de este diseño, no del DS.

**Para llegar a solo `output.css`** (no bloquea lo anterior, pero es la dirección):

5. Subir `hg-btn` y `hg-btn-badge` al DS. Es lo único que obliga a mantener `dutti-theme.css`.
6. Mover los parches de app (`.btn-primary`, `.text-badge`, `.slot--selected`…) al CSS de sus componentes.
7. Quitar los 3 overrides de token y el `13px`: con eso, dutti renderiza lo que dice el diseño.
8. Sacar HolyGrail2 de `styles.scss` — es el paso grande, y tiene su propio Jira.

---

## Notas de la maqueta

- **Ratios**: todo lo vertical va a `hg-aspect-2-3` y la imagen editorial a `hg-aspect-16-9`, con `hg-aspect-image` en cada `<img>`.
- **Solo `fit.jpg` es 2:3 real** (1200x1800), así que se usa en todos los huecos verticales y encaja sin recorte. El resto de assets que sirvió Figma vinieron a 1024x768 (4:3 apaisado) y al meterlos en vertical se recortaban a la mitad. `editorial.jpg` es la excepción: 4:3 en un hueco 16:9, con un 33% de recorte lateral.
- **El breakpoint es 992px**, el mismo que el `md:` de HG5. Mezclar dos cortes dejaría una franja incoherente entre ambos. El tramo tablet (768–991) es un `@media` propio: HG5 solo define `mobile: 1px` y `desktop: 992px`.
- **Bloques de fit**: el diseño repite el bloque una vez por fit (8 en total). Aquí se renderizan 3 desde un array de Nunjucks.
- **El Figma mobile trae `Filtros` y un selector de densidad (1/2/3)** que se han dejado fuera de esta maqueta a propósito.
- **Assets descargados de Figma** (sus URLs caducan a los 7 días) y optimizados a JPG: 17 MB → 620 KB.
