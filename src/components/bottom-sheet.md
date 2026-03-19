---
layout: _paginas/components/_component-doc.njk
permalink: /components/bottom-sheet/
page_section: components
tags: ["components"]
titulo: Bottom Sheet
descripcion: Panel deslizante que emerge desde la parte inferior de la pantalla en móvil. Usado para selección de tallas, opciones de añadir al carrito y filtros en PLP.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Bottom sheet component
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .cd-anatomy {
    background: #f8f8f8;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    overflow: hidden;
    margin: 20px 0;
    max-width: 360px;
  }
  .cd-anatomy__header {
    padding: 14px 16px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .cd-anatomy__content { padding: 16px; font-size: 13px; color: #555; min-height: 80px; }
  .cd-anatomy__footer { padding: 12px 16px; border-top: 1px solid #e0e0e0; background: #fff; }
  .cd-anatomy__label {
    display: inline-block;
    font-size: 10px;
    background: #000;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    margin-bottom: 4px;
  }
</style>

**Fuente:** <span class="cd-file">src/app/ui/md-bottom-sheet/</span>

---

## Anatomía

<div class="cd-anatomy">
  <div class="cd-anatomy__header">
    <span>Selecciona tu talla</span>
    <span style="font-size:18px;cursor:pointer;opacity:0.5">✕</span>
  </div>
  <div class="cd-anatomy__content">
    <span class="cd-anatomy__label">md-bottom-sheet-content</span>
    <p>Contenido scrolleable (lista de tallas, opciones, etc.)</p>
  </div>
  <div class="cd-anatomy__footer">
    <span class="cd-anatomy__label">md-bottom-sheet-footer</span>
    <div style="background:#000;color:#fff;text-align:center;padding:12px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;margin-top:8px">AÑADIR AL CARRITO</div>
  </div>
</div>

---

## HTML — Angular Component

```html
<md-bottom-sheet>

  <!-- Cabecera con título y botón de cierre -->
  <md-bottom-sheet-header [shouldShowClose]="true">
    <div class="md-bottom-sheet-header-main">
      <h2 class="title-m ttu">Selecciona tu talla</h2>
    </div>
    <div class="md-bottom-sheet-header-append">
      <button class="btn btn-tertiary text-m" (click)="close()">
        <md-icon name="close-cancel"></md-icon>
      </button>
    </div>
  </md-bottom-sheet-header>

  <!-- Contenido scrolleable -->
  <md-bottom-sheet-content>
    <!-- aquí el selector de tallas, opciones, etc. -->
  </md-bottom-sheet-content>

  <!-- Cuerpo adicional -->
  <md-bottom-sheet-body>
    <p class="text-m p-16">Guía de tallas disponible →</p>
  </md-bottom-sheet-body>

  <!-- Footer fijo con CTAs -->
  <md-bottom-sheet-footer>
    <button class="btn btn-primary btn--full label-m ttu">
      Añadir al carrito
    </button>
  </md-bottom-sheet-footer>

</md-bottom-sheet>
```

---

## Sub-componentes

<table class="cd-table">
  <thead><tr><th>Slot</th><th>Tag Angular</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td>Cabecera</td><td><code>md-bottom-sheet-header</code></td><td>Título + botón de cierre. Prop: <code>[shouldShowClose]</code></td></tr>
    <tr><td>Contenido</td><td><code>md-bottom-sheet-content</code></td><td>Área scrolleable principal</td></tr>
    <tr><td>Cuerpo</td><td><code>md-bottom-sheet-body</code></td><td>Contenido adicional no scrolleable</td></tr>
    <tr><td>Pie</td><td><code>md-bottom-sheet-footer</code></td><td>CTAs fijos al fondo (nunca scrollean)</td></tr>
  </tbody>
</table>

---

## CSS — Comportamiento

```scss
// Posicionamiento base (desde CSS del componente)
md-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $c-white;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.12);
  z-index: $z-modal;          // 2000
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.25, 0, 0, 1);  // deceleration

  &.is-open {
    transform: translateY(0);
  }

  // Footer siempre visible
  md-bottom-sheet-footer {
    position: sticky;
    bottom: 0;
    background: $c-white;
    padding: 16px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }
}
```

---

## Usos en el proyecto

| Flujo | Contenido del Bottom Sheet |
|-------|---------------------------|
| **Add to cart (PDP)** | Selector de talla + botón "Añadir al carrito" |
| **Filtros PLP (móvil)** | Lista de filtros activos + aplicar/limpiar |
| **Detalles de envío** | Opciones de envío disponibles |
| **Selección de talla** | `hg-product-size-selector` + guía de tallas |
| **Bottom sheet de confirmación** | Texto + botón confirmar + cancelar |

---

## Buenas prácticas

- Usar solo en **móvil** (< 992px). En desktop, usar drawer lateral o modal.
- El **footer** con CTA debe ser siempre visible — nunca scrollear fuera del viewport.
- La cabecera debe tener **siempre** botón de cierre accesible.
- Añadir `role="dialog"` y `aria-modal="true"` al contenedor.
- Al abrir, hacer `focus()` en el primer elemento interactivo del contenido.
