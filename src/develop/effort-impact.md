---
layout: _paginas/develop/_effort-impact.njk
permalink: /develop/effort-impact/
page_section: develop
tags: ["develop", "scss", "css", "arquitectura"]
titulo: Effort vs Impact Matrix
descripcion: Propuestas de mejora para el SCSS, la arquitectura HTML y el CSS del frontend, clasificadas por esfuerzo e impacto.
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Effort vs Impact Matrix SCSS HTML CSS
---

# Effort vs Impact Matrix: mejoras SCSS, HTML y CSS

Propuestas de mejora para el SCSS, la arquitectura HTML y el CSS del frontend, clasificadas por **esfuerzo** (bajo / medio / alto) e **impacto** (bajo / medio / alto).

---

## Matriz visual

|  | **Impacto bajo** | **Impacto medio** | **Impacto alto** |
|--|------------------|--------------------|-------------------|
| **Esfuerzo bajo** | 1, 2, 3 | 4, 5, 6 | 7 |
| **Esfuerzo medio** | 8 | 9, 10, 11, 12 | 13, 14 |
| **Esfuerzo alto** | — | 15, 16 | 17, 18, **19** |

---

## Iniciativas

### Esfuerzo bajo

| # | Iniciativa | Impacto | Descripción |
|---|------------|---------|-------------|
| **1** | Eliminar comentarios TODO / deuda conocida | Bajo | Limpiar comentarios tipo "TODO HOLYGRAIL", "pendiente de eliminar", "menú antiguo" y documentar en un único sitio (p. ej. ADR o backlog). |
| **2** | Revisar y eliminar `@font-face` duplicados | Bajo | Ya se eliminaron algunos en `_fonts_suisse.scss`; auditar el resto y unificar fuentes "Suisse Int'l" vs "suisse-*" si no se usan ambas. |
| **3** | Documentar convención de clases (md-*, hg-*) | Bajo | Un doc corto o regla de Cursor: cuándo usar `md-*`, `hg-*`, utilidades y tipografía (hg-body-m, label-m, etc.). |
| **4** | Unificar ruta de importación a Holygrail | Medio | Sustituir rutas largas `../../../../../../node_modules/holygrail2/...` por alias (p. ej. en `tsconfig`/build) para reducir fragilidad. |
| **5** | Centralizar variables CSS de layout (--header-height, etc.) | Medio | Definir en un único archivo (p. ej. `abstract/_variables.scss` o `base/_base.scss`) las variables CSS que usa `body` y componentes. |
| **6** | Estandarizar uso de `main` y `role="main"` | Medio | Revisar páginas sin `<main>` o con varios, y dejar una sola región main por ruta con rol explícito donde haga falta. |
| **7** | Reducir `!important` en `styles.scss` | Alto | Hay ~28 usos en el repo; muchos en `styles.scss`. Sustituir por especificidad correcta o variables CSS para evitar guerras de especificidad. |

### Esfuerzo medio

| # | Iniciativa | Impacto | Descripción |
|---|------------|---------|-------------|
| **8** | Eliminar duplicación en utilidades (card9, tabs) | Bajo | Reglas repetidas en `.card9-wrap-details`, `.tabs .is-active`; extraer a mixin o clase compartida. |
| **9** | Unificar sistema de breakpoints | Medio | Un solo mapa (p. ej. alinear `$breakpoints` con `$hg-breakpoints` o viceversa) y usar mixins/media en lugar de valores sueltos en cada archivo. |
| **10** | Reducir anidación en `_shopcart.scss` | Medio | Selectores tipo `.cart .cart-container-items .shop-cart .shop-cart-grid .shop-cart-item`; aplanar a 2–3 niveles y/o usar clases BEM en el HTML. |
| **11** | Jerarquía de headings y landmarks | Medio | Definir regla: un `h1` por página, orden lógico de `h2`/`h3`; revisar páginas que no usen `<main>`/`<nav>`/`<aside>`. |
| **12** | Revisar estilos globales que afectan componentes | Medio | En `styles.scss` hay reglas sobre `md-accordion`, `md-loader`, `checkout-summary-cart`, etc.; mover a partials por dominio o a estilos de componente. |
| **13** | Extraer bloques de `styles.scss` a partials | Alto | El archivo tiene ~2.400 líneas con lógica de carrito, header, accordion, loader, etc.; extraer por sección (p. ej. `_global-layout.scss`, `_global-components.scss`) para mantener mejor. |
| **14** | Aislar estilos de componente (View Encapsulation) | Alto | Revisar componentes que dependen de estilos globales y encapsular con `encapsulation: ViewEncapsulation.Emulated` y clases propias para reducir fugas y conflictos. |

### Esfuerzo alto

| # | Iniciativa | Impacto | Descripción |
|---|------------|---------|-------------|
| **15** | Migrar clases legacy (col-xs-*, utilidades antiguas) | Medio | Sustituir progresivamente `col-xs-12`, `col-xs-6` y utilidades antiguas por grid/flex y clases del DS (hg-* o utilidades actuales). |
| **16** | Estandarizar estructura HTML de páginas | Medio | Definir plantilla común (contenedor de página, main, secciones) y aplicarla en layouts (legacy, default, blank) para consistencia y mantenimiento. |
| **17** | Centralizar media queries por dominio | Alto | Agrupar responsive de PDP, PLP, checkout, my-account, etc. en archivos por dominio o en mixins reutilizables para un solo sistema de breakpoints. |
| **18** | Plan de migración completa a Holygrail / DS | Alto | Definir fases: tipografía (en curso con hg-body-m, label-m), luego layout (hg-*), luego componentes; eliminar duplicados y estilos "md-*" que sobren. |
| **19** | **Unificar tabs, buttons e inputs** | Alto | Hoy hay varias variantes de **Tabs** (`.tabs`, `.tabs2`, `.md-tabs`, `.tabs-colors`, `.tabs-filters`…), **Buttons** (`.btn`, `.btn-primary`, `.btn-tertiary`, `.btn-link`, `.btn-popup`…) e **Inputs** (`.input`, `.form-input-label-2`, `.input-prefix`, `.input-phone`…). Definir un único conjunto de clases por tipo, documentar variantes y migrar usos progresivamente. |

---

## Priorización sugerida

**Quick wins (bajo esfuerzo, buen impacto)**
→ 4, 5, 7 (alias Holygrail, variables CSS, reducir `!important` en `styles.scss`).

**Siguiente iteración**
→ 9, 13 (breakpoints únicos, extracción de `styles.scss`).

**Largo plazo**
→ 17, 18, **19** (media queries por dominio, estrategia Holygrail/DS, **unificación tabs/buttons/inputs**).

---

## Iniciativa 19: Unificación de tabs, buttons e inputs

### ¿Qué debes hacer?

#### 1. Inventario y decisión de diseño

- **Tabs:** Listar todos los usos de `.tabs`, `.tabs2`, `.md-tabs`, `.tabs-colors`, `.tabs-filters`, `.tabs-sizes`, `.tab`, `.tabs-list`, `.tab-view-*` (en `styles.scss`, `_filters.scss`, `_bag_collection.scss`, `_hg-search.scss`, `store-locator-detail`, `product-customize`, `filters-search`). Decidir: ¿un solo componente/clase base (p. ej. `.hg-tabs` o `md-tabs`) con modificadores (`.hg-tabs--filters`, `.hg-tabs--sizes`), o dos variantes (navegación vs filtros)?
- **Buttons:** Listar variantes y mapearlas a roles del DS (primario, secundario, terciario, link, icon). Revisar `process/_button.scss` y estilos en `_modals_legacy.scss`, `_product-view.scss`, `_plp2026.scss`. Decidir nombres finales y si se usan componentes Angular (MdButton) o solo clases.
- **Inputs:** Listar `.input`, `.form-input-label-2`, `.input-prefix`, `.input-phone`, `.textarea`, `.select`, `.input-terms-*`, `.input-custom-range` y agrupar por tipo. Decidir si se unifica con Holygrail/DS o se crea un set mínimo propio.

#### 2. Centralizar SCSS

Crear (o reutilizar) archivos:

- `partials/_tabs.scss`: estilos base de tabs (un solo sistema).
- `partials/_buttons.scss` o `process/_button.scss` ampliado: todas las variantes de botón en un único sitio.
- `forms/_inputs.scss`: estilos base de inputs, textarea, select, y variantes (prefix, phone, terms, range).

Importar estos archivos en `styles.scss` e **ir eliminando** reglas duplicadas de `.tabs`, `.tab`, `.btn`, `.input`, etc. en `styles.scss`, `_modals_legacy.scss`, `_filters.scss`, etc.

#### 3. Migración progresiva

- **Tabs:** empezar por filtros PLP o pestañas de producto → verificar visual y accesibilidad → repetir en el resto.
- **Buttons:** por flujo — (1) Auth y OTP, (2) Checkout y carrito, (3) My-account, (4) Product (PDP/PLP), (5) Resto.
- **Inputs:** por tipo — primero inputs de texto con `.form-input-label-2`, luego teléfono, luego checkbox/radio/terms.

#### 4. Criterios de "hecho"

- Una sola fuente de verdad para tabs, buttons e inputs (documentada y en SCSS centralizado).
- Cero reglas duplicadas en `styles.scss` o partials para esos tres elementos.
- Nuevos desarrollos usan solo la API unificada.

---

## Tabs: inventario de páginas y componentes

| Página / flujo | Componente | Uso |
|----------------|------------|-----|
| **Búsqueda** | `search-filter-dialog.component.html` | `.tabs-sizes`, `.tabs-colors`, `.tabs-filters` |
| | `section-search.component.html` | `.tabs .tabs-resetfirst` + `.tab` para WOMEN / MEN |
| | `filters-search.component.html` | Botones `.tab` (filtros) |
| **Bag collection** | `bag-collection-slider-creator.component.html` | `.tabs-view-container`, `.tab-view-left`, `.tab-view-right` |
| | `bag-collection-navbar-grid.component.html` | `.tab` en pestañas de la navbar |
| **Mi cuenta – Feel** | `menu-tab.component.html` | `.tabs.is-center` + `.tab` (Beneficios / Historial / Cómo funciona) |
| | `history-layout.component.html` | `.tabs.is-center` + `.tab` para historial Feel |
| **Mi cuenta – Pedidos** | `orders-type-layout.component.html` | `<nav class="tabs">` + `.tab` |
| | `order-detail-trackings.component.html` | `.tabs` + `.tab` para tracking |
| **Mi cuenta – Citas** | `my-account-appointments-layout.component.html` | `.tabs.is-center.border-b` + `.tab` |
| **Checkout – Recogida** | `pickup.component.html` | `.tab` para vista lista vs mapa |
| **Producto** | `product-size-selector-horizontal.component.html` | `[class.tab]` en selector de tallas |
| | `size-guide-header.component.html` | `.tabs` en cabecera de guía de tallas |
| **Carrito** | `mini-cart-sidebar.component.html` | `.tabs` con `role="tablist"` |
| | `shopcart-layout.component.html` | `.shopcart-tabs` + `.tab` (carrito / wishlist) |
| **Categoría – Filtros** | `product-filter-item.component.html` | `.tabs-filters`, `.tabs-colors`, `.tabs-sizes` |
| **CMS** | `slice-tabs.component.html` | `.tabs-content`, `.nav-tabs`, `.tab-content`, `.tab-pane` |
| **UI compartido** | `app/ui/tabs/tabs.component.html` | `.md-tabs` + `.tabs.is-center` |

---

## Buttons: inventario de clases

### Variantes principales

| Clase | Uso típico | Dónde se define |
|-------|------------|-----------------|
| `btn` | Base (siempre junto a otra variante) | Holygrail + `styles.scss` |
| `btn-primary` | Acción principal (enviar, guardar, continuar) | Formularios, checkout, my-account |
| `btn-secondary` | Acción secundaria (cancelar, alternativa) | Contact, newsletter, modals |
| `btn-tertiary` | Acción terciaria / link visual (editar, ver más) | Checkout, sidemenu, category-toolbar |
| `btn-link` | Apariencia de enlace (sin caja) | Add-to-cart, filters-search, product modals |
| `btn-loading` | Estado de carga (spinner dentro del botón) | join-feel, combo-promocode |
| `btn-anim` | Animación al enviar | newsletter, join-feel |
| `hg-btn-badge` | Badge / chip en búsqueda | filters-search, section-search |
| `btn-quick` | Compra rápida (tallas) | `styles.scss`, `_plp2026.scss` |
| `btn-popup` | Botones en modales legacy | `_modals_legacy.scss` |
| `btn-filter` | Filtros PLP/búsqueda | `_filters.scss` |
| `btn-access` / `btn-chat` | Accesibilidad y chat | `accessibility-button.component.scss` |

### Dónde está definido el SCSS

- **`process/_button.scss`:** solo `.btn-link-tab` y `.btn-link-menu`.
- **`styles.scss`:** `.btn`, `.btn-tertiary`, `.btn-filter`, `.btn-quick.tab`, etc.
- **`partials/_blame.scss`:** `.btn-primary[disabled]`, `.btn-noselected`, `.btn--color`.
- **`partials/_hg-header.scss`:** `.btn.hg-header-action`, variantes por tema.
- **`partials/_hg-menu.scss`:** `.btn.hg-menu-btn`, `.btn.hg-menu-panel-action`.
- **`elements/_modals_legacy.scss`:** `.btn-popup`, `.btn-container`, `.btn-link`.
- **`elements/_filters.scss`:** `.btn.btn-filter-trigger`, `.btn.btn-display-filter-action`.
- **`elements/_plp2025.scss`, `_plp2026.scss`:** `.btn.md-list-action`, `.btn-quick`.

### Estrategia de unificación (fases)

| Fase | Acción | Entregable |
|------|--------|------------|
| **1 – Definición** | API de variantes y tamaños; decisión Holygrail vs propio. | Doc interno + lista de clases "oficiales". |
| **2 – SCSS centralizado** | Crear `_buttons.scss` con base + variantes + tamaños + estados. | Un único archivo de referencia. |
| **3 – Limpieza en partials** | Quitar de `styles.scss`, `_blame.scss`, `_modals_legacy.scss` las reglas `.btn*` que pasen a `_buttons.scss`. | Menos duplicación y especificidad. |
| **4 – Migración por flujo** | (1) Auth y OTP → (2) Checkout → (3) My-account → (4) PDP/PLP → (5) Resto. | Todos los flujos con la misma API. |
| **5 – Componentes especiales** | Documentar header/menú, filtros, listas. Decidir si se unifican o quedan como bloques aparte. | Claridad entre "botón estándar" y "botón de contexto". |
| **6 – Documentación** | Página de referencia con todos los botones + regla de Cursor. | Unificación completa y sostenible. |

**Orden de migración sugerido:**
1. Auth + OTP
2. Checkout (summary, bottom-sheet, pickup, selected-address)
3. My-account (sidemenu, returns, address-book, feel, appointments, orders)
4. Product y carrito (PDP, add-to-cart, modals, shopcart-layout, mini-cart)
5. Resto (contact, newsletter, gift-card, footer, CMS, bag-collection, dev, debugbar)

---

## Referencias en el proyecto

- **Entrada global:** `code/apps/frontend/src/assets/styles/styles.scss`
- **Tipografía y mapas:** `base/_types.scss`, `abstract/_setup.scss`
- **Breakpoints:** `abstract/_breakpoints.scss`; Holygrail en `node_modules/holygrail2/scss/`
- **Convenciones de commit:** `.cursorrules`, `.cursor/rules/commit-conventions.mdc`
- **Tabs:** `styles.scss`, `elements/_filters.scss`, `elements/_bag_collection.scss`, `partials/_hg-search.scss`, `components/store-locator-detail-layout.component.scss`
- **Buttons:** `process/_button.scss`, `elements/_modals_legacy.scss`, `elements/_product-view.scss`, `elements/_plp2026.scss`, `styles.scss`
- **Inputs:** `base/_base.scss`, `styles.scss`, `forms/`, `process/_my-account.scss`, `process/_phone_verification.scss`, `checkout.scss`
