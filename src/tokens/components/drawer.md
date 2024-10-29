---
layout: _tokens/_components/drawer.njk
permalink: /token-drawer/
page_section: components
titulo: drawer
descripcion: El componente Drawer es una herramienta versátil que permite mostrar contenido adicional sin interrumpir el flujo principal de la interfaz. Es ideal para mostrar menús, formularios o cualquier otro contenido que necesite ser accesible de manera rápida y eficiente.
image: /assets/static/components/drawer.jpg
author: autor
date: 2024-10-25 
tags: ["components"]
imageAlt: drawer
---

# Drawer API

| Método                | Descripción                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `toggleOpenDrawer`   | Abre el drawer con la clase especificada. Cambia el estado del cuerpo para evitar el desplazamiento. |
| `toggleCloseDrawer`  | Cierra el drawer y restablece el estado del cuerpo después de un retraso.   |

##
# Clases de Drawer

| Clase         | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `.drawer`     | Contenedor principal del drawer, con posición fija y diseño flexible.       |
| `.drawer-header` | Encabezado del drawer, contiene elementos alineados y espaciados.         |
| `.drawer-body`   | Cuerpo del drawer, crece para llenar el espacio disponible y permite desplazamiento vertical. |
| `.drawer-footer` | Pie del drawer, contiene elementos alineados.                            |
| `.drawer-sm`     | Drawer de tamaño pequeño, con un ancho máximo de 424px y transición suave. |
| `.drawer-xl`     | Drawer de tamaño grande, con un ancho máximo de 720px y transición más lenta. |



