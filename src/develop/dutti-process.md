---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-process/
page_section: develop
tags: ["develop", "dutti", "scss", "process", "checkout", "my-account"]
titulo: Dutti — Process
descripcion: Documentación de la carpeta process/ del frontend de Massimo Dutti. Flujos de checkout, mi cuenta, newsletter, citas y herramientas de desarrollo.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Process SCSS Dutti
---


**Ruta:** `code/apps/frontend/src/assets/styles/process/`


## Listado de archivos

### Flujos de usuario

| Archivo | Propósito |
|---------|-----------|
| `_button.scss` | Variantes de botón (link-tab, link-menu) |
| `_my-account.scss` | Mi cuenta (~1.400 líneas: user-id-header, feel, historial) |
| `_shipping.scss` | Flujo de envío (list-scroll) |
| `_newsletter.scss` | Newsletter: suscripción y baja |
| `_appointment-tunnel.scss` | Túnel de citas en tienda |
| `_date-selection.scss` | Selector de fecha/hora para citas |
| `_phone_verification.scss` | Verificación de teléfono (OTP) |
| `_terms-conditions.scss` | Términos y condiciones |
| `_error-modal.scss` | Modal de error genérico |
| `_top-notification.scss` | Notificación banner en la parte superior |
| `_store-newsletter.scss` | Newsletter específica de tienda |

### Herramientas de desarrollo

| Archivo | Propósito |
|---------|-----------|
| `_debugbar.scss` | Barra de debug (solo en dev) |
| `_dev-studio.scss` | Studio CMS (dev) |
| `_dev-studio-templates.scss` | Templates del studio CMS (dev) |
| `_dev-studio-templates-scraping.scss` | Scraping studio (dev) |
| `_dev-render-cms.scss` | Render CMS (dev) |
| `_dev-layout.scss` | Layout de páginas dev |
| `_dev-product-view.scss` | Vista de producto (dev) |
| `_dev-product-view-ui.scss` | UI de vista de producto (dev) |
| `_dev-product-view-ui-horizontal.scss` | Vista horizontal de producto (dev) |
| `_dev-icons.scss` | Página de iconos (dev) |

### Componentes en proceso

| Archivo | Propósito |
|---------|-----------|
| `_coordinated-product-item.component.scss` | Item de productos coordinados |
| `shop-cart-item.component.scss` | Item del carrito |


## Detalles de flujos principales

### `_button.scss` — Variantes de botón por proceso

```scss
// Botón link estilo pestaña (tabs en procesos)
.btn-link-tab {
  padding: 10px;
  width: 100%;
}

// Botón link estilo menú (ítems de menú en my-account)
.btn-link-menu {
  padding-block: 16px;

  @media (min-width: 992px) {
    padding-block: 24px;
  }
}
```


### `_my-account.scss` — Mi cuenta (~1.400 líneas)

El archivo más extenso del proyecto. Cubre toda la sección de "Mi Cuenta".

**Bloques principales:**

```scss
// Header de identificación del usuario (sticky)
.user-id-header {
  .bar-background {
    position: fixed;
    margin-top: -100px;  // oculto inicialmente
  }
  .full-bar   { z-index: ...; }
  .fixed-bar  { z-index: ...; }
}

// Header de la sección Feel (programa de fidelización)
.my-account-feel-header { ... }
```

**Secciones cubiertas:**

| Sección | Clases principales |
|---------|-------------------|
| Pedidos | `.orders-*`, `.order-detail-*` |
| Devoluciones | `.returns-*`, `.return-item-*` |
| Feel (fidelización) | `.feel-*`, `.my-account-feel-*` |
| Citas | `.appointments-*` |
| Direcciones | `.address-book-*`, `.address-card-*` |
| Datos personales | `.personal-info-*` |
| Wishlist (mi cuenta) | `.my-wishlist-*` |
| Menú lateral | `.my-account-sidemenu`, `.my-account-nav-*` |


### `_shipping.scss` — Flujo de envío

```scss
// Lista de métodos de envío con scroll personalizado
.list-scroll {
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 50px;
  }
}
```


### `_newsletter.scss` — Newsletter

```scss
// Formulario de suscripción
.newsletter-form {
  .btn-anim    { /* animación mientras envía */ }
  .btn-loading { /* spinner */ }
  .btn-submit  { /* texto del botón */ }
  .btn-label-m { /* tipografía label-m */ }
}
```


### `_appointment-tunnel.scss` — Citas en tienda

Flujo de reserva de cita personal en tienda:

- `.appointment-tunnel-*` — pasos del túnel
- `.date-time-selector` — selector de día y hora
- `.appointment-summary` — resumen de la cita


### `_phone_verification.scss` — Verificación OTP

```scss
// Formulario de verificación con inputs de código
.phone-verification {
  .otp-inputs { display: flex; gap: 8px; }
  .otp-input  { @extend input-code; /* ver forms/ */ }

  // Estado de reenvío
  .resend-code { ... }
  .resend-countdown { ... }
}
```


### `_top-notification.scss` — Banner superior

```scss
// Banner fijo en la parte superior de la página
.top-notification {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1300;  // encima del header (z-index: 1200)

  &.is-visible { transform: translateY(0); }
  &.is-hidden  { transform: translateY(-100%); }
}
```


### `_error-modal.scss` — Modal de error

Modal genérico para errores de red, sesión expirada, etc.

```scss
.error-modal {
  .error-modal-icon  { ... }
  .error-modal-title { ... }
  .error-modal-body  { ... }
  .error-modal-actions { display: flex; gap: 16px; }
}
```


## Herramientas de desarrollo

Las herramientas de dev tienen sus propios estilos encapsulados. Se cargan solo en entornos de desarrollo o staging:

| Herramienta | Ruta URL | Descripción |
|-------------|----------|-------------|
| Debugbar | `/debug` | Barra lateral con info de sesión, rutas, feature flags |
| Studio CMS | `/development/studio` | Editor visual de templates CMS |
| Dev product view | `/development/product-view` | Vista de producto con todas las variantes |
| Dev icons | `/development/icons` | Catálogo de iconos del sistema |
| Dev layout | `/development/layout` | Ejemplos de layout y grid |

```scss
// Debugbar (solo visible en dev)
.debugbar {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;

  .btn-square { width: 32px; height: 32px; }
  .btn-xs     { font-size: 11px; }
}
```
