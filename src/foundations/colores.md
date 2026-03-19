---
layout: _paginas/foundations/_colors.njk
permalink: /colores/

titulo: Colores
descripcion: Paleta real del proyecto Massimo Dutti Frontend. Variables SCSS y clases CSS de texto, fondo y estados.

page_section: foundations
badge: new
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/colores.jpg
imageAlt: Paleta de colores del sistema de diseño Dutti
---

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin: 24px 0;
}
.color-swatch {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}
.color-swatch__preview {
  height: 56px;
  width: 100%;
}
.color-swatch__info {
  padding: 8px 10px;
}
.color-swatch__name {
  font-size: 11px; font-weight: 700;
  font-family: monospace;
  display: block; margin-bottom: 2px;
}
.color-swatch__hex {
  font-size: 10px; color: #777;
  font-family: monospace;
}
.color-swatch__class {
  font-size: 10px; color: #999;
  font-family: monospace;
}

.opacity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  margin: 16px 0;
}
.opacity-swatch {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}
.opacity-swatch__bar {
  height: 24px;
  background: repeating-linear-gradient(45deg, #ccc, #ccc 4px, #fff 4px, #fff 8px);
  position: relative;
}
.opacity-swatch__bar span {
  position: absolute; inset: 0;
}
.opacity-swatch__label {
  font-size: 9px; font-family: monospace;
  padding: 4px 6px; color: #666;
}
</style>

## Paleta principal

### Grises estructurales

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#000000"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-primary</span>
      <span class="color-swatch__hex">#000000</span>
      <span class="color-swatch__class">.c-primary</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#000000;border-bottom:1px solid #e0e0e0"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-black</span>
      <span class="color-swatch__hex">#000000</span>
      <span class="color-swatch__class">.c-black</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#737373"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-dark-grey</span>
      <span class="color-swatch__hex">#737373</span>
      <span class="color-swatch__class">.c-dark-grey</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#a9a9a9"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-middle-grey</span>
      <span class="color-swatch__hex">#a9a9a9</span>
      <span class="color-swatch__class">.c-middle-grey</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#f0f0f0"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-light-grey</span>
      <span class="color-swatch__hex">#f0f0f0</span>
      <span class="color-swatch__class">.c-light-grey</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#ffffff;border-bottom:1px solid #e0e0e0"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-white</span>
      <span class="color-swatch__hex">#ffffff</span>
      <span class="color-swatch__class">.c-white</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#e3e3e3"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-sk-grey</span>
      <span class="color-swatch__hex">#e3e3e3</span>
      <span class="color-swatch__class">— skeleton</span>
    </div>
  </div>
</div>

### Colores de estado

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#b40016"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-error</span>
      <span class="color-swatch__hex">#b40016</span>
      <span class="color-swatch__class">.c-error</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#12882c"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-success</span>
      <span class="color-swatch__hex">#12882c</span>
      <span class="color-swatch__class">.c-success</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#1a32a4"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-info</span>
      <span class="color-swatch__hex">#1a32a4</span>
      <span class="color-swatch__class">.c-info</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#ffc700"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-warning</span>
      <span class="color-swatch__hex">#ffc700</span>
      <span class="color-swatch__class">.c-warning</span>
    </div>
  </div>
</div>

### Colores de marca / programa Feel

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#fb9962"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-feel</span>
      <span class="color-swatch__hex">#fb9962</span>
      <span class="color-swatch__class">.c-feel</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#c94c07"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-feel-dark</span>
      <span class="color-swatch__hex">#c94c07</span>
      <span class="color-swatch__class">.c-feel-dark</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#b99d6b"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-special</span>
      <span class="color-swatch__hex">#b99d6b</span>
      <span class="color-swatch__class">— gold</span>
    </div>
  </div>
</div>

### Fondos

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#f0f0f0"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$bg-light</span>
      <span class="color-swatch__hex">#f0f0f0</span>
      <span class="color-swatch__class">.bg-light</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#f4f2ed"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">$c-bg-cream</span>
      <span class="color-swatch__hex">#f4f2ed</span>
      <span class="color-swatch__class">.bg-cream</span>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background:#ffffff;border-bottom:1px solid #e0e0e0"></div>
    <div class="color-swatch__info">
      <span class="color-swatch__name">— blanco</span>
      <span class="color-swatch__hex">#ffffff</span>
      <span class="color-swatch__class">.bg-clear</span>
    </div>
  </div>
</div>


## Opacidades del color primario

<div class="opacity-grid">
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar"><span style="background:rgba(0,0,0,0.03)"></span></div>
    <div class="opacity-swatch__label">$c-primary-3<br>rgba(0,0,0,0.03)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar"><span style="background:rgba(0,0,0,0.15)"></span></div>
    <div class="opacity-swatch__label">$c-primary-15<br>rgba(0,0,0,0.15)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar"><span style="background:rgba(0,0,0,0.30)"></span></div>
    <div class="opacity-swatch__label">$c-primary-30<br>rgba(0,0,0,0.30)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar"><span style="background:rgba(0,0,0,0.60)"></span></div>
    <div class="opacity-swatch__label">$c-primary-60<br>rgba(0,0,0,0.60)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar"><span style="background:rgba(0,0,0,0.97)"></span></div>
    <div class="opacity-swatch__label">$c-primary-97<br>rgba(0,0,0,0.97)</div>
  </div>
</div>

### Opacidades del blanco (secundario)

<div class="opacity-grid">
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar" style="background:#555"><span style="background:rgba(255,255,255,0.15)"></span></div>
    <div class="opacity-swatch__label">$c-secondary-15<br>rgba(255,255,255,0.15)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar" style="background:#555"><span style="background:rgba(255,255,255,0.30)"></span></div>
    <div class="opacity-swatch__label">$c-secondary-30<br>rgba(255,255,255,0.30)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar" style="background:#555"><span style="background:rgba(255,255,255,0.60)"></span></div>
    <div class="opacity-swatch__label">$c-secondary-60<br>rgba(255,255,255,0.60)</div>
  </div>
  <div class="opacity-swatch">
    <div class="opacity-swatch__bar" style="background:#555"><span style="background:rgba(255,255,255,0.97)"></span></div>
    <div class="opacity-swatch__label">$c-secondary-97<br>rgba(255,255,255,0.97)</div>
  </div>
</div>


## Referencia completa de variables

| Variable SCSS | Valor | Clase CSS | Uso |
|---|---|---|---|
| `$c-primary` | `#000000` | `.c-primary` | Color de texto principal |
| `$c-black` | `#000000` | `.c-black` | Negro puro |
| `$c-dark-grey` | `#737373` | `.c-dark-grey` | Texto secundario |
| `$c-middle-grey` | `#a9a9a9` | `.c-middle-grey` | Texto deshabilitado / placeholder |
| `$c-light-grey` | `#f0f0f0` | `.c-light-grey` | Fondo / texto sobre oscuro |
| `$c-white` | `#ffffff` | `.c-white` | Blanco |
| `$c-sk-grey` | `#e3e3e3` | — | Skeleton loader |
| `$c-error` | `#b40016` | `.c-error` | Error, destructivo |
| `$c-success` | `#12882c` | `.c-success` | Éxito / validación |
| `$c-info` | `#1a32a4` | `.c-info` | Información |
| `$c-warning` | `#ffc700` | `.c-warning` | Advertencia |
| `$c-feel` | `#fb9962` | `.c-feel` | Programa Feel |
| `$c-feel-dark` | `#c94c07` | `.c-feel-dark` | Feel oscuro |
| `$c-special` | `#b99d6b` | — | Dorado / especial |
| `$bg-light` | `#f0f0f0` | `.bg-light` | Fondo claro |
| `$c-bg-cream` | `#f4f2ed` | `.bg-cream` | Fondo crema |


## Cómo usar

```scss
// Texto
.precio-rebajado { color: $c-error; }
.mensaje-exito   { color: $c-success; }

// Fondo
.seccion-light   { background-color: $bg-light; }
.banner-crema    { background-color: $c-bg-cream; }

// Overlay
.modal-overlay   { background-color: $c-primary-60; }
```

```html
<span class="c-error">Texto de error</span>
<div class="bg-light">Sección sobre fondo claro</div>
```
