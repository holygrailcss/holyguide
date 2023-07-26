---
layout: _paginas/foundations/_foundations.njk
permalink: /helpers/
titulo: Helpers
descripcion: .
date: Last Modified
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/helpers.jpg
imageAlt: Ilustración de un diseño de sistema web
---

Helpers que ayudan a agilizar el proceso de maquetación.

### Posicionamientos

| Helper        | Description ✅                               |
| ------------- | -------------------------------------------- |
| .flex-vcenter | centrado vertical, incluso si tenemos iconos |
| .video-cover  | Posicionamiento mediante absolutes 50%       |
| .bg-cover     | Imagen centrada al medio con cover ❌        |
| d-inline      | inline-block                                 |
| flex-1        | flex: 1 1 0%                                 |
| flex-auto     | flex: 1 1 auto                               |
| flex-auto     | flex: 0 1 auto                               |
| flex-none     | flex: none                                   |
| p-wrap        | position relative al 100%                    |


### Bordes

| Helper     | Description                              |
| ---------- | ---------------------------------------- |
| .border-1  | border: 1px solid $c-middle-grey         |
| .border-t  | border-top: 1px solid $c-middle-grey     |
| .border-b  | border-bottom: 1px solid $c-middle-grey; |
| .border-l  | border-left: 1px solid $c-middle-grey    |
| .border-r  | border-right: 1px solid $c-middle-grey;  |
| .border-b2 | border-bottom: 1px solid $c-primary      |
| .border-t2 | border-top: 1px solid $c-primary         |

### Tamaños

| Helper      | Descripción          |
| ----------- | -------------------- |
| h-50:       | Altura de 50px       |
| h-100:      | Altura de 100%       |
| height-100: | Ancho máximo de full |
| flex-grow-0 | grow 0               |

### Elementos

| Helper          | Descripción             |
| --------------- | ----------------------- |
| .ov-scroll      | scroll con touch        |
| .scrollbar      | cambiamos el background |
| .ov-custom      | scroll personalizable   |
| .cursor-pointer | Un cursor               |
| .svg-iflex      | descripcion             |
| .svg-inline     | descripcion             |
| .hr             | línea normal            |
| .w-max          | max-content             |

### Visibilidad

| Helper             | Descripción                            |
| ------------------ | -------------------------------------- |
| .hidden            | display none important                 |
| .only-mobile       | inline-block en mobile                 |
| .only-mobile-flex  |                                        |
| .only-desktop      | Visible Sólo en desktop a partir de sm |
| .only-desktop-flex | Flex en desktop a partir de sm         |

### Textos

| Helper           | Descripción                                                    |
| ---------------- | -------------------------------------------------------------- |
| .is-through      | tachado de texto                                               |
| .ttu             | TRANSFORMACIÓN A MAYÚSCULAS EN AQUELLOS PAISES QUE SEA POSIBLE |
| strong           | Font family bold                                               |
| .text-center     | Centrado de texto                                              |
| .text-left       | Alineación izquierda                                           |
| .text-right      | Alineación derecha                                             |
| .text-justify    | Texto justificado                                              |
| .has-ellipsis    | Puntos suspensivos al final de linea                           |
| .has-ellipsis-3  | 3 lineas de texto y puntos suspensivos                         |
| .text-lowercase  | Transformación a minúsculas                                    |
| .text-uppercase  | Transformación a mayusculas                                    |
| .text-capitalize | Transformación a Capitalización                                |
| .text-underline  | !cuidado con su uso- usamos link line!                         |

### Colores

| Helper          | Descripción                |
| --------------- | -------------------------- |
| .bg-dark-grey   | Color de fondo dark-grey   |
| .bg-middle-grey | Color de fondo middle-grey |
| .bg-light-grey  | Color de fondo light-grey  |
| .bg-primary     | Color de fondo primary     |
| .bg-error       | Color de fondo error       |
| .bg-info        | Color de fondo info        |
| .bg-success     | Color de fondo success     |
| .bg-warning     | Color de fondo warning     |
| .bg-dark        | Color de fondo dark        |
| .bg-feel        | Color de fondo feel        |

### Alineación

| Helper              | Descripción               |
| ------------------- | ------------------------- |
| .xs:text-center     | Centrado hasta max sm - 1 |
| .sm:text-center     | Centrado hasta sm max - 1 |
| .md:text-center     | Centrado hasta md max - 1 |
| .lg:text-center     | Centrado hasta lg max - 1 |
| .sm:min-text-center | Centrado desde sm - 1     |
| .md:min-text-center | Centrado desde md - 1     |
| .lg:min-text-center | Centrado desde lg - 1     |
| .sm:flex            | Flex hasta sm             |
