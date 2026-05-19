---
layout: _paginas/templates-2026/viewer-hg-bolsos-v2-detail.njk
permalink: /templates-2026/hg-bolsos-v2-detail/
page_section: templates-2026
titulo: hg-bolsos-v2-detail
descripcion: Página de detalle de hg-bolsos-v2 — hero con vídeo de fondo + caption flotante a la izquierda + shelf de miniaturas abajo. Click en miniatura cambia el vídeo y la hace crecer (GSAP). Scroll vertical cambia el texto a la izquierda.
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-18
tags: ["templates-2026"]
imageAlt: hg-bolsos-v2-detail
---

## hg-bolsos-v2-detail

Página de detalle a la que se llega desde `hg-bolsos-v2` cuando el usuario hace click en un tile de vídeo o en una caption. Se navega por query string: `/templates-2026/hg-bolsos-v2-detail/?item=02`. Si no se recibe `?item=...` arranca con el primer item activo.

### Anatomía

- **Hero con vídeo de fondo** ocupando toda la viewport.
- **Caption flotante** sobre el hero (izquierda) con `[ idx ]`, label, "Featured by:" y botón BUY.
- **Shelf de miniaturas** abajo: 20 thumbnails alineados. La activa se ve más grande y con una "card" blanca detrás.

### Interacciones

| Disparador | Qué pasa | Cómo |
|------------|----------|------|
| Click en una miniatura del shelf | El vídeo de fondo crossfade al nuevo y la miniatura clicada crece a tamaño "activo" mientras la previa vuelve a tamaño base | GSAP timeline |
| Scroll vertical | Solo cambia el texto del caption (izquierda) — `[ idx ]`, label y "Featured by:" hacen fade-out / fade-in con la siguiente entrada | GSAP `ScrollTrigger` |

> El scroll **no** cambia el vídeo de fondo (decisión de diseño). Para cambiar el vídeo hay que clicar en una miniatura del shelf.

### Clases propias

Prefijo `bolsosd_` para no colisionar con HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.bolsosd_stage` | Wrap principal del hero (pinned con ScrollTrigger) |
| `.bolsosd_video` | Cada `<video>` apilado (front + back) para cross-fade |
| `.bolsosd_caption` | Bloque flotante izquierdo con índice + label + BUY |
| `.bolsosd_shelf` | Fila de miniaturas en la parte inferior |
| `.bolsosd_thumb` | Cada miniatura, con su estado base y `.is-active` |
| `.bolsosd_thumb-card` | Card blanca detrás de la miniatura activa |
| `.bolsosd_scrollspace` | Bloques transparentes que dan altura al scroll para que cada item tenga su tramo |

### Datos esperados

Igual que `hg-bolsos-v2`: array `items` con `idx`, `label`, `by`, `poster`, `video`.

---

## Checklist

### Interacciones

- [ ] Llegar con `?item=05` activa el item 05 al cargar.
- [ ] Llegar sin query string activa `[01]`.
- [ ] Click en una miniatura → cross-fade del vídeo de fondo (ningún flash negro).
- [ ] Click en una miniatura → la previa vuelve a tamaño base, la nueva crece (GSAP).
- [ ] Scroll vertical → solo cambia el texto del caption izquierdo con fade.
- [ ] Scroll vertical → NO toca el vídeo de fondo.

### Mobile

- [ ] El shelf se ve completo (scroll horizontal con `overflow-x: auto` si no cabe).
- [ ] Click en una miniatura en mobile dispara la misma animación que desktop.
- [ ] La caption flotante no tapa el shelf en pantallas pequeñas.

### Accesibilidad

- [ ] Cada miniatura es un `<button>` con `aria-label`.
- [ ] `prefers-reduced-motion: reduce` pausa los vídeos y elimina las transiciones GSAP (cambios instantáneos).
- [ ] Foco visible (`:focus-visible`) en miniaturas y en el botón BUY.
