---
layout: _paginas/foundations/_espaciado.njk
permalink: /espaciado/

titulo: Espaciado
descripcion: .

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/espaciado.jpg
imageAlt: Ilustración de un diseño de sistema web

eleventyComputed:
  metaTitle: Beneficios de un Design System | Mejora la coherencia y eficiencia de tu web
  metaDescription: Descubre cómo un Design System puede mejorar la coherencia y eficiencia de tu sitio web. Obtén más clics y mejora la experiencia de usuario. 💡 ¡Conoce los beneficios ahora!
  metaKeywords: "Estructuras modulares, coherencia web, eficiencia, experiencia de usuario"
  metaRobots: "noindex, nofollow"
---

## Espaciado Responsive

| Helper   | Mobile             | Desktop             |
| -------- | ------------------ | ------------------- |
| .mbr-128 | Margen bottom 64px | Margen bottom 128px |
| .mbr-32  | Margen bottom 64px | Margen bottom 32px  |
| .mbr-24  | Margen bottom 64px | Margen bottom 24px  |

### Unidades

Por lo tanto las unicas unidades que podemos usar para los espaciados es de...
8px, 16px, 24px, 32px, 40px, 48px, 64px...
6pt, 12pt, 18pt, 24pt, 30pt, 36pt, 48pt...



### Márgenes Hasta

- \*\* eliminar del proyecto

| Helper            | Descripción                              |
| ----------------- | ---------------------------------------- |
| .mdmax:mb-16      | Margen inferior hasta $break-md -1;      |
| .mdmax:mb-20      | \*\* Margen inferior hasta break-md -1;  |
| .mdmax:mb-42      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-16      | \*\* Margen inferior hasta $break-sm -1; |
| .smmax:mb-20      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-42 \*\* | Ancho máximo de 356px                    |
