---
layout: _paginas/foundations/_foundations.njk
permalink: /helpers/
titulo: Helpers
descripcion: Helpers para developers
date: Last Modified
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/helpers.jpg
imageAlt: Ilustración de un diseño de sistema web
---

Helpers que ayudan a agilizar el proceso de maquetación.

### Colores

| Helper           | Propuesta         | Descripción              |
| ---------------- | ----------------- | ------------------------ |
| .c-primary       |                   | Color primario           |
| .c-black         |                   | Color negro              |
| .c-dark-grey     |                   | Color gris oscuro        |
| .c-middle-grey   |                   | Color gris medio         |
| .c-light-grey    | **.c-grey-light** | Color gris claro         |
| .c-white         |                   | Color blanco             |
| .c-error         |                   | Color de error           |
| .c-sale          |                   | Color de oferta          |
| .c-info          |                   | Color de información     |
| .c-success       |                   | Color de éxito           |
| .c-valid         |                   | Color de validez         |
| .c-warning       |                   | Color de advertencia     |
| .c-feel          |                   | Color de "feel"          |
| .c-feel-dark     |                   | Color de "feel" oscuro   |
| .c-feel-light    |                   | Color de "feel" claro    |
| .c-tier-silver   |                   | Color plata              |
| .c-tier-platinum |                   | Color platino            |
| .c-tier-gold     |                   | Color oro                |
| .c-limited       |                   | Color de acceso limitado |

### Fondos

| Helper            | Propuesta           | Descripción            |
| ----------------- | ------------------- | ---------------------- |
| .bg-clear         |                     | Fondo blanco           |
| .bg-light         |                     | Fondo claro            |
| .bg-cream         | **.bg-light-cream** | Fondo crema            |
| .bg-feel-light    |                     | Fondo de "feel" claro  |
| .bg-feel-dark     |                     | Fondo de "feel" oscuro |
| .bg-dark-grey     |                     | Fondo gris oscuro      |
| .bg-middle-grey   | **.bg-grey-middle** | Fondo gris medio       |
| .bg-light-grey    | **.bg-grey-light**  | Fondo gris claro       |
| .bg-primary       |                     | Fondo primario         |
| .bg-secondary     |                     | Fondo secundario       |
| .bg-accent        |                     | Fondo acento           |
| .bg-sale          |                     | Fondo de oferta        |
| .bg-error         |                     | Fondo de error         |
| .bg-info          |                     | Fondo informativo      |
| .bg-success       |                     | Fondo de éxito         |
| .bg-warning       |                     | Fondo de advertencia   |
| .bg-tier-silver   |                     | Fondo plata            |
| .bg-tier-platinum |                     | Fondo platino          |
| .bg-tier-gold     |                     | Fondo oro              |

### Posicionamientos

| Helper           | Propuesta          | Descripción                                     |
| ---------------- | ------------------ | ----------------------------------------------- |
| .p-relative      | .p-relative        | Posición relativa                               |
| .p-absolute      | .p-absolute        | Posición absoluta                               |
| .t-0             | **.p-top-0**       | Top en 0                                        |
| .center-absolute | **.p-center**      | Centrado absoluto usando `transform: translate` |
| .fl-left         | **.p-float-left**  | Flota a la izquierda                            |
| .fl-right        | **.p-float-right** | Flota a la derecha                              |

### Bordes

| Helper          | Propuesta          | Descripción                       |
| --------------- | ------------------ | --------------------------------- |
| .border-1       | .b-primary         | Borde sólido con color primario   |
| .border-1-grey  | **.b-grey-middle** | Borde sólido con color gris medio |
| .border-1-light | **.b-grey-light**  | Borde sólido con color gris claro |
| .border-t       | **.b-t-primary**   | Borde superior primario           |
| .border-b       | **.b-b-primary**   | Borde inferior primario           |
| .border-r       | **.b-r-primary**   | Borde derecho primario            |
| .border-l       | **.b-l-primary**   | Borde izquierdo primario          |
| .border-b2      | **.b-b-2-primary** | Borde inferior doble primario     |
| .border-t2      | **.b-t-2-primary** | Borde superior doble primario     |
| .border-15      | **.b-opacity-15**  | Borde con opacidad del 15%        |

### Tamaños

| Helper     | Propuesta          | Descripción               |
| ---------- | ------------------ | ------------------------- |
| .w-100     | **.w-full**        | Ancho completo (100%)     |
| .w-max     | **.w-max-content** | Ancho máximo en contenido |
| .max-vw-35 | **.w-max-35vw**    | Ancho máximo de 35vw      |

### Textos

| Helper               | Propuesta             | Descripción                                               |
| -------------------- | --------------------- | --------------------------------------------------------- |
| .bold                | **.t-bold**           | Texto en negrita                                          |
| .semibold            | **.t-semibold**       | Texto en semi-negrita                                     |
| .text-uppercase      | **.t-uppercase**      | Texto en mayúsculas                                       |
| .text-lowercase      | **.t-lowercase**      | Texto en minúsculas                                       |
| .text-capitalize     | **.t-capitalize**     | Capitalización de palabras                                |
| .text-transform-none | **.t-transform-none** | Sin transformación de texto                               |
| .has-ellipsis        | **.t-ellipsis**       | Texto truncado con puntos suspensivos                     |
| .has-ellipsis-3      | **.t-ellipsis-3**     | Truncado a tres líneas con puntos suspensivos             |
| .max-ellipsis        | **.t-max-ellipsis**   | Truncado con máximo de 250px (500px en pantallas grandes) |
| .is-through          | **.t-through**        | Texto tachado                                             |
| .leading-1           | **.t-leading-1**      | Interlineado de 1 (line-height)                           |

### Alineación

| Helper       | Propuesta      | Descripción                   |
| ------------ | -------------- | ----------------------------- |
| .vert-end    | **.align-end** | Alinea verticalmente al final |
| .text-center | **.t-center**  | Texto centrado                |

### Scroll

| Helper              | Propuesta                | Descripción                                     |
| ------------------- | ------------------------ | ----------------------------------------------- |
| .ov-scroll          | **.scroll-overflow**     | Desplazamiento con overflow automático          |
| .scrollcustom       | **.scroll-custom**       | Estilo de barra de desplazamiento personalizada |
| .scrollcustom-x     | **.scroll-x-custom**     | Scroll horizontal personalizado                 |
| .min-scrollcustom-x | **.scroll-x-custom-min** | Scroll horizontal mínimo personalizado          |

### Opacidad

| Helper      | Descripción      |
| ----------- | ---------------- |
| .opacity-50 | Opacidad del 50% |
| .opacity-70 | Opacidad del 70% |

### Cursor

| Helper          |                               |
| --------------- | ----------------------------- |
| .cursor-pointer | Cambia el cursor a un puntero |

### Overflow

| Helper              | Propuesta                | Descripción                                     |
| ------------------- | ------------------------ | ----------------------------------------------- |
| .ov-scroll          | **.scroll-overflow**     | Desplazamiento con overflow automático          |
| .scrollcustom       | **.scroll-custom**       | Estilo de barra de desplazamiento personalizada |
| .min-scrollcustom-x | **.scroll-x-custom-min** | Scroll horizontal mínimo personalizado          |

### Flexbox

| Helper        | Descripción                       |
| ------------- | --------------------------------- |
| .flex-1       | Flex grow 1, shrink 1, basis 0%   |
| .flex-auto    | Flex grow 1, shrink 1, basis auto |
| .flex-initial | Flex grow 0, shrink 1, basis auto |
| .flex-none    | Flex grow 0, shrink 0, basis auto |

### Eventos

| Helper   | Propuesta        | Descripción                    |
| -------- | ---------------- | ------------------------------ |
| .pe-none | **.events-none** | Deshabilita eventos de puntero |

### Fuentes

| Helper   | Propuesta          | Descripción     |
| -------- | ------------------ | --------------- |
| .font-l  | **.font-light**    | Fuente light    |
| .font-r  | **.font-regular**  | Fuente regular  |
| .font-m  | **.font-medium**   | Fuente medium   |
| .font-b  | **.font-bold**     | Fuente bold     |
| .font-sb | **.font-semibold** | Fuente semibold |

### Visibilidad

| Helper     | Propuesta   | Descripción                                                         |
| ---------- | ----------- | ------------------------------------------------------------------- |
| .hidden    | **.hidden** | Oculta completamente el elemento usando `display: none !important`. |
| .sm:hidden |             | Oculta en pantallas pequeñas (`sm`).                                |
| .md:hidden |             | Oculta en pantallas medianas (`md`).                                |
| .lg:hidden |             | Oculta en pantallas grandes (`lg`).                                 |
| .xl:hidden |             | Oculta en pantallas extra grandes (`xl`).                           |

### Extras

| Helper               | Descripción                                                |
| -------------------- | ---------------------------------------------------------- |
| .relative            | Posiciona el elemento de manera relativa.                  |
| .absolute-middle     | Centra el elemento verticalmente usando posición absoluta. |
| .sm:flex             | Aplica `display: flex` en pantallas pequeñas.              |
| .md:flex             | Aplica `display: flex` en pantallas medianas.              |
| .lg:flex             | Aplica `display: flex` en pantallas grandes.               |
| .xl:flex             | Aplica `display: flex` en pantallas extra grandes.         |
| .scroll-x-custom-min | Scroll horizontal mínimo personalizado.                    |
| .align-end           | Alinea el contenido verticalmente al final.                |
