---
layout: _paginas/develop/_dutti.njk
permalink: /develop/acciones-massimodutti/
page_section: develop
tags: ["develop", "dutti", "holygrail5", "backlog", "acciones"]
titulo: Acciones en Massimo Dutti
descripcion: Backlog accionable de mejoras y migración del frontend de Massimo Dutti hacia HolyGrail5 como sistema canónico.
badge: new
date: 2026-06-19
image: /assets/static/images/1.jpg
imageAlt: Acciones a realizar en Massimo Dutti
---

## Principio

> **HolyGrail5 es el sistema canónico** del frontend de Massimo Dutti a partir de ahora. HolyGrail2 queda como **legacy en migración**: se mantiene mientras existan usos, pero no se añade nada nuevo con él. Toda mejora nueva usa tokens y utilidades de HG5 (`--hg-typo-*`, `--hg-color-*`, `.hg-*`).

Esta página es el **backlog de acciones** para el repo `web-duttinodefront`. Complementa la
[Migración HG2 → HG5](/develop/migracion-hg5/) (piloto de la sección Development) y la
[matriz Effort vs Impact](/develop/effort-impact/) (iniciativas de SCSS/arquitectura).

---

## Estado de un vistazo

<style>
.acc-legend { display:flex; gap:16px; flex-wrap:wrap; margin:16px 0; font-size:12px; }
.acc-legend span { display:inline-flex; align-items:center; gap:6px; }
.acc-dot { width:10px; height:10px; border-radius:50%; display:inline-block; }
.acc-dot--done { background:#12882c; }
.acc-dot--wip  { background:#ffce4e; }
.acc-dot--todo { background:#a9a9a9; }
.acc-dot--risk { background:#dd2d01; }
</style>

<div class="acc-legend">
  <span><i class="acc-dot acc-dot--done"></i> Hecho</span>
  <span><i class="acc-dot acc-dot--wip"></i> En curso</span>
  <span><i class="acc-dot acc-dot--todo"></i> Pendiente</span>
  <span><i class="acc-dot acc-dot--risk"></i> Requiere validación de diseño</span>
</div>

---

## ✅ Hecho

Tipografía Suisse alineada con HG5 y arreglos de render ya integrados:

| Acción | Detalle |
|--------|---------|
| Pesos `@font-face` Suisse | `_fonts.scss` alineado a HG5: light 300, regular 400, medium 500, semibold 600. |
| Fuente `suisse-thin` (100) | Añadido el `@font-face` para `--hg-typo-font-family-primary-thin`. |
| Consolidación de font-weights | Pesos fuera del set aprobado (100/400/600/700) trasladados al más cercano: 200→100, 800→700, 900→700. |
| Bold legibilidad coreano/árabe | Eliminado el `font-weight: 400 !important` que aplastaba el bold en `[lang^="ko"]`; remapeo de light→regular para legibilidad CJK. |
| Etiqueta bold en CMS | `<strong>`/`<b>` usan `suisse-semibold` real (en `_types.scss` y render del CMS). |

---

## 🟡 Pendiente — Tipografía y tokens

| Prioridad | Acción | Detalle |
|-----------|--------|---------|
| Alta 🔴 | Corregir `$font-weight-bold: 500` | En `abstract/_setup.scss` el "bold" vale 500 (existe el parche `$font-weight-real-semibold: 600`). Debe ser 600. Afecta a ~62 usos → validar con diseño. |
| Alta 🔴 | `dutti-theme.css`: `primary-bold` | Hoy `--hg-typo-font-family-primary-bold: 'suisse-medium'`; HG5 dice `suisse-semibold`. Alinear (cambia el grosor de toda la negrita base). |
| Media | Consolidar pesos 300/500 restantes | Trasladar al set aprobado donde el audit del DS lo marque. |
| Media | Migrar familias hardcodeadas → tokens | Sustituir `'suisse-light'`/`'suisse-regular'`… literales por `var(--hg-typo-font-family-*)`. |

---

## 🟡 Pendiente — Migración HG2 → HG5

| Prioridad | Acción | Detalle |
|-----------|--------|---------|
| Alta | Ejecutar piloto Development | Seguir el plan de [Migración HG2 → HG5](/develop/migracion-hg5/) en `/development` como prueba antes de extender. |
| Media | Dejar de importar partials HG2 sin uso | `elements/_sidebar`, `_md-buttons`, `_md-accordion` no se usan. Como HG2 se importa entero (`@import "holygrail2/scss/style"`), requiere import curado o patch-package. |
| Media | Consolidar redundancias HG2 vs propio | `_modal`, `_toast` y parte de `_tabs_specials` están redefinidos por SCSS propio (`elements/_modals.scss`, `_toast.scss`). Unificar. |
| Baja | Tokenizar colores hardcodeados | ~284 hex/rgb (`#fff`, `#000`, `#292929`…) → `var(--hg-color-*)`. |

---

## 🟡 Pendiente — Limpieza / dead code

| Prioridad | Acción | Detalle |
|-----------|--------|---------|
| Alta | Imports duplicados | `process.scss` (search-layout repetido) y `components.scss` (fast-sint-store(s) repetidos). |
| Alta | Borrar `_menu.scss` (786 líneas) | Import comentado en `styles.scss`; no se usa en ningún sitio. |
| Media | `.component.scss` vacíos | `store-locator-map`, `product-added-to-cart-modal`, `tooltip-legacy` (0 bytes) + quitar `styleUrls`. |
| Media | Migrar `@import` → `@use` | ~334 `@import` (API Sass deprecada) vs 16 `@use`. Empezar por `_fonts`, `_setup`, `_mixins`. |

> Nota: estos cambios de limpieza son **no destructivos** (sin cambio visual). Verificar siempre que la clase/fichero no se incluya vía Eleventy/render antes de borrar.

---

## 🟠 Pendiente — Arquitectura CSS (ver Effort vs Impact)

| Prioridad | Acción | Detalle |
|-----------|--------|---------|
| Alta | Reducir `!important` | ~469 en estilos del frontend; muchos en `styles.scss` y peleas con Swiper/`::ng-deep`. |
| Alta | Reducir `::ng-deep` | 87 usos, concentrados en `slice-slider*`. Sustituir por custom properties en `:host`. |
| Media | Trocear `styles.scss` (2.471 líneas) | Extraer por dominio (`_global-layout`, `_global-components`). |
| Media | Unificar tabs / buttons / inputs | Ver iniciativa 19 de [Effort vs Impact](/develop/effort-impact/). |

---

## Cómo trabajar estas acciones

1. **Una acción = una rama** con su ticket: `feat/MDWEB-XXXX-...` o `refactor(...)`.
2. **HG5 primero**: cualquier clase/variable nueva sale de HolyGrail5.
3. **No destructivo por defecto**: los borrados se verifican (¿se usa en HTML, TS, render Eleventy?) antes de aplicar.
4. **Validación visual** en móvil y desktop, y en mercados especiales (CJK / árabe / RTL) cuando toque tipografía.
5. Marca aquí el estado al cerrar cada acción.
