---
layout: _paginas/foundations/_icons.njk
permalink: /icons/

titulo: Iconos
descripcion: Sistema de iconos SVG mediante el componente svg-icon2. Proceso de incorporación, uso en Angular y consideraciones de mantenimiento.

page_section: foundations
date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/icons.jpg
imageAlt: Ilustración de un diseño de sistema web
---

## Componente `svg-icon2`

Los iconos del proyecto se gestionan mediante el componente Angular `svg-icon2`, que carga SVGs almacenados en Base64 dentro de un archivo JSON. Esto evita peticiones HTTP por cada icono y optimiza el rendimiento.

### Ventajas

- Sin peticiones HTTP por icono
- Caché automático del JSON completo
- Actualización global cambiando un solo archivo
- Nombres descriptivos y ordenados

### Uso básico

```html
<!-- Icono de la categoría "common" llamado "check" -->
<svg-icon2 category="common" src="check"></svg-icon2>

<!-- Con tamaño personalizado -->
<svg-icon2 category="common" src="arrow-right" class="icon-24"></svg-icon2>
```

---

## Proceso para añadir un ícono nuevo

| Paso | Acción |
|---|---|
| **1** | Contactar al diseñador responsable para obtener el SVG |
| **2** | Verificar que el SVG es limpio (sin rellenos hardcoded, usar `currentColor` si se necesita color dinámico) |
| **3** | Convertir el SVG a Base64 ([herramienta online](https://www.base64encode.org/)) |
| **4** | Abrir el JSON de iconos correspondiente a su categoría |
| **5** | Añadir la entrada: `"nombre-icono": "data:image/svg+xml;base64,..."` |
| **6** | Ordenar alfabéticamente (usar la extensión *Alphabetical Sorter* de VS Code) |
| **7** | Notificar al Lead de UX/Layout |

---

## Consideraciones de mantenimiento

- Mantener el JSON ordenado alfabéticamente para facilitar búsquedas
- Usar nombres en **kebab-case** descriptivos: `arrow-right`, `check-circle`, `close`
- No duplicar iconos ya existentes — buscar antes de añadir
- Al actualizar un icono, el cambio se propaga automáticamente a toda la aplicación
- Los iconos se agrupan por categorías (`common`, `navigation`, `social`, etc.)

---

## Tamaños de icono

Los iconos usan por defecto el tamaño definido en `$svg-size: 16px`. Se puede sobreescribir con clases o estilos inline.

```html
<svg-icon2 category="common" src="check" style="width: 24px; height: 24px;"></svg-icon2>
```
