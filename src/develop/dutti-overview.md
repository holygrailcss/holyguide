---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-overview/
page_section: develop
tags: ["develop", "dutti", "scss", "arquitectura"]
titulo: Dutti Frontend — Visión general
descripcion: Arquitectura de estilos del proyecto frontend de Massimo Dutti. Estructura de carpetas, orden de carga y convenciones.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Arquitectura SCSS Dutti Frontend
---



## Ruta de estilos globales

```
code/apps/frontend/src/assets/styles/
├── abstract/          ← variables, mixins, breakpoints, grid
├── base/              ← reset, fuentes, tipos, lang
├── cms/               ← estilos CMS (slot-manager, slider-logo)
├── components/        ← ~86 archivos .scss de componentes Angular
├── elements/          ← modales, filtros, PDP, PLP, swiper, sidebar...
├── forms/             ← inputs, dropdowns, checkboxes, gift card...
├── partials/          ← header, footer, menú, search, shopcart, chat...
├── process/           ← checkout, my-account, newsletter, flujos...
├── templates/         ← plantillas CMS (_1LE, _2FV, _3A, fiv, etc.)
└── _process/          ← estilos en proceso / borrador
```

**Archivos de entrada secundarios** (en la raíz de `styles/`):

| Archivo | Propósito |
|---------|-----------|
| `styles.scss` | **Entrada principal global** |
| `components.scss` | Importa todos los `.scss` de `components/` |
| `forms.scss` | Importa todos los `.scss` de `forms/` |
| `header.scss` | Estilos del header |
| `menu.scss` | Estilos del menú |
| `checkout.scss` | Estilos específicos del checkout |
| `process.scss` | Flujos: checkout, my-account, etc. |
| `hg-plpviews.scss` | Vistas PLP |
| `template-styles.scss` | Importa las plantillas CMS |


## Orden de carga en `styles.scss`

El orden de importación es: **base → abstract → holygrail2 → elements → partials → process → components/forms → cms**.

```scss
// 1. Fuentes
@import "./base/_fonts.scss";
@import "./base/_fonts_suisse.scss";

// 2. Sistema de diseño
@import "./abstract/_all.scss";
@import "../../../../../node_modules/holygrail2/scss/style";  // Holygrail DS externo
@import "./base/_base.scss";
@import "./base/_types.scss";
@import "./base/_lang.scss";

// 3. Elementos de UI
@import "./elements/product-skeleton.scss";
@import "./elements/_radio_img.scss";
@import "./elements/_modals.scss";
@import "./elements/_modals_legacy.scss";
@import "./elements/_swiper.scss";
@import "./elements/_sidebar.scss";
@import "./elements/_toast.scss";
@import "./elements/_notification.scss";
@import "./elements/_bag_collection.scss";
@import "./elements/_filters.scss";
@import "./elements/_pdp.scss";
@import "./elements/_pdp2025.scss";
@import "./elements/_plp2025.scss";
@import "./elements/_plp2026.scss";
@import "./elements/_product-view.scss";
@import "./elements/_studio_templates.scss";
@import "./elements/_media.scss";
@import "./elements/_spinner.scss";
@import "./elements/_md-loading.scss";
@import "./elements/_drawer.scss";
@import "./elements/_social-pdp.scss";

// 4. Partials (header, menú, footer, etc.)
@import "./partials/_blame.scss";
@import "./partials/_chat.scss";
@import "./partials/_header.scss";
@import "./partials/_hg-header.scss";
/* @import "./partials/_menu.scss"; menú antiguo, pendiente de eliminar */
@import "./partials/_hg-menu.scss";
@import "./partials/_shopcart.scss";
@import "./partials/_debug.scss";
@import "./partials/hg-footer.scss";
@import "./partials/_search.scss";
@import "./partials/_hg-search.scss";
@import "./partials/_hg-home.scss";

// 5. Flujos de proceso
@import "./process/_newsletter.scss";
@import "./process/_my-account.scss";
// ... (ver página Dutti Process para el listado completo)

// 6. Archivos compilados por dominio
@import "./header.scss";
@import "./components.scss";
@import "./forms.scss";
@import "./template-styles.scss";
@import "./process.scss";
@import "./cms/slot-manager.scss";
@import "./process/error-modal";
@import "./process/top-notification";
@import "./process/_button.scss";
@import "./process/debugbar";
```


## Estructura de la app Angular

```
src/app/
├── features/    ← lógica de negocio por dominio (43 módulos)
├── pages/       ← páginas con rutas lazy loaded (41 páginas)
├── shared/      ← componentes y servicios compartidos
├── layout/      ← layout global de la app
├── core/        ← servicios singleton, guards, interceptors
└── ui/          ← componentes UI genéricos (md-swiper, notification-bar)
```

### Features principales (43 módulos)

`address`, `appointments`, `authentication`, `bag-collection`, `captcha`, `categories`, `category`, `checkout`, `cms-collection`, `cms-render`, `fast-sint`, `feel`, `gift-options`, `guest-center`, `mspot`, `newsletter`, `oauth`, `order-confirmation`, `order-link`, `orders`, `otp`, `payment`, `personal-information-request`, `physical-stores`, `product-stock`, `products`, `promotion`, `purchase-attempt`, `return-status`, `seo`, `shipping`, `shopping-cart`, `sidebar`, `smart-assistant`, `store-locator`, `third-parties`, `user`, `user-events`, `user-shopcarts`, `viewer-3D`, `wishlist`, `worldwide`, `zalando`

### Pages principales (41 páginas)

`authentication`, `category`, `checkout`, `cms-render-page`, `collection`, `confirmation`, `contact`, `home`, `landing`, `lookbook`, `microsite`, `my-account`, `product`, `runway-limited`, `search`, `shopcart`, `store-locator`, `zalando-return`, entre otras.


## Convenciones de prefijos CSS

| Prefijo | Significado | Ejemplos |
|---------|-------------|----------|
| `hg-` | HolyGrail DS | `.hg-header`, `.hg-menu-panel`, `.hg-footer` |
| `md-` | Massimo Dutti componentes heredados | `.md-tabs`, `.md-loading`, `.md-list-action` |
| `btn-` | Variantes de botón | `.btn-primary`, `.btn-tertiary`, `.btn-link` |
| `.is-` | Estados | `.is-active`, `.is-open`, `.is-rtl`, `.is-loading` |
| `.js-` | Selectores JavaScript (no estilar) | `.js-submit-form` |
| `cdk-` | Angular CDK | `.cdk-overlay-container` |


## Páginas de documentación por sección

- [Abstract & Base](/develop/dutti-abstract-base/) — Variables, breakpoints, mixins, fuentes
- [Elements](/develop/dutti-elements/) — Modales, filtros, PDP, PLP, swiper, spinner
- [Partials](/develop/dutti-partials/) — Header, menú, footer, shopcart, search, chat
- [Forms](/develop/dutti-forms/) — Inputs, checkboxes, dropdowns, formularios
- [Components](/develop/dutti-components/) — 86 componentes Angular por dominio
- [Process](/develop/dutti-process/) — Flujos: checkout, my-account, citas, newsletter
