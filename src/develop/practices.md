---
layout: _paginas/develop/_practices.njk
permalink: /practices/
page_section: develop
tags: ["Estructuras modulares", "develop", "buenas prácticas"]
titulo: Buenas Prácticas
descripcion: Guía de buenas prácticas para el desarrollo con HolyGuide, con ejemplos reales de malas praxis detectadas en el proyecto Dutti.
badge: updated
date: 2026-03-09
fecha: 9 de marzo de 2026
image: /assets/static/images/1.jpg
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

  .bp-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin: 24px 0;
  }
  .bp-stat {
    background: #f8f8f8;
    border-radius: 12px;
    padding: 20px 16px;
    text-align: center;
  }
  .bp-stat__num {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 4px;
  }
  .bp-stat__label { font-size: 12px; color: #666; }
  .bp-stat--red    .bp-stat__num { color: #c0392b; }
  .bp-stat--orange .bp-stat__num { color: #e65100; }
  .bp-stat--yellow .bp-stat__num { color: #f39c12; }

  .bp-file-badge {
    display: inline-block;
    background: #1e1e1e;
    color: #a9dc76;
    font-family: monospace;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    margin: 2px 0;
  }
  .bp-file-badge--red { background: #3b1010; color: #e06c75; }

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

  .bp-worst-file {
    background: #fff8f0;
    border: 1px solid #ffd099;
    border-radius: 8px;
    padding: 16px 20px;
    margin: 20px 0;
    font-size: 13px;
  }
  .bp-worst-file__title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .bp-worst-file table { font-size: 12px; }
  .bp-worst-file td, .bp-worst-file th { padding: 4px 12px 4px 0; }
</style>

## Buenas Prácticas de Desarrollo

Guía completa de buenas prácticas para CSS/SCSS/HTML, con **ejemplos reales de malas praxis detectadas en el proyecto Dutti**.


## Diagnóstico del proyecto

<div class="bp-stats">
  <div class="bp-stat bp-stat--red">
    <div class="bp-stat__num">~270</div>
    <div class="bp-stat__label">usos de !important</div>
  </div>
  <div class="bp-stat bp-stat--red">
    <div class="bp-stat__num">55+</div>
    <div class="bp-stat__label">archivos con !important</div>
  </div>
  <div class="bp-stat bp-stat--red">
    <div class="bp-stat__num">11</div>
    <div class="bp-stat__label">archivos con selector .btn</div>
  </div>
  <div class="bp-stat bp-stat--orange">
    <div class="bp-stat__num">~20</div>
    <div class="bp-stat__label">usos de ::ng-deep</div>
  </div>
  <div class="bp-stat bp-stat--orange">
    <div class="bp-stat__num">25+</div>
    <div class="bp-stat__label">TODOs sin ticket</div>
  </div>
  <div class="bp-stat bp-stat--yellow">
    <div class="bp-stat__num">2.226</div>
    <div class="bp-stat__label">líneas en _modals_legacy</div>
  </div>
</div>

<div class="bp-worst-file">
  <div class="bp-worst-file__title">⚠️ Archivos más problemáticos</div>
  <table>
    <tr><th>Archivo</th><th>!important</th><th>Problema principal</th></tr>
    <tr><td><code>partials/chats/_url-chat.scss</code></td><td>97</td><td>Chat de terceros sobreescrito completamente</td></tr>
    <tr><td><code>elements/_modals_legacy.scss</code></td><td>35</td><td>2.226 líneas, código AngularJS sin migrar</td></tr>
    <tr><td><code>partials/chats/chat-page.component.scss</code></td><td>17</td><td>Componente de chat con sobreescrituras masivas</td></tr>
    <tr><td><code>process/_dev-studio-templates.scss</code></td><td>15</td><td>Heights hardcodeadas con !important</td></tr>
    <tr><td><code>partials/_blame.scss</code></td><td>13</td><td>Archivo de parches y TODOs acumulados</td></tr>
  </table>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">1</span>
  <h2 style="margin:0">No usar <code>!important</code> <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

`!important` rompe la cascada natural de CSS. Con ~270 usos en el proyecto, los estilos se sobreescriben en una batalla sin fin donde cada parche requiere otro parche.

<div class="bp-callout bp-callout--danger">
  <strong>Regla:</strong> Si necesitas !important para que algo funcione, el problema real es que hay demasiada especificidad en otra parte. Resuelve la especificidad, no la parchees.
</div>

### Malas praxis detectadas

**<span class="bp-file-badge bp-file-badge--red">partials/_blame.scss</span>** — Utilidades de tipografía que admiten derrota:

```scss
/* ❌ MAL: si las utilidades necesitan !important, los selectores del
   resto del CSS son demasiado específicos. Hay que limpiar la fuente,
   no forzar la sobrescritura */
.font-size-huge   { font-size: 32px !important; }
.font-size-big    { font-size: 18px !important; }
.font-size-normal { font-size: 16px !important; }
.font-size-small  { font-size: 10px !important; }
.font-size-tiny   { font-size: 8px  !important; }
.font-size-h1     { font-size: 32px !important; }
```

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — `!important` dentro de `@keyframes` (no tiene ningún efecto):

```scss
/* ❌ MAL: !important dentro de @keyframes no hace nada.
   Demuestra que se añadió !important sin entender cómo funciona */
.ngdialog.ngdialog-disabled-animation .ngdialog-content {
  -webkit-animation: none !important;
  animation: none !important;
}
```

**<span class="bp-file-badge bp-file-badge--red">styles.scss</span>** — Resetear estilos inline de GSAP con !important:

```scss
/* ❌ MAL: 4 !important consecutivos para luchar contra
   estilos que GSAP aplica via JavaScript inline.
   La solución correcta es controlar GSAP desde JS, no desde CSS */
@media (min-width: $break-sm) {
  .gsapoverlay {
    position: relative !important;
    top: 0 !important;
  }
  .gsaptopbar {
    position: relative !important;
    top: 0 !important;
    transform: translate(0, 0) !important;
    left: 0 !important;
  }
}
```

**<span class="bp-file-badge bp-file-badge--red">process/_dev-studio-templates.scss</span>** — Heights hardcodeadas con !important:

```scss
/* ❌ MAL: cada height diferente requiere su propio !important,
   es imposible sobreescribir desde el exterior */
height: 440px  !important;
height: 1001px !important;
height: 310px  !important;
aspect-ratio: 2 / 3 !important;
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// Sobreescribir con !important
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

**La única excepción válida:** clases de accesibilidad (`.sr-only`, `.skip-link`) y resets críticos con alcance muy controlado.


<div class="bp-section-title">
  <span class="bp-section-num">2</span>
  <h2 style="margin:0">Mantener especificidad baja — máximo 3 niveles <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

Los selectores de alta especificidad crean deuda: cada sobrescritura requiere una especificidad aún mayor, generando un bucle.

### Malas praxis detectadas

**<span class="bp-file-badge bp-file-badge--red">partials/_blame.scss</span>** — 7 niveles de selector para un widget de accesibilidad externo:

```scss
/* ❌ MAL: 7 niveles de profundidad para ocultar un elemento de INDmenu,
   un widget externo. Esto solo funciona mientras el widget no cambie su HTML */
#INDmenu.INDmenu-loaded
  .INDmenuBody .INDmenuRow .INDmenuPanel
  #INDfontsize-radioGroup
  .INDfontsize-radioWrap label::before {
    display: none !important;
}
```

**<span class="bp-file-badge bp-file-badge--red">partials/_shopcart.scss</span>** — 5 niveles para un `display: block`:

```scss
/* ❌ MAL: 5 niveles = especificidad (0,5,0)
   Un cambio en el HTML rompe esta regla silenciosamente */
.cart .cart-container-items .shop-cart .shop-cart-grid .shop-cart-item {
  @media (min-width: $break-md) {
    display: block;
  }
}

/* ❌ MAL: mismo problema, 5 niveles para padding-left: 8px */
.wish .wishlist-item .shop-cart-grid .shop-cart-item .shop-cart-item-text {
  padding-left: 8px;
}
```

**<span class="bp-file-badge bp-file-badge--red">styles.scss</span>** — `::ng-deep` con 7 niveles compilados (deprecado desde Angular 7):

```scss
/* ❌ MAL: ::ng-deep rompe la encapsulación de componentes Angular,
   está deprecado y el selector compilado tiene 7 niveles */
&.phantom-white:not(.is-stick) {
  .menu-right li .link-raw {
    & ::ng-deep md-icon svg path {
      fill: $c-white; // selector compilado real: 7 niveles
    }
  }
}
```

<div class="bp-callout bp-callout--danger">
  <strong>::ng-deep está deprecado en Angular desde la versión 7.</strong> ~20 usos en el proyecto. No usar en código nuevo. Para componentes de terceros, usar CSS custom properties o mover estilos a nivel global con scope de clase contenedora.
</div>

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// Selector profundo e hiperespecífico
.seccion .modulo .lista .item .texto span {
  color: red;
}

// Uso de ::ng-deep (deprecado)
:host ::ng-deep .third-party { color: red; }
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// Clase BEM directa, máximo 2 niveles de contexto
.texto--destacado { color: red; }

// Con contexto mínimo
.seccion--activa .texto { color: red; }

// Para terceros: scope de clase contenedora global
.mi-widget-wrapper .third-party { color: red; }
```

  </div>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">3</span>
  <h2 style="margin:0">Usar variables para colores, z-index y espaciados <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

Los valores hardcodeados (magic numbers) hacen imposible el mantenimiento y crean inconsistencias que acaban siendo imposibles de auditar.

### Malas praxis detectadas — z-index

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — El z-index más absurdo del proyecto:

```scss
/* ❌ MAL: z-index de 10 dígitos. Nadie puede razonar sobre
   qué capa queda encima de qué cuando los valores son así */
.md-banners { z-index: 1292929000; }  // ← 1.292.929.000

/* ❌ MAL: estos z-index conviven en el mismo archivo sin sistema */
body .ngdialog { z-index: 100001; }
```

**Inventario de z-index anárquicos** en el proyecto:

```scss
/* ❌ MAL: estos valores están en distintos archivos,
   ningún dev sabe cómo se ordenan las capas */
z-index: 10          // _blame.scss
z-index: 3000        // _blame.scss (widget INDWrap)
z-index: 9000        // styles.scss (loader)
z-index: 9999        // components/
z-index: 9999999     // components/custom-controls-video
z-index: 1292929     // checkout.scss
z-index: 1292929000  // _modals_legacy.scss ← record
```

### Malas praxis detectadas — colores

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — El mismo color repetido sin variable:

```scss
/* ❌ MAL: #ff0018 (rojo de error) aparece 3 veces en el mismo bloque.
   Ya existe $c-error: #b40016 en variables */
input:disabled            { color: #ff0018; }
input.ng-invalid          { border: 1px solid #ff0018; }
input.ng-invalid:focus    { outline-color: #ff0018; }
```

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — Color de marca sin documentar:

```scss
/* ❌ MAL: #b99d6b es un dorado de marca que no existe como variable.
   Si cambia el tono, hay que buscar este hex a mano en todo el proyecto */
.completed { background: #b99d6b; }
```

**<span class="bp-file-badge bp-file-badge--red">abstract/_variables.scss</span>** — Variable marcada para borrar que sigue en producción:

```scss
/* ❌ MAL: lleva meses/años marcada como "borrar" y sigue usándose */
$default-md: #292929; // borrar //
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// z-index sin sistema, valores arbitrarios
.modal    { z-index: 999999; }
.header   { z-index: 1200; }
.dropdown { z-index: 9000; }

// Colores hex dispersos
.error { color: #ff0018; }
.gold  { background: #b99d6b; }
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// abstract/_variables.scss — capas semánticas
$z-base:    10;
$z-sticky:  100;
$z-drawer:  500;
$z-header:  1200;
$z-modal:   2000;
$z-overlay: 2100;
$z-toast:   3000;

// abstract/_variables.scss — tokens de color
$c-error:       #b40016;
$c-gold-accent: #b99d6b;
$c-middle-grey: #a9a9a9;
```

  </div>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">4</span>
  <h2 style="margin:0">Eliminar TODOs y deuda técnica documentada <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

Un TODO sin fecha, sin ticket y sin dueño es deuda técnica que nunca se resuelve. El proyecto acumula 25+ de estos comentarios.

### Malas praxis detectadas

**<span class="bp-file-badge bp-file-badge--red">partials/_blame.scss</span>** — TODOs sin fecha ni criterio de cierre:

```scss
/* ❌ MAL: ninguno de estos tiene ticket, fecha ni responsable */
// TODO barra submenu studio scroll en firefox
// TODO eliminar cuando popup disponibilidad de producto este en angular
// TODO: menu 12/24   ← probablemente diciembre 2024, sigue en marzo 2026
```

**<span class="bp-file-badge bp-file-badge--red">styles.scss</span>** — Import comentado "pendiente de eliminar" que lleva meses:

```scss
/* ❌ MAL: comentado, avisado como pendiente, y nadie lo elimina */
/* @import "./partials/_menu.scss"; menú antiguo, pendiente de eliminar */
```

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — TODOs dentro de bloques CSS:

```scss
/* ❌ MAL: TODO inline en medio de estilos — nadie lo leerá */
.ma-modal-body {
  padding: 0; // TODO borrar los paddings añadidos a las modales
}

// TODO - NO COGE EL ALTO COMPLETO (A FALTA DE MIGRAR)
body .ngdialog.new-modal .ngdialog-content { height: auto; }
```

**<span class="bp-file-badge bp-file-badge--red">elements/_media.scss</span>** — Archivo entero cuestionado:

```scss
/* ❌ MAL: la primera línea del archivo cuestiona su propio contenido.
   Ningún dev sabe si los estilos que ve son válidos o no */
// TODO PRODUCT VIEW NEW REVISAR
// TODO HOLIGRAIL
.anim-skeleton { ... }
```

**<span class="bp-file-badge bp-file-badge--red">partials/_blame.scss</span>** — Fuentes legacy admitidas como "a fixear":

```scss
/* ❌ MAL: "a fixear en el cms" lleva en el código sin resolver */
// Parseo de las fuentes antiguas duttiw, a fixear en el cms
.duttiw-bold   { font-family: "dutti-daily-bold", ...; }
.duttiw-light  { font-family: "dutti-daily-light", ...; }
.duttiw-medium { font-family: "dutti-daily-medium", ...; }
// + 5 variantes más
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
.clase { display: none; }

// Si no tiene ticket → resuelve ahora o elimina el comentario
```

  </div>
</div>

**Protocolo para TODOs:**
1. Si tiene solución rápida (< 1h) → resuélvelo ahora, no lo comentes
2. Si es deuda técnica → crea un ticket con criterio de aceptación
3. El comentario en código debe tener: número de ticket + descripción corta
4. Sin ticket → no es un TODO válido, es código abandonado


<div class="bp-section-title">
  <span class="bp-section-num">5</span>
  <h2 style="margin:0">No duplicar código — Una fuente de verdad <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

Cuando el mismo selector está definido en múltiples archivos, los cambios solo afectan al último que carga en cascada, produciendo comportamientos inesperados y silenciosos.

### Malas praxis detectadas

**`.btn` definido en 11 archivos distintos:**

<div class="bp-callout bp-callout--danger">
  El selector <code>.btn { ... }</code> existe en: <code>styles.scss</code>, <code>_pdp2025.scss</code>, <code>_my-account.scss</code>, <code>_newsletter.scss</code>, <code>_chat.scss</code>, <code>_sidebar.scss</code>, <code>_product-view.scss</code>, <code>_modals_legacy.scss</code>, <code>_bag_collection.scss</code>, <code>product-cart.component.scss</code>, <code>item-product-cart.component.scss</code>. Un cambio en el DS de botones requiere auditar 11 archivos y arriesga romper estilos en 11 sitios.
</div>

**<span class="bp-file-badge bp-file-badge--red">partials/_blame.scss</span>** — El mismo bloque de captcha copiado 3 veces en el mismo archivo:

```scss
/* ❌ MAL: exactamente el mismo selector y las mismas propiedades
   en las líneas 177, 187 y 209 del mismo archivo */

// Línea 177
.captcha-container .inputContainer .icon-reload_captcha {
  font-size: 22px; cursor: pointer;
}
.captcha-container .inputContainer { display: inline-block; vertical-align: middle; }

// Línea 187 — copia exacta
.captcha-container .inputContainer .icon-reload_captcha { font-size: 22px; cursor: pointer; }

// Línea 209 — copia exacta
.captcha-container .inputContainer { display: inline-block; vertical-align: middle; }
```

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — `.my-location-btn` definido dos veces con los mismos estilos:

```scss
/* ❌ MAL: mismo selector, mismas propiedades, en líneas 1598 y 2204
   del mismo archivo. Uno de los dos siempre gana sin que nadie lo sepa */

// Línea 1598
.my-location-btn { background: none; border: 1px solid $c-primary; height: 44px; }

// Línea 2204 — copia exacta
.my-location-btn { background: none; border: 1px solid $c-primary; height: 44px; }
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// En _checkout.scss
.btn-primary { background: #000; color: #fff; padding: 12px 24px; }

// En _my-account.scss (copia exacta)
.btn-primary { background: #000; color: #fff; padding: 12px 24px; }
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

// En cada contexto, solo variaciones mínimas:
.checkout .btn-primary { width: 100%; }
```

  </div>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">6</span>
  <h2 style="margin:0">Estructura correcta de archivos SCSS <span class="bp-badge bp-badge--low">Severidad baja</span></h2>
</div>

Cada archivo SCSS debe declarar sus dependencias y seguir un orden claro. El orden recomendado en el proyecto es:

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// Variables de otro archivo sin importar
.componente {
  color: $c-primary;      // ¿de dónde viene?
  padding: $padding-btn;  // ¿de dónde viene?
  z-index: 9999;          // magic number
}

// Responsive al principio, mezclado con base
@media (min-width: 768px) { .componente { ... } }
.componente { margin: 0; }
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// =============================================
// COMPONENTE — Descripción breve
// =============================================

// 1. Imports siempre al principio
@use "holygrail2/scss/hg-lite/abstract/_index.scss" as *;

// =============================================
// BASE STYLES
// =============================================

.componente { ... }

// =============================================
// STATES
// =============================================

.componente.is-active { ... }

// =============================================
// RESPONSIVE
// =============================================

@media (min-width: $break-md) { .componente { ... } }

// =============================================
// RTL SUPPORT
// =============================================

.is-rtl .componente { ... }
```

  </div>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">7</span>
  <h2 style="margin:0">Nomenclatura y separación CSS / JavaScript <span class="bp-badge bp-badge--low">Severidad baja</span></h2>
</div>

Las clases CSS y los selectores JavaScript no deben mezclarse. Si renombras la clase por estilo, rompes el JavaScript.

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
<!-- .js- solo para selección, nunca para estilar -->
<button class="btn-primary js-submit-form">Enviar</button>

<script>
  // El JS es independiente del CSS
  document.querySelector('.js-submit-form')
</script>
```

  </div>
</div>

**Convención de prefijos en el proyecto:**

| Prefijo | Uso | Ejemplo |
|---------|-----|---------|
| Sin prefijo | Estilos del DS heredado | `.btn-primary`, `.shop-cart-grid` |
| `hg-` | HolyGrail DS | `.hg-menu-panel`, `.hg-footer`, `.hg-header` |
| `md-` | Componentes MD heredados | `.md-tabs`, `.md-loading`, `.md-list-action` |
| `js-` | Selectores JavaScript (nunca estilar) | `.js-submit`, `.js-toggle-menu` |
| `is-` | Estados de UI | `.is-active`, `.is-open`, `.is-loading`, `.is-rtl` |
| `has-` | Modificadores de contexto | `.has-light`, `.has-error` |


<div class="bp-section-title">
  <span class="bp-section-num">8</span>
  <h2 style="margin:0">Centrado con transform, no con margins negativos <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

Usar `margin-left: -Xpx` para centrar elementos es frágil — depende de conocer el tamaño exacto. Si el tamaño cambia, deja de estar centrado.

### Malas praxis detectadas

**<span class="bp-file-badge bp-file-badge--red">styles.scss</span>** — Centrado con margins negativos:

```scss
/* ❌ MAL: margin-left: -60px solo funciona si el elemento
   mide exactamente 120px. Si cambia, queda descentrado */
.profile-main-loader {
  left: 50% !important;
  margin-left: -60px;
  top: 50% !important;
  margin-top: -100px;
  z-index: 9000 !important;
}
```

**<span class="bp-file-badge bp-file-badge--red">elements/_modals_legacy.scss</span>** — El mismo patrón en modales:

```scss
/* ❌ MAL: el modal se centra con margin-left negativo.
   Funciona solo si el modal mide exactamente 300px */
.ma-modal-inter.ask-default-store {
  left: 50%;
  margin-left: -150px;
}
```

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// Centrado frágil con margins negativos
.elemento {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px; // asume width: 300px
  margin-top: -100px;  // asume height: 200px
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// Centrado robusto — funciona con cualquier tamaño
.elemento {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

// O con flexbox en el padre
.padre {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

  </div>
</div>


<div class="bp-section-title">
  <span class="bp-section-num">9</span>
  <h2 style="margin:0">Responsive y RTL desde el diseño <span class="bp-badge bp-badge--medium">Severidad media</span></h2>
</div>

El responsive y el soporte RTL no son una capa de parche — deben pensarse desde el inicio en cada componente.

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```scss
// RTL como archivo separado de parches
// partials/_rtl.scss — solo correcciones forzadas
.is-rtl .btn-secondary {
  float: inherit !important; // parche forzado
}
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```scss
// RTL integrado en el componente, al final del archivo
.btn-secondary {
  margin-left: 8px;

  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 8px;
  }
}
```

  </div>
</div>

**Breakpoints del proyecto — usar siempre variables, nunca valores sueltos:**

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

<div class="bp-callout bp-callout--warning">
  <strong>Pendiente (iniciativa #9):</strong> El proyecto tiene dos sistemas de breakpoints: <code>$breakpoints</code> del proyecto y <code>$hg-breakpoints</code> de Holygrail. Unificarlos reduce fragilidad. Ver <a href="/develop/effort-impact/">Effort vs Impact Matrix</a>.
</div>


<div class="bp-section-title">
  <span class="bp-section-num">10</span>
  <h2 style="margin:0">Accesibilidad no es opcional <span class="bp-badge bp-badge--high">Severidad alta</span></h2>
</div>

<div class="bp-compare">
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--bad">❌ No hacer</div>

```html
<!-- div clickable sin rol -->
<div onclick="enviar()">Enviar</div>

<!-- Botón disabled sin estado visible -->
<button disabled>Continuar</button>

<!-- Input sin label asociado -->
<input type="text" placeholder="Email">

<!-- Icono sin aria-hidden -->
<svg>...</svg> Añadir al carrito
```

  </div>
  <div class="bp-compare__block">
    <div class="bp-compare__label bp-compare__label--good">✅ Hacer</div>

```html
<!-- Elemento interactivo correcto -->
<button type="button" onclick="enviar()">Enviar</button>

<!-- Disabled con feedback -->
<button disabled aria-disabled="true">
  Continuar (completa los campos)
</button>

<!-- Label visible asociado -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Icono decorativo oculto al lector -->
<svg aria-hidden="true">...</svg> Añadir al carrito
```

  </div>
</div>

```scss
// Siempre definir :focus-visible (no :focus solo)
// para no interferir con la navegación por ratón
.btn:focus-visible {
  outline: 2px solid $c-focus;
  outline-offset: 2px;
}
```

<div class="bp-callout bp-callout--info">
  El color de foco <code>#383bff</code> está hardcodeado en <span class="bp-file-badge">elements/_pdp2025.scss</span>. Debería ser una variable <code>$c-focus</code> o <code>--hg-focus-color</code> para poder actualizarse desde un único sitio.
</div>


<div class="bp-section-title">
  <span class="bp-section-num">11</span>
  <h2 style="margin:0">Checklist antes de hacer commit</h2>
</div>

### CSS / SCSS

- [ ] ¿El selector tiene 3 niveles o menos?
- [ ] ¿No hay ningún `!important` nuevo?
- [ ] ¿Los colores usan variables (`$c-*`) en lugar de hex directos?
- [ ] ¿Los z-index usan variables semánticas (`$z-modal`, etc.)?
- [ ] ¿No hay TODOs sin ticket de Jira?
- [ ] ¿Los estilos nuevos están en el archivo correcto (no en `styles.scss`)?
- [ ] ¿Los imports están al principio del archivo?
- [ ] ¿Incluiste responsive para `$break-sm` (768px) y `$break-md` (992px)?
- [ ] ¿Hay soporte RTL si hay `margin`, `padding`, `float` o `text-align`?
- [ ] ¿No hay valores de z-index superiores a 3000?
- [ ] ¿No hay uso de `::ng-deep`?

### HTML

- [ ] ¿Hay un solo `<h1>` por página?
- [ ] ¿Los `<h2>`, `<h3>` tienen orden lógico?
- [ ] ¿Los botones son `<button>` y los links son `<a>`?
- [ ] ¿Los inputs tienen `<label>` asociado?
- [ ] ¿Los selectores JavaScript usan prefijo `.js-`?
- [ ] ¿Los iconos decorativos tienen `aria-hidden="true"`?
- [ ] ¿Las imágenes tienen `alt` descriptivo?
- [ ] ¿No hay `style="..."` inline?

### JavaScript

- [ ] ¿Los selectores usan `.js-*` o `data-*`, no clases de estilo?
- [ ] ¿Los comentarios son solo al inicio de funciones?
- [ ] ¿Los comentarios explican el "por qué", no el "qué"?
- [ ] ¿No hay estilos inline aplicados con JS (`.style.xxx = ...`) cuando un toggle de clase es suficiente?


## Referencias

- [Effort vs Impact Matrix](/develop/effort-impact/) — Roadmap de mejoras priorizadas
- [Dutti — Visión general](/develop/dutti-overview/) — Arquitectura de estilos del proyecto
- [Dutti — Partials](/develop/dutti-partials/) — Header, menú, footer
- [Dutti — Elements](/develop/dutti-elements/) — Modales, filtros, PDP, PLP
- [Dutti — Process](/develop/dutti-process/) — Checkout, mi cuenta, flujos
