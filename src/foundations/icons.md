---
layout: _paginas/foundations/_icons.njk
permalink: /icons/

titulo: Iconos
descripcion:

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/icons.jpg
imageAlt: Ilustración de un diseño de sistema web
---


## Proceso de añadir ícono

 > **Contacto con el Diseñador**: Acude al responsable de diseño especializado en la creación de diseños. Él nos proporcionará el código SVG del ícono.


##### Guía de Uso del Componente `svg-icon2` en Angular

En nuestro proyecto de Angular, utilizaremos el nuevo componente `svg-icon2` para manejar los íconos SVG de manera más eficiente. Este componente extrae los íconos directamente de los archivos JSON, lo que nos permite evitar el uso de imágenes que realizan peticiones adicionales y ralentizan el proceso de carga cuando hay muchos íconos. Con `svg-icon2`, podemos reducir el peso del DOM y mejorar el rendimiento general de la aplicación.

## Ventajas de  `svg-icon2`

- **Eficiencia en la carga**: Al no depender de imágenes externas, se eliminan las peticiones adicionales al servidor.
- **Rendimiento optimizado**: La carga de íconos se realiza más rápidamente, mejorando la velocidad de la aplicación.
- **Facilidad de uso**: Los íconos se manejan de manera centralizada desde los archivos JSON.

## Uso del Componente

Para utilizar `svg-icon2`, es necesario especificar la categoría a la que pertenece el ícono, que generalmente coincide con el nombre del archivo JSON, y el nombre del ícono. A continuación, se muestra un ejemplo de uso:

```html
<svg-icon2 category="common" src="check"></svg-icon2>
```

En este ejemplo:

- `category="common"`: Indica que el ícono pertenece a la categoría "common", que es el nombre del archivo JSON.
- `src="check"`: Especifica el nombre del ícono dentro del archivo JSON.

### Ejemplo Completo

Supongamos que tenemos un archivo JSON llamado `common.json` que contiene varios íconos. Para utilizar el ícono "check" de este archivo, simplemente utilizamos el siguiente código en nuestro template:

```html
<svg-icon2 category="common" src="check"></svg-icon2>
```

## Actualización o Introducción de Nuevos Íconos

Cuando se requiera actualizar o introducir un nuevo ícono, el proceso es el siguiente:

1. **Contacto con el Diseñador**: Acude al responsable de diseño especializado en la creación de diseños. Él nos proporcionará el código SVG del ícono.
2. **Conversión a Base64**: Utiliza el plugin de Visual Studio Code `vscode-base64` para convertir el código SVG a formato Base64.
3. **Actualización del JSON**: Copia el código en Base64 y pégalo en el archivo JSON correspondiente utilizando el formato:

   ```json
   { "nombreicono": "icono en base 64" }
   ```
4. **Ordena Alfabéticamente**: Usa el plugin de Visual Studio Code `Alphabetical Sorter` para ordenar el archivo JSON.
5. **Incorporación en el Proyecto**: Añade el nuevo ícono en el proyecto.
6. **Notificación**: Notifica al Lead de UX Layout que el nuevo ícono ya está disponible y especifica en qué rama se ha colocado.

## Consideraciones Adicionales

- **Organización de los JSON**: Asegúrate de mantener una estructura organizada en tus archivos JSON para facilitar la búsqueda y el mantenimiento de los íconos.
- **Nombres descriptivos**: Utiliza nombres de íconos descriptivos y coherentes con su uso en la aplicación.
- **Actualización de íconos**: Al actualizar un ícono en el archivo JSON, todos los lugares donde se utiliza este ícono se actualizarán automáticamente.

Con estas prácticas y el uso del componente `svg-icon2`, optimizaremos la gestión de íconos SVG en nuestro proyecto de Angular, mejorando tanto el rendimiento como la mantenibilidad del código.

Al usar el componente solo hay que asignar el parámetro **_src_** con el icono a usar, que a su vez deberá estar en el archivo icons.json en el proyecto.

[Ver Archivo json](../assets/js/icons.json)

