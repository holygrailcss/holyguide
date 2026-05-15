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

## Checklist para una landing de este estilo

### Contenido y narrativa

- [ ] **Historia con hitos claros** — cada slide representa un momento significativo, no relleno. Mínimo 6, máximo 12-15 puntos.
- [ ] **Año visible siempre** — el usuario debe saber en qué momento está sin tener que leer el texto completo.
- [ ] **Textos cortos y directos** — máximo 2-3 líneas por hito. El usuario está en movimiento (scrollando).
- [ ] **Imágenes de calidad** — ratio 3:4, mínimo 800×1067px. Deben funcionar en blanco y negro o con baja saturación.
- [ ] **Primera y última imagen** representan inicio y estado actual, no puntos intermedios.

### UX y accesibilidad

- [ ] **Textos alternativos (`alt`)** en todas las imágenes o vacíos si son decorativas (en ese caso el `data-text` ya narra el contenido).
- [ ] **Navegación por teclado** — Tab/Shift+Tab mueve entre slides, Enter/Space los centra. ✅ Ya implementado.
- [ ] **Focus visible** — outline claro en `:focus-visible`. ✅ Ya implementado.
- [ ] **Sin autoplay** — el usuario controla el ritmo con su scroll. No mover imágenes automáticamente.
- [ ] **Reducción de movimiento** — si el usuario tiene `prefers-reduced-motion`, considerar desactivar el pin o reducir la animación de altura.

```css
@media (prefers-reduced-motion: reduce) {
  .company_slide {
    transition: none;
    height: var(--altura-grande);
    opacity: 1;
  }
}
```

### Rendimiento

- [ ] **Imágenes en formato moderno** — usar WebP o AVIF con fallback JPG.
- [ ] **Lazy loading** en imágenes fuera del viewport inicial (`loading="lazy"` en todas salvo la primera).
- [ ] **Tamaño de imagen ajustado** — no servir imágenes de 3000px para mostrar a 400px. Usar `srcset`.
- [ ] **GSAP cargado de forma asíncrona** — con `defer` o desde CDN con caché larga. No bloquear el render.
- [ ] **`invalidateOnRefresh: true`** en el ScrollTrigger para recalcular en resize. ✅ Ya implementado.

### Responsive

- [ ] **Variables CSS de altura por breakpoint** — en móvil las imágenes son más anchas relativas (`vw`) y en desktop más altas (`vh`). ✅ Ya implementado.
- [ ] **Texto legible en móvil** — comprobar que el `company_text` no se superpone con las imágenes en pantallas pequeñas.
- [ ] **Gap entre imágenes** ajustado por breakpoint (`hg-gap-8 md:hg-gap-20`). ✅ Ya implementado.
- [ ] **Probar en iOS Safari** — el scroll pinning de GSAP puede tener comportamientos distintos. Verificar que `100dvh` funciona correctamente.

### Contexto de la página

- [ ] **Sección previa** que prepare al usuario para el scroll horizontal — un headline o un CTA que invite a seguir bajando.
- [ ] **Indicador de scroll** — un texto o icono que sugiera "scroll para explorar" en el primer estado.
- [ ] **Sección posterior** — la landing no termina en el slider. Hay un bloque de cierre (CTA, contacto, etc.).
- [ ] **Meta OG y título de página** correctos para compartir en redes sociales.

### SEO

- [ ] **Contenido de los hitos accesible al crawler** — el `data-text` no lo indexan los buscadores. Considerar un `<noscript>` o un listado accesible oculto visualmente pero visible para bots.
- [ ] **URLs sin hash** — si hay deep linking a un año concreto, la URL debe ser limpia.
- [ ] **Heading estructurado** — el `company_year` es decorativo; la narrativa real debe estar en un `<h2>` o similar si esta sección tiene peso SEO.
