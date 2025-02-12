---
layout: _paginas/develop/_develop.njk
page_section: develop
permalink: /develop/

titulo: Develop
descripcion: Cómo empezar en el sistema de diseño agnostico holygrail.

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", "develop"]
image: /assets/static/images/1.jpg
imageAlt: Ilustración de un diseño de sistema web
buttonTitle: Empezar

seccion1: Diseñadores
url1: /startdesigner

seccion2: Desarrolladores
url2: /startdev

seccion3: Owners
url3: /enlace3
---

## Empezando

##### Nuestro objetivo es convertir una de las empresas minoristas más grandes del mundo en una organización digital de primer orden. Creamos la primera biblioteca de componentes totalmente receptiva para la marca.

Holygrail es un sistema de diseño completo que proporciona todas las herramientas que necesita para diseñar y desarrollar productos digitales, desde temas de Figma hasta configuraciones y componentes compartidos.

Si bien algunas de las herramientas de desarrollo, como SASS , son obligatorias para trabajar con los componentes de la interfaz de usuario de Holygrail, se recomiendan enfáticamente otras para garantizar la consistencia y la calidad del código elevado en todos los proyectos.

### Enlaces de interes

- [Mindmaps para hacer ideas mentales](https://www.mindmaps.app/)
- [Creador de snippets](https://snippet-generator.app/)
- [Gráficos en ascii](https://asciiflow.com/#/)
- [API SWIPER slider](https://swiperjs.com/)

### Boilerplate

Aprende a maquetar desde cero con el sistema holygrail. Para ello hemos preparado un Playground para que practiques en local. Tambien se puede utilizar como Boilerplate.

Descarga tu boilerplate [Codesandbox](https://codesandbox.io/s/origen-holygrail-ktq12)

- Crea un fork para crear componente o una maqueta con holygrail en la nube.
- Github
- Crea un entorno de desarrollo desde cero
- Boilerplate
- Crea un proyecto completo con parcel y gulp en tu local.

### Debug

Antes de nada, vamos a elegir que herramientas vamos a necesitar para poder debugear mientras maquetamos.

```scss
@include debug-divs(); // debugaremos con colores en las divs
@include debug-imgs(

); // Analisis de los links (uso de alts vacios  en imagenes)
@include debug-links(

); // Analisis de los links (uso de alts vacios  en imagenes)
@include debug-forms(

); // Analisis de los formularios y buenas praxis  (textarea. inputs erroneos)
@include debug-headers(); // Analisis de los encabezados
@include debug-fine(); // depuración de elementos como
@include debug-all(); // depuración de todos a la vez
```

## Inicialización

## Configuración

### Font family

Configuración de fuentes y grosores

```scss
$font-family-regular: "dutti-daily-regular", Helvetica, arial, sans-serif;
$font-family-medium: "dutti-daily-light", Helvetica, arial, sans-serif;
$font-family-bold: "dutti-daily-bold", Helvetica, arial, sans-serif;
$font-family-2-regular: "dutti-extended-regular", Helvetica, arial, sans-serif;
$font-family-2-medium: "dutti-extended-bold", Helvetica, arial, sans-serif;
$font-family-2-bold: "dutti-extended-extrabold", Helvetica, arial, sans-serif;
$font-family-3-regular: "massimo-daily-regular", ms-serif, serif;
$font-family-3-medium: "massimo-daily-light", ms-serif, serif;
$font-family-3-bold: "massimo-daily-bold", ms-serif, serif;
```

### Grosores

Configuración de grosores

```scss
$font-weight-light: inherit;
$font-weight-regular: inherit;
$font-weight-medium: inherit;
$font-weight-bold: inherit;
$font-family-form-placeholder: "dutti-daily-regular", Helvetica, arial,
  sans-serif;
$font-family-form: "dutti-daily-regular", Helvetica, arial, sans-serif;
```

### Varios Elementos

Configuración de diversos elementos que se utilizan a lo largo del proyecto:

```scss
$totalCols: 12px;
$padding-global: 8px;
$padding-mobile: 24px;
$padding-desktop: 40px;
$padding-button: 8px;
$padding-btn: 16px;
$height-inputs: 48px;
$btn-radius: 8px;
$c-primary: #000000;
```

### Containers

Configuración de contenedores con dimensiones específicas:

```scss
$container-full: 800px;
$container-fluid: full;
$container: 800px;
$container-2: 700px;
$container-3: 900px;
$container-4: 356px;
$container-5: 400px;
$container-6: 442px;
$container-7: 595px;
$container-8: 395px;
$container-9: 798px;
$container-10: 432px;
$container-11: 1080px;
```

### Configuración de breakpoints

Establecimiento de puntos de ruptura para diseño responsive:

```scss
$break-xs: 1px;
$break-sm: 768px;
$break-md: 992px;
$break-lg: 1280px;
$break-xl: 1500px;
```

### Configuración de alturas

Con estas alturas controlaremos los tamaños mínimos de alturas
Variables como $h-100 y $height-100, ambas al 100%, definen alturas relativas al contenedor padre.
$height-xs a $height-xl y variables de $hero- especifican alturas fijas para componentes como cabeceras de hero, adaptadas a diferentes tamaños de pantalla.

```scss
$h-100:100%;
$height-100:100%;
$height-xs:80px;
$height-sm:100px;
$height-md:350px;
$height-lg:400px;
$height-xl:450px;
$hero-big: 300px ;
$hero-medium:200px ;
$hero-mini: 100px ;
$hero-big-sm:500px     //falta implementar;
$hero-medium-sm:400px  //falta implementar;
$hero-mini-sm: 300px   //falta implementar;
```

### Configuración de modales

```scss
$modalx-xs: 295px;
$modalx-sm: 445px;
$modalx-md: 595px;
$modalx-lg: 899px;
$modalx-xl: 995px;
```

### Tamaños tipográficos

_Obsoleto_ ❌❌

```scss
$headers: (
  tit-m: (
    14px,
    14px,
    16px,
    16px,
    1.2,
    "medium",
  ),
  tit-s: (
    12px,
    12px,
    13px,
    13px,
    1.2,
    "medium",
  ),
  tit-xs: (
    11px,
    11px,
    11px,
    11px,
    1.2,
    "medium",
  ),
  p-m-b: (
    12px,
    12px,
    13px,
    13px,
    1.2,
    "bold",
  ),
  p-m: (
    12px,
    12px,
    13px,
    13px,
    1.2,
    "regular",
  ),
  p-m-m: (
    12px,
    12px,
    13px,
    13px,
    1.2,
    "medium",
  ),
  p-s: (
    12px,
    12px,
    12px,
    12px,
    1.2,
    "regular",
  ),
  p-xs: (
    11px,
    11px,
    11px,
    11px,
    1.2,
    "regular",
  ),
  p-s-b: (
    12px,
    12px,
    13px,
    13px,
    1.3,
    "bold",
  ),
  p-xs-b: (
    11px,
    11px,
    12px,
    12px,
    1.3,
    "bold",
  ),
  p-xxs-b: (
    9px,
    9px,
    9px,
    9px,
    1.3,
    "bold",
  ),
  p-tag: (
    8px,
    8px,
    10px,
    10px,
    1.3,
    "bold",
  ),
) !default;
```

### Tamaños tipograficos actuales

```scss
$minheaders: (
  tit-m: (
    14px,
    16px,
    1.2,
    "medium",
  ),
  // siempre mayus   36 ✅
  tit-s:
    (
      12px,
      13px,
      1.2,
      "medium",
    ),
  // siempre mayus   84 lo vamos a borrar y sustiuir por p-m ❌
  tit-xs:
    (
      11px,
      11px,
      1.2,
      "medium",
    ),
  // siempre mayus   77
  p-m-b:
    (
      12px,
      13px,
      1.2,
      "bold",
    ),
  // 146  es semibold aunque ponga bold
  p-m:
    (
      12px,
      13px,
      1.2,
      "regular",
    ),
  // 384 pasa a ser medium y borramos tit-s ❌
  p-m-m:
    (
      12px,
      13px,
      1.2,
      "medium",
    ),
  // 3
  p-s:
    (
      12px,
      12px,
      1.2,
      "regular",
    ),
  //598  ❌
  p-xs:
    (
      11px,
      11px,
      1.2,
      "regular",
    ),
  //169
  p-s-b:
    (
      12px,
      13px,
      1.3,
      "bold",
    ),
  //0 borramos y pasa a ser p-m-b  ✅
  p-xs-b:
    (
      11px,
      12px,
      1.3,
      "bold",
    ),
  // 35
  p-xxs-b:
    (
      9px,
      9px,
      1.3,
      "bold",
    ),
  // 6
  p-tag:
    (
      8px,
      10px,
      1.3,
      "regular",
    )
    //  siempre en mayus,,,,,,
) !default;
```

### Tipografias Fijas

```scss
$headersFixers: (
  14: (
    14px,
    1.5,
  ),
  16: (
    16px,
    1.5,
  ),
  18: (
    18px,
    1.5,
  ),
  20: (
    20px,
    1.5,
  ),
  24: (
    24px,
    1.5,
  ),
  32: (
    32px,
    1.5,
  ),
  40: (
    40px,
    1.5,
  ),
);
```

### Tipografias Fluidas

Tipografias que se adaptan con los anchos del viewport

```scss
$headersFluids: (
  12: (
    12px,
    12px,
    0.9,
  ),
  14: (
    14px,
    14px,
    0.9,
  ),
  16: (
    16px,
    16px,
    2,
  ),
  18: (
    18px,
    18px,
    2,
  ),
  20: (
    20px,
    40px,
    1,
  ),
  50: (
    30px,
    50px,
    1,
  ),
  100: (
    50px,
    200px,
    1,
  ),
  150: (
    50px,
    120px,
    0.9,
  ),
);
```

## Creando la estructura

Como si se tratase de una construcción, empezaremos por los cimientos y la estructura responsive donde más adelante insertaremos los componentes flexibles.
Sections
Empezaremos maquetando por la
nuestras webs se separarán siempre por sections, muy delimitadas.

```html
<section class=" m-48 p-48 bleed-8 has-light">Contenido</section>
```

| Seccionbase | márgenes | paddings | Reticula | Textos     |
| ----------- | -------- | -------- | -------- | ---------- |
| < section > | .m-48    | .p-48    | .bleed-8 | .has-light |
|             | .m-48    | .p-48    | .bleed-0 |            |
|             | .m-48    | .p-48    |          |            |

### Container

Elegimos el tipo de container usado

| Tipo container   | Descripción            |
| ---------------- | ---------------------- |
| .container-full  | Ancho máximo de 800px  |
| .container-fluid | Ancho máximo de full   |
| .container       | Ancho máximo de 800px  |
| .container-2     | Ancho máximo de 700px  |
| .container-3     | Ancho máximo de 900px  |
| .container-4     | Ancho máximo de 356px  |
| .container-5     | Ancho máximo de 400px  |
| .container-6     | Ancho máximo de 442px  |
| .container-7     | Ancho máximo de 595px  |
| .container-8     | Ancho máximo de 395px  |
| .container-9     | Ancho máximo de 798px  |
| .container-10    | Ancho máximo de 432px  |
| .container-11    | Ancho máximo de 1080px |

### Row

Colocamos el row , siempre es flex menos en el primer breakpoint sm El orden en el que colocaremos los modificadores será el siguiente.

### Columnas

Colocamos el row , siempre es flex menos en el primer breakpoint sm El orden en el que colocaremos los modificadores será el siguiente.
