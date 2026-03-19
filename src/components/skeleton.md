---
layout: _paginas/components/_component-doc.njk
permalink: /components/skeleton/
page_section: components
tags: ["components"]
titulo: Skeleton
descripcion: Marcadores de posición animados que se muestran mientras se carga el contenido real. Se usan en listados de producto, imágenes y textos para mejorar la percepción de carga.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Skeleton loading component
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  @keyframes sk-shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .sk-demo {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 800px 100%;
    animation: sk-shimmer 1.4s infinite linear;
    border-radius: 4px;
  }
  .sk-grid { display: flex; gap: 16px; flex-wrap: wrap; margin: 20px 0; }
  .sk-card { width: 140px; }
  .sk-img  { width: 140px; height: 186px; border-radius: 2px; }
  .sk-txt-l { height: 14px; margin-top: 10px; width: 110px; }
  .sk-txt-s { height: 12px; margin-top: 6px; width: 80px; }
  .sk-txt-p { height: 12px; margin-top: 6px; width: 60px; }
</style>

**Fuente:** <span class="cd-file">shared/media/components/media-skeleton/</span> &nbsp; <span class="cd-file">elements/_product-skeleton.scss</span>

---

## Preview

<div class="sk-grid">
  <div class="sk-card">
    <div class="sk-demo sk-img"></div>
    <div class="sk-demo sk-txt-l"></div>
    <div class="sk-demo sk-txt-s"></div>
    <div class="sk-demo sk-txt-p"></div>
  </div>
  <div class="sk-card">
    <div class="sk-demo sk-img"></div>
    <div class="sk-demo sk-txt-l"></div>
    <div class="sk-demo sk-txt-s"></div>
    <div class="sk-demo sk-txt-p"></div>
  </div>
  <div class="sk-card">
    <div class="sk-demo sk-img"></div>
    <div class="sk-demo sk-txt-l"></div>
    <div class="sk-demo sk-txt-s"></div>
    <div class="sk-demo sk-txt-p"></div>
  </div>
</div>

---

## HTML — Media Skeleton (tarjeta de producto)

```html
<div class="hg-product-media">
  <div class="skeleton_2-3">   <!-- ratio 2:3 -->

    <div class="p-view">
      <div class="md-rat aspect-2-3">
        <div class="rat-content">

          <!-- Imagen real (se muestra cuando carga) -->
          <ng-content select="[skeletonMedia]"></ng-content>

        </div>
      </div>
    </div>

    <!-- Badge/etiqueta (NEW, SALE, etc.) -->
    <ng-content select="[skeletonBadge]"></ng-content>

  </div>

  <!-- Texto de precio/nombre debajo de la imagen -->
  <div class="hg-product-media__after">
    <ng-content select="[skeletonMediaAfter]"></ng-content>
  </div>
</div>

<!-- Footer de la tarjeta (nombre + precio) -->
<ng-content select="[skeletonFooter]"></ng-content>
```

**Zona de texto skeleton:**

```html
<!-- Líneas de texto grises mientras carga -->
<div class="sk-text-zone">
  <div class="sk-hg-body-m"></div>    <!-- línea de nombre -->
  <div class="sk-hg-body-m"></div>    <!-- línea de precio -->
</div>
```

---

## CSS — Clases de skeleton

<table class="cd-table">
  <thead><tr><th>Clase</th><th>Uso</th><th>Detalle</th></tr></thead>
  <tbody>
    <tr><td><code>skeleton_2-3</code></td><td>Ratio 2:3 (portrait, producto)</td><td>padding-top calculado por ratio</td></tr>
    <tr><td><code>skeleton_1-1</code></td><td>Ratio 1:1 (cuadrado)</td><td>—</td></tr>
    <tr><td><code>skeleton_16-9</code></td><td>Ratio 16:9 (banner)</td><td>—</td></tr>
    <tr><td><code>sk-load</code></td><td>Animación shimmer base</td><td>background gradient animado</td></tr>
    <tr><td><code>sk-load1</code>…<code>sk-load8</code></td><td>Variantes con delay escalonado</td><td>Para que los skeletons no pulsen al unísono</td></tr>
    <tr><td><code>sk-text-zone</code></td><td>Zona de texto skeleton</td><td>76px de altura, pseudo-elementos grises</td></tr>
    <tr><td><code>sk-hg-body-m</code></td><td>Línea de texto skeleton</td><td>18px alto, color <code>$c-sk-grey</code></td></tr>
    <tr><td><code>skeleton-img</code></td><td>Imagen cargando</td><td>fondo <code>$c-sk-grey</code> sólido</td></tr>
    <tr><td><code>skeleton-txt</code></td><td>Texto cargando</td><td>—</td></tr>
    <tr><td><code>anim-skeleton</code></td><td>Wrapper de skeleton en PDP/PLP</td><td>Se añade mientras se espera la respuesta</td></tr>
    <tr><td><code>is-anim</code></td><td>Activa la animación shimmer</td><td>Clase añadida por Angular</td></tr>
    <tr><td><code>is-loading</code></td><td>Estado de carga activo</td><td>Oculta el contenido real</td></tr>
  </tbody>
</table>

---

## Ratios disponibles

Los skeletons respetan el sistema de ratios de imagen del DS:

```scss
// Variables de ratio (de HolyGrail)
$ratios: (
  '2-3':  (2, 3),    // portrait producto — más común
  '1-1':  (1, 1),    // cuadrado
  '3-4':  (3, 4),    // ligeramente portrait
  '16-9': (16, 9),   // landscape (banners)
  '3-2':  (3, 2),    // landscape producto
);
```

---

## Animación CSS

```scss
// Shimmer effect (efecto de destello)
@keyframes sk-shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}

.sk-load {
  background: linear-gradient(
    90deg,
    $c-sk-grey     25%,    // gris claro
    darken($c-sk-grey, 5%) 50%,
    $c-sk-grey     75%
  );
  background-size: 800px 100%;
  animation: sk-shimmer 1.4s infinite linear;
}

// Variante escalonada (delays para PLP con múltiples cards)
.sk-load1 { animation-delay: 0.1s; }
.sk-load2 { animation-delay: 0.2s; }
// ...hasta sk-load8
```

---

## Buenas prácticas

- Usar skeleton en lugar de spinner para contenido con forma conocida (tarjetas, listas).
- Usar los **delays escalonados** (`sk-load1`…`sk-load8`) en grids para evitar el efecto "todos pulsan a la vez".
- El skeleton debe tener las **mismas dimensiones** que el contenido real para evitar layout shifts.
- Eliminar la clase `is-loading` y `anim-skeleton` cuando el contenido esté disponible.
