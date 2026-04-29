---
layout: _paginas/components/_buttons.njk
permalink: /buttons/
page_section: components

titulo: Buttons
descripcion: Sistema de botones del design system. Incluye variantes de rol (primary, secondary, tertiary), tamaños, estados (hover, disabled, loading) y combinaciones con iconos.

date: 2023-06-19
badge: updated
tags: ["components"]
image: /assets/static/components/buttons.jpg
imageAlt: Buttons component
---

## Auditoría del sistema de botones

Auditoría completa e interactiva del sistema de botones, con renderizado real de cada clase y sus estados sobre las variables del Design System.

<iframe
  src="/assets/static/components/btn-audit-report.html"
  title="Auditoría Botones — Duttino"
  loading="lazy"
  style="width:100%; height:1200px; border:1px solid #e5e5e5; border-radius:4px; background:#fff;">
</iframe>

<p><a href="/assets/static/components/btn-audit-report.html" target="_blank" rel="noopener">Abrir la auditoría en una pestaña nueva ↗</a></p>

## Clases Principales de Botones


## Variantes del proyecto Dutti

El sistema de botones usa la base de **HolyGrail 2** con variantes propias de Massimo Dutti.

### Por rol

| Clase | Rol | Uso típico |
|-------|-----|-----------|
| `btn btn-primary` | CTA principal | Añadir al carrito, confirmar, guardar |
| `btn btn-secondary` | Acción secundaria | Cancelar, volver, alternativa |
| `btn btn-tertiary` | Fantasma / sin borde | Editar, ver más, navegación ligera |
| `btn btn-link` | Apariencia de enlace | Acciones inline, links textuales |
| `btn btn-feel` | FEEL by Massimo Dutti | Acciones del programa de fidelización |
| `btn btn-secondary-feel` | Cancelar en modal Feel | Solo dentro de flujos Feel |

### Por tamaño

| Clase | Efecto |
|-------|--------|
| `btn--full` | Ancho 100% del contenedor |
| `btn--small` | Tamaño reducido |
| `btn--medium` | Tamaño mediano |
| `btn--large` | Tamaño grande |

### Tipografía combinada

```html
<!-- Botón con tipografía del sistema -->
<button class="btn btn-primary btn--full label-m ttu">
  Añadir al carrito
</button>

<!-- Botón secundario -->
<button class="btn btn-secondary label-m ttu">
  Cancelar
</button>

<!-- Botón fantasma (solo texto) -->
<button class="btn btn-tertiary text-m">
  Ver guía de tallas
</button>

<!-- Botón FEEL -->
<button class="btn btn-feel btn--full text-m">
  Confirmar canje
</button>
```

### Estados

```html
<!-- Deshabilitado -->
<button class="btn btn-primary btn--full label-m ttu" disabled>
  No disponible
</button>

<!-- Cargando (envío en proceso) -->
<button class="btn btn-primary btn--full btn-loading label-m ttu">
  <div class="btn-submit">Procesando</div>
  <div class="btn-anim">
    <!-- spinner animado mientras envía -->
  </div>
</button>
```

### Botón con icono

```html
<!-- Icono antes del texto -->
<button class="btn btn-secondary label-m">
  <md-icon name="wishlist" class="mr-8"></md-icon>
  Añadir a wishlist
</button>

<!-- Solo icono (btn-tertiary) -->
<button class="btn btn-tertiary text-m" aria-label="Cerrar">
  <md-icon name="close-cancel"></md-icon>
</button>
```

