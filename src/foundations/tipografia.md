---
layout: _paginas/foundations/_tipografia.njk
permalink: /tipografia/

titulo: Tipografias
descripcion: Escala tipográfica del sistema de diseño. Clases, tamaños, pesos y familias de fuentes.

page_section: foundations
date: 2026-03-09
fecha: 9 de marzo de 2026
tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/tipografias.jpg
imageAlt: Escala tipográfica del sistema de diseño
---

## Familias de fuentes

El sistema utiliza tres familias tipográficas, cada una con tres pesos.

| Variable SCSS | Fuente | Uso |
|---|---|---|
| `$font-family-a-l` | SuisseIntl-Light | Texto ligero, body |
| `$font-family-a-r` | SuisseIntl-Regular | Texto principal |
| `$font-family-a-m` | SuisseIntl-Medium | Énfasis medio |
| `$font-family-a-b` | SuisseIntl-SemiBold | Negrita, títulos |
| `$font-family-b-r` | dutti-daily-semibold | Display secundaria |
| `$font-family-b-m` | dutti-extended-bold | Display negrita |
| `$font-family-b-b` | dutti-extended-extrabold | Display extra negrita |
| `$font-family-c-r` | massimo-daily-regular | Serif regular |
| `$font-family-c-m` | massimo-daily-light | Serif ligero |
| `$font-family-c-b` | massimo-daily-bold | Serif negrita |

### Clases de peso

| Clase | Equivalente | Uso |
|---|---|---|
| `.font-l` | `font-family-a-l` (light) | Texto fino |
| `.font-r` | `font-family-a-r` (regular) | Texto base |
| `.font-m` | `font-family-a-m` (medium) | Énfasis |
| `.font-b` | `font-family-a-b` (bold) | Negrita |
| `.font-sb` | `font-family-a-sb` (semibold) | Semi-negrita |

---

## Escala tipográfica — `$minheaders`

Clases de texto de tamaño fijo, generadas a partir del mapa `$minheaders`.

| Clase | Mobile | Desktop | Line-height | Peso | Notas |
|---|---|---|---|---|---|
| `.h2` | 18px | 24px | 1.2 | bold | Subtítulo |
| `.title-l-b` | 14px | 14px | 1.4 | medium | En revisión |
| `.title-l` | 13px | 13px | 1.4 | light | TTU |
| `.title-m` | 12px | 12px | 1.4 | light | TTU, 16% letter-spacing |
| `.title-s` | 11px | 11px | 1.4 | light | TTU |
| `.semantic` | 12px | 12px | 1 | light | 16% letter-spacing |
| `.text-m` | 12px | 12px | 1.5 | light | Body small |
| `.text-l` | 12px | 13px | 1.5 | light | Sustituida por `.hg-body-m` |
| `.hg-body-m` | 12px | 13px | 1.5 | light | Body principal |
| `.hg-body-m-b` | 12px | 13px | 1.5 | medium | Body en negrita |
| `.label-m` | 12px | 12px | 1 | light | Labels, 16% letter-spacing |
| `.p-tag` | 8px | 8px | 1 | light | Tags, chips |
| `.suisse-1` | 16px | 20px | 1.5 | regular | Texto suisse grande |
| `.suisse-2` | 13px | 14px | 1.1 | regular | Texto suisse pequeño |
| `.suisse-body` | 10px | 12px | 1.1 | regular | Body suisse |

---

## Tamaños fijos — `$headersFixers`

Clases de tamaño de fuente fijo sin escala responsive.

| Clase | Font-size | Line-height |
|---|---|---|
| `.text-12-r` | 12px | 1 |
| `.text-14-r` | 14px | 1.5 |
| `.text-16-r` | 16px | 1.5 |
| `.text-18-r` | 18px | 1.5 |
| `.text-20-r` | 20px | 1.2 |
| `.text-24-r` | 24px | 1.2 |
| `.text-32-r` | 32px | 1.2 |
| `.text-40-r` | 40px | 1.2 |

---

## Tipografías fluidas — `$headersFluids`

Clases que escalan el tamaño de fuente entre un mínimo (mobile) y un máximo (desktop) de forma fluida con `clamp()`.

| Clase | Min | Max | Letter-spacing |
|---|---|---|---|
| `.fluid-1` | 60px | 160px | 0.8 |
| `.fluid-2` | 40px | 80px | 0.9 |
| `.fluid-3` | 40px | 100px | 0.9 |
| `.fluid-4` | 40px | 60px | 0.9 |
| `.fluid-5` | 20px | 40px | 0.9 |
| `.fluid-6` | 18px | 24px | 0.9 |
| `.fluid-7` | 18px | 24px | 0.9 |
| `.fluid-8` | 18px | 24px | 0.9 |
| `.fluid-18` | 18px | 24px | 1.4 |

---

## Helpers de texto

| Clase | Descripción |
|---|---|
| `.bold` | Texto en negrita |
| `.semibold` | Texto semi-negrita |
| `.ttu` | `text-transform: uppercase` |
| `.text-uppercase` | Mayúsculas |
| `.text-lowercase` | Minúsculas |
| `.text-capitalize` | Capitaliza palabras |
| `.text-transform-none` | Sin transformación |
| `.has-ellipsis` | Trunca con `…` en 1 línea |
| `.has-ellipsis-3` | Trunca a 3 líneas |
| `.is-through` | Texto tachado |
| `.leading-1` | `line-height: 1` |
| `.text-center` | Centra el texto |

---

## Cómo usar

```html
<!-- Body principal -->
<p class="hg-body-m">Texto de cuerpo principal.</p>

<!-- Label en mayúsculas -->
<span class="label-m ttu">Categoría</span>

<!-- Título fluido grande -->
<h1 class="fluid-1 bold">Gran titular de portada</h1>

<!-- Tamaño fijo -->
<p class="text-16-r">Texto a 16px fijo</p>
```

```scss
// Usando variables directamente en SCSS
.mi-titulo {
  font-family: $font-family-a-b;
  font-size: 24px;
  line-height: 1.2;
}
```
