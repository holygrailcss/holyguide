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

### Unidades

Por lo tanto las unicas unidades que podemos usar para los espaciados es de...

#### 8px, 16px, 24px, 32px, 40px, 48px, 64px...

### Márgenes Bottoms Hasta

- \*\* eliminar del proyecto

| Helper            | Descripción                              |
| ----------------- | ---------------------------------------- |
| .mdmax:mb-16      | Margen inferior hasta $break-md -1;      |
| .mdmax:mb-20      | \*\* Margen inferior hasta break-md -1;  |
| .mdmax:mb-42      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-16      | \*\* Margen inferior hasta $break-sm -1; |
| .smmax:mb-20      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-42 \*\* | Ancho máximo de 356px                    |



Para trabajar con tamaños responsive

Primero pondremos el margen en mobile y luego resetearemos si solo queremos el típico margen bottom en mobile


| Helper            | Descripción                              |
| ----------------- | ---------------------------------------- |
| .sm:mb-0      | a partir de sm ponemos a cero;      |
| .md:mb-0     |  a partir de md ponemos a cero;   |
| .lg:mb-0     | a partir de lg ponemos a cero;     |
| .xl:mb-0     |  a partir de xl ponemos a cero;   |
|    |   |
| .sm:mt-0      | a partir de sm ponemos a cero;      |
| .md:mt-0     |  a partir de md ponemos a cero;   |
| .lg:mt-0     | a partir de lg ponemos a cero;     |
| .xl:mt-0     |  a partir de xl ponemos a cero;   |
|    |   |
| .sm:pr-0      | a partir de sm ponemos a cero;      |
| .md:pr-0     |  a partir de md ponemos a cero;   |
| .lg:pr-0     | a partir de lg ponemos a cero;     |
| .xl:pr-0     |  a partir de xl ponemos a cero;   |
|    |   |
| .sm:pt-0      | a partir de sm ponemos a cero;      |
| .md:pt-0     |  a partir de md ponemos a cero;   |
| .lg:pt-0     | a partir de lg ponemos a cero;     |
| .xl:pt-0     |  a partir de xl ponemos a cero;   |
