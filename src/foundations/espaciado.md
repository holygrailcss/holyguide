---
layout: _paginas/foundations/_foundations.njk
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

### Full Padding

Rodeando todo el elemento padding: Xpx;

```
p-x: (xs, md, lg, xl),
p-8: (8px, 8px, 8px, 8px),
p-16: (16px, 16px, 16px, 16px),
p-24: (24px, 24px, 24px, 24px),
p-32: (32px, 32px, 32px, 32px),
p-48: (20px, 48px, 48px, 48px);
```

### Top Padding

Padding top padding-top: Xpx;

```
px-x: (xs, md, lg, xl),
pt-8: (8px, 8px, 8px, 8px),
pt-16: (16px, 16px, 16px, 16px),
pt-24: (24px, 24px, 24px, 24px),
pt-32: (32px, 32px, 32px, 32px),
pt-48: (20px, 48px, 48px, 48px);
```

### Bottom Padding

Padding bottom padding-bottom: Xpx;

```
px-x: (xs, md, lg, xl),
pb-8: (8px, 8px, 8px, 8px),
pb-16: (16px, 16px, 16px, 16px),
pb-24: (24px, 24px, 24px, 24px),
pb-32: (32px, 32px, 32px, 32px),
pb-48: (20px, 48px, 48px, 48px);
```

### Left Padding

Padding left padding-letf: Xpx;

```
pl-x: (xs, md, lg, xl),
pl-8: (8px, 8px, 8px, 8px),
pl-16: (16px, 16px, 16px, 16px),
pl-24: (24px, 24px, 24px, 24px),
pl-32: (32px, 32px, 32px, 32px),
pl-48: (20px, 48px, 48px, 48px);
```

### Right Padding

Padding right padding-right: Xpx;

```
pr-x: (xs, md, lg, xl),
pr-8: (8px, 8px, 8px, 8px),
pr-16: (16px, 16px, 16px, 16px),
pr-24: (24px, 24px, 24px, 24px),
pr-32: (32px, 32px, 32px, 32px),
pr-48: (20px, 48px, 48px, 48px);
```

### Margin Full

Rodeando todo el elemento margin: Xpx;

```
m-x: (xs, md, lg, xl),
m-8: (8px, 8px, 8px, 8px),
m-16: (16px, 16px, 16px, 16px),
m-24: (24px, 24px, 24px, 24px),
m-32: (32px, 32px, 32px, 32px),
m-48: (20px, 48px, 48px, 48px);
```

### Top Margin

Margin top margin-top: Xpx;

```
mt-x: (xs, md, lg, xl),
mt-8: (8px, 8px, 8px, 8px),
mt-16: (16px, 16px, 16px, 16px),
mt-24: (24px, 24px, 24px, 24px),
mt-32: (32px, 32px, 32px, 32px),
mt-48: (20px, 48px, 48px, 48px);
```

### Right Margin

Margin right margin-right: Xpx;

```
mr-x: (xs, md, lg, xl),
mr-8: (8px, 8px, 8px, 8px),
mr-16: (16px, 16px, 16px, 16px),
mr-24: (24px, 24px, 24px, 24px),
mr-32: (32px, 32px, 32px, 32px),
mr-48: (20px, 48px, 48px, 48px);
```

### Bottom Margin

Margin bottom margin-bottom: Xpx;

```
mb-x: (xs, md, lg, xl),
mb-8: (8px, 8px, 8px, 8px),
mb-16: (16px, 16px, 16px, 16px),
mb-24: (24px, 24px, 24px, 24px),
mb-32: (32px, 32px, 32px, 32px),
mb-48: (20px, 48px, 48px, 48px);
```

### Left Margin

Margin left margin-left: Xpx;

```
ml-x: (xs, md, lg, xl),
ml-8: (8px, 8px, 8px, 8px),
ml-16: (16px, 16px, 16px, 16px),
ml-24: (24px, 24px, 24px, 24px),
ml-32: (32px, 32px, 32px, 32px),
ml-48: (20px, 48px, 48px, 48px);
```

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
