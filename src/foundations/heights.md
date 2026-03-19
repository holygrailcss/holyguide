---
layout: _paginas/foundations/_foundations.njk
permalink: /heights/

titulo: Heights
descripcion: Alturas fijas, responsive y basadas en viewport para estandarizar elementos del sistema.

page_section: foundations
date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/heights.jpg
---

Alturas fijas o variables que permiten estandarizar los diferentes elementos que lo requieran.

## Alturas porcentuales

| Clase | CSS | Descripción |
|---|---|---|
| `.h-100` | `height: 100%` | Hereda el 100% del padre |
| `.height-100` | `height: 100%` | Alias de `.h-100` |
| `.height-full` | `height: 100vh` | Toda la altura del viewport |
| `.height-home` | `height: calc(100vh - 80px)` | Viewport menos la altura del header |

## Alturas fijas

| Clase | Mobile | Desktop | Descripción |
|---|---|---|---|
| `.height-xs` | 80px | 80px | Altura extra pequeña |
| `.height-sm` | 150px | 150px | Altura pequeña |
| `.height-128` | 128px | 128px | Altura fija de 128px |
| `.height-md` | 350px | 350px | Altura media |
| `.height-lg` | 400px | 400px | Altura grande |
| `.height-xl` | 450px | 450px | Altura extra grande |

## Alturas responsive (hero)

Alturas que escalan entre mobile y desktop para secciones hero.

| Clase | Mobile | Desktop | Uso |
|---|---|---|---|
| `.height-big` | 300px | 500px | Hero grande |
| `.height-medium` | 200px | 400px | Hero medio |
| `.height-mini` | 100px | 300px | Hero pequeño |

## Cómo usar

```html
<!-- Sección que ocupa toda la pantalla menos el header -->
<section class="height-home">
  ...
</section>

<!-- Imagen con altura fija -->
<div class="height-md">
  <img class="video-cover" src="..." alt="" />
</div>

<!-- Hero responsive -->
<div class="height-big">
  <img class="video-cover" src="..." alt="" />
</div>
```
