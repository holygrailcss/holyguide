---
layout: _paginas/foundations/_foundations.njk
permalink: /modales/

titulo: Modales
descripcion: .

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/modales.jpg
imageAlt: Ilustración de un diseño de sistema web
---

Elemento o componente que aparece sobre el contenido de la página o pantalla que se está visualizando

### ModalSizes

Primero definiremos el ancho máximo de nuestra modal, ya determinada por diseño.

| ModalSizes   | Clase scss | Description             |
| ------------ | ---------- | ----------------------- |
| **SIZE_XS:** | .modalx-xs | Tamaño max. 295px       |
| **SIZE_S:**  | .modalx-sm | Tamaño max. 445px       |
| **SIZE_M:**  | .modalx-md | Tamaño max. 595px       |
| **SIZE_L:**  | .modalx-lg | Tamaño max. 899px       |
| **SIZE_XL:** | .modalx-xl | FALTA Tamaño max. 950px |

### ModalMargins

Colocaremos los márgenes de la misma, tambien tenemos margenes responsive.

| ModalMargins     | Clase scss   | Description    |
| ---------------- | ------------ | -------------- |
| **MARGIN_0:**    | .modalx-0    | la explicacion |
| **MARGIN_16:**   | .modalx-16   | la explicacion |
| **MARGIN_24:**   | .modalx-24   | la explicacion |
| **MARGIN_32:**   | .modalx-32   | la explicacion |
| **MARGIN_40:**   | .modalx-40   | la explicacion |
| **MARGIN_0_24:** | .modalx-0-24 | la explicacion |

### ModalOptions

Disponemos de Opciones personalizadas para casos puntuales.

| ModalOptions                 | Clase scss               | Description                                                   |
| ---------------------------- | ------------------------ | ------------------------------------------------------------- |
| **HIDE_TITLE:**              | .HIDE_TITLE              | Oculta el título de la modal                                  |
| **HIDE_X:**                  | .HIDE_X                  | Oculta el icono de cerrar la modal                            |
| **FULL_MOBILE:**             | .FULL_MOBILE             | la modal ocupa todo el alto y el ancho de la pantalla de >768 |
| **FULL_VIEWPORT:**           | .FULL_VIEWPORT           | la modal ocupa todo el ancho de la pantalla de >768           |
| **FEEL_BG:**                 | .FEEL_BG                 | el fondo del modal cambia a gris claro                        |
| **CLOSE_ON_BACKDROP_CLICK:** | .CLOSE_ON_BACKDROP_CLICK | Pendiente                                                     |
| **TRANSPARENT_BACKGROUND:**  | .TRANSPARENT_BACKGROUND  | Desaparece la capa oscura que da contraste al modal           |
