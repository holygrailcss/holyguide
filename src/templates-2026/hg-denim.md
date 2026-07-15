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

Esta maqueta **no se copia y pega**. Lo que sigue es el estado real del proyecto a día de hoy y lo que hay que hacer.

## El problema de partida

`holygrail5` está en el `package.json` de `apps/frontend` (**1.0.23**) pero **no se importa en ningún sitio**. Está instalado y sin usar. Lo único que entra en el build es HolyGrail2:

```scss
/* apps/frontend/src/assets/styles/styles.scss */
@import "holygrail2/scss/style";
```

Los tokens `--hg-*` que sí existen en dutti **no vienen del paquete**: los mantiene a mano `dutti-theme.css`, que se carga desde `angular.json`. Consecuencia directa: **las utilidades de HG5 no existen en dutti**.

### Qué existe y qué no

**HolyGrail5 tiene todo lo que necesita esta maqueta.** El problema no es el DS: es que dutti no lo carga. De las 36 clases que usa, esto es lo que hay hoy en el proyecto:

| Estado en dutti | Clases | De dónde salen |
|---|---|---|
| ✅ **Disponibles** (5) | `hg-aspect-2-3`, `hg-aspect-16-9` | **Copiadas a mano** de HG5 en `_hg-home.scss` |
| | `label-m`, `title-m` | A mano en `dutti-theme.css` |
| | `btn-tertiary` | HolyGrail2 |
| ❌ **Faltan** (31) | Todo el layout (`hg-d-flex`, `hg-flex-*`, `hg-items-*`, `hg-justify-*`, `hg-order-*`, `hg-overflow-x-*`, `hg-position-*`, `hg-z-*`, `hg-w-*`, `hg-d-none/block`), todo el espaciado (`hg-gap-*`, `hg-px-*`, `hg-py-*`, `hg-pt-*`, `hg-pb-*`, `hg-mt-auto` y sus variantes `md:`), los colores (`hg-c-*`, `hg-bg-*`), `label-m-b` y `hg-aspect-image` | — |

Ojo con la primera fila: **`hg-aspect-2-3` y `hg-aspect-16-9` están en HG5**. Dutti las tiene solo porque alguien las copió a mano en `src/assets/styles/partials/_hg-home.scss` (518 líneas, importado en `styles.scss:49`) al portar la maqueta de home. No es una capacidad de dutti: es el DS duplicado.

Y se mide: de los **9 ratios** que copia ese partial, **6 ya están en HG5** (`1-1`, `16-9`, `2-1`, `2-3`, `3-4`, `4-3`) — duplicación pura. Los otros **3 no existen en HG5** (`1-2`, `3-2`, `9-16`): esos no hay que borrarlos, hay que **subirlos al DS**.

Ese es el patrón que conviene cortar: cada maqueta que llega duplica un trozo de HolyGrail5 en un partial de dutti.

## Las dos rutas

### Ruta A — cargar HolyGrail5 (recomendada)

Es la dirección estratégica (ver el Jira de *SCSS → CSS / HG2 → HG5*) y la que evita seguir duplicando.

1. Subir `holygrail5` de `1.0.23` a **`1.0.29`** o superior. Las versiones intermedias añaden cosas que esta maqueta usa: los helpers de color (`hg-c-*` / `hg-bg-*`), y los `hg-pt/pb/pl/pr` y `hg-mt-auto` con sus variantes `md:`.
2. Cargar su CSS en `angular.json`, junto a `dutti-theme.css`:
   ```json
   { "input": "./node_modules/holygrail5/dist/output.css" }
   ```
   **Antes que `dutti-theme.css`**, para que los overrides de dutti sigan mandando.
3. Borrar de `_hg-home.scss` los 6 `hg-aspect-*` que ya están en HG5: pasan a venir del paquete. Antes, subir al DS los 3 que faltan (`1-2`, `3-2`, `9-16`) para no perderlos.

Riesgo a medir antes: HG5 y HG2 comparten nombres de clase (`label-m`, `title-m`, `hg-body-*`). Cargar los dos a la vez puede mover tipografías en páginas que hoy funcionan. Conviene hacerlo detrás de un feature flag o validando pantalla por pantalla.

### Ruta B — copiar a mano, como `_hg-home.scss`

Crear `partials/_hg-denim.scss` con las 31 clases que faltan e importarlo en `styles.scss`. Es lo que ya se hizo con home. Funciona hoy y no toca nada global, pero **duplica el sistema de diseño otra vez** y hay que mantenerlo a mano. Solo si la Ruta A no entra en el sprint.

## Equivalencias en dutti

| En la maqueta | En dutti |
|---|---|
| `hg-header.njk` / `hg-footer.njk` | **No se portan.** Son los componentes de la guía. Dutti ya tiene los suyos. |
| Swiper 9 + `new Swiper()` a mano | **`<md-swiper>`** (`src/app/ui/md-swiper/`), que envuelve Swiper 12 |
| Script del contador | `swiperActiveIndexChange` o `swiperInit` de `md-swiper` |
| `btn btn-tertiary label-m` | Igual: ya existen las dos |
| Las clases `hg-denim__*` | CSS del componente. Son 9 reglas: medidas de este diseño, no del DS. |

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

1. Decidir Ruta A o B. Si es la A, subir a 1.0.29 y cargar el CSS **en una rama aislada**, y medir el impacto de la colisión HG2/HG5 en las pantallas que ya existen.
2. Montar el componente con la estructura de la maqueta (el botón **CODE** de arriba da el HTML final ya renderizado).
3. Sustituir el Swiper a mano por `<md-swiper>`.
4. Validar con diseño los dos desvíos de token (bold y 13px) antes de dar la pantalla por buena.

---

## Notas de la maqueta

- **Ratios**: todo lo vertical va a `hg-aspect-2-3` y la imagen editorial a `hg-aspect-16-9`, con `hg-aspect-image` en cada `<img>`.
- **Solo `fit.jpg` es 2:3 real** (1200x1800), así que se usa en todos los huecos verticales y encaja sin recorte. El resto de assets que sirvió Figma vinieron a 1024x768 (4:3 apaisado) y al meterlos en vertical se recortaban a la mitad. `editorial.jpg` es la excepción: 4:3 en un hueco 16:9, con un 33% de recorte lateral.
- **El breakpoint es 992px**, el mismo que el `md:` de HG5. Mezclar dos cortes dejaría una franja incoherente entre ambos. El tramo tablet (768–991) es un `@media` propio: HG5 solo define `mobile: 1px` y `desktop: 992px`.
- **Bloques de fit**: el diseño repite el bloque una vez por fit (8 en total). Aquí se renderizan 3 desde un array de Nunjucks.
- **El Figma mobile trae `Filtros` y un selector de densidad (1/2/3)** que se han dejado fuera de esta maqueta a propósito.
- **Assets descargados de Figma** (sus URLs caducan a los 7 días) y optimizados a JPG: 17 MB → 620 KB.
