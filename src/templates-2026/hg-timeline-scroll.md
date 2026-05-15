---
layout: _paginas/templates-2026/viewer-hg-timeline-scroll.njk
permalink: /templates-2026/hg-timeline-scroll/
page_section: templates-2026
titulo: hg-timeline-scroll
descripcion: Slider horizontal de timeline impulsado por scroll vertical con GSAP ScrollTrigger. Cada imagen escala según su proximidad al centro y el texto cambia con fade.
image: /assets/static/images/1.jpg
author: autor
date: 2026-05-15
tags: ["templates-2026"]
imageAlt: hg-timeline-scroll
---

## hg-timeline-scroll

Slider horizontal de una línea de tiempo, navegado mediante scroll vertical gracias a **GSAP ScrollTrigger**. La sección queda anclada (`pin`) mientras el track se desplaza horizontalmente.

### Características

- **Scroll-driven:** el scroll vertical mueve el carrusel en horizontal.
- **Escala por proximidad:** cada imagen crece o encoge según la distancia al centro mediante la CSS custom property `--proximidad`.
- **Fade de texto:** el año y la descripción cambian con transición de opacidad cuando cambia la imagen central.
- **Teclado accesible:** Tab/Shift+Tab navega entre slides y los centra; Enter/Space también activa la navegación.

### Clases propias

Las clases del componente llevan el prefijo `company_` para no colisionar con las clases de HolyGrail 5 (`hg-`):

| Clase | Descripción |
|-------|-------------|
| `.company_slider` | Sección contenedora (anclada por GSAP) |
| `.company_track` | Fila horizontal de imágenes |
| `.company_slide` | Cada imagen individual |
| `.company_text` | Bloque de texto flotante (año + descripción) |
| `.company_year` | Badge con el año |
| `.company_desc` | Párrafo de descripción |
| `.company_fading` | Estado de fade-out del texto |

### Variables CSS

```css
:root {
  --altura-base:   22vh;  /* altura de una imagen alejada del centro */
  --altura-grande: 50vh;  /* altura de la imagen centrada */
}
```

En móvil (≤ 768px) se sobreescriben a `28vw` / `70vw` para mejor legibilidad.

### Data attributes en cada slide

```html
<img
  class="company_slide ..."
  src="imagen.jpg"
  alt="Descripción accesible"
  data-year="1985"
  data-text="Texto descriptivo del hito." />
```

---

## Checklist

### HolyGrail 5

- [ ] Clases de layout, spacing y tipografía usan helpers de HG5 (`hg-d-flex`, `hg-gap-*`, `hg-body-m`…). No duplicar en CSS propio lo que HG5 ya resuelve.
- [ ] Los prefijos propios del componente (`company_`) no colisionan con los de HG5 (`hg-`).

### Accesibilidad

- [ ] Todas las imágenes tienen `alt` (descriptivo o vacío si son puramente decorativas).
- [ ] Navegación por teclado funciona: Tab entre slides, Enter/Space para centrar.
- [ ] `:focus-visible` visible en todos los elementos interactivos.
- [ ] Respetar `prefers-reduced-motion`: desactivar o reducir las animaciones de altura/opacidad.

### Dispositivos y navegadores

- [ ] **Trackpad Mac** — el scroll con dos dedos avanza el slider con fluidez.
- [ ] **Mobile físico** — probado en dispositivo real (no solo simulador). Verificar altura, scroll y tap en iOS Safari y Chrome Android.
- [ ] **Chrome** (desktop y Android)
- [ ] **Firefox** (desktop)
- [ ] **Safari** (macOS e iOS) — especial atención al scroll pinning de GSAP en iOS.

### Contenido

- [ ] Imágenes en ratio 3:4, formato WebP, mínimo 800×1067px.
- [ ] Textos de `data-text` breves (2-3 líneas máximo).
- [ ] La primera y la última imagen representan el inicio y el momento actual.
