---
layout: _tokens/_components/modals.njk
permalink: /token-modals/

page_section: components
titulo: Modals
descripcion: Los modales son componentes que se superponen al contenido actual de la página para proporcionar información o funcionalidades adicionales sin cambiar de vista. A continuación, se detallan los tamaños, márgenes y opciones personalizables que definen su comportamiento y estilo en la interfaz de usuario.

image: /assets/static/components/modals.jpg
author: autor
date: 2023-08-02
badge: updated
tags: ["components"]
imageAlt: modals
---

# Modals

Los inputs se utilizan para permitir a los usuarios proporcionar texto cuando se espera que la entrada sea breve. Además de texto plano, los inputs admiten varios tipos de texto, incluyendo contraseñas y números.

## Sistema de modales — `modalx`

El proyecto usa el sistema `modalx` (nuevo) y el sistema CDK legacy.

### HTML estructural completo

```html
<div class="modalx" (click)="backdropClose()">
  <div class="modalx-dialog modalx-sm modalx-centered modalx-24"
       (click)="noop($event)"
       role="dialog"
       aria-modal="true">

    <div class="modalx-content">

      <!-- Botón de cierre -->
      <div class="modalx-close">
        <button class="closex btn btn-tertiary" (click)="close()" aria-label="Cerrar">
          <md-icon name="close"></md-icon>
        </button>
      </div>

      <!-- Cuerpo del modal -->
      <div class="modalx-body">
        <!-- Icono opcional -->
        <div class="main-icon">
          <div class="ico-round">
            <md-icon name="check"></md-icon>
          </div>
        </div>

        <!-- Título -->
        <div class="nhg-modal-header mt-16 mb-12">
          <h2 class="title-m ttu">Título del modal</h2>
        </div>

        <!-- Contenido -->
        <p class="text-m mb-16">Mensaje descriptivo del modal.</p>

        <!-- CTAs -->
        <button class="btn btn-primary btn--full label-m ttu mb-12">Confirmar</button>
        <button class="btn btn-secondary btn--full label-m ttu">Cancelar</button>
      </div>

    </div>
  </div>
</div>
```

### Tamaños disponibles (`modalx-dialog`)

| Clase | Ancho máx (desktop) |
|-------|---------------------|
| `modalx-xxs` | 320px |
| `modalx-xs` | 327px |
| `modalx-sm` | 445px |
| `modalx-md` | 595px |
| `modalx-lg` | 899px |
| `modalx-xl` | 950px |

### Padding del cuerpo

| Clase | Padding |
|-------|---------|
| `modalx-0` | Sin padding |
| `modalx-16` | 16px |
| `modalx-24` | 24px |
| `modalx-32` | 32px |
| `modalx-40` | 40px |

### Modificadores de comportamiento

| Clase | Efecto |
|-------|--------|
| `modalx-centered` | Centrado vertical en la pantalla |
| `modalx-right` | Anclado a la derecha (drawer) |
| `modalx-fullmobile` | Pantalla completa en móvil |
| `modalx-card` | Slide-up en móvil (estilo bottom sheet) |
| `modalx-border` | Con borde visible |
