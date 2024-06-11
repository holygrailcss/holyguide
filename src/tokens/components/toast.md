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
![Massimo Dutti > Implementación de componente "Toast" > image-2024-6-6_13-4-59.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-4-59.png?version=1&modificationDate=1717671900000&api=v2)
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
[Figma de especificaciones de animación](https://www.figma.com/design/M0IBNryaGIhjMrmtPKgL8M/NUEVA-WEB?node-id=6372-321005&t=oyB5xzeTHdGU0B23-11)
### Buenas Prácticas
- **Hacer**:
  - Mostrar Toasts en posiciones que no obstruyan la navegación.
  - Proporcionar una opción de deshacer si es relevante.
  - Utilizar textos breves y claros.
![Massimo Dutti > Implementación de componente "Toast" > image-2024-6-6_13-22-12.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-22-12.png?version=1&modificationDate=1717672932000&api=v2)
- **No Hacer**:
  - No sobrecargar el Toast con información extensa.
![Massimo Dutti > Implementación de componente "Toast" > image-2024-6-6_13-22-35.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-22-35.png?version=1&modificationDate=1717672955000&api=v2)
- No mostrar múltiples Toasts simultáneamente.
### Accesibilidad
- **Pausar en hover**: Pausar el temporizador del Toast cuando el usuario pase el cursor sobre él.
## Casos de uso en Massimo Dutti
| Lugar de uso                                                                         | Diseño Desktop                                                                                                                                                                           | Figma Desktop                                                                                                                                | Diseño Mobile                                                                                                                                                  | Figma Mobile                                                                                                                                   | Diseño App                                                                                                                                                                                 | Figma APP                                                                                         |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Ficha de producto: Añadir artículo a la Wishlist                                     | ![PDP-desktop.jpg](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/PDP-desktop.jpg?version=1&modificationDate=1712835710000&api=v2)                         | [Figma](https://www.figma.com/file/xYGku5vnVOvgjfYYQtPfC3/Tribu-Comercial?type=design&node-id=9981%3A46836&mode=design&t=vCrPNSqPuCs2Fltw-1) | ![PDP-mobile.jpg](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/PDP-mobile.jpg?version=1&modificationDate=1712835710000&api=v2) | [Figma](https://www.figma.com/file/xYGku5vnVOvgjfYYQtPfC3/Tribu-Comercial?type=design&node-id=10834%3A161241&mode=design&t=vCrPNSqPuCs2Fltw-1) | ![image-2024-5-22_17-34-49.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-5-22_17-34-49.png?version=1&modificationDate=1716392089000&api=v2) |                                                                                                   |
| Parrilla: artículo no disponible                                                     | ![image-2024-6-6_13-32-15.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-32-15.png?version=1&modificationDate=1717673535000&api=v2) | [Figma](https://www.figma.com/design/Nopfo8MlNrddoUxtsU5rEV/PARRILLAS?node-id=11294-204837&t=i0hLBLscYotufS3T-11)                            |                                                                                                                                                                |                                                                                                                                                |                                                                                                                                                                                            |                                                                                                   |
| Mi cuenta: Añadir ticket de manera manual de Formato físico a digital                |                                                                                                                                                                                          |                                                                                                                                              |                                                                                                                                                                |                                                                                                                                                |                                                                                                                                                                                            |                                                                                                   |
| Mi cuenta: Edición, Creación, Eliminación, Agregar/Quitar método de pago y dirección |                                                                                                                                                                                          |                                                                                                                                              |                                                                                                                                                                |                                                                                                                                                |                                                                                                                                                                                            |                                                                                                   |
| Mi cuenta: verificación telefónica                                                   | ![image-2024-6-6_13-44-51.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-44-51.png?version=1&modificationDate=1717674292000&api=v2) | [Figma](https://www.figma.com/design/9ybsyprDz7VILrHkrg7XPT/Tribu-CRM?node-id=8387-57474&t=5NzIm1s6O88nmG7Y-11)                              |                                                                                                                                                                |                                                                                                                                                |                                                                                                                                                                                            |
| Mi cuenta: Mis citas - Borrar cita                                                   |                                                                                                                                                                                          |                                                                                                                                              |                                                                                                                                                                |                                                                                                                                                |                                                                                                                                                                                            |                                                                                                   |
| Cesta: Mover artículo a wishlist. Eliminar artículo                                  |                                                                                                                                                                                          |                                                                                                                                              |                                                                                                                                                                |                                                                                                                                                | ![image-2024-6-6_13-40-58.png](https://axinic.central.inditex.grp/confluence/download/attachments/722808570/image-2024-6-6_13-40-58.png?version=1&modificationDate=1717674058000&api=v2)   | [Figma](https://www.figma.com/design/oIyIb7tRecI7HCgApz2buJ/Cesta-%2B-Check-out?node-id=19218-187 |