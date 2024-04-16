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
Por lo tanto las unicas unidades que podemos usar para los espaciados son de...
**8px, 16px, 24px, 32px, 40px, 48px, 64px...**
### Márgenes Bottoms Hasta





| Helper            | Descripción                              |
| ----------------- | ---------------------------------------- |
| .mdmax:mb-16      | Margen inferior hasta $break-md -1;      |
| .mdmax:mb-42      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-20      | Margen inferior hasta $break-sm -1;      |
| .smmax:mb-42 \*\* | \*\*Ancho máximo de 356px                |
| .mdmax:mb-20 \*\* | \*\* Margen inferior hasta break-md -1;  |
| .smmax:mb-16 \*\* | \*\* Margen inferior hasta $break-sm -1; |
Para trabajar con tamaños responsive




### RESET DESDE [SM..]
| Helper            | Descripción      |
| ----------------- | ---------------- |
| **Margin bottom** |                  |
| .sm:mb-0          | a partir de sm 0 |
| .md:mb-0          | a partir de md 0 |
| .lg:mb-0          | a partir de lg 0 |
| .xl:mb-0          | a partir de xl 0 |
| **Margin top**    |                  |
| .sm:mt-0          | a partir de sm 0 |
| .md:mt-0          | a partir de md 0 |
| .lg:mt-0          | a partir de lg 0 |
| .xl:mt-0          | a partir de xl 0 |
| **Padding right** |                  |
| .sm:pr-0          | a partir de sm 0 |
| .md:pr-0          | a partir de md 0 |
| .lg:pr-0          | a partir de lg 0 |
| .xl:pr-0          | a partir de xl 0 |
| **Padding top**   |                  |
| .sm:pt-0          | a partir de sm 0 |
| .md:pt-0          | a partir de md 0 |
| .lg:pt-0          | a partir de lg 0 |
| .xl:pt-0          | a partir de xl 0 |
| **Padding left**  |                  |
| .sm:pl-0          | a partir de sm 0 |
| .md:pl-0          | a partir de md 0 |
| .lg:pl-0          | a partir de lg 0 |
| .xl:pl-0          | a partir de xl 0 |
| **Padding Right** |                  |
| .sm:pr-0          | a partir de sm 0 |
| .md:pr-0          | a partir de md 0 |
| .lg:pr-0          | a partir de lg 0 |
| .xl:pr-0          | a partir de xl 0 |
### RESET HASTA [SM..]
| Helper            | Descripción                |
| ----------------- | -------------------------- |
| **Margen bottom** |                            |
| .smmax:mb-0       | margen a cero hasta sm     |
| .mdmax:mb-0       | margen a cero hasta sm     |
| .lgmax:mb-0       | margen a cero hasta sm     |
| .xlmax:mb-0       | margen a cero hasta sm     |
| **Margen top**    |                            |
| .smmax:mt-0       | margen top a cero hasta sm |
| .mdmax:mt-0       | margen top a cero hasta sm |
| .lgmax:mt-0       | margen top a cero hasta sm |
| .xlmax:mt-0       | margen top a cero hasta sm |



### márgenes Responsive
| Helper         | Descripción |    |    |
| -------------- | ----------- | -- |-- |
| mbr-24         | 16px        | 24px  | |
| mbr-32         | 16px        | 32px  | |
| mbr-64         | 32px        | 64px  | |
| mbr-128        | 64px        | 128px | |