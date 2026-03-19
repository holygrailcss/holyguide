---
layout: _paginas/components/_component-doc.njk
permalink: /components/accordion/
page_section: components
tags: ["components"]
titulo: Accordion
descripcion: Componente plegable que muestra u oculta contenido al hacer clic en su cabecera. Se usa en fichas de producto para composición, cuidados y detalles adicionales.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Accordion component
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .cd-preview-accordion { border-top: 1px solid #000; margin: 20px 0; }
  .cd-acc-item { border-bottom: 1px solid #e0e0e0; }
  .cd-acc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .cd-acc-arrow { transition: transform 0.3s; font-size: 18px; }
  .cd-acc-item.is-open .cd-acc-arrow { transform: rotate(180deg); }
  .cd-acc-content { overflow: hidden; max-height: 0; transition: max-height 0.3s ease; }
  .cd-acc-item.is-open .cd-acc-content { max-height: 200px; }
  .cd-acc-inner { padding: 0 0 16px; font-size: 13px; line-height: 1.6; color: #555; }
</style>

**Fuente:** <span class="cd-file">src/app/ui/md-accordion/</span> &nbsp; <span class="cd-file">styles.scss (.md-toggle)</span>

---

## Preview

<div class="cd-preview-accordion">
  <div class="cd-acc-item is-open">
    <div class="cd-acc-header" onclick="this.parentElement.classList.toggle('is-open')">
      <span>Composición</span>
      <span class="cd-acc-arrow">⌄</span>
    </div>
    <div class="cd-acc-content">
      <div class="cd-acc-inner">100% Lana virgen. Forro: 100% Viscosa. Tejido exterior: importado. Confeccionado en Europa.</div>
    </div>
  </div>
  <div class="cd-acc-item">
    <div class="cd-acc-header" onclick="this.parentElement.classList.toggle('is-open')">
      <span>Instrucciones de lavado</span>
      <span class="cd-acc-arrow">⌄</span>
    </div>
    <div class="cd-acc-content">
      <div class="cd-acc-inner">Lavar a mano. No usar secadora. Planchar a temperatura baja.</div>
    </div>
  </div>
  <div class="cd-acc-item">
    <div class="cd-acc-header" onclick="this.parentElement.classList.toggle('is-open')">
      <span>Detalles del producto</span>
      <span class="cd-acc-arrow">⌄</span>
    </div>
    <div class="cd-acc-content">
      <div class="cd-acc-inner">Ref: 1234/567/800. Disponible en 3 colores. Colección Otoño-Invierno 2026.</div>
    </div>
  </div>
</div>

---

## HTML — Angular Component

```html
<!-- Componente Angular md-accordion -->
<md-accordion [multi]="false">

  <md-accordion-panel>
    <md-accordion-title [config]="{ arrowIcon: true, ariaLevel: 2 }">
      <div class="md-toggle-header has-icon-pre">
        <button class="md-toggle-button btn btn--full btn-link text-m">
          <div class="md-toggle-icon-container title-m">
            <md-icon name="info" classes="mr-8"></md-icon>
            Composición
          </div>
          <div class="md-arrow-anim">
            <md-icon name="chevron"></md-icon>
          </div>
        </button>
      </div>
    </md-accordion-title>

    <md-accordion-content>
      <p class="text-m p-16">100% Lana virgen. Forro: 100% Viscosa.</p>
    </md-accordion-content>
  </md-accordion-panel>

</md-accordion>
```

**Variante sin icono:**

```html
<md-accordion-title [config]="{ arrowIcon: true }">
  <div class="md-toggle-header">
    <button class="md-toggle-button btn btn--full btn-link text-m">
      <span class="title-m">Instrucciones de lavado</span>
      <div class="md-icon-anim">  <!-- icono sin animación de flecha -->
        <md-icon name="chevron"></md-icon>
      </div>
    </button>
  </div>
</md-accordion-title>
```

---

## CSS — Clases principales

<table class="cd-table">
  <thead><tr><th>Clase</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td><code>md-toggle</code></td><td>Wrapper del accordion completo</td></tr>
    <tr><td><code>md-toggle-item</code></td><td>Panel individual</td></tr>
    <tr><td><code>md-toggle-item.is-active</code></td><td>Panel abierto (añadida por Angular)</td></tr>
    <tr><td><code>md-toggle-header</code></td><td>Cabecera clickable del panel</td></tr>
    <tr><td><code>has-icon-pre</code></td><td>Indica que hay icono antes del texto</td></tr>
    <tr><td><code>md-toggle-button</code></td><td>Botón de toggle (btn btn--full btn-link)</td></tr>
    <tr><td><code>md-toggle-icon-container</code></td><td>Wrapper de icono + texto del título</td></tr>
    <tr><td><code>md-arrow-anim</code></td><td>Flecha que rota 180° al abrir</td></tr>
    <tr><td><code>md-icon-anim</code></td><td>Alternativa sin animación de flecha</td></tr>
  </tbody>
</table>

---

## Propiedades del componente Angular

```typescript
// md-accordion
@Input() multi: boolean = false;  // si true, permite varios paneles abiertos

// md-accordion-title
@Input() config: {
  arrowIcon: boolean;  // mostrar flecha animada
  ariaLevel: number;   // nivel de heading (1-6)
}
```

---

## Uso en la PDP

En la ficha de producto se usan 3 accordions anidados:

1. **Composición** — materiales del tejido
2. **Instrucciones de lavado** — iconos + texto
3. **Detalles del producto** — referencia, disponibilidad

```html
<!-- Patrón en product-page-product-details.component.html -->
<md-accordion [multi]="false">
  <md-accordion-panel *ngFor="let detail of productDetails">
    <md-accordion-title ...>{{ detail.title }}</md-accordion-title>
    <md-accordion-content>{{ detail.content }}</md-accordion-content>
  </md-accordion-panel>
</md-accordion>
```
