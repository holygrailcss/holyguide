---
layout: _paginas/develop/_dutti.njk
permalink: /develop/migracion-hg5/
page_section: develop
tags: ["develop", "migracion", "holygrail5", "holygrail2", "dutti"]
titulo: Migración HG2 → HG5
descripcion: Estrategia de migración de HolyGrail2 a HolyGrail5 en la sección Development (Dutti).
badge: new
date: 2025-03-19
image: /assets/static/images/1.jpg
imageAlt: Estrategia migración HolyGrail
---

## Presentación

Este documento es la **estrategia de migración** de HolyGrail2 (HG2) a HolyGrail5 (HG5) en la sección **Development** del proyecto Dutti. Sirve como piloto antes de extender la migración al resto de la aplicación.

El objetivo es ir **eliminando progresivamente** las clases y variables de HG2, sustituyéndolas por las equivalentes de HG5, hasta poder prescindir del import de HolyGrail2 en Development.

---

## Qué vamos a hacer

Migraremos la sección Development (`/development`) de HolyGrail2 a HolyGrail5 en **5 fases**:

| Qué | Descripción |
|-----|-------------|
| **Alcance** | Layout, modals, parrillas, product-view, prices, studio, md-swiper, render, banners, fonts |
| **Archivos** | HTML de componentes + SCSS en `process/_dev-*.scss` |
| **Estrategia** | Sustituir clases HG2 por HG5 según tabla de mapeo; variables SCSS → variables CSS |

### Infografía del plan

<style>
.migracion-flow { max-width: 320px; margin: 32px auto; font-size: 13px; }
.migracion-flow__step {
  background: #000; color: #fff; padding: 12px 20px; text-align: center;
  border-radius: 4px; font-weight: 600; margin: 0 auto 8px;
}
.migracion-flow__step--sub {
  background: #2a2a2a; font-size: 12px; font-weight: 400;
  padding: 8px 16px; margin: 4px auto;
}
.migracion-flow__arrow { text-align: center; color: #000; font-size: 20px; line-height: 1; margin: 4px 0; }
.migracion-flow__phase2 {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  max-width: 320px; margin: 0 auto 8px;
}
.migracion-flow__phase2 .migracion-flow__step--sub { margin: 4px 0; }
</style>

<div class="migracion-flow">
  <div class="migracion-flow__step">Fase 0 — Preparación</div>
  <div class="migracion-flow__arrow">↓</div>
  <div class="migracion-flow__step">Fase 1 — Layout</div>
  <div class="migracion-flow__arrow">↓</div>
  <div class="migracion-flow__step">Fase 2 — Páginas</div>
  <div class="migracion-flow__phase2">
    <div class="migracion-flow__step migracion-flow__step--sub">2.1 dev-modals</div>
    <div class="migracion-flow__step migracion-flow__step--sub">2.2 studio + templates</div>
    <div class="migracion-flow__step migracion-flow__step--sub">2.3 render, banners</div>
    <div class="migracion-flow__step migracion-flow__step--sub">2.4 prices, parrillas, product-view, md-swiper</div>
  </div>
  <div class="migracion-flow__arrow">↓</div>
  <div class="migracion-flow__step">Fase 3 — Fonts</div>
  <div class="migracion-flow__arrow">↓</div>
  <div class="migracion-flow__step">Fase 4 — Limpieza</div>
</div>

---

## Fases de la migración

### Fase 0: Preparación (1–2 días)

**Objetivo:** Dejar todo listo para empezar la migración sin sorpresas.

| Tarea | Descripción |
|-------|-------------|
| Crear rama | `feat/MDWEB-XXXX-migrate-development-to-hg5` |
| Documentar estado actual | Capturas de pantalla de todas las rutas de Development |
| Verificar HG5 | Comprobar que `output.css` incluye grid, espaciado y utilidades necesarias |
| Revisar config | Revisar `config.json` de HG5 para tema Dutti |

**Entregable:** Rama creada, capturas guardadas, HG5 verificado.

---

### Fase 1: Layout y estilos base (2–3 días)

**Objetivo:** Migrar el layout principal y el menú lateral.

**Archivos:** `layout.component.html`, `_dev-layout.scss`

**En `layout.component.html`:**
- Mantener `mb-8` (compatible con HG5)
- Sustituir `text-m` por clase typo HG5 si existe (`hg-body-m` o similar)

**En `_dev-layout.scss`:**
- `$c-white` → `var(--hg-color-white)`
- `$c-primary` → `var(--hg-color-primary)`
- `$break-sm` → `768px` o variable HG5

**Validación:** Layout y menú se ven igual.

---

### Fase 2: Páginas (2–3 días)

**Objetivo:** Migrar cada página de Development, de menor a mayor complejidad.

**Orden:** modals → studio → templates → render → banners → prices → parrillas → product-view → md-swiper

**Por cada página:**
1. Inventariar clases HG2 en el HTML
2. Sustituir según tabla de mapeo (sección 6)
3. Actualizar SCSS de componente si usa variables HG2
4. Probar en móvil y desktop
5. Commit

**Subfases:**

| Subfase | Páginas | Complejidad |
|---------|---------|-------------|
| 2.1 | dev-modals | Baja |
| 2.2 | dev-studio, dev-studio-templates, dev-studio-templates-scraping | Media |
| 2.3 | dev-render (render-list, dev-render-cms), dev-banners | Media |
| 2.4 | dev-prices, dev-parrillas, dev-product-view, dev-md-swiper | Alta |

---

### Fase 3: Página Fonts (3–4 días)

**Objetivo:** Migrar la página Fonts (guía de HG2), la más densa en clases.

**Opciones:**

| Opción | Descripción |
|--------|-------------|
| **A** | Sustituir todas las clases por HG5; añadir sección "HolyGrail5" con ejemplos |
| **B** | Mantener Fonts como referencia HG2; crear nueva página "Guía HG5" |

**Recomendación:** Opción A para unificar en HG5.

---

### Fase 4: Limpieza y validación (1–2 días)

**Objetivo:** Cerrar la migración y verificar que todo funciona.

| Tarea | Descripción |
|-------|-------------|
| Revisar imports | Eliminar o documentar dependencias HG2 restantes |
| Revisar clases | No debe quedar ninguna clase HG2 en Development |
| Tests E2E | Ejecutar tests de la sección Development |
| Revisión visual | Comprobar todos los breakpoints |
| Documentar | Actualizar este documento con lecciones aprendidas |

---

## Tabla de mapeo HG2 → HG5

### Clases que no cambian (HG5 las incluye igual)

| HG2 | Acción |
|-----|--------|
| `row` | Mantener |
| `col-xs-*`, `col-sm-*`, `col-md-*`, `col-lg-*` | Mantener |
| `mb-8`, `mb-16`, `mb-24`, `mb-48` | Mantener |
| `pt-*`, `pb-*`, `mt-*`, `my-*`, `px-*`, `py-*` | Mantener (verificar en output.css) |

### Clases que sí cambias

| Buscar (HG2) | Reemplazar por (HG5) |
|--------------|----------------------|
| `is-flex` | `hg-d-flex` |
| `content-center` | `hg-justify-center` |
| `content-sp-between` | `hg-justify-between` |
| `flex-column` | `hg-flex-column` |
| `bg-primary` | `style="background-color: var(--hg-color-primary)"` o clase custom |
| `bg-light` | `style="background-color: var(--hg-color-light-grey)"` |
| `bg-dark` | `style="background-color: var(--hg-color-charcoal)"` |
| `img-responsive` | `hg-object-contain` + `w-100-percent` o `style="width:100%;height:auto"` |

### Variables SCSS → variables CSS

| Buscar (HG2) | Reemplazar por (HG5) |
|--------------|----------------------|
| `$c-white` | `var(--hg-color-white)` |
| `$c-primary` | `var(--hg-color-primary)` |
| `$c-middle-grey` | `var(--hg-color-middle-grey)` |
| `$break-sm` | `768px` |
| `$break-md` | `992px` |

---

## Proceso paso a paso por archivo

Para cada archivo HTML o SCSS:

| Paso | Acción |
|------|--------|
| 1 | **Inventariar** — Buscar clases HG2: `col-xs-`, `mb-`, `is-flex`, `content-`, `bg-`, etc. |
| 2 | **Sustituir** — Reemplazar según tabla de mapeo |
| 3 | **Probar** — Verificar que el layout se ve igual |
| 4 | **Commit** — `refactor(dev): migrar [componente] de HG2 a HG5` |

**Checklist por archivo:**
- [ ] No quedan `is-flex`, `content-center`, `content-sp-between` sin sustituir
- [ ] No quedan `bg-primary`, `bg-light`, `bg-dark` sin sustituir
- [ ] Los SCSS no usan `$c-white`, `$c-primary` sin sustituir
- [ ] Resultado visual equivalente

---

## Cuándo quitar HolyGrail2

**No quites el import de HG2** hasta que:

- [ ] Todas las páginas de Development usen solo clases HG5 o compatibles
- [ ] No queden referencias a `$c-*`, `$break-*` de HG2 en los SCSS de Development
- [ ] Hayas validado visualmente todas las rutas

Mientras tanto, HG2 y HG5 conviven: HG5 se carga primero y HG2 después.

---

## Criterios de validación

### Visual
- [ ] Layout idéntico en móvil y desktop
- [ ] Menú lateral funcional
- [ ] Grid correcto en todas las páginas
- [ ] Espaciados y colores correctos

### Técnico
- [ ] Sin errores de compilación SCSS
- [ ] Sin clases HG2 obsoletas en Development
- [ ] Variables CSS HG5 usadas donde proceda

### Funcional
- [ ] Navegación entre rutas correcta
- [ ] Modales, formularios y componentes interactivos funcionan

---

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| HG5 no cubre alguna utilidad HG2 | Crear clase utility en `_dev-*.scss` o extender HG5 |
| Conflictos de especificidad | Usar prefijo `.development-layout-component` |
| Dependencia de `abstract/_all.scss` | Mantener import hasta migración global |
| Regresión en otras secciones | Development es aislada; HG2 sigue cargado para el resto |

---

## Referencias

- **HG5 config:** `node_modules/holygrail5/config.json`
- **HG5 output:** `node_modules/holygrail5/dist/output.css`
- **HG2 style:** `node_modules/holygrail2/scss/style.scss`
- **Estilos Development:** `apps/frontend/src/assets/styles/process/_dev-*.scss`
- **Rutas Development:** `apps/frontend/src/app/pages/development/development.routes.ts`
