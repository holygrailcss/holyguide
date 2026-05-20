---
layout: _paginas/templates-2026/viewer-hg-bolsos-v2-detail.njk
permalink: /templates-2026/hg-bolsos-v2-detail/
page_section: templates-2026
titulo: hg-bolsos-v2-detail
descripcion: Página de detalle de hg-bolsos-v2 — hero con imagen de fondo + caption flotante a la izquierda + shelf de miniaturas abajo. Click en miniatura hace crossfade de la imagen y crece la miniatura (GSAP). Scroll vertical cambia solo el texto a la izquierda (ScrollTrigger).
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-18
tags: ["templates-2026"]
imageAlt: hg-bolsos-v2-detail
---

## hg-bolsos-v2-detail

Página de detalle a la que se llega desde `hg-bolsos-v2` cuando el usuario hace click en un tile o en una caption. Se navega por query string: `/templates-2026/hg-bolsos-v2-detail/?item=02`. Si no se recibe `?item=...` arranca con el primer item activo.

### Anatomía

- **Hero con imagen de fondo** ocupando toda la viewport (`100dvh`). Dos `<img>` apilados (`a` y `b`) que hacen crossfade entre el item actual y el siguiente.
- **Caption flotante** sobre el hero (izquierda) con `[ idx ]`, label, "Featured by:" y botón BUY.
- **Shelf de miniaturas** abajo: 15 thumbnails alineados a la izquierda, scroll horizontal si no caben. La activa crece (mismo tamaño que el hover) y queda al frente vía `z-index`.

### Interacciones

| Disparador | Qué pasa | Cómo |
|------------|----------|------|
| Click en una miniatura del shelf | La imagen de fondo hace crossfade al nuevo poster y la miniatura clicada crece a tamaño "activo" mientras la previa vuelve a tamaño base | GSAP timeline + `width` animado |
| Tab / flechas ←→ con foco en el shelf | Activa la miniatura como si la hubieras clicado | `focus` + `keydown` |
| Scroll vertical | Solo cambia el texto del caption (izquierda) — `[ idx ]`, label y "Featured by:" hacen fade-out / fade-in al pasar cada `scrollstep` por el centro de la viewport | GSAP `ScrollTrigger` |

> El scroll **no** cambia la imagen de fondo (decisión de diseño). Para cambiar la imagen hay que clicar en una miniatura del shelf, usar Tab o las flechas.

### Clases propias

Prefijo `bolsos-v2-detail_` para no colisionar con HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.bolsos-v2-detail_stage` | Wrap principal del hero (pinned con ScrollTrigger) |
| `.bolsos-v2-detail_video` | Cada `<img>` apilado (front + back) para crossfade (la clase mantiene el nombre histórico) |
| `.bolsos-v2-detail_brand` | Etiqueta "Bolsos" arriba a la izquierda |
| `.bolsos-v2-detail_caption` | Bloque flotante izquierdo con índice + label + BUY |
| `.bolsos-v2-detail_buy` | Botón "BUY" del caption |
| `.bolsos-v2-detail_shelf-wrap` | Contenedor del shelf con scroll horizontal |
| `.bolsos-v2-detail_shelf` | Fila de miniaturas en la parte inferior |
| `.bolsos-v2-detail_thumb` | Cada miniatura, con su estado base y `.is-active` |
| `.bolsos-v2-detail_thumb-img` | `<img>` del thumb (ratio 3:4 fijado por `aspect-ratio`) |
| `.bolsos-v2-detail_thumb-idx` | Etiqueta `[ NN ]` bajo cada thumb |
| `.bolsos-v2-detail_scrollspace` | Wrapper de los `scrollstep` (uno por item) |
| `.bolsos-v2-detail_scrollstep` | Bloque transparente de 1 viewport que activa un item al cruzar el centro |

### Datos esperados

Igual que `hg-bolsos-v2`: array `items` con `idx`, `label`, `by`, `poster`, `video` y `thumb` (en la detail `thumb` se usa también como imagen del hero).

---

## Checklist

### Interacciones

- [ ] Llegar con `?item=05` activa el item 05 al cargar.
- [ ] Llegar sin query string activa `[01]`.
- [ ] Click en una miniatura → crossfade de la imagen de fondo (sin flash negro).
- [ ] Click en una miniatura → la previa vuelve a tamaño base, la nueva crece (GSAP).
- [ ] Scroll vertical → solo cambia el texto del caption izquierdo con fade.
- [ ] Scroll vertical → NO toca la imagen de fondo.
- [ ] Tab y flechas ←→ con foco en el shelf navegan entre items.

### Mobile

- [ ] El shelf se ve completo (scroll horizontal con `overflow-x: auto` si no cabe).
- [ ] Click en una miniatura en mobile dispara la misma animación que desktop.
- [ ] La caption flotante no tapa el shelf en pantallas pequeñas (`bottom: 38vh`).

### Accesibilidad

- [ ] Cada miniatura es un `<button>` con `aria-label`.
- [ ] `prefers-reduced-motion: reduce` elimina las transiciones GSAP (cambios instantáneos).
- [ ] Foco visible (`:focus-visible`) en miniaturas y en el botón BUY.
