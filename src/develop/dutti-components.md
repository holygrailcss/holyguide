---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-components/
page_section: develop
tags: ["develop", "dutti", "scss", "components", "angular"]
titulo: Dutti — Components Angular
descripcion: Inventario de los 86 componentes Angular con estilos encapsulados del frontend de Massimo Dutti.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Components Angular Dutti
---


**Ruta base:** `code/apps/frontend/src/app/` y `code/apps/frontend/src/assets/styles/components/`


## Producto / PDP

Componentes de la página de detalle de producto (Product Detail Page).

| Componente (archivo `.scss`) | Propósito |
|-----------------------------|-----------|
| `product-page-layout.component.scss` | Layout principal de la PDP |
| `product-page-product-info.component.scss` | Bloque de información del producto (nombre, precio, talla) |
| `product-page-product-details.component.scss` | Detalles adicionales (composición, cuidados) |
| `product-view-details.component.scss` | Visor de detalles del producto |
| `product-view-zoom.component.scss` | Zoom de imagen en PDP |
| `product-view-color-selector.component.scss` | Selector de color en PDP |
| `product-color-selector.component.scss` | Variante de selector de color |
| `product-prices.component.scss` | Bloque de precios (precio normal, oferta, futuro) |
| `product-label.component.scss` | Etiquetas del producto (new, sale, etc.) |
| `product-cart.component.scss` | Botón añadir al carrito |
| `product-bullet-percentage.component.scss` | Bullet de porcentaje (ej. 80% algodón) |
| `product-customize.component.scss` | Personalización de producto |
| `product-debug.component.scss` | Debug de producto (dev) |
| `formatted-price.component.scss` | Formato de precio |
| `shoes-info.component.scss` | Info específica de calzado |
| `hg-product-size-selector-horizontal.component.scss` | Selector de talla horizontal (NW26) |


## Categoría / PLP

Componentes de la página de listado de productos (Product List Page).

| Componente | Propósito |
|------------|-----------|
| `category-page.component.scss` | Layout de categoría |
| `category-nav.component.scss` | Navegación de subcategorías |
| `category-tool-bar.component.scss` | Barra de herramientas (ordenar, filtrar, ver) |
| `category-sub-categories-selector.component.scss` | Selector de subcategorías (swiper) |
| `category-sub-categories-media.component.scss` | Media de subcategorías |
| `category-seo.component.scss` | Bloque SEO de categoría |
| `category-debug.component.scss` | Debug de categoría (dev) |
| `related-products-grid.component.scss` | Grid de productos relacionados |
| `related-products-carousel.component.scss` | Carrusel de productos relacionados |


## Carrito y Compra

Componentes del flujo de carrito y añadir al carrito.

| Componente | Propósito |
|------------|-----------|
| `shopcart-layout.component.scss` | Layout de la página de carrito |
| `shop-cart-packaging.component.scss` | Opciones de empaquetado |
| `shop-cart-is-gift.component.scss` | ¿Es un regalo? toggle |
| `shipping-cart.component.scss` | Opciones de envío en el carrito |
| `item-product-cart.component.scss` | Item de producto en el carrito |
| `mini-cart.component.scss` | Mini carrito (sidebar) |
| `add-to-cart-bottom-sheet.component.scss` | Bottom sheet de añadir al carrito (móvil) |
| `order-summary-future-price.component.scss` | Precio futuro en resumen de pedido |
| `order-header.component.scss` | Cabecera del pedido |


## Wishlist

| Componente | Propósito |
|------------|-----------|
| `wishlist-item.component.scss` | Item de wishlist |
| `wishlist-icon.component.scss` | Icono de wishlist (corazón) |


## Media y CMS

Componentes de contenido editorial y CMS.

| Componente | Propósito |
|------------|-----------|
| `media-carousel.component.scss` | Carrusel de imágenes/vídeo editorial |
| `media-video.component.scss` | Reproductor de vídeo |
| `custom-controls-video.component.scss` | Controles personalizados de vídeo |
| `cms-render-page.component.scss` | Página renderizada desde CMS |
| `cms-render-preview-page.component.scss` | Preview de página CMS |
| `cms-render-gsap.component.scss` | Animaciones GSAP desde CMS |
| `cms-collection.scss` | Colección CMS |
| `microsite-mspot.component.scss` | Microsite MSpot |
| `microsite-360-view.component.scss` | Vista 360° de producto |
| `viewer-3D.component.scss` | Visor 3D |
| `viewer-3D-modal.component.scss` | Modal del visor 3D |
| `runway-layout.component.scss` | Layout de runway/desfile |
| `lookbook-page.component.scss` | Página de lookbook |
| `shop-the-look.component.scss` | Shop the look |
| `shop-the-look-picture.component.scss` | Imagen con puntos de shop the look |


## Store Locator y Fast Sint

Componentes del localizador de tiendas y recogida rápida.

| Componente | Propósito |
|------------|-----------|
| `store-locator-list-layout.component.scss` | Layout de lista de tiendas |
| `store-locator-list.component.scss` | Lista de resultados de tiendas |
| `store-locator-list-result.component.scss` | Resultado individual de tienda |
| `store-locator-stores.component.scss` | Grid de tiendas |
| `store-locator-detail-layout.component.scss` | Detalle de tienda |
| `store-locator-fast-sint-items.component.scss` | Items Fast Sint en store locator |
| `fast-sint-store-layout.component.scss` | Layout Fast Sint de tienda |
| `fast-sint-stores-layout.component.scss` | Layout de tiendas Fast Sint |
| `fast-sint-list.component.scss` | Lista Fast Sint |
| `fast-sint-list-result.component.scss` | Resultado Fast Sint |
| `fast-sint-items.component.scss` | Items Fast Sint |
| `fast-sint-detail.component.scss` | Detalle Fast Sint |
| `fast-sint-search.component.scss` | Búsqueda Fast Sint |
| `fast-sint-wishlist-banner.component.scss` | Banner wishlist Fast Sint |
| `fast-sint-pickup-banner.component.scss` | Banner recogida Fast Sint |
| `fast-sint-variables.scss` | Variables CSS de Fast Sint |


## Returns y Devoluciones

| Componente | Propósito |
|------------|-----------|
| `return-multi-summary-box.component.scss` | Resumen de devolución múltiple |
| `return-feedback-resume.component.scss` | Feedback de devolución |
| `zalando-return-wrapper.component.scss` | Devolución Zalando |
| `sfi-refund-form-layout.component.scss` | Formulario de devolución SFI |


## Chat y Asistente

| Componente | Propósito |
|------------|-----------|
| `chat-page.component.scss` | Página de chat |
| `chat-preselect-channel.component.scss` | Selección de canal de chat |
| `recom-chat.component.scss` | Chat de recomendaciones |
| `smart-assistant-faqs.component.scss` | FAQs del asistente inteligente |
| `upi-intent.component.scss` | UPI intent (pagos India) |


## Checkout y Flujos especiales

| Componente / Archivo | Propósito |
|---------------------|-----------|
| `_checkout-2026.scss` | Checkout NW26 |
| `_pickup-2026.scss` | Recogida en tienda NW26 |
| `address.scss` | Gestión de direcciones |
| `bag-collection.scss` | Bag collection (flujo especial) |
| `gift-card.scss` | Flujo de gift card |
| `methods-list.component.scss` | Lista de métodos de pago |
| `home-ssr.component.scss` | Home con Server Side Rendering |


## Búsqueda, Mapa y Accesibilidad

| Componente | Propósito |
|------------|-----------|
| `header-search-v2.component.scss` | Búsqueda en cabecera v2 |
| `map.component.scss` | Componente de mapa |
| `accessibility-button.component.scss` | Botón flotante de accesibilidad y chat (`.btn-access`, `.btn-chat`) |


## Convenciones de estilos en componentes Angular

```scss
// Cada componente usa ViewEncapsulation.Emulated por defecto.
// Los selectores se aplican solo al componente, no globalmente.

:host {
  display: block;  // o inline-block, flex, etc.
}

// Para afectar a elementos hijos de terceros (CDK, etc.)
:host ::ng-deep .third-party-class { ... }
```

> ⚠️ Evitar `::ng-deep` siempre que sea posible. Preferir clases propias o CSS custom properties. Ver iniciativa #14 del [Effort vs Impact Matrix](/develop/effort-impact/).
