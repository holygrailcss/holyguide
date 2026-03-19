---
layout: _paginas/develop/_dutti.njk
permalink: /develop/dutti-forms/
page_section: develop
tags: ["develop", "dutti", "scss", "forms", "inputs", "formularios"]
titulo: Dutti — Forms
descripcion: Documentación de la carpeta forms/ del frontend de Massimo Dutti. Inputs, checkboxes, dropdowns y componentes de formulario.
badge: new
date: 2026-03-09
image: /assets/static/images/1.jpg
imageAlt: Forms SCSS Dutti
---


**Ruta:** `code/apps/frontend/src/assets/styles/forms/`

> ⚠️ Ver también la iniciativa #19 del [Effort vs Impact Matrix](/develop/effort-impact/) para la estrategia de unificación de inputs.

---

## Listado de archivos

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `_custom-checkbox.scss` | Input | Checkbox personalizado con label e input oculto |
| `_custom-dropdown.scss` | Input | Dropdown custom (fullscreen en móvil) |
| `_input-code.scss` | Input | Input para códigos OTP / verificación |
| `_input-phone-combo.scss` | Input | Combo teléfono + prefijo de país |
| `_input-number.scss` | Input | Input numérico con botones +/- |
| `_input-custom-range.scss` | Input | Range / slider personalizado |
| `_text-area.scss` | Input | Área de texto |
| `_combo-document-type.scss` | Select | Selector de tipo de documento |
| `_gift-card-amount.scss` | Gift card | Selector de importe para gift card |
| `_gift-card-amount-virtual-details.scss` | Gift card | Detalles de gift card virtual |
| `_gift-card-physical-details.scss` | Gift card | Detalles de gift card física |

---

## Detalles por componente

### `_custom-checkbox.scss` — Checkbox accesible

Patrón de checkbox con input oculto visualmente pero accesible por teclado y screen reader.

```scss
.custom-checkbox {
  // Contenedor flex
  .checkbox-container {
    display: flex;
    gap: 32px;
  }

  // Elemento clickable
  .checkbox-item {
    cursor: pointer;
  }

  // Label visible
  .checkbox-label {
    max-height: 16px;
  }

  // Input oculto pero accesible
  .checkbox-input {
    opacity: 0;
    width: 1px;
    height: 1px;
    position: absolute;
  }
}
```

**Uso:**

```html
<div class="custom-checkbox">
  <div class="checkbox-container">
    <label class="checkbox-item">
      <input type="checkbox" class="checkbox-input" />
      <span class="checkbox-label">Acepto los términos</span>
    </label>
  </div>
</div>
```

---

### `_custom-dropdown.scss` — Dropdown custom

Dropdown que en móvil se abre a pantalla completa (mejor UX en táctil).

```scss
.custom-dropdown {
  // Contenedor relativo
  .custom-select-container {
    position: relative;
    width: 100%;
  }

  // En móvil: ocupa toda la pantalla
  .custom-option-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100dvh;
    z-index: 1000;
  }

  // Solo visible en móvil (< 768px)
  .show-in-mobile {
    @media (min-width: 768px) { display: none; }
  }
}
```

---

### `_input-code.scss` — Input OTP / código

Input de un solo carácter para verificación de código (OTP, PIN).

```scss
input-code {
  .code__input {
    border: 1px solid currentColor;
    text-align: center;
    font-size: 1.5rem;

    // Estado de error
    &.is-error {
      border-color: red;
    }
  }

  // Soporte RTL
  :host-context([dir="rtl"]) .code__input {
    direction: ltr;  // los códigos numéricos siempre LTR
  }
}
```

---

### `_input-phone-combo.scss` — Combo teléfono + prefijo

Combinación de selector de prefijo de país + campo de teléfono.

```scss
.input-phone-combo {
  display: flex;
  align-items: center;

  .prefix-selector { flex-shrink: 0; }
  .phone-input     { flex: 1; }
}
```

---

### `_input-custom-range.scss` — Slider de rango

Slider personalizado (p.ej. filtro de precio en PLP).

```scss
.input-custom-range {
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    background: currentColor;

    // Thumb (handle) personalizado
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #000;
      cursor: pointer;
    }
  }
}
```

---

### `_combo-document-type.scss` — Selector de documento

Combo que combina tipo de documento (DNI, NIE, pasaporte) + número.

```scss
.combo-document-type {
  display: flex;

  .document-type-selector { flex-shrink: 0; }
  .document-number-input  { flex: 1; }

  // Estado loading al verificar
  .btn-loading { ... }
  .btn-submit  { ... }
  .btn-anim    { /* animación de envío */ }
}
```

---

### Gift card — 3 archivos

Estilos para el flujo de compra de tarjetas regalo.

| Archivo | Propósito |
|---------|-----------|
| `_gift-card-amount.scss` | Selector de importe (botones de cantidad predefinida + input libre) |
| `_gift-card-amount-virtual-details.scss` | Formulario de gift card virtual (email destinatario, mensaje) |
| `_gift-card-physical-details.scss` | Formulario de gift card física (nombre, dirección de envío) |

---

## Clases de input del sistema global

Además de estos componentes de `forms/`, hay clases de input definidas en otros archivos:

| Clase | Archivo | Descripción |
|-------|---------|-------------|
| `.input` | `base/_base.scss` | Clase base de input |
| `.form-input-label-2` | `styles.scss` | Label flotante (float label) |
| `.input-prefix` | `styles.scss` | Input con prefijo (icono o texto) |
| `.input-phone` | `styles.scss` | Input de teléfono |
| `.textarea` | `styles.scss` | Área de texto base |
| `.select` | `styles.scss` | Select nativo estilizado |
| `.input-terms-*` | `styles.scss` | Inputs de términos y condiciones |
| `.input-custom-range` | `forms/` | Slider de rango personalizado |

> ⚠️ Hay duplicación entre `styles.scss` y `forms/`. Pendiente centralizar en `forms/_inputs.scss` (iniciativa #19).
