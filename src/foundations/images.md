---
layout: _paginas/foundations/_images.njk
permalink: /images/

titulo: Imágenes
descripcion: Guía de uso de imágenes — placeholders, ratios, object-fit y buenas prácticas de accesibilidad y rendimiento.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/imagenes.jpg
imageAlt: Guía de imágenes del sistema de diseño
---

## Imagen básica

Toda imagen debe incluir un `alt` descriptivo. Para imágenes decorativas se deja `alt=""`.

```html
<!-- Imagen de contenido -->
<img src="/assets/placeholder/3-4.jpg" alt="Descripción de la imagen" />

<!-- Imagen decorativa -->
<img src="/assets/static/pattern.jpg" alt="" aria-hidden="true" />
```


## Imagen con ratio (proporciones fijas)

Para mantener proporciones definidas, usa la clase de ratio correspondiente. Ver la página [Ratios](/ratios/) para la lista completa.

```html
<!-- Sistema moderno (recomendado) -->
<div class="ar-3-4">
  <img src="imagen.jpg" alt="Descripción" />
</div>

<!-- Sistema legacy (requiere .rat-content) -->
<div class="rat-2-3">
  <div class="rat-content">
    <img class="video-cover" src="imagen.jpg" alt="Descripción" />
  </div>
</div>
```


## Imagen como cover

La clase `.video-cover` aplica `object-fit: cover` y posiciona la imagen para que rellene completamente su contenedor manteniendo proporción.

```html
<div class="ar-16-9">
  <img class="video-cover" src="banner.jpg" alt="Banner principal" />
</div>
```

```scss
.video-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```


## Imagen con ancho completo

```html
<img class="w-100" src="imagen.jpg" alt="Descripción" />
```


## Placeholders de desarrollo

Durante la maquetación, usa estas URLs para imágenes de relleno con proporciones reales.

| Proporción | URL |
|---|---|
| 2:3 (retrato producto) | `https://holygrail2.github.io/assets/placeholder/2-3.jpg` |
| 3:4 | `https://holygrail2.github.io/assets/placeholder/3-4.jpg` |
| 3:2 | `https://holygrail2.github.io/assets/placeholder/3-2.jpg` |
| 16:9 | `https://holygrail2.github.io/assets/placeholder/16-9.jpg` |
| 1:1 | `https://holygrail2.github.io/assets/placeholder/1-1.jpg` |

### Imágenes locales del proyecto

| Ruta | Descripción |
|---|---|
| `/assets/static/images/1.jpg` | Placeholder genérico |
| `/assets/static/components/` | Thumbnails de componentes |
| `/assets/static/home/` | Imágenes para la home |


## Imágenes lazy load

Para imágenes que no están en el viewport inicial, usa el atributo `loading="lazy"`.

```html
<img
  src="imagen.jpg"
  alt="Descripción"
  loading="lazy"
  width="800"
  height="1066"
/>
```

> Incluir siempre `width` y `height` para evitar el _Cumulative Layout Shift_ (CLS).


## Buenas prácticas

| ✅ Hacer | ❌ Evitar |
|---|---|
| Añadir `alt` descriptivo siempre | Dejar `alt` vacío en imágenes de contenido |
| Usar `width` y `height` para evitar CLS | Omitir dimensiones |
| Usar `loading="lazy"` en imágenes fuera del viewport | Cargar todas las imágenes de golpe |
| Formatos modernos: WebP o AVIF | Solo usar JPG/PNG sin alternativa |
| Comprimir imágenes antes de subir | Subir imágenes sin optimizar |
| `alt=""` + `aria-hidden="true"` en decorativas | Usar texto genérico como alt="imagen" |
