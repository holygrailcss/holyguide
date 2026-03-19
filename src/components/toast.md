---
layout: _paginas/components/_component-doc.njk
permalink: /components/toast/
page_section: components
tags: ["components"]
titulo: Toast
descripcion: Notificaciones temporales que aparecen desde la parte inferior de la pantalla para informar al usuario de acciones completadas, errores o estados del sistema.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Toast notifications
---

<style>
  .cd { font-family: monospace; background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 12px; }
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  @media (max-width: 768px) { .cd-compare { grid-template-columns: 1fr; } }
  .cd-block { border-radius: 8px; overflow: hidden; }
  .cd-label { padding: 10px 16px; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
  .cd-label--bad  { background: #fde8e8; color: #c0392b; }
  .cd-label--good { background: #e8f8ee; color: #27ae60; }
  .cd-block pre { margin: 0; border-radius: 0; font-size: 12px; line-height: 1.6; }
  .cd-variants { display: flex; flex-wrap: wrap; gap: 12px; margin: 20px 0; }
  .cd-variant { border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px 16px; font-size: 12px; }
  .cd-variant__name { font-weight: 700; margin-bottom: 4px; }
  .cd-variant__class { font-family: monospace; color: #666; font-size: 11px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .cd-preview {
    background: #222;
    border-radius: 8px;
    padding: 40px 20px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .cd-toast-preview {
    background: #000;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 12px 16px;
    border-radius: 4px;
    max-width: 340px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-family: sans-serif;
  }
  .cd-toast-close { opacity: 0.6; font-size: 16px; cursor: pointer; }
</style>

# Toast

Notificaciones temporales que aparecen desde la parte inferior de la pantalla.

**Fuente:** <span class="cd-file">shared/banners/banner-toast/</span> &nbsp; <span class="cd-file">elements/_toast.scss</span>

---

## Preview

<div class="cd-preview">
  <div class="cd-toast-preview">
    <span>Tu pedido ha sido confirmado</span>
    <span class="cd-toast-close">✕</span>
  </div>
  <div class="cd-toast-preview" style="background:#1a3a1a; border-color: rgba(100,200,100,0.4)">
    <span>Producto añadido a wishlist</span>
    <span class="cd-toast-close">✕</span>
  </div>
</div>

---

## HTML

```html
<!-- Toast principal -->
<div class="banner-toast px-20 p-16">
  <div class="is-flex content-sp-between align-items-center">

    <!-- Contenido -->
    <div class="mr-16">
      <p class="text-m">Tu pedido ha sido confirmado</p>
    </div>

    <!-- Botón de cierre -->
    <button class="btn btn-tertiary text-m is-flex" (click)="closeBanner()">
      <md-icon name="close-s" class="is-invert"></md-icon>
    </button>

  </div>
</div>
```

**Para activar la animación de entrada:**

```html
<!-- La clase .appear activa la transición desde translateY(100%) -->
<div class="banner-toast appear">...</div>
```

---

## CSS — Clases y propiedades

<table class="cd-table">
  <thead><tr><th>Clase</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td><code>banner-toast</code></td><td>Contenedor principal. Fondo negro (<code>$c-primary</code>), texto blanco, borde sutil</td></tr>
    <tr><td><code>.appear</code></td><td>Activa la animación de entrada desde <code>translateY(100%)</code></td></tr>
    <tr><td><code>px-20 p-16</code></td><td>Padding horizontal 20px, general 16px</td></tr>
    <tr><td><code>is-flex content-sp-between</code></td><td>Layout flex con espacio entre elementos</td></tr>
    <tr><td><code>align-items-center</code></td><td>Alineación vertical centrada</td></tr>
  </tbody>
</table>

**Posicionamiento CSS:**

```scss
// _toast.scss
.banner-toast {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $c-primary;   // negro
  color: $c-white;
  border: 1px solid rgba(255,255,255,0.2);
  z-index: $z-toast;         // encima de casi todo
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);  // ease-out elástico

  &.appear {
    transform: translateY(0);
  }

  @media (min-width: $break-md) {
    left: 40px;
    right: auto;
    bottom: 32px;
    max-width: 400px;
    border-radius: 4px;
  }
}
```

---

## Variantes

<div class="cd-variants">
  <div class="cd-variant">
    <div class="cd-variant__name">Toast estándar</div>
    <div class="cd-variant__class">banner-toast</div>
  </div>
  <div class="cd-variant">
    <div class="cd-variant__name">Notification bar (top)</div>
    <div class="cd-variant__class">notification-bar</div>
  </div>
  <div class="cd-variant">
    <div class="cd-variant__name">Notification container (legacy)</div>
    <div class="cd-variant__class">notification-container</div>
  </div>
</div>

**Notification bar** (banner superior de página):

```html
<div class="notification-bar">
  <div class="is-flex px-16 py-8">
    <span class="title-l">Mensaje de estado</span>
  </div>
</div>
```

---

## Buenas prácticas

- El toast **desaparece automáticamente** tras 4–5s. Siempre incluir botón de cierre manual.
- Usar para confirmaciones no bloqueantes: añadir al carrito, guardar, copiar enlace.
- **No usar** para errores críticos que requieren acción del usuario — usa modal.
- El z-index debe ser superior al header y los drawers para quedar encima.
- En desktop posicionar en esquina inferior izquierda, no a pantalla completa.
