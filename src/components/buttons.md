---
layout: _paginas/components/_buttons.njk
permalink: /buttons/
page_section: components

titulo: Buttons
descripcion: Sistema de botones del design system. Incluye variantes de rol (primary, secondary, tertiary), tamaños, estados (hover, disabled, loading) y combinaciones con iconos.

date: 2023-06-19
badge: updated
tags: ["components"]
image: /assets/static/components/buttons.jpg
imageAlt: Buttons component
---

## Auditoría del sistema de botones

Inventario de **todas las clases `btn-*`** detectadas en el código: clases efectivamente definidas en CSS frente a clases usadas en plantillas/componentes. Permite ver qué pertenece al sistema "core", qué son features verticales (PDP, PLP, chat, accesibilidad…) y qué clases están huérfanas (usadas pero sin selector que las estilice).

| # | Clase | Tipo | Definida | Usada | Categoría | Nota |
|---|-------|------|----------|-------|-----------|------|
| 1 | `btn-primary` | Variante | Sí | Sí | Core | Variante principal |
| 2 | `btn-secondary` | Variante | Sí | Sí | Core | Variante secundaria |
| 3 | `btn-tertiary` | Variante | Sí | Sí | Core | Variante terciaria |
| 4 | `btn-link` | Variante | Sí | Sí | Core | Botón tipo enlace |
| 5 | `btn-link-tab` | Variante | Sí | Sí | Core | Variante de link en tabs |
| 6 | `btn-link-menu` | Variante | Sí | Sí | Core | Variante de link en menú |
| 7 | `btn--medium` | Tamaño (BEM) | Sí | Sí | Size | Modificador tamaño |
| 8 | `btn--full` | Tamaño (BEM) | No | Sí | Size | Sin definición — huérfana |
| 9 | `btn--large` | Tamaño (BEM) | No | Sí | Size | Sin definición — huérfana |
| 10 | `btn--color` | Modificador | Sí | Sí | Estado/Color | Selector de color |
| 11 | `btn--wishlist` | Modificador | Sí | Sí | Feature | Mezcla BEM + feature |
| 12 | `btn-loading` | Estado | Sí | Sí | State | Estado de carga |
| 13 | `btn-noselected` | Estado | Sí | Sí | State | Sin selección |
| 14 | `btn-separate` | Estado | No | Sí | State | Sin definición |
| 15 | `btn-quick` | Feature | Sí | Sí | PDP/PLP | Compra rápida |
| 16 | `btn-quick--padded` | Feature | Sí | Sí | PDP/PLP | Variante con padding |
| 17 | `btn-3d-view` | Feature | Sí | Sí | PDP | Vista 3D |
| 18 | `btn-look` | Feature | Sí | Sí | PDP | Ver look |
| 19 | `btn-size` | Feature | Sí | Sí | PDP | Selector de talla |
| 20 | `btn-swiper` | Feature | Sí | Sí | PLP | Navegación slider |
| 21 | `btn-shop` | Feature | Sí | Sí | Commerce | Comprar |
| 22 | `btn-shopcart` | Feature | No | Sí | Commerce | Sin definición |
| 23 | `btn-clear` | Feature | Sí | Sí | Forms | Limpiar input |
| 24 | `btn-filter` | Feature | Sí | Sí | PLP | Filtros |
| 25 | `btn-filter-trigger` | Feature | Sí | Sí | PLP | Abre panel de filtros |
| 26 | `btn-display-filter-action` | Feature | No | Sí | PLP | Sin definición clara |
| 27 | `btn-level-1` | Feature | Sí | Sí | Menu | Nivel 1 navegación |
| 28 | `btn-return-query` | Feature | Sí | Sí | Search | Volver a búsqueda |
| 29 | `btn-popup` | Legacy | Sí | Sí | Modals | Modales antiguos |
| 30 | `btn-container` | Legacy | Sí | Sí | Modals | Wrapper, no es botón |
| 31 | `btn-open-tap` | Legacy | Sí | Sí | CMS | Abrir pestaña |
| 32 | `btn-access` | Feature | Sí | Sí | A11y | Botón de accesibilidad |
| 33 | `btn-access-icon` | Feature | Sí | Sí | A11y | Icono interno |
| 34 | `btn-access-close` | Feature | Sí | Sí | A11y | Cerrar accesibilidad |
| 35 | `btn-chat` | Feature | Sí | Sí | Chat | Botón chat |
| 36 | `btn-white` | Feature | Sí | Sí | Chat | Variante color |
| 37 | `btn-black` | Feature | Sí | Sí | Chat | Variante color |
| 38 | `btn-kakao` | Integración | Sí | Sí | 3rd-party | KakaoTalk |
| 39 | `btn-daum-address` | Integración | No | Sí | 3rd-party | Daum address |
| 40 | `btn-anim-dev` | Dev | Sí | Sí | Internal | Solo dev studio |
| 41 | `hg-btn-badge` | Design System | Sí | Sí | HG | Badge oficial DS |
| 42 | `hg-home-nav-btn` | Design System | No | Sí | HG | Nav home |
| 43 | `hg-home-nav-btn--prev` | Design System | No | Sí | HG | Modificador prev |
| 44 | `hg-home-nav-btn--next` | Design System | No | Sí | HG | Modificador next |

**Resumen:** 44 clases totales — 36 definidas + 8 huérfanas (usadas sin selector). Solo 6 son variantes "core" del sistema; el resto (38) son features, estados o modificadores específicos. Señal clara de que el sistema de botones necesita consolidación.

## Clases Principales de Botones


## Variantes del proyecto Dutti

El sistema de botones usa la base de **HolyGrail 2** con variantes propias de Massimo Dutti.

### Por rol

| Clase | Rol | Uso típico |
|-------|-----|-----------|
| `btn btn-primary` | CTA principal | Añadir al carrito, confirmar, guardar |
| `btn btn-secondary` | Acción secundaria | Cancelar, volver, alternativa |
| `btn btn-tertiary` | Fantasma / sin borde | Editar, ver más, navegación ligera |
| `btn btn-link` | Apariencia de enlace | Acciones inline, links textuales |
| `btn btn-feel` | FEEL by Massimo Dutti | Acciones del programa de fidelización |
| `btn btn-secondary-feel` | Cancelar en modal Feel | Solo dentro de flujos Feel |

### Por tamaño

| Clase | Efecto |
|-------|--------|
| `btn--full` | Ancho 100% del contenedor |
| `btn--small` | Tamaño reducido |
| `btn--medium` | Tamaño mediano |
| `btn--large` | Tamaño grande |

### Tipografía combinada

```html
<!-- Botón con tipografía del sistema -->
<button class="btn btn-primary btn--full label-m ttu">
  Añadir al carrito
</button>

<!-- Botón secundario -->
<button class="btn btn-secondary label-m ttu">
  Cancelar
</button>

<!-- Botón fantasma (solo texto) -->
<button class="btn btn-tertiary text-m">
  Ver guía de tallas
</button>

<!-- Botón FEEL -->
<button class="btn btn-feel btn--full text-m">
  Confirmar canje
</button>
```

### Estados

```html
<!-- Deshabilitado -->
<button class="btn btn-primary btn--full label-m ttu" disabled>
  No disponible
</button>

<!-- Cargando (envío en proceso) -->
<button class="btn btn-primary btn--full btn-loading label-m ttu">
  <div class="btn-submit">Procesando</div>
  <div class="btn-anim">
    <!-- spinner animado mientras envía -->
  </div>
</button>
```

### Botón con icono

```html
<!-- Icono antes del texto -->
<button class="btn btn-secondary label-m">
  <md-icon name="wishlist" class="mr-8"></md-icon>
  Añadir a wishlist
</button>

<!-- Solo icono (btn-tertiary) -->
<button class="btn btn-tertiary text-m" aria-label="Cerrar">
  <md-icon name="close-cancel"></md-icon>
</button>
```

