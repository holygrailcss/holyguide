---
layout: _paginas/foundations/_ratios.njk
permalink: /ratios/

titulo: ratios
descripcion: Contenedores que conservan una relación de aspecto definida.

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/ratios.jpg
imageAlt: Ilustración de un diseño de sistema web
---

### Como se usan

Para poder usar el ratio solo tenemos que incluirlo dentro de `.rat-2-1.rat-content` para que su contenido tenga posicion absoluta.

Adjuntamos los paddings-tops para los ratios.
Si no existe tu ratio puedes crear nuevos ratios de esta manera. `@include ratio(ancho, alto);`

```
<div class='rat-2-1'>
    <div class='rat-content'>
        <img src='image.jpg' alt='Image description'>
    </div>
</div>
```
