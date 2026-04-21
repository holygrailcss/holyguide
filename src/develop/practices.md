---
layout: _paginas/develop/_practices.njk
permalink: /practices/
page_section: develop
tags: ["Estructuras modulares", "develop", "buenas prácticas"]
titulo: Buenas Prácticas
descripcion: Guía de buenas prácticas para el desarrollo CSS/SCSS/HTML con HolyGuide.
---

<style>
  .bp-callout {
    border-left: 4px solid currentColor;
    padding: 16px 20px;
    margin: 24px 0;
    border-radius: 0 8px 8px 0;
    font-size: 13px;
    line-height: 1.6;
  }
  .bp-callout--danger  { color: #c0392b; background: #fdf3f2; }
  .bp-callout--warning { color: #d35400; background: #fef9f0; }
  .bp-callout--tip     { color: #27ae60; background: #f0faf4; }
  .bp-callout--info    { color: #2980b9; background: #f0f7ff; }
  .bp-callout strong   { font-weight: 700; }

  .bp-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }
  @media (max-width: 768px) { .bp-compare { grid-template-columns: 1fr; } }

  .bp-compare__block { border-radius: 8px; overflow: hidden; }
  .bp-compare__label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .bp-compare__label--bad  { background: #fde8e8; color: #c0392b; }
  .bp-compare__label--good { background: #e8f8ee; color: #27ae60; }
  .bp-compare__block pre {
    margin: 0;
    border-radius: 0;
    font-size: 12px;
    line-height: 1.6;
  }

  .bp-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    vertical-align: middle;
    margin-left: 8px;
  }
  .bp-badge--high   { background: #fde8e8; color: #c0392b; }
  .bp-badge--medium { background: #fff3e0; color: #e65100; }
  .bp-badge--low    { background: #e8f8ee; color: #27ae60; }

  .bp-section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  .bp-section-num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px; height: 32px;
    border-radius: 50%;
    background: #000;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }
</style>

# Buenas Prácticas de Desarrollo

Guía de los mínimos a seguir en el desarrollo de componentes y templates con el sistema HolyGuide.

---

<div class="bp-section-title">
  <span class="bp-section-num">1</span>
  <h2 style="margin:0">No usar <code>!important</code> <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

`!important` rompe la cascada natural de CSS. Cuando aparece en muchos archivos, los estilos se sobreescriben entre sí en una batalla sin fin.

<div class="bp-callout bp-callout--danger">
  <strong>Regla:</strong> Si necesitas <code>!important</code> para que algo funcione, el problema real es que hay demasiada especificidad en otra parte. Resuelve la especificidad, no la parchees.
</div>

### Ejemplos de malas praxis

```scss
/* ❌ MAL: las clases utilitarias nunca deberían necesitar
   !important — indica que los selectores del proyecto son
   demasiado específicos */
.font-size-large  { font-size: 32px !important; }
.font-size-medium { font-size: 16px !important; }
.font-size-small  { font-size: 10px !important; }
```

```scss
/* ❌ MAL: !important encadenado — un !important necesita
   otro !important para contrarrestarlo. Deuda técnica
   explícita que nunca se resuelve */
.elemento {
  padding-left: 8px !important; // cuando se quite el !important de pl-0 se podrá quitar este
}
```

```scss
/* ❌ MAL: 6 !important consecutivos para luchar contra
   estilos que una librería JS aplica inline */
.gsap-overlay {
  position: relative !important;
  top: 0 !important;
}
.gsap-content {
  height: auto !important;
  overflow-y: initial !important;
}
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
.mi-componente .texto {
  font-size: 14px !important;
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// Reducir especificidad del selector original
.texto { font-size: 14px; }

// O usar CSS custom property
.mi-componente { --texto-size: 14px; }
.texto { font-size: var(--texto-size, 16px); }
```

  </div>
</div>

**La única excepción válida:** clases de utilidad de accesibilidad (`.sr-only`, `.skip-link`) y resets críticos con alcance muy controlado.

---

<div class="bp-section-title">
  <span class="bp-section-num">2</span>
  <h2 style="margin:0">Mantener especificidad baja <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

Los selectores de alta especificidad crean deuda: cada sobreescritura requiere una especificidad aún mayor.

### Ejemplos de malas praxis

```scss
/* ❌ MAL: 5 niveles = especificidad (0,5,0)
   Un cambio en el HTML rompe esta regla silenciosamente */
.seccion .contenedor .lista .grid .item {
  @media (min-width: $break-md) {
    display: block;
  }
}
```

```scss
/* ❌ MAL: 4 niveles + !important para display: none.
   Indica que el elemento original también tiene 4 niveles — círculo vicioso */
body .wrapper .checkout .radiobox {
  display: none !important;
}
```

```scss
/* ❌ MAL: ::ng-deep rompe la encapsulación de componentes Angular,
   está DEPRECADO y genera selectores compilados de 7 niveles */
&.phantom-white:not(.is-stick) {
  .menu-right li .link-raw {
    & ::ng-deep md-icon svg path {
      fill: $c-white;
    }
  }
}
```

<div class="bp-callout bp-callout--danger">
  <strong>::ng-deep está deprecado en Angular.</strong> No usar en código nuevo. Para estilos de componentes de terceros, usar CSS custom properties o <code>ViewEncapsulation.None</code> con scope de clase.
</div>

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
.seccion .modulo .lista .item .texto span {
  color: red;
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// Clase BEM directa, máximo 2 niveles de contexto
.texto--destacado { color: red; }

// O con contexto mínimo necesario
.seccion--activa .texto { color: red; }
```

  </div>
</div>

**Regla práctica:** máximo **3 niveles** de selector. Si necesitas más, refactoriza el HTML o crea una clase específica.

---

<div class="bp-section-title">
  <span class="bp-section-num">3</span>
  <h2 style="margin:0">Usar variables para colores, z-index y espaciados <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

Los valores hardcodeados (números mágicos) dificultan el mantenimiento y crean inconsistencias visuales.

### Ejemplos de malas praxis

```scss
/* ❌ MAL: el token de color ya existe en el DS.
   Usarlo como hex crudo significa que si cambia el token,
   este archivo queda desactualizado */
.elemento { color: #a9a9a9 !important; }
```

```scss
/* ❌ MAL: z-index de 6 dígitos indica una guerra de capas.
   En el mismo proyecto conviven: 10, 90, 999, 1000, 2000, 9000, 999999 */
.overlay { z-index: 999999; }
```

```scss
/* ❌ MAL: color de foco de accesibilidad hardcodeado.
   Si el equipo lo cambia, habrá que buscarlo manualmente */
.elemento:focus-visible {
  outline: 2px solid #383bff !important;
}
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
.modal    { z-index: 999999; }
.header   { z-index: 1200; }
.dropdown { z-index: 9000; }
.texto    { color: #a9a9a9; }
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// abstract/_variables.scss — sistema de capas semántico
$z-base:    10;
$z-sticky:  100;
$z-drawer:  500;
$z-header:  1200;
$z-modal:   2000;
$z-overlay: 2100;
$z-toast:   3000;

// Tokens de color del DS
$c-middle-grey: #a9a9a9;
$c-focus:       #383bff;

// Uso
.modal  { z-index: $z-modal; }
.header { z-index: $z-header; }
.texto  { color: $c-middle-grey; }
```

  </div>
</div>

---

<div class="bp-section-title">
  <span class="bp-section-num">4</span>
  <h2 style="margin:0">Eliminar TODOs y gestionar la deuda técnica <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

Un TODO sin fecha, sin ticket y sin dueño es deuda técnica que nunca se resuelve.

### Ejemplos de malas praxis

```scss
/* ❌ MAL: ¿quién lo escribe? ¿cuándo? ¿cuál es el criterio de "hecho"? */
// TODO barra submenu scroll en firefox

// TODO eliminar cuando el componente esté en Angular
body .wrapper .checkout .radiobox {
  display: none !important;
}

// TODO: menu 12/24  ← diciembre 2024, sigue sin resolverse
@keyframes parpadeo { ... }
```

```scss
/* ❌ MAL: todo el archivo marcado como "revisar".
   Ningún dev sabe si los estilos que ve son válidos */
// TODO PRODUCT VIEW NEW REVISAR
// TODO MIGRAR A DS
.anim-skeleton { ... }
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// TODO arreglar esto
// TODO eliminar cuando...
// TODO REVISAR
.clase { display: none !important; }
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// [TICKET-123] Eliminar cuando el modal de stock
// migre a Angular. Responsable: @dev. Sprint: 2026-Q2
// Tracking: https://jira.../TICKET-123
.clase { display: none; }
```

  </div>
</div>

**Protocolo para TODOs:**
1. Si tiene solución rápida (< 1 hora) → resuélvelo ahora
2. Si es deuda técnica → crea un ticket con criterio de aceptación
3. El comentario en código debe tener: número de ticket + descripción corta
4. Sin ticket → no es un TODO válido, es código abandonado

---

<div class="bp-section-title">
  <span class="bp-section-num">5</span>
  <h2 style="margin:0">No duplicar código — Una fuente de verdad <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

Cuando el mismo selector está definido en múltiples archivos, los cambios solo afectan al último que carga en cascada y produce comportamientos inesperados.

### Ejemplo de mala praxis

```scss
/* ❌ MAL: el mismo bloque de código copiado 3 veces
   en el mismo archivo — en líneas 197, 336 y 1129 */
background: $c-white;
z-index: 99;
padding: 16px 16px 0 16px;
// ...
position: sticky;
z-index: 50;
top: 244px;
/* Si top: 244px cambia, hay que modificarlo en 3 sitios */
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// En _checkout.scss
.btn-primary {
  background: #000;
  color: #fff;
  padding: 12px 24px;
}

// En _my-account.scss (copia exacta)
.btn-primary {
  background: #000;
  color: #fff;
  padding: 12px 24px;
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// partials/_buttons.scss — única fuente de verdad
.btn-primary {
  background: $c-primary;
  color: $c-white;
  padding: $padding-btn;
}

// Cada archivo solo añade variaciones de contexto
.checkout .btn-primary { width: 100%; }
```

  </div>
</div>

---

<div class="bp-section-title">
  <span class="bp-section-num">6</span>
  <h2 style="margin:0">Estructura correcta de archivos SCSS <span class="bp-badge bp-badge--low">Severidad baja</span></h2>
</div>

Cada archivo SCSS debe importar sus dependencias y seguir un orden claro.

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// Variables sin importar — ¿de dónde vienen?
.componente {
  color: $c-primary;
  padding: $padding-btn;
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// ==============================================
// COMPONENTE — Descripción breve
// ==============================================

// Imports — siempre al principio
@use "../../../../node_modules/holygrail2/scss/hg-lite/abstract/_index.scss" as *;

// ==============================================
// BASE STYLES
// ==============================================

.componente { ... }

// ==============================================
// STATES
// ==============================================

.componente.is-active { ... }

// ==============================================
// RESPONSIVE
// ==============================================

@media (min-width: $break-md) { ... }

// ==============================================
// RTL SUPPORT (si aplica)
// ==============================================

.is-rtl .componente { ... }
```

  </div>
</div>

---

<div class="bp-section-title">
  <span class="bp-section-num">7</span>
  <h2 style="margin:0">Nomenclatura y selectores JavaScript <span class="bp-badge bp-badge--low">Severidad baja</span></h2>
</div>

Las clases CSS y los selectores JavaScript no deben mezclarse.

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```html
<!-- Usar clases de estilo como selectores JS -->
<button class="btn-primary submit-action">Enviar</button>
<script>
  // Si cambias el nombre CSS, rompes el JS
  document.querySelector('.btn-primary')
</script>
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```html
<!-- Prefijo .js- para selectores JavaScript -->
<button class="btn-primary js-submit-form">Enviar</button>
<script>
  // El JS es independiente del CSS
  document.querySelector('.js-submit-form')
</script>
```

  </div>
</div>

**Convención de prefijos:**

| Prefijo | Uso | Ejemplo |
|---------|-----|---------|
| Sin prefijo | Estilos del Design System | `.btn-primary`, `.hg-header` |
| `hg-` | HolyGrail DS | `.hg-menu-panel`, `.hg-footer` |
| `js-` | Selectores JavaScript únicamente | `.js-submit`, `.js-toggle-menu` |
| `is-` | Estados de UI | `.is-active`, `.is-open`, `.is-loading` |
| `has-` | Modificadores de contexto | `.has-light`, `.has-error` |

---

<div class="bp-section-title">
  <span class="bp-section-num">8</span>
  <h2 style="margin:0">Responsive y RTL desde el diseño <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

El responsive y el soporte RTL no son una capa de parche — deben pensarse desde el inicio.

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// RTL como archivo separado de parches
// _rtl.scss (solo correcciones a posteriori)
.is-rtl .btn-secondary {
  float: inherit !important; // parche forzado
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// RTL integrado en el propio componente
.btn-secondary {
  margin-left: 8px;

  // RTL al final del mismo archivo
  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 8px;
  }
}
```

  </div>
</div>

**Breakpoints del proyecto** — Usar siempre variables, nunca valores sueltos:

```scss
// abstract/_breakpoints.scss
$break-xs:  1px;    // móvil
$break-sm:  768px;  // tablet
$break-md:  992px;  // desktop
$break-lg:  1280px; // desktop grande
$break-xl:  1440px;
$break-2xl: 1600px;
$break-3xl: 1920px;
```

---

<div class="bp-section-title">
  <span class="bp-section-num">9</span>
  <h2 style="margin:0">Accesibilidad no es opcional <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```html
<!-- Elemento no semántico como botón -->
<div onclick="enviar()">Enviar</div>

<!-- Input sin label asociado -->
<input type="text" placeholder="Email">

<!-- Icono sin descripción -->
<svg>...</svg>
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```html
<!-- Elemento semántico correcto -->
<button type="button" onclick="enviar()">Enviar</button>

<!-- Label visible asociado -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Icono decorativo oculto, icono funcional con label -->
<svg aria-hidden="true">...</svg>
<button aria-label="Cerrar menú"><svg>...</svg></button>
```

  </div>
</div>

```scss
// Siempre :focus-visible (no :focus)
// para no interferir con la navegación por ratón
.btn:focus-visible {
  outline: 2px solid $c-focus;
  outline-offset: 2px;
}
```

---

<div class="bp-section-title">
  <span class="bp-section-num">10</span>
  <h2 style="margin:0">Checklist antes de hacer commit</h2>
</div>

### CSS/SCSS

- [ ] ¿El selector tiene 3 niveles o menos?
- [ ] ¿No hay ningún `!important` nuevo?
- [ ] ¿Los colores usan variables (`$c-*`) en lugar de hex directos?
- [ ] ¿Los z-index usan variables semánticas (`$z-modal`, etc.)?
- [ ] ¿Los TODOs llevan número de ticket?
- [ ] ¿Los estilos nuevos están en el archivo correcto (no en el global)?
- [ ] ¿Incluiste responsive para los breakpoints necesarios?
- [ ] ¿Hay soporte RTL si el componente tiene `margin`, `padding`, `float` o `text-align`?

### HTML

- [ ] ¿Hay un solo `<h1>` por página?
- [ ] ¿Los `<h2>`, `<h3>` tienen orden lógico?
- [ ] ¿Los botones son `<button>` y los links son `<a>`?
- [ ] ¿Los inputs tienen `<label>` asociado?
- [ ] ¿Los selectores JavaScript usan prefijo `.js-`?
- [ ] ¿Los iconos decorativos tienen `aria-hidden="true"`?
- [ ] ¿Las imágenes tienen `alt` descriptivo?

### JavaScript

- [ ] ¿Los selectores usan `.js-*` o `data-*`, no clases de estilo?
- [ ] ¿Los comentarios son solo al inicio de funciones?
- [ ] ¿Los comentarios explican el "por qué", no el "qué"?
