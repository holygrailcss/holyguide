---
layout: _paginas/templates-2026/viewer-hg-bolsos-v2.njk
permalink: /templates-2026/hg-bolsos-v2/
page_section: templates-2026
titulo: hg-bolsos-v2
descripcion: Galería editorial tipo Massimo Dutti — grid de vídeos en loop con columna de índice/captions. Responsive (desktop ≥ 992px → 5 columnas + captions sticky a la derecha; mobile/tablet → 3 columnas + captions debajo).
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-18
tags: ["templates-2026"]
imageAlt: hg-bolsos-v2
---

## hg-bolsos-v2

Grid editorial inspirado en la página de bolsos de Massimo Dutti. Cada celda del grid es un **vídeo en loop** (autoplay, muted, playsinline) y una **columna de captions** sticky acompaña la rejilla con la lista numerada de productos. Cada tile y cada línea de caption enlazan a la vista de detalle (`/token-hg-bolsos-v2-detail/?item=NN`).

### Características

- **Layout en dos columnas (desktop):** el contenedor `.bolsos-v2_layout` divide la sección en `minmax(0,1fr) minmax(400px,500px)` → izquierda con la rejilla de vídeos, derecha con la lista de captions sticky.
- **Grid responsive (sub-grid de vídeos):**
  - **Desktop (≥ 992px):** 5 columnas de vídeo + columna de captions a la derecha (sticky).
  - **< 992px:** 3 columnas de vídeo + captions apilados debajo.
- **HG5 first:** clases de layout, spacing y tipografía vienen de HolyGrail 5 (`hg-d-flex`, `hg-gap-*`, `hg-body-m`, `hg-color-*`). El CSS propio se reduce al grid específico y a la proporción de los tiles.
- **Aspect-ratio 3:4** en cada tile, definido por CSS `aspect-ratio` para que el grid mantenga su geometría aunque el vídeo aún no haya cargado (mientras tanto se ve el `poster`).
- **Hover cruzado:** al pasar por encima de un tile, el caption con el mismo índice queda al 100% y el resto bajan a `opacity: 0.3` (y al revés desde la lista). Lo lleva la clase `.is-tile-hovering` en el wrap.

### Origen de los vídeos

Los `.mp4` se sirven **directos desde `videos.pexels.com`** como referencia externa. Cero peso en el repo, listo para iterar en preview. Si quieres independizarte de Pexels:

1. Descarga los 15 archivos a `src/assets/video/`.
2. Sustituye `https://videos.pexels.com/...` por `/assets/video/bag-NN.mp4` en el array `items` del `.njk`.

### Clases propias

Las clases del componente llevan el prefijo `bolsos-v2_` para no colisionar con HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.bolsos-v2_wrap` | Contenedor de la sección |
| `.bolsos-v2_layout` | Grid 2-col (video-grid + captions) en desktop, stack en mobile |
| `.bolsos-v2_grid` | Sub-grid de tiles (5 cols desktop / 3 cols resto) |
| `.bolsos-v2_tile` | Cada celda con un vídeo |
| `.bolsos-v2_tile-link` | `<a>` que envuelve el tile y enlaza a la detail |
| `.bolsos-v2_figure` | Wrapper interno del tile |
| `.bolsos-v2_video` | `<video>` del tile |
| `.bolsos-v2_tile-caption` | Índice `[ NN ]` superpuesto en la esquina del tile |
| `.bolsos-v2_captions` | Columna o bloque con la lista de captions |
| `.bolsos-v2_caption` | Cada línea de caption |
| `.bolsos-v2_caption-link` | `<a>` de cada caption hacia la detail |
| `.bolsos-v2_index` | Número/índice del producto (p. ej. `[ 01 ]`) |

### Datos por tile

```html
<figure class="bolsos-v2_figure">
  <video class="bolsos-v2_video" autoplay loop muted playsinline preload="metadata"
         poster="/assets/static/templates/timeline/colonia.jpg"
         aria-label="BAG, SATCHEL BAG — featured by LOU DOILLON">
    <source src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4" type="video/mp4" />
  </video>
  <figcaption class="bolsos-v2_tile-caption">
    <span class="bolsos-v2_tile-index">[ 01 ]</span>
  </figcaption>
</figure>
```

### Accesibilidad y rendimiento

- `<video>` con `muted` (requisito de autoplay) y `playsinline` (iOS no entra en fullscreen).
- `preload="metadata"` para no descargar el archivo entero hasta que haga falta.
- `IntersectionObserver`: solo se reproducen los vídeos cerca de la viewport. El resto quedan pausados → menos CPU y ancho de banda con 15 streams 1080p.
- `prefers-reduced-motion: reduce` → todos los vídeos se pausan y se queda visible el `poster`.
- Cada `<video>` lleva `aria-label` con la descripción del producto.

---

## Checklist

### HolyGrail 5

- [ ] Spacing, tipografía y layout base usan helpers de HG5.
- [ ] Las clases propias `bolsos-v2_` no colisionan con `hg-`.
- [ ] Colores tomados de `var(--hg-color-*)`.

### Vídeo

- [ ] `autoplay loop muted playsinline` presente en todos los `<video>`.
- [ ] Cada `<video>` lleva `poster` con una imagen de respaldo (mientras carga / si falla).
- [ ] `IntersectionObserver` activa/pausa los vídeos en función de la viewport.
- [ ] `prefers-reduced-motion: reduce` → vídeos pausados, se muestra el `poster`.

### Responsive

- [ ] Desktop ≥ 992px: 5 cols de vídeo + columna captions sticky a la derecha.
- [ ] < 992px: 3 cols + captions bajo el grid.
- [ ] Probado en Chrome, Safari iOS y Firefox.
