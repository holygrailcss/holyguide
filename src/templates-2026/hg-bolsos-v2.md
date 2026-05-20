---
layout: _paginas/templates-2026/viewer-hg-bolsos-v2.njk
permalink: /templates-2026/hg-bolsos-v2/
page_section: templates-2026
titulo: hg-bolsos-v2
descripcion: Galería editorial tipo Massimo Dutti — grid de imágenes con columna de índice/captions. Responsive (desktop ≥ 992px → 5 columnas + captions sticky a la derecha; mobile/tablet → 3 columnas + captions debajo).
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-18
tags: ["templates-2026"]
imageAlt: hg-bolsos-v2
---

## hg-bolsos-v2

Grid editorial inspirado en la página de bolsos de Massimo Dutti. Cada celda del grid es una **imagen** y una **columna de captions** sticky acompaña la rejilla con la lista numerada de productos. Cada tile y cada línea de caption enlazan a la vista de detalle (`/token-hg-bolsos-v2-detail/?item=NN`).

### Características

- **Layout en dos columnas (desktop):** el contenedor `.bolsos-v2_layout` divide la sección en `minmax(0,1fr) minmax(400px,500px)` → izquierda con la rejilla de imágenes, derecha con la lista de captions sticky.
- **Grid responsive (sub-grid de imágenes):**
  - **Desktop (≥ 992px):** 5 columnas de imagen + columna de captions a la derecha (sticky).
  - **< 992px:** 3 columnas de imagen + captions apilados debajo.
- **HG5 first:** clases de layout, spacing y tipografía vienen de HolyGrail 5 (`hg-d-flex`, `hg-gap-*`, `hg-body-m`, `hg-color-*`). El CSS propio se reduce al grid específico y a la proporción de los tiles.
- **Aspect-ratio 3:4** en cada tile, definido por CSS `aspect-ratio` para que el grid mantenga su geometría aunque la imagen aún no haya cargado.
- **Hover cruzado:** al pasar por encima de un tile, el caption con el mismo índice queda al 100% y el resto bajan a `opacity: 0.3` (y al revés desde la lista). Lo lleva la clase `.is-tile-hovering` en el wrap.

### Clases propias

Las clases del componente llevan el prefijo `bolsos-v2_` para no colisionar con HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.bolsos-v2_wrap` | Contenedor de la sección |
| `.bolsos-v2_layout` | Grid 2-col (imagen-grid + captions) en desktop, stack en mobile |
| `.bolsos-v2_grid` | Sub-grid de tiles (5 cols desktop / 3 cols resto) |
| `.bolsos-v2_tile` | Cada celda con una imagen |
| `.bolsos-v2_tile-link` | `<a>` que envuelve el tile y enlaza a la detail |
| `.bolsos-v2_figure` | Wrapper interno del tile |
| `.bolsos-v2_video` | Imagen del tile (la clase mantiene el nombre histórico) |
| `.bolsos-v2_tile-caption` | Índice `[ NN ]` superpuesto en la esquina del tile |
| `.bolsos-v2_captions` | Columna o bloque con la lista de captions |
| `.bolsos-v2_caption` | Cada línea de caption |
| `.bolsos-v2_caption-link` | `<a>` de cada caption hacia la detail |
| `.bolsos-v2_index` | Número/índice del producto (p. ej. `[ 01 ]`) |

### Datos por tile

```html
<figure class="bolsos-v2_figure">
  <img class="bolsos-v2_video" src="/assets/static/templates/timeline/colonia.jpg"
       alt="BAG, SATCHEL BAG — featured by LOU DOILLON" loading="lazy" />
  <figcaption class="bolsos-v2_tile-caption">
    <span class="bolsos-v2_tile-index">[ 01 ]</span>
  </figcaption>
</figure>
```

### Accesibilidad

- Cada `<img>` lleva su `alt` descriptivo con producto + autor.
- `loading="lazy"` para diferir imágenes fuera de la viewport.
- `<a>` de tile y caption con `aria-label` y `:focus-visible` claro.

---

## Checklist

### HolyGrail 5

- [ ] Spacing, tipografía y layout base usan helpers de HG5.
- [ ] Las clases propias `bolsos-v2_` no colisionan con `hg-`.
- [ ] Colores tomados de `var(--hg-color-*)`.

### Imagen

- [ ] Cada tile usa `<img>` con `alt` descriptivo y `loading="lazy"`.
- [ ] `aspect-ratio: 3/4` se respeta antes de que cargue la imagen.

### Responsive

- [ ] Desktop ≥ 992px: 5 cols de imagen + columna captions sticky a la derecha.
- [ ] < 992px: 3 cols + captions bajo el grid.
- [ ] Probado en Chrome, Safari iOS y Firefox.
