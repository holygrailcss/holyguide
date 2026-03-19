---
layout: _paginas/components/_component-doc.njk
permalink: /components/stepper/
page_section: components
tags: ["components"]
titulo: Stepper
descripcion: Control de cantidad numérica con botones de incremento y decremento. Se usa en el carrito de compra para ajustar el número de unidades de un producto.
date: 2026-03-09
badge: new
image: /assets/static/images/1.jpg
imageAlt: Quantity stepper component
---

<style>
  .cd-file { display: inline-block; background: #1e1e1e; color: #a9dc76; font-family: monospace; font-size: 12px; padding: 2px 8px; border-radius: 4px; }
  .cd-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  .cd-table th { text-align: left; padding: 8px 12px; background: #f5f5f5; border-bottom: 2px solid #e0e0e0; }
  .cd-table td { padding: 8px 12px; border-bottom: 1px solid #e8e8e8; vertical-align: top; }
  .cd-table code { font-size: 11px; background: #f0f0f0; padding: 1px 4px; border-radius: 3px; }
  .st-preview { display: flex; gap: 32px; align-items: center; flex-wrap: wrap; margin: 20px 0; }
  .st-stepper {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    height: 40px;
  }
  .st-btn {
    width: 40px; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: none; border: none; cursor: pointer;
    font-size: 18px; line-height: 1;
    padding: 0;
  }
  .st-btn:hover { background: rgba(0,0,0,0.06); }
  .st-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .st-value {
    width: 40px; text-align: center;
    font-size: 13px; letter-spacing: 0.08em;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    height: 100%; display: flex; align-items: center; justify-content: center;
  }
</style>

# Stepper

Control de cantidad numérica para el carrito de compra.

**Fuente:** <span class="cd-file">src/app/ui/quantity-stepper/</span> &nbsp; <span class="cd-file">src/assets/css/componentes/stepper.css</span>

---

## Preview

<div class="st-preview">
  <div>
    <p style="font-size:11px;color:#666;margin-bottom:8px">Default (qty: 2)</p>
    <div class="st-stepper">
      <button class="st-btn">−</button>
      <span class="st-value">2</span>
      <button class="st-btn">+</button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;color:#666;margin-bottom:8px">En mínimo (qty: 1)</p>
    <div class="st-stepper">
      <button class="st-btn" disabled>−</button>
      <span class="st-value">1</span>
      <button class="st-btn">+</button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;color:#666;margin-bottom:8px">En máximo (qty: 5)</p>
    <div class="st-stepper">
      <button class="st-btn">−</button>
      <span class="st-value">5</span>
      <button class="st-btn" disabled>+</button>
    </div>
  </div>
</div>

---

## HTML

```html
<!-- Angular: quantity-stepper component -->
<quantity-stepper
  [value]="quantity"
  [min]="1"
  [max]="stockAvailable"
  (valueChange)="onQuantityChange($event)">
</quantity-stepper>

<!-- HTML interno del componente -->
<div class="stepper">

  <!-- Botón decrementar -->
  <button class="stepper-btn"
          [class.disabled]="value <= min"
          [disabled]="value <= min"
          (click)="decreaseValue()"
          aria-label="Disminuir cantidad">
    <div class="minus-icon"></div>
  </button>

  <!-- Valor actual -->
  <div class="stepper-input label-m" aria-live="polite" aria-atomic="true">
    {{ value }}
  </div>

  <!-- Botón incrementar -->
  <button class="stepper-btn"
          [class.disabled]="value >= max"
          [disabled]="value >= max"
          (click)="increaseValue()"
          aria-label="Aumentar cantidad">
    <div class="plus-icon"></div>
  </button>

</div>
```

---

## CSS — Clases

<table class="cd-table">
  <thead><tr><th>Clase</th><th>Descripción</th></tr></thead>
  <tbody>
    <tr><td><code>stepper</code></td><td>Contenedor flex horizontal con borde</td></tr>
    <tr><td><code>stepper-btn</code></td><td>Botón de ± . Tamaño 40×40px por defecto</td></tr>
    <tr><td><code>stepper-btn.disabled</code></td><td>Estado deshabilitado: opacidad reducida, cursor bloqueado</td></tr>
    <tr><td><code>stepper-input</code></td><td>Valor numérico central, con clase <code>label-m</code></td></tr>
    <tr><td><code>minus-icon</code></td><td>Icono — (SVG o pseudo-elemento)</td></tr>
    <tr><td><code>plus-icon</code></td><td>Icono + (SVG o pseudo-elemento)</td></tr>
  </tbody>
</table>

---

## SCSS de referencia

```scss
// components/stepper.css (compilado de assets/css/componentes/stepper.css)
.stepper {
  display: flex;
  align-items: center;
  border: 1px solid $c-primary;
  height: 40px;
}

.stepper-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: rgba(0,0,0,0.06); }

  &.disabled,
  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.stepper-input {
  flex: 1;
  text-align: center;
  border-left:  1px solid $c-primary;
  border-right: 1px solid $c-primary;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  font-size: 13px;
  letter-spacing: 0.08em;
}
```

---

## Inputs del componente Angular

```typescript
// quantity-stepper.component.ts
@Input()  value: number = 1;
@Input()  min:   number = 1;
@Input()  max:   number = 99;
@Output() valueChange = new EventEmitter<number>();

increaseValue() {
  if (this.value < this.max) {
    this.value++;
    this.valueChange.emit(this.value);
  }
}

decreaseValue() {
  if (this.value > this.min) {
    this.value--;
    this.valueChange.emit(this.value);
  }
}
```

---

## Buenas prácticas

- Usar `aria-live="polite"` en el valor para que los lectores de pantalla anuncien los cambios.
- El botón `-` debe estar deshabilitado cuando `value === min` (nunca permitir 0 unidades).
- El botón `+` debe estar deshabilitado cuando `value === max` (stock máximo disponible).
- Añadir `aria-label` descriptivo en cada botón: "Disminuir cantidad" / "Aumentar cantidad".
- En mobile, el área táctil mínima debe ser 44×44px.
