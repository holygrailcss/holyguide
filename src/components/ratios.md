---
layout: _paginas/components/_ratios.njk
permalink: /components/ratios/

titulo: Ratios 2:3 y 3:4
descripcion: Explicación de la diferencia entre ratios 2:3 y 3:4, y ejemplos de qué ocurre al insertar imágenes con diferentes ratios en contenedores.

page_section: components

date: 2024-01-15
fecha: 15 de enero de 2024
tags: ["components"]

image: /assets/static/images/1.jpg
imageAlt: Ratios de imágenes 2:3 y 3:4
---

# Ratios 2:3 y 3:4

Esta página explica la diferencia entre los ratios **2:3** y **3:4**, y muestra ejemplos visuales de qué ocurre cuando insertamos una imagen con un ratio diferente al del contenedor.

## Diferencia entre 2:3 y 3:4

### Ratio 2:3
- **Ancho**: 2 unidades
- **Alto**: 3 unidades
- **Proporción**: Más vertical, más estrecho
- **Clase CSS**: `.aspect-2-3` (usa `aspect-ratio: 2/3`)
- **Uso común**: Imágenes de producto verticales, retratos

### Ratio 3:4
- **Ancho**: 3 unidades
- **Alto**: 4 unidades
- **Proporción**: Más vertical pero más ancho que 2:3
- **Clase CSS**: `.aspect-3-4` (usa `aspect-ratio: 3/4`)
- **Uso común**: Imágenes de producto estándar, tarjetas de producto

### Comparación visual

El ratio **3:4** es más ancho que el **2:3**. Si comparamos ambos:
- **2:3** = 0.666... (más estrecho)
- **3:4** = 0.75 (más ancho)

Esto significa que una imagen con ratio 3:4 ocupará más espacio horizontal que una con ratio 2:3 para la misma altura.
