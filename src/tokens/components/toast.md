---
layout: _tokens/_components/toast.njk
permalink: /token-toast/
page_section: components
titulo: toast
descripcion: Descripción del componente Toast
image: /assets/static/components/toast.jpg
author: autor
date: 2024-06-07 
tags: ["components"]
imageAlt: toast
---

### Descripción
Un **Toast** es una notificación temporal que aparece sobre el contenido actual para informar brevemente al usuario sin interrumpir su flujo de trabajo. En Massimo Dutti, el diseño del Toast incluye un fondo negro y texto blanco, con opciones para cerrar la notificación o realizar una acción como "Deshacer". [Figma DS](https://www.figma.com/design/wVoW0EaNl1c7Mn7VBEuSGQ/DESIGN-SYSTEM-2024?node-id=1005-90032&t=MAQx0HVQE6zJp7Pv-11)

### Uso
- **Cuándo usar**:
  - Para notificar al usuario sobre una acción completada.
  - Para proporcionar información relevante de manera no intrusiva.
  - Para permitir al usuario deshacer una acción reciente.
- **Cuándo no usar**:
  - Para mensajes que requieren confirmación del usuario (usar un Modal dialog [Figma Modal Dialog](https://www.figma.com/design/wVoW0EaNl1c7Mn7VBEuSGQ/DESIGN-SYSTEM-2024?node-id=4166-176635&t=MAQx0HVQE6zJp7Pv-11)).
  - Para notificaciones que bloquean la acción del usuario.
  - Para mensajes que deben permanecer visibles hasta que el usuario tome una acción específica.
### Propiedades
| Propiedad   | Tipo     | Descripción                                      |
| ----------- | -------- | ------------------------------------------------ |
| text        | string   | El contenido principal del Toast.                |
| duration    | number   | Duración en milisegundos del Toast.              |
| position    | string   | Posición del Toast en la pantalla (bottom-left). |
| onDismiss   | function | Función que se ejecuta al cerrar el Toast.       |
| actionLabel | string   | Texto para una acción opcional dentro del Toast. |
| action      | function | Función para la acción del Toast                 |
| dismissible | boolean  | Si el Toast puede ser cerrado por el usuario.    |
### Estilos Específicos
- **Fondo**: #000000 (negro). Token color: **bg-primary**
- **Texto**: #ffffff (blanco). Token color: **t-secondary**
- **Posición**: 40px desde la parte inferior y 40px desde la parte izquierda de la pantalla.
- **Bordes**: Bordes rectos.
- **Sombra**: Sin sombra
- **Animación**: Entrada y salida con animaciones de deslizamiento personalizadas.
### Animaciones
- **Entrada**:
  - **Efecto**: Deslizamiento desde la izquierda.
  - **Curva de Bézier**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - **Duración**: 500ms
- **Salida**:
  - **Efecto**: Deslizamiento hacia la izquierda.
  - **Curva de Bézier**: `cubic-bezier(0.39, 0.575, 0.565, 1)`
  - **Duración**: 300ms

### Buenas Prácticas
- **Hacer**:
  - Mostrar Toasts en posiciones que no obstruyan la navegación.
  - Proporcionar una opción de deshacer si es relevante.
  - Utilizar textos breves y claros.

- **No Hacer**:

### Accesibilidad
- **Pausar en hover**: Pausar el temporizador del Toast cuando el usuario pase el cursor sobre él.
## Casos de uso en Massimo Dutti
