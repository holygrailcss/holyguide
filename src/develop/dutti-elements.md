---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-elements/
page_section: develop
tags: ["develop", "dutti", "scss", "elements", "modales", "pdp", "plp"]
titulo: Dutti — Elements
descripcion: Documentación de la carpeta elements/ del frontend de Massimo Dutti. Modales, filtros, PDP, PLP, swiper, drawer y más.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Elements SCSS Dutti
---


**Ruta:** `code/apps/frontend/src/assets/styles/elements/`


## Listado de archivos

| Archivo | Dominio | Descripción |
|---------|---------|-------------|
| `_modals.scss` | UI | Sistema de modales CDK (backdrop, content, header) |
| `_modals_legacy.scss` | UI | Modales del sistema anterior |
| `_filters.scss` | PLP/Búsqueda | Barra de filtros (filter-bar, filter-trigger, filter-actions) |
| `_pdp.scss` | Producto | PDP base: inactividad de logo, panel `pdp-extra-info` |
| `_pdp2025.scss` | Producto | PDP versión 2025 |
| `_plp2025.scss` | Categoría | PLP versión 2025 |
| `_plp2026.scss` | Categoría | PLP 2026: quick-buy, color-selector, pdp-colors |
| `_product-view.scss` | Producto | Vista de producto genérica |
| `_product-skeleton.scss` | Producto | Skeleton loading de producto |
| `_swiper.scss` | UI | Estilos del carrusel Swiper |
| `_sidebar.scss` | UI | Panel lateral / drawer |
| `_drawer.scss` | UI | Componente drawer |
| `_toast.scss` | UI | Notificaciones toast |
| `_notification.scss` | UI | Notificaciones genéricas |
| `_bag_collection.scss` | Bag collection | Colección de bolsos |
| `_media.scss` | Media | Media queries / componentes multimedia |
| `_spinner.scss` | UI | Spinner de carga |
| `_md-loading.scss` | UI | Loading específico Massimo Dutti |
| `_radio_img.scss` | Formularios | Selector radio con imágenes |
| `_social-pdp.scss` | Producto | Social sharing en PDP |
| `_studio_templates.scss` | CMS | Templates de estudio CMS |
| `_stylitics.scss` | Terceros | Integración Stylitics (outfits) |


## Detalles por archivo

### `_modals.scss` — Sistema de modales CDK

Modales basados en Angular CDK Overlay.

```scss
// Overlay del CDK (z-index más alto de la app)
.cdk-overlay-container {
  z-index: 2100;
}

// Fondo semitransparente del modal
.cdkmodal-backdrop {
  position: fixed;
  z-index: 2000;
}

// Contenedor principal — entra desde la izquierda
.cdkmodal-content {
  transform: translate3d(-100%, 0%, 0);
  transition: transform 0.3s ease;
  &.is-open {
    transform: translate3d(0, 0, 0);
  }
}

// Cabecera del modal
.nhg-modal-header { ... }
```


### `_modals_legacy.scss` — Modales legacy

Sistema anterior de modales. Clases principales:

- `.modal-backdrop` — fondo oscuro
- `.modal-container` — contenedor centrado
- `.btn-popup` — botones dentro de modales legacy
- `.btn-container` — agrupador de botones
- `.btn-separate` — espaciado entre botones en modales

> ⚠️ Sistema legacy. Migrar a `_modals.scss` (CDK) cuando sea posible.


### `_filters.scss` — Barra de filtros PLP/Búsqueda

```scss
// Barra de filtros — fila horizontal
.md-grid-filter-bar {
  display: flex;
  flex-direction: row;
}

// Botón trigger de filtro
.btn.btn-filter-trigger {
  display: inline-flex;
  gap: var(--hg-spacing-*);
}

// Acciones de filtro (desktop / mobile)
.md-display-filter-actions { ... }
.md-display-filter-actions--desktop { ... }

// Variantes de tabs de filtro
.tabs-filters  { /* filtros por tipo */ }
.tabs-colors   { /* selector de colores */ }
.tabs-sizes    { /* selector de tallas */ }
```

Clases relacionadas: `.btn-filter`, `.btn-display-filter-action`, `.btn-filter-trigger`.


### `_pdp.scss` — Product Detail Page (base)

```scss
// Logo que se oculta durante inactividad en PDP
.inactivity-isShow  { opacity: 1; transition: opacity 0.3s; }
.inactivity-isHidden { opacity: 0; }

// Panel de info extra — fixed en móvil (bottom sheet)
.pdp-extra-info {
  position: fixed;
  bottom: 0;
  transform: translateY(100%);  // oculto por defecto
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
  &.is-open {
    transform: translateY(0);
  }
}
```


### `_plp2026.scss` — PLP 2026

```scss
// Compra rápida nueva (NW26)
.md-new-quick-buy {
  --md-list-actions-gap: ...;
}

// Selector de colores
.md-color-selector-header { ... }
.md-color-selector-title  { ... }
.md-color-selector-list   { ... }

// Colores en PDP accedido desde PLP
.pdp-colors { ... }
```

Clases de botones relacionadas: `.btn-quick`, `.btn.md-list-action`.


### `_swiper.scss` — Carrusel

Personalización del Swiper.js para los distintos carruseles del proyecto:

- `.swiper-container` — contenedor principal
- `.swiper-slide` — slides individuales
- `.swiper-button-prev` / `.swiper-button-next` — flechas de navegación
- `.swiper-pagination` — puntos de paginación

Hay variantes para: PDP (zoom), PLP (grid), CMS (editorial), relacionados, runway.


### `_spinner.scss` y `_md-loading.scss` — Estados de carga

```scss
// Spinner genérico
.spinner { ... }
.spinner--sm { ... }
.spinner--lg { ... }

// Loading específico MD
.md-loading {
  // Animación de carga con el logo/icono de Massimo Dutti
}
```


### `_drawer.scss` / `_sidebar.scss` — Paneles laterales

```scss
// Sidebar/drawer genérico
.sidebar { position: fixed; right: 0; top: 0; }
.sidebar.is-open { transform: translateX(0); }
.sidebar-backdrop { ... }
```


### `_toast.scss` / `_notification.scss` — Notificaciones

```scss
// Toast temporal (aparece y desaparece)
.toast { position: fixed; bottom: 16px; }
.toast--success { background: green; }
.toast--error   { background: red; }

// Notificación persistente
.notification { ... }
.notification--top { top: 0; }
```
