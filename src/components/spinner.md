---
layout: _paginas/components/_component-doc.njk
permalink: /components/spinner/
page_section: components
tags: ["components"]
titulo: Spinner
descripcion: Indicadores de carga del sistema. Incluye el spinner circular inline, el loader de sección con fondo y el loading de página completa con logo Massimo Dutti.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Spinner y loader
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .cd-variants-row { display: flex; gap: 32px; align-items: center; flex-wrap: wrap; margin: 20px 0; }
  .cd-variant-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; color: #666; }
  /* Spinner SVG animado */
  .cd-spinner-svg { animation: cd-rotate 1.5s linear infinite; }
  .cd-spinner-path {
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0;
    animation: cd-dash 1.5s ease-in-out infinite;
  }
  @keyframes cd-rotate { 100% { transform: rotate(360deg); } }
  @keyframes cd-dash {
    0%   { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0; }
    50%  { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
    100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -120px; }
  }
</style>

**Fuente:** <span class="cd-file">src/app/ui/spinner/</span> &nbsp; <span class="cd-file">src/app/ui/loading/</span> &nbsp; <span class="cd-file">elements/_spinner.scss</span> &nbsp; <span class="cd-file">elements/_md-loading.scss</span>

---

## Variantes

<div class="cd-variants-row">
  <div class="cd-variant-item">
    <svg class="cd-spinner-svg" width="24" height="24" viewBox="25 25 50 50">
      <circle class="cd-spinner-path" cx="50" cy="50" r="20" fill="none" stroke="#000" stroke-width="3"/>
    </svg>
    <span>Inline (16px)</span>
  </div>
  <div class="cd-variant-item">
    <svg class="cd-spinner-svg" width="40" height="40" viewBox="25 25 50 50">
      <circle class="cd-spinner-path" cx="50" cy="50" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
    </svg>
    <span>Sección (32px)</span>
  </div>
  <div class="cd-variant-item">
    <svg class="cd-spinner-svg" width="56" height="56" viewBox="25 25 50 50">
      <circle class="cd-spinner-path" cx="50" cy="50" r="20" fill="none" stroke="#000" stroke-width="2"/>
    </svg>
    <span>Página (48px)</span>
  </div>
</div>

---

## Spinner inline

Usado dentro de botones, tablas o cualquier elemento inline.

```html
<!-- Spinner genérico (16×16px por defecto) -->
<div class="md-spinner">
  <svg class="circular-loader" viewBox="25 25 50 50">
    <circle class="loader-path"
      cx="50" cy="50" r="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2" />
  </svg>
</div>

<!-- Dentro de un botón con estado loading -->
<button class="btn btn-primary btn--full btn-loading label-m ttu">
  <div class="btn-submit">Procesando</div>
  <div class="md-spinner">
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle class="loader-path" cx="50" cy="50" r="20"
        fill="none" stroke="currentColor" stroke-width="2" />
    </svg>
  </div>
</button>
```

---

## Loader de sección

Para cargar contenido dentro de un bloque (no la página completa).

```html
<div class="md-loader">
  <div class="preloader-cms">
    <div id="wrapper">
      <div class="profile-main-loader">
        <div class="loader">
          <svg class="circular-loader" viewBox="25 25 50 50">
            <circle class="loader-path" cx="50" cy="50" r="20"
              fill="none" stroke="#000" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Loading de página completa

Con logo de Massimo Dutti, usado en la carga inicial de la app.

```html
<!-- Loading con logo (carga completa de página) -->
<div class="show-md-loader" id="md-loading-layer">
  <div class="md-loader-content">
    <img src="/assets/img/massimo-dutti-grey.png"
         class="logo"
         alt="Cargando Massimo Dutti..." />
  </div>
</div>
```

```scss
// _md-loading.scss
.show-md-loader {
  position: fixed;
  inset: 0;
  background: $c-white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 120px;
    opacity: 0.3;
    animation: pulse 1.5s ease-in-out infinite;
  }
}
```

---

## CSS — Animación del spinner

```scss
// _spinner.scss
.md-spinner {
  display: inline-flex;
  width: 16px; height: 16px;
}

.circular-loader {
  animation: rotate 1.5s linear infinite;
}

.loader-path {
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0%   { stroke-dasharray: 1px,   200px; stroke-dashoffset: 0;     }
  50%  { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
  100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -120px;}
}
```

---

## Buenas prácticas

<table class="cd-table">
  <thead><tr><th>Situación</th><th>Spinner a usar</th></tr></thead>
  <tbody>
    <tr><td>Botón enviando formulario</td><td><code>md-spinner</code> inline + clase <code>btn-loading</code></td></tr>
    <tr><td>Cargando una sección o listado</td><td><code>md-loader</code> con <code>preloader-cms</code></td></tr>
    <tr><td>Carga inicial de la app</td><td><code>show-md-loader</code> con logo</td></tr>
    <tr><td>Imagen cargando (lazy load)</td><td><code>skeleton-img</code> (ver componente Skeleton)</td></tr>
  </tbody>
</table>

- Siempre añadir `role="status"` y `aria-label="Cargando..."` al contenedor del spinner.
- En botones, deshabilitar el botón mientras carga (`disabled`).
- No mostrar spinner y skeleton simultáneamente en el mismo elemento.
