---
layout: _paginas/components/_component-doc.njk
permalink: /components/size-selector/
page_section: components
tags: ["components"]
titulo: Size Selector
descripcion: Selector de tallas para la ficha de producto. Muestra todas las tallas disponibles con sus estados (disponible, agotado, recomendado, próximamente) y permite la selección única.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Size selector component
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .sz-preview { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
  .sz-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #000;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    background: none;
    font-family: inherit;
  }
  .sz-btn.is-active { background: #000; color: #fff; }
  .sz-btn.is-sold-out {
    color: #aaa;
    border-color: #e0e0e0;
    text-decoration: line-through;
    cursor: not-allowed;
  }
  .sz-btn.is-recommended { position: relative; }
  .sz-btn.is-recommended::after {
    content: '★';
    position: absolute;
    top: 2px; right: 2px;
    font-size: 8px;
    color: #000;
  }
</style>

**Fuente:** <span class="cd-file">shared/product/components/product-size-selector/</span> &nbsp; <span class="cd-file">components/hg-product-size-selector-horizontal.component.scss</span>

---

## Preview

<div class="sz-preview">
  <button class="sz-btn">XS</button>
  <button class="sz-btn is-recommended">S</button>
  <button class="sz-btn is-active">M</button>
  <button class="sz-btn">L</button>
  <button class="sz-btn">XL</button>
  <button class="sz-btn is-sold-out">XXL</button>
</div>

---

## HTML

```html
<!-- Contenedor horizontal (NW26) -->
<ul class="hg-product-size-selector content-start">

  <!-- Talla disponible -->
  <li class="hg-product-size-selector-item">
    <button class="btn btn-tertiary hg-product-size-selector-btn label-m ttu">
      <span>M</span>
    </button>
  </li>

  <!-- Talla activa (seleccionada) -->
  <li class="hg-product-size-selector-item is-active">
    <button class="btn btn-tertiary hg-product-size-selector-btn label-m ttu tab">
      <span>L</span>
    </button>
  </li>

  <!-- Talla recomendada (por el algoritmo de talla) -->
  <li class="hg-product-size-selector-item is-recommended">
    <button class="btn btn-tertiary hg-product-size-selector-btn label-m ttu">
      <span>S</span>
      <md-icon name="recommended"></md-icon>
    </button>
  </li>

  <!-- Talla agotada -->
  <li class="hg-product-size-selector-item is-sold-out">
    <button class="btn btn-tertiary hg-product-size-selector-btn label-m ttu is-out-of-stock c-middle-grey">
      <span>XXL</span>
      <md-icon name="info" data-title="Sin stock"></md-icon>
    </button>
  </li>

  <!-- Talla disponible pronto (back-soon / coming-soon) -->
  <li class="hg-product-size-selector-item">
    <button class="btn btn-tertiary hg-product-size-selector-btn label-m ttu c-middle-grey">
      <span>XXS</span>
      <md-icon name="message" data-title="Próximamente"></md-icon>
    </button>
  </li>

</ul>
```

---

## Estados

<table class="cd-table">
  <thead><tr><th>Estado</th><th>Clase en <code>li</code></th><th>Clase en <code>button</code></th><th>Icono</th></tr></thead>
  <tbody>
    <tr>
      <td>Disponible</td>
      <td>—</td>
      <td><code>hg-product-size-selector-btn</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td>Seleccionado</td>
      <td><code>is-active</code></td>
      <td><code>tab</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td>Recomendado</td>
      <td><code>is-recommended</code></td>
      <td>—</td>
      <td><code>recommended</code></td>
    </tr>
    <tr>
      <td>Sin stock</td>
      <td><code>is-sold-out</code></td>
      <td><code>is-out-of-stock c-middle-grey</code></td>
      <td><code>info</code></td>
    </tr>
    <tr>
      <td>Próximamente</td>
      <td>—</td>
      <td><code>c-middle-grey</code></td>
      <td><code>message</code></td>
    </tr>
  </tbody>
</table>

---

## Modificadores del contenedor

```html
<!-- Centrado -->
<ul class="hg-product-size-selector content-center">

<!-- Alineado al inicio (default) -->
<ul class="hg-product-size-selector content-start">

<!-- Altura mínima de 32px (variante compacta) -->
<ul class="hg-product-size-selector min-h-32">
```

---

## CSS

```scss
// hg-product-size-selector-horizontal.component.scss
.hg-product-size-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
  padding: 0; margin: 0;

  &.content-start  { justify-content: flex-start; }
  &.content-center { justify-content: center; }
  &.min-h-32 { min-height: 32px; }
}

.hg-product-size-selector-item {
  &.is-active .hg-product-size-selector-btn {
    background: $c-primary;
    color: $c-white;
    border-color: $c-primary;
  }

  &.is-sold-out .hg-product-size-selector-btn {
    color: $c-middle-grey;
    border-color: $c-sk-grey;
    cursor: not-allowed;
  }

  &.is-recommended {
    position: relative;
    // Muestra el icono "recommended" en la esquina
  }
}

.hg-product-size-selector-btn {
  min-width: 40px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid $c-primary;
  transition: background 0.2s, color 0.2s;

  &:hover:not([disabled]) {
    background: rgba(0,0,0,0.06);
  }
}
```

---

## Buenas prácticas

- La talla seleccionada debe persistirse en el estado del componente Angular, no solo via CSS.
- Las tallas agotadas deben tener `aria-disabled="true"` y `cursor: not-allowed`.
- El icono de "recomendado" requiere tooltip accesible (`aria-label` o `title`).
- En móvil, si hay muchas tallas, considerar usar bottom sheet en lugar de inline.
