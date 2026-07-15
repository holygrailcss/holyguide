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

---

# Traspaso al Angular de Massimo Dutti

Buenas noticias: **dutti ya carga HolyGrail5**, así que el 78% de esta maqueta funciona tal cual. Lo que sigue es el estado real del proyecto y lo que falta.

## El punto de partida

HG5 entra por `angular.json`, en `apps/frontend` (y también en `tools/storybook`):

```json
{ "input": "./src/assets/styles/styles.scss",              "bundleName": "styles" },
{ "input": "../../node_modules/holygrail5/dist/output.css", "bundleName": "styles" },
{ "input": "./src/assets/styles/dutti-theme.css",           "bundleName": "styles" }
```

Ese orden importa y está bien: HG2 (dentro de `styles.scss`) → **HG5** → los overrides de dutti al final. Los dos HolyGrail conviven ya hoy en producción; no es un riesgo nuevo que haya que introducir.

La versión instalada es la **1.0.23**.

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
{ slidesPerView: 2.5, spaceBetween: 8, grabCursor: true, watchSlidesProgress: true,
  breakpoints: { 768: { slidesPerView: 5.5 }, 992: { slidesPerView: 2.86 } } }
```

El contador marca **el último elemento visible** (arranca en `3/6` y llega a `6/6`). Sale de `visibleSlidesIndexes`, que necesita `watchSlidesProgress: true`.

## Tres avisos que te van a morder

**1. Los bold se ven más finos en dutti.** `dutti-theme.css` define `--hg-typo-font-family-primary-bold: 'suisse-medium'`, mientras HG5 usa `suisse-semibold`. Lo que en la maqueta se ve semibold, en dutti sale medium.

**2. El texto no mide 12px, mide 13px.** `dutti-theme.css` sube `.title-m`, `.label-m` y `.hg-body-m` a `13px` desde 992px. El diseño de Figma pide 12. No es un bug de la maqueta: es una decisión de dutti que hay que respetar o revisar con diseño.

**3. Cuidado con las alturas fijas sobre `.swiper`.** En la guía, `style.css` tiene `.swiper { height: 400px }` y eso rompe el `aspect-ratio` de los slides: se estiran un 41%. Si en dutti hay una regla global equivalente, aparecerá el mismo problema. Aquí se neutraliza con `.hg-denim__gallery { height: auto }`.

## Orden sugerido

1. **Subir `holygrail5` a 1.0.29.** Es lo único que bloquea. Con eso, las 50 clases de la maqueta funcionan.
2. Montar el componente con la estructura de la maqueta (el botón **CODE** de arriba da el HTML final ya renderizado).
3. Sustituir el Swiper a mano por `<md-swiper>`.
4. Copiar las 9 reglas de `hg-denim.css` al `.component.scss`: son medidas de este diseño, no del DS.
5. Validar con diseño los dos desvíos de token (bold y 13px) antes de dar la pantalla por buena.

El bump de versión solo añade helpers nuevos; no cambia ninguno existente. Aun así, conviene mirar que ninguna pantalla dependa de la ausencia de `hg-c-*` / `hg-bg-*` (poco probable: son clases nuevas).

---

## Notas de la maqueta

- **Ratios**: todo lo vertical va a `hg-aspect-2-3` y la imagen editorial a `hg-aspect-16-9`, con `hg-aspect-image` en cada `<img>`.
- **Solo `fit.jpg` es 2:3 real** (1200x1800), así que se usa en todos los huecos verticales y encaja sin recorte. El resto de assets que sirvió Figma vinieron a 1024x768 (4:3 apaisado) y al meterlos en vertical se recortaban a la mitad. `editorial.jpg` es la excepción: 4:3 en un hueco 16:9, con un 33% de recorte lateral.
- **El breakpoint es 992px**, el mismo que el `md:` de HG5. Mezclar dos cortes dejaría una franja incoherente entre ambos. El tramo tablet (768–991) es un `@media` propio: HG5 solo define `mobile: 1px` y `desktop: 992px`.
- **Bloques de fit**: el diseño repite el bloque una vez por fit (8 en total). Aquí se renderizan 3 desde un array de Nunjucks.
- **El Figma mobile trae `Filtros` y un selector de densidad (1/2/3)** que se han dejado fuera de esta maqueta a propósito.
- **Assets descargados de Figma** (sus URLs caducan a los 7 días) y optimizados a JPG: 17 MB → 620 KB.
