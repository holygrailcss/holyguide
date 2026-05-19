---
layout: _paginas/templates-2026/viewer-hg-bolsos-v2.njk
permalink: /templates-2026/hg-bolsos-v2/
page_section: templates-2026
titulo: hg-bolsos-v2
descripcion: Galería editorial tipo Massimo Dutti — grid de vídeos en loop con columna de índice/captions. Responsive (desktop con 5 columnas de vídeo + columna de captions; mobile en stack).
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-18
tags: ["templates-2026"]
imageAlt: hg-bolsos-v2
---

## hg-bolsos-v2

Grid editorial inspirado en la página de bolsos de Massimo Dutti. Cada celda del grid es un **vídeo en loop** (autoplay, muted, playsinline) y una **columna de captions** acompaña la rejilla con la lista numerada de productos.

### Características

- **Vídeos en bucle:** cada tile es un `<video autoplay loop muted playsinline>` que arranca solo y vuelve a empezar sin pausa.
- **Grid responsive:**
  - **Desktop (≥ 992px):** 6 columnas → 5 columnas de vídeo + 1 columna de captions a la derecha.
  - **Tablet (≥ 768px):** 3 columnas de vídeo + captions debajo.
  - **Mobile (< 768px):** 2 columnas de vídeo + captions debajo.
- **HG5 first:** clases de layout, spacing y tipografía vienen de HolyGrail 5 (`hg-d-flex`, `hg-gap-*`, `hg-body-m`, `hg-color-*`). El CSS propio se reduce al grid específico y a la proporción de los vídeos.
- **Aspect-ratio 3:4** en cada tile, definido por CSS `aspect-ratio` para que el grid mantenga su geometría aunque el vídeo aún no se haya cargado.

### Clases propias

Las clases del componente llevan el prefijo `bolsos-v2_` para no colisionar con HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.bolsos-v2_wrap` | Contenedor de la sección |
| `.bolsos-v2_grid` | El grid principal (cambia de columnas por breakpoint) |
| `.bolsos-v2_tile` | Cada celda con un vídeo |
| `.bolsos-v2_video` | Vídeo en loop dentro del tile |
| `.bolsos-v2_captions` | Columna o bloque con la lista de captions |
| `.bolsos-v2_caption` | Cada línea de caption |
| `.bolsos-v2_index` | Número/índice del producto (p. ej. `[ 01 ]`) |

### Datos por tile

```html
<figure class="bolsos-v2_tile">
  <video class="bolsos-v2_video" autoplay loop muted playsinline poster="...">
    <source src="/assets/video/bag-01.mp4" type="video/mp4" />
    <source src="/assets/video/bag-01.webm" type="video/webm" />
  </video>
</figure>
```

### Accesibilidad

- `<video>` con `muted` (requisito de autoplay) y `playsinline` (iOS no entra en fullscreen).
- `prefers-reduced-motion`: si el usuario lo activa, los vídeos pausan automáticamente y se sustituyen por su `poster`.
- Cada vídeo lleva un `aria-label` con la descripción del producto.

---

## Checklist

### HolyGrail 5

- [ ] Spacing, tipografía y layout base usan helpers de HG5.
- [ ] Las clases propias `bolsos-v2_` no colisionan con `hg-`.
- [ ] Colores tomados de `var(--hg-color-*)`.

### Vídeo

- [ ] `autoplay loop muted playsinline` presente en todos los `<video>`.
- [ ] Cada `<video>` lleva `poster` con la primera frame en JPG/WebP para evitar parpadeo.
- [ ] Peso ≤ 6 MB y duración ≤ 6 s por vídeo (ver `/videos/`).
- [ ] `prefers-reduced-motion: reduce` → vídeos pausados, se muestra el `poster`.

### Responsive

- [ ] Desktop ≥ 992px: 5 cols de vídeo + columna captions a la derecha.
- [ ] Tablet 768–991px: 3 cols + captions bajo el grid.
- [ ] Mobile < 768px: 2 cols + captions bajo el grid.
- [ ] Probado en Chrome, Safari iOS y Firefox.
