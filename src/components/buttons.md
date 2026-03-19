---
layout: _paginas/components/_buttons.njk
permalink: /buttons/

titulo: Buttons
descripcion: Los “buttons” pueden usarse para demarcar las opciones de acciones principales que puede realizar el usuario. Las etiquetas (labels) de los botones deben ser cortos y concisos explicando de forma clara y sintetizada la acción o el lugar al que llevará dicho botón.
descripcion2: Los botones pueden ir acompañados de iconos y disponemos de diferentes variaciones de posicionamiento para cubrir todas las necesidades de experiencia de uso. Estos botones están provistos de feedback visual cuando se pasa por encima salvo que el botón esté en estado desactivado.

date: 2023-06-19
fecha: 19 de junio de 2023
badge: updated
tags: ["Estructuras modulares", "web design", "components"]
image: /assets/static/components/buttons.jpg
imageAlt: Ilustración de un diseño de sistema web
---

# Buttons

Los botones disponibles en el sistema están diseñados para ofrecer una amplia variedad de estilos y funcionalidades. A continuación se describen todas las clases disponibles para los botones, así como sus variantes y modificaciones de tamaño y estado.

## Clases Principales de Botones

---

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

---
