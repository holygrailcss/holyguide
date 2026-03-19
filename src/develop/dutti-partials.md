---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-partials/
page_section: develop
tags: ["develop", "dutti", "scss", "partials", "header", "footer", "menu"]
titulo: Dutti — Partials
descripcion: Documentación de la carpeta partials/ del frontend de Massimo Dutti. Header, menú, footer, shopcart, search y chat.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Partials SCSS Dutti
---


**Ruta:** `code/apps/frontend/src/assets/styles/partials/`


## Listado de archivos

| Archivo | Estado | Descripción |
|---------|--------|-------------|
| `_hg-header.scss` | ✅ Activo | Header HolyGrail: CSS custom properties |
| `_hg-menu.scss` | ✅ Activo | Menú lateral/overlay HolyGrail |
| `_hg-home.scss` | ✅ Activo | Home NW26: nav-btn, row-cols |
| `_hg-search.scss` | ✅ Activo | Búsqueda HolyGrail |
| `hg-footer.scss` | ✅ Activo | Footer HolyGrail |
| `_header.scss` | ⚠️ Legacy | Header antiguo |
| `_menu.scss` | ❌ Deprecado | Menú antiguo (comentado en styles.scss) |
| `_search.scss` | ⚠️ Legacy | Búsqueda legacy |
| `_shopcart.scss` | ✅ Activo | Grid del carrito de compra |
| `_blame.scss` | 🛠️ Debug | Debug / blame de autoría |
| `_debug.scss` | 🛠️ Debug | Herramientas de debug |
| `_rtl.scss` | ✅ Activo | Soporte RTL (árabe, hebreo) |
| `_a11y.scss` | ✅ Activo | Accesibilidad |
| `_chat.scss` | ✅ Activo | Estilos de chat |
| `chats/_url-chat.scss` | ✅ Activo | Chat por URL |
| `chats/_style-advisor.scss` | ✅ Activo | Style advisor chat |
| `chats/_kakao-chat.scss` | ✅ Activo | Chat Kakao (Korea) |


## Detalles por archivo

### `_hg-header.scss` — Header HolyGrail

Define todas las CSS custom properties del header. Los valores se aplican a través de `hg-header.css` (compilado).

```scss
// Alturas del header
--hg-header-min-height: 48px;  // móvil
@media (min-width: 992px) {
  --hg-header-min-height: 64px;  // desktop
}

// Logo
--hg-header-logo-width: 9.375rem;  // 150px

// Z-index (base para capas superiores)
--hg-header-z-index: 1200;

// Transiciones del header
--hg-header-transition-fast:   70ms ease;
--hg-header-transition-normal: 270ms ease;

// Colores (overrides del DS)
--hg-header-bg-color:    var(--hg-color-white);
--hg-header-color:       var(--hg-color-black);
--hg-header-border-color: transparent;
```

**Variantes por tema** (phantom, white-menu, etc.):

```scss
.hg-header--phantom { --hg-header-bg-color: transparent; }
.hg-header--white-menu { ... }
```

**Botones del header:**

```scss
.btn.hg-header-action { ... }
.btn.hg-menu-btn      { ... }
.btn.hg-menu-panel-action { ... }
```


### `_hg-menu.scss` — Menú lateral HolyGrail

CSS custom properties del panel de menú.

```scss
// Z-index del panel (encima del header)
--hg-menu-panel-z-index:    2001;
--hg-menu-column-cat-width: 128px;  // ancho de columna de categoría

// Transiciones
--hg-menu-panel-transition:       0.4s cubic-bezier(0.25, 0, 0, 1);
--hg-menu-panel-media-transition: 0.4s cubic-bezier(0.25, 0, 0, 1);
--hg-menu-column-transition:      0.4s cubic-bezier(0.25, 0, 0, 1);

// Desktop
@media (min-width: 992px) {
  --hg-menu-panel-max-width: 500px;
}
```

> El easing `cubic-bezier(0.25, 0, 0, 1)` es de desaceleración (arranca rápido, frena suavemente).


### `_hg-home.scss` — Home NW26

Estilos para la home de NW26. Define el comportamiento cuando el footer entra en el viewport:

```scss
// Botones de navegación y columnas inactivas — se ocultan al llegar al footer
body.hg-footer-in-view .hg-home-nav-btn,
body.hg-footer-in-view .hg-home-row-cols__col:not(.is-active) {
  opacity: 0;
  pointer-events: none;
}

// Accesibilidad: skip link
.hg-skip-link {
  position: absolute;
  left: -9999px;
  &:focus { left: 0; }
}
```


### `_shopcart.scss` — Carrito de compra

```scss
// Grid del carrito — layout de producto en carrito
.shop-cart-grid {
  display: grid;
  gap: 20px;
  // móvil: 1 columna
  // desktop: grid con imagen + info
}

// Variante wishlist
.shop-cart-grid--wishlist {
  grid-template-columns: repeat(2, 1fr);  // móvil: 2 cols
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);  // desktop: 4 cols
  }
}

// Item individual del carrito
.shop-cart-item { ... }
```


### `_hg-search.scss` — Búsqueda HolyGrail

Estilos del panel de búsqueda. Incluye:

- `.hg-search` — contenedor principal
- `.hg-search-input` — campo de búsqueda
- `.hg-search-results` — listado de resultados
- `.hg-search-suggestion` — sugerencias de búsqueda
- `.tabs` y `.tab` — pestañas de resultados (ej. WOMEN / MEN)
- `.tabs-resetfirst` — variante que resetea el primer tab


### `_rtl.scss` — Soporte RTL

Estilos para idiomas de derecha a izquierda (árabe, hebreo). Se aplican con la clase `.is-rtl` en el `<html>` o `<body>`.

```scss
.is-rtl {
  .btn.btn-shopcart  { ... }
  .btn-link-menu     { ... }
  .btn-secondary     { ... }
  // Inversión de márgenes, paddings y posiciones
}
```


### `_blame.scss` — Debug y estados de botón

A pesar del nombre, contiene estilos funcionales además de debug:

```scss
// Estado deshabilitado de botón primario
.btn-primary[disabled] { opacity: 0.35; cursor: not-allowed; }

// Estado no seleccionado (tallas, colores)
.btn-noselected { ... }

// Variantes de color para botones de talla/color
.btn--color { ... }

// Quick buy en PLP
.btn-quick { ... }
```


### `_a11y.scss` — Accesibilidad

```scss
// Focus visible para teclado
:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }

// Oculto visualmente pero accesible por screen reader
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
}
```


### `chats/` — Integración de chat

Tres variantes de chat según canal/mercado:

| Archivo | Canal |
|---------|-------|
| `_url-chat.scss` | Chat web genérico vía URL |
| `_style-advisor.scss` | Style Advisor (asesor de moda) |
| `_kakao-chat.scss` | Kakao (canal Corea del Sur) |

El botón flotante de chat se gestiona con `.btn-access` y `.btn-chat` en `components/accessibility-button.component.scss`.
