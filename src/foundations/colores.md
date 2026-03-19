---
layout: _paginas/foundations/_colors.njk
permalink: /colores/

titulo: Colores
descripcion: Paleta de colores del sistema de diseño. Los colores primitivos son la base sobre la que se construyen todos los tokens de color del DS.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/colores.jpg
imageAlt: Paleta de colores del sistema de diseño
---

## Paleta base

Los colores primitivos definen la identidad visual del sistema. A partir de ellos se generan los tokens semánticos (textos, fondos, bordes, estados).

### Colores de texto

| Variable SCSS | Clase CSS | Valor | Uso |
|---|---|---|---|
| `$c-primary` | `.c-primary` | `#000000` | Color de texto principal |
| `$c-black` | `.c-black` | `#000000` | Negro puro |
| `$c-dark-grey` | `.c-dark-grey` | `#737373` | Texto secundario |
| `$c-middle-grey` | `.c-middle-grey` | `#a9a9a9` | Texto deshabilitado / placeholder |
| `$c-light-grey` | `.c-light-grey` | `#f0f0f0` | Texto sobre fondos oscuros |
| `$c-white` | `.c-white` | `#ffffff` | Texto sobre fondos de color |

### Colores de estado

| Variable SCSS | Clase CSS | Valor | Uso |
|---|---|---|---|
| `$c-error` | `.c-error` | `#b40016` | Error, destructivo |
| `$c-info` | `.c-info` | `#1a32a4` | Información |
| `$c-success` | `.c-success` | `#76ae4a` | Éxito / validación |
| `$c-valid` | `.c-valid` | `#12882c` | Campo válido |
| `$c-warning` | `.c-warning` | `#ffc700` | Advertencia |
| `$c-notice` | `.c-notice` | `#e5740b` | Aviso / alerta naranja |
| `$c-sale` | `.c-sale` | `#ffce4e` | Oferta / precio rebajado |

### Colores de marca / programa

| Variable SCSS | Clase CSS | Valor | Uso |
|---|---|---|---|
| `$c-feel` | `.c-feel` | `#fb9962` | Programa Feel |
| `$c-feel-dark` | `.c-feel-dark` | `#c94c07` | Feel oscuro |
| `$c-feel-light` | `.c-feel-light` | `#f0f0f0` | Feel claro |
| `$c-special` | —  | `#b99d6b` | Color dorado / especial |
| `$c-tier-silver` | `.c-tier-silver` | `#87888d` | Tier plata |
| `$c-tier-platinum` | `.c-tier-platinum` | `#5b7fa1` | Tier platino |
| `$c-tier-gold` | `.c-tier-gold` | `#a38a6b` | Tier oro |
| `$c-limited` | `.c-limited` | `#000000` | Acceso limitado |

### Colores de fondo

| Variable SCSS | Clase CSS | Valor | Uso |
|---|---|---|---|
| `$bg-light` | `.bg-light` | `#f0f0f0` | Fondo claro general |
| `$c-bg-cream` | `.bg-cream` | `#f4f2ed` | Fondo crema |
| `$c-sk-grey` | — | `#e3e3e3` | Fondo skeleton loader |
| — | `.bg-clear` | `#ffffff` | Fondo blanco |
| — | `.bg-feel-light` | `#f0f0f0` | Fondo Feel claro |
| — | `.bg-feel-dark` | `#a9a9a9` | Fondo Feel oscuro |
| — | `.bg-dark-grey` | `#737373` | Fondo gris oscuro |
| — | `.bg-middle-grey` | `#a9a9a9` | Fondo gris medio |
| — | `.bg-primary` | `#000000` | Fondo primario negro |
| — | `.bg-secondary` | — | Fondo secundario |
| — | `.bg-accent` | — | Fondo acento |
| — | `.bg-sale` | `#ffce4e` | Fondo oferta |
| — | `.bg-error` | `#b40016` | Fondo error |
| — | `.bg-info` | `#1a32a4` | Fondo informativo |
| — | `.bg-success` | `#76ae4a` | Fondo éxito |
| — | `.bg-warning` | `#ffc700` | Fondo advertencia |
| — | `.bg-tier-silver` | `#87888d` | Fondo tier plata |
| — | `.bg-tier-platinum` | `#5b7fa1` | Fondo tier platino |
| — | `.bg-tier-gold` | `#a38a6b` | Fondo tier oro |

### Opacidades del color principal

| Variable SCSS | Valor | Uso |
|---|---|---|
| `$c-primary-15` | `rgba(0,0,0,0.15)` | Overlay ligero |
| `$c-primary-30` | `rgba(0,0,0,0.30)` | Overlay medio |
| `$c-primary-60` | `rgba(0,0,0,0.60)` | Overlay oscuro |
| `$c-primary-97` | `rgba(0,0,0,0.97)` | Casi opaco |
| `$c-secondary-15` | `rgba(255,255,255,0.15)` | Overlay blanco ligero |
| `$c-secondary-30` | `rgba(255,255,255,0.30)` | Overlay blanco medio |

### Cómo usar

```scss
// Texto
.mi-elemento { color: $c-primary; }

// Fondo
.mi-elemento { background-color: $bg-light; }
```

```html
<!-- Clase de texto -->
<span class="c-error">Mensaje de error</span>

<!-- Clase de fondo -->
<div class="bg-light">Contenido sobre fondo claro</div>
```
