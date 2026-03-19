---
layout: _paginas/components/_input.njk
permalink: /input/

titulo: Input
descripcion: Los inputs se utilizan para permitir a los usuarios proporcionar texto cuando se espera que la entrada sea breve. Además de texto plano, los inputs admiten varios tipos de texto, incluyendo contraseñas y números.

date: 2023-06-19
fecha: "19 de junio de 2023"
badge: updated
tags: ["Estructuras modulares", "web design", "components"]
image: /assets/static/components/input.jpg
imageAlt: Ilustración de un diseño de sistema web
---

# Inputs

Los inputs se utilizan para permitir a los usuarios proporcionar texto cuando se espera que la entrada sea breve. Además de texto plano, los inputs admiten varios tipos de texto, incluyendo contraseñas y números.

## Inputs collection

---

## Sistema de inputs del proyecto Dutti

### Input con label flotante (float label)

El patrón principal del proyecto. El label sube al activar el input.

```html
<!-- Input estándar con label flotante -->
<div class="form-input-label-2" [class.is-error]="control.invalid && control.touched">
  <input class="input" type="text" placeholder=" " />
  <label>Email *</label>

  <!-- Mensaje de error -->
  <div class="validation-error-wrap">
    <div class="text-m c-error is-flex" role="alert">
      <span>Este campo es requerido</span>
    </div>
  </div>
</div>
```

### Input password con toggle visibilidad

```html
<div class="form-input-label-2 has-ico-post">
  <input class="input" [type]="showPassword ? 'text' : 'password'" />
  <label>Contraseña</label>
  <div class="ico-post">
    <button class="btn btn-tertiary text-m" (click)="togglePassword()">
      <md-icon [name]="showPassword ? 'preview-off' : 'preview'"></md-icon>
    </button>
  </div>
</div>
```

### Dropdown / select personalizado

```html
<div class="custom-select-container">
  <div class="form-input-label-2">
    <input class="input text-12-r" role="combobox" readonly />
    <label>País</label>
    <div class="icon-arrow">
      <md-icon name="chevron-right"></md-icon>
    </div>
  </div>
  <!-- Panel de opciones (fullscreen en móvil) -->
  <div class="custom-option-container" role="listbox">
    <div class="option text-m" role="option">España</div>
    <div class="option text-m" role="option">Francia</div>
  </div>
</div>
```

### Clases CSS de inputs

| Clase | Función |
|-------|---------|
| `form-input-label-2` | Wrapper con label flotante |
| `input` | El `<input>` en sí |
| `is-error` | Estado de error (borde rojo) |
| `has-ico-post` | Indica icono a la derecha del input |
| `ico-post` | Contenedor del icono sufijo |
| `validation-error-wrap` | Envuelve los mensajes de error |
| `c-error` | Color rojo para mensajes de error |
| `custom-select-container` | Wrapper del dropdown personalizado |
| `custom-option-container` | Panel de opciones (fixed en móvil) |
