---
layout: _paginas/foundations/_ratios.njk
permalink: /ratios/

titulo: Ratios
descripcion: Contenedores que conservan una relación de aspecto definida. Dos sistemas disponibles — rat-* (padding-top legacy) y ar-* (CSS aspect-ratio moderno).

page_section: foundations
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/ratios.jpg
imageAlt: Ilustración de relaciones de aspecto
---

## Dos sistemas de ratio

El sistema dispone de dos métodos para mantener proporciones:

- **`rat-*`** — Sistema legacy basado en `padding-top`. Compatible con todos los navegadores. Requiere un `.rat-content` interno.
- **`ar-*`** — Sistema moderno usando la propiedad CSS `aspect-ratio`. Más limpio, sin necesidad de wrapper interno.

---

## Sistema `rat-*` (legacy)

Requiere la estructura: contenedor con la clase `rat-*` + hijo con clase `rat-content`.

```html
<div class="rat-2-3">
  <div class="rat-content">
    <img src="image.jpg" alt="Descripción" />
  </div>
</div>
```

| Clase | Proporción | Uso típico |
|---|---|---|
| `.rat-1-1` | 1:1 (cuadrado) | Avatares, iconos cuadrados |
| `.rat-2-1` | 2:1 (panorámica) | Banners wide |
| `.rat-2-3` | 2:3 (retrato) | Fichas de producto |
| `.rat-3-2` | 3:2 (landscape) | Imágenes fotográficas |
| `.rat-3-4` | 3:4 (retrato) | Portadas |
| `.rat-4-2` | 4:2 (panorámica) | Banners dobles |
| `.rat-4-3` | 4:3 (estándar) | Imágenes estándar |
| `.rat-9-20` | 9:20 (muy alto) | Historias verticales |
| `.rat-16-9` | 16:9 (widescreen) | Vídeos, hero sections |
| `.rat-21-9` | 21:9 (cinemático) | Hero ultra-wide |
| `.rat-main` | ~800:1066 | Imagen principal de producto |
| `.rat-double` | ~867:559 | Imagen doble |
| `.rat-strech` | ~275:445 | Imagen estirada |

### Crear un ratio personalizado

```scss
// En tu archivo SCSS
.mi-ratio {
  @include ratio(4, 5); // ancho, alto
}
```

---

## Sistema `ar-*` (moderno)

Usa la propiedad nativa `aspect-ratio`. No necesita `.rat-content` interno.

```html
<div class="ar-3-4">
  <img src="image.jpg" alt="Descripción" />
</div>
```

| Clase | Proporción | Uso típico |
|---|---|---|
| `.ar-1-1` | 1:1 (cuadrado) | Avatares, thumbnails |
| `.ar-3-4` | 3:4 (retrato) | Fichas de producto |
| `.ar-3-2` | 3:2 (landscape) | Fotografía |
| `.ar-4-3` | 4:3 (estándar) | Imágenes estándar |
| `.ar-9-16` | 9:16 (vertical) | Mobile / stories |
| `.ar-16-9` | 16:9 (widescreen) | Vídeos, heroes |
| `.ar-20-9` | 20:9 (ultra-wide) | Hero panorámico |
| `.ar-9-20` | 9:20 (muy alto) | Historias verticales |

### Clases `aspect-*` (proyecto local)

Adicionalmente, el proyecto define estas clases con `aspect-ratio`:

| Clase | Proporción |
|---|---|
| `.aspect-2-3` | 2:3 |
| `.aspect-3-4` | 3:4 |
| `.aspect-3-2` | 3:2 |

---

## ¿Cuál usar?

| Caso | Recomendación |
|---|---|
| Proyecto nuevo, navegadores modernos | `ar-*` |
| Compatibilidad máxima / legacy | `rat-*` |
| Imagen con `object-fit: cover` | `ar-*` + `img { width: 100%; height: 100%; object-fit: cover; }` |

---

## Ejemplo completo con imagen

```html
<!-- Sistema moderno (recomendado) -->
<div class="ar-3-4">
  <img
    class="video-cover"
    src="/assets/placeholder/3-4.jpg"
    alt="Producto"
  />
</div>

<!-- Sistema legacy -->
<div class="rat-2-3">
  <div class="rat-content">
    <img
      class="video-cover"
      src="/assets/placeholder/2-3.jpg"
      alt="Producto"
    />
  </div>
</div>
```
