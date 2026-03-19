---
layout: _paginas/foundations/_motion.njk
permalink: /motion/

titulo: Motion
descripcion: Clases y helpers para animaciones — tipos de transición, duraciones y easings del sistema de diseño.

page_section: foundations
badge: updated
date: 2023-06-19
fecha: 19 de junio de 2023

tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/videos.jpg
---

## Tipos de animación

| Clase | Descripción |
|---|---|
| `.slide-in` | El panel entra desde los lados al activarse un trigger. Añade un overlay `#000` al 15% de opacidad. Se cierra con icono ✕ o al salir el mouse del panel. |
| `.slide-out` | Salida del panel hacia el lado contrario. |
| `.fade-in` | Entrada con aumento de opacidad de 0 a 1. |
| `.fade-out` | Salida con disminución de opacidad de 1 a 0. |
| `.expand-top` | El contenedor se expande desde arriba. El contenido hace FadeIn durante la expansión. Se recoge al hacer clic de nuevo en el trigger. |
| `.collapse-top` | Contracción hacia arriba. Inverso de `.expand-top`. |

---

## Duración

| Clase | CSS | Uso típico |
|---|---|---|
| `.duration-50` | `animation-duration: 50ms` | Micro-interacciones |
| `.duration-150` | `animation-duration: 150ms` | Hover, tooltips |
| `.duration-300` | `animation-duration: 300ms` | Transiciones estándar |
| `.duration-400` | `animation-duration: 400ms` | Modales, paneles |
| `.duration-500` | `animation-duration: 500ms` | Animaciones de entrada |
| `.duration-700` | `animation-duration: 700ms` | Transiciones complejas |
| `.duration-800` | `animation-duration: 800ms` | Hero animations |
| `.duration-1000` | `animation-duration: 1000ms` | Animaciones de página |

---

## Easing del sistema

Las variables CSS de transición del sistema utilizan easing de deceleración (`cubic-bezier(0.25, 0, 0, 1)`) para movimientos naturales.

| Variable CSS | Valor | Uso |
|---|---|---|
| `--hg-menu-panel-transition` | `all 0.4s cubic-bezier(0.25, 0, 0, 1)` | Panel del menú |
| `--hg-menu-panel-media-transition` | `all 0.4s cubic-bezier(0.25, 0, 0, 1)` | Media del panel |
| `--hg-menu-column-transition` | `all 0.4s cubic-bezier(0.25, 0, 0, 1)` | Columnas del menú |

### Curvas de easing recomendadas

| Tipo | Valor | Uso |
|---|---|---|
| Desaceleración (entrada) | `cubic-bezier(0.25, 0, 0, 1)` | Elementos que entran en pantalla |
| Estándar | `ease-in-out` | Transiciones de estado |
| Lineal | `linear` | Animaciones de carga / spinners |

---

## Principios de motion del DS

1. **Propósito** — Cada animación debe tener una razón funcional, no decorativa.
2. **Velocidad** — Transiciones de UI: 150–300ms. Animaciones de página: 400–700ms.
3. **Naturalidad** — Usar curvas de desaceleración para entradas; aceleración para salidas.
4. **Respeto al usuario** — Respetar `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
