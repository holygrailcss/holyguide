---
layout: _paginas/foundations/_images.njk
permalink: /images/

titulo: Imágenes
descripcion: Playground y imágenes

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/imagenes.jpg
imageAlt: Ilustración de un diseño de sistema web
---

### Placeholders

En ocasiones necesitaremos posicionar imágenes para ver las futuras maquetas, para ello usaremos esta colección de placeholders.

###### La ruta para incorporar imagenes placeholders.

```scss
https://holygrail2.github.io/assets/placeholder/2-3.jpg
```

### Como se usa

Para poder usar el ratio solo tenemos que incluirlo dentro de `.rat-2-1>.rat-content` para que su contenido tenga posicion absoluta.

Adjuntamos los paddings-tops para los ratios.
Si no existe tu ratio puedes crear nuevos ratios de esta manera.

```sass
@include ratio(ancho, alto);
```

#### Ejemplo

```html
<div class='rat-2-1'>
  <div class='rat-content'>
    <img src='image.jpg' alt='Image description'>
  </div>
</div>
```
