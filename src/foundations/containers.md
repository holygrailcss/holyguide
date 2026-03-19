---
layout: _paginas/foundations/_containers.njk
permalink: /containers/
titulo: Containers
descripcion: Tipos de contenedores y anchos máximos del sistema de retícula. Variables SCSS y clases CSS disponibles.
page_section: foundations
badge: updated
date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/helpers.jpg
imageAlt: Ilustración de un diseño de sistema web
---

Los containers centran el contenido horizontalmente con `margin: auto` y aplican el `max-width` correspondiente.

## Uso básico

```html
<div class="container">
  <!-- Contenido centrado a 800px máximo -->
</div>

<div class="container-fluid">
  <!-- Contenido a ancho completo -->
</div>

<div class="container-11">
  <!-- Contenido centrado a 1080px máximo -->
</div>
```

## Tabla de containers

| Clase CSS | Variable SCSS | Ancho máximo | Uso típico |
|---|---|---|---|
| `.container` | `$container` | 800px | Contenido principal |
| `.container-2` | `$container-2` | 700px | Contenido estrecho |
| `.container-3` | `$container-3` | 900px | Contenido ampliado |
| `.container-4` | `$container-4` | 360px | Formularios, modales pequeños |
| `.container-5` | `$container-5` | 800px | Alias de container |
| `.container-6` | `$container-6` | 442px | Contenido medio-estrecho |
| `.container-7` | `$container-7` | 595px | Contenido medio |
| `.container-8` | `$container-8` | 395px | Contenido pequeño-medio |
| `.container-9` | `$container-9` | 798px | Casi igual a container base |
| `.container-10` | `$container-10` | 200px | Elementos muy pequeños |
| `.container-11` | `$container-11` | 1080px | Layouts anchos |
| `.container-12` | `$container-12` | 1080px | Alias de container-11 |
| `.container-full` | `$container-full` | 1500px | Layout máximo |
| `.container-fluid` | — | 100% | Sin límite de ancho |

## Cómo elegir el container correcto

| Ancho | Container | Cuándo |
|---|---|---|
| Hasta 400px | `.container-4` / `.container-10` | Formularios de login, modales |
| 595–700px | `.container-7` / `.container-2` | Checkout, formularios largos |
| 800px | `.container` | Páginas de artículo, texto largo |
| 1080px | `.container-11` | Páginas de catálogo, grids |
| Sin límite | `.container-fluid` | Headers, footers, heroes |

## Containers Ejemplos
