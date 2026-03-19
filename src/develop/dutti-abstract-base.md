---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-abstract-base/
page_section: develop
tags: ["develop", "dutti", "scss", "variables", "breakpoints"]
titulo: Dutti — Abstract & Base
descripcion: Variables, breakpoints, mixins, tipografía y fuentes del proyecto frontend de Massimo Dutti.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Abstract y Base SCSS Dutti
---



## `abstract/` — 9 archivos

Contiene las variables globales, mixins, breakpoints y sistemas de grid. Se importa vía `abstract/_all.scss` (barrel).

| Archivo | Propósito |
|---------|-----------|
| `_all.scss` | Barrel: importa todos los archivos abstract |
| `_variables.scss` | Variables de color, grid y padding |
| `_breakpoints.scss` | Breakpoints xs / sm / md / lg / xl / 2xl / 3xl |
| `_setup.scss` | Escala tipográfica, containers, `$minheaders` |
| `_mixins.scss` | Mixins SCSS generales |
| `_mixinsFonts.scss` | Mixins específicos de tipografía |
| `_gridNEW.scss` | Sistema de grid actualizado |
| `_categoryGrid.scss` | Grid específico para páginas de categoría |
| `_attachments.scss` | Utilidades para adjuntos e imágenes |


### `_variables.scss` — Colores y espaciado

```scss
// Color primario y variantes de opacidad
$c-primary:    #292929;
$c-primary-3:  rgba(41, 41, 41, 0.03);
$c-primary-10: rgba(41, 41, 41, 0.10);
$c-primary-30: rgba(41, 41, 41, 0.30);
$c-primary-50: rgba(41, 41, 41, 0.50);
$c-primary-70: rgba(41, 41, 41, 0.70);
$c-primary-97: rgba(41, 41, 41, 0.97);

// Colores básicos
$white:   #ffffff;
$black:   #000000;
$gray-10: #1a1a1a;

// Padding de grid
$grid-padding-xs: 16px;  // móvil
$grid-padding-md: 40px;  // desktop
```


### `_breakpoints.scss` — Puntos de ruptura

```scss
// Breakpoints principales
$break-xs:  1px;
$break-sm:  768px;
$break-md:  992px;
$break-lg:  1280px;

// Breakpoints extendidos
$break-xl:   1440px;
$break-2xl:  1600px;
$break-3xl:  1920px;
```

**Uso en media queries:**

```scss
@media (min-width: $break-md) {
  // Estilos para desktop (≥ 992px)
}

@media (min-width: $break-sm) {
  // Estilos para tablet (≥ 768px)
}
```

> ⚠️ El proyecto Holygrail también define `$hg-breakpoints`. Pendiente unificar ambos sistemas (iniciativa #9 del [Effort vs Impact Matrix](/develop/effort-impact/)).


### `_setup.scss` — Escala tipográfica y containers

**Mapa `$minheaders`** — escala tipográfica completa:

| Clave | Tamaño móvil | Tamaño desktop | Line-height | Peso | Notas |
|-------|-------------|----------------|-------------|------|-------|
| `h2` | — | — | 1.2 | medium | |
| `suisse-1` | — | — | — | — | |
| `suisse-2` | — | — | — | — | |
| `suisse-body` | — | — | — | — | |
| `p-tag` | — | — | — | regular | Siempre mayúsculas |
| `title-l` | — | — | — | — | |
| `title-m` | 14px | 16px | 1.2 | medium | |
| `title-s` | 12px | 13px | 1.2 | medium | |
| `hg-body-l` | — | — | — | — | |
| `hg-body-m` | — | — | — | — | |
| `label-m` | — | — | — | — | |

**Containers:**

```scss
$container-small:  360px;
$container:        800px;
```


### `_mixins.scss` — Mixins principales

```scss
@use "sass:math";

// Aplica la variante semibold real de la fuente
@mixin font-real-semibold() {
  font-family: "SuisseIntl-SemiBold", Helvetica, arial, sans-serif;
  font-weight: normal;
}
```


## `base/` — 5 archivos

Contiene el reset, fuentes, tipografía aplicada y estilos por idioma.

| Archivo | Propósito |
|---------|-----------|
| `_fonts.scss` | `@font-face` para fuentes Dutti Daily / Suisse Intl |
| `_fonts_suisse.scss` | `@font-face` adicionales Suisse Intl (variantes) |
| `_base.scss` | Reset y clases utilitarias globales |
| `_types.scss` | Clases tipográficas del Design System |
| `_lang.scss` | Estilos específicos por idioma / locale |


### `_fonts.scss` — Familias tipográficas

El proyecto define tres familias:

| Variable | Familia | Archivos |
|----------|---------|---------|
| `dutti-daily-light` | Dutti Daily Light | `.woff2`, `.woff` |
| `dutti-daily-regular` | Dutti Daily Regular | `.woff2`, `.woff` |
| `dutti-daily-medium` | Dutti Daily Medium | `.woff2`, `.woff` |
| `dutti-daily-bold2` | Dutti Daily Bold | `.woff2`, `.woff` |
| `SuisseIntl-Regular` | Suisse Intl Regular | `.woff2`, `.woff` |
| `SuisseIntl-Medium` | Suisse Intl Medium | `.woff2`, `.woff` |
| `SuisseIntl-SemiBold` | Suisse Intl SemiBold | `.woff2`, `.woff` |
| `SuisseIntl-Bold` | Suisse Intl Bold | `.woff2`, `.woff` |


### `_base.scss` — Reset y utilidades globales

```scss
// Reset básico
a    { text-decoration: none; color: inherit; }
ul   { list-style: none; margin: 0; padding: 0; }

// Utilidades
.text-info { ... }
.gap-16    { gap: 16px; }

// Utilidades SVG (tamaños fijos)
.x267 { width: 267px; height: auto; }
.x190 { width: 190px; height: auto; }
.x135 { width: 135px; height: auto; }
```


### `_types.scss` — Tipografía aplicada

Importa Holygrail2 y abstract. Define clases tipográficas con sus `letter-spacing`:

```scss
.font-real-semibold { @include font-real-semibold(); }

// Badges / etiquetas
.text-badge { ... }

// Clases tipográficas con letter-spacing específico
.text-m    { letter-spacing: ...; }
.title-s   { letter-spacing: ...; }
.hg-body-l { letter-spacing: ...; }
.label-m   { letter-spacing: ...; }
.p-tag     { letter-spacing: ...; text-transform: uppercase; }
```


### `_lang.scss` — Estilos por idioma

Estilos específicos para locales donde la tipografía o el layout difieren (p.ej. árabe, coreano, japonés). Se aplican vía atributo `lang` en el `<html>`.
