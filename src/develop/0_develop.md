---
layout: _paginas/develop/_develop.njk
page_section: develop
permalink: /develop/

titulo: Develop
descripcion: Cómo empezar en el sistema de diseño agnostico holygrail.

date: 2023-06-19
fecha: 19 de junio de 2023
tags: ["Estructuras modulares", "web design", ""]
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

## Unica fuente de la verdad

#### Nuestro objetivo es convertir una de las empresas minoristas más grandes del mundo en una organización digital de primer orden. Creamos la primera biblioteca de componentes totalmente receptiva para la marca.

Holygrail es un sistema de diseño completo que proporciona todas las herramientas que necesita para diseñar y desarrollar productos digitales, desde temas de Figma hasta configuraciones y componentes compartidos.

Si bien algunas de las herramientas de desarrollo, como SASS , son obligatorias para trabajar con los componentes de la interfaz de usuario de Holygrail, se recomiendan enfáticamente otras para garantizar la consistencia y la calidad del código elevado en todos los proyectos.

### Enlaces de interes

[Mindmaps para hacer ideas mentales](https://www.mindmaps.app/)
[Creador de snippets](https://snippet-generator.app/)
[Gráficos en ascii](https://asciiflow.com/#/)
[SWIPER slider](https://swiperjs.com/)

## Boilerplate

Aprende a maquetar desde cero con el sistema holygrail

Codesandbox
Crea un fork para crear componente o una maqueta con holygrail en la nube.
Github
Crea un entorno de desarrollo desde cero
Boilerplate
Crea un proyecto completo con parcel y gulp en tu local.

## Debug

Antes de nada, vamos a elegir que herramientas vamos a necesitar para poder debugear mientras maquetamos.

```
@include debug-divs();   // debugaremos con colores en las divs
@include debug-imgs();   // Analisis de los links (uso de alts vacios  en imagenes)
@include debug-links();  // Analisis de los links (uso de alts vacios  en imagenes)
@include debug-forms();  // Analisis de los formularios y buenas praxis  (textarea. inputs erroneos)
@include debug-headers();// Analisis de los encabezados
@include debug-fine();   // depuración de elementos como
@include debug-all();    // depuración de todos a la vez
```

Configuración del archivo setup.scss
Antes de nada configuraremos la guia, con ella generaremos el siguiente archivo de setup.scss. Después copiaremos y sustituiremos en nuestro archivo setup las diferentes variables, de esta forma, tanto la documentación como el proyecto estarán alineados.

```
$font-family-regular:"dutti-daily-regular",Helvetica,arial,sans-serif;
$font-family-medium:"dutti-daily-light",Helvetica,arial,sans-serif;
$font-family-bold:"dutti-daily-bold",Helvetica,arial,sans-serif;
$font-family-2-regular:"dutti-extended-regular",Helvetica,arial,sans-serif;
$font-family-2-medium:"dutti-extended-bold",Helvetica,arial,sans-serif;
$font-family-2-bold:"dutti-extended-extrabold",Helvetica,arial,sans-serif;
$font-family-3-regular:"massimo-daily-regular",ms-serif,serif;
$font-family-3-medium:"massimo-daily-light",ms-serif,serif;
$font-family-3-bold:"massimo-daily-bold",ms-serif,serif;

$font-weight-light: inherit;
$font-weight-regular: inherit;
$font-weight-medium: inherit;
$font-weight-bold: inherit;
$font-family-form-placeholder: "dutti-daily-regular",Helvetica,arial,sans-serif;
$font-family-form: "dutti-daily-regular",Helvetica,arial,sans-serif;

$totalCols:12px;
$padding-global:8px;
$padding-mobile:24px;
$padding-desktop:40px;
$padding-button:8px;
$padding-btn:16px;
$height-inputs:48px;
$btn-radius:8px;
$c-primary:#292929;


$container-full:800px;
$container-fluid:full;
$container:800px;
$container-2:700px;
$container-3:900px;
$container-4:356px;
$container-5:400px;
$container-6:442px;
$container-7:595px;
$container-8:395px;
$container-9:798px;
$container-10:432px;
$container-11:1080px;

$break-xs:1px;
$break-sm:768px;
$break-md:992px;
$break-lg:1280px;
$break-xl:1500px;

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
$hero-big-sm:500px //falta implementar;
$hero-medium-sm:400px  //falta implementar;
$hero-mini-sm: 300px  //falta implementar;

$modalx-xs:295px;
$modalx-sm:445px;
$modalx-md:595px;
$modalx-lg:899px;
$modalx-xl:995px;


$headers: (

sub-l:(56px,56px,96px,96px, 1.1,bold3),
sub-m:(42px,42px,64px,64px, 1.1,bold3),
sub-s:(32px,32px,56px,56px, 1.1,bold3),
head-l:(56px,56px,96px,96px, 1.1,bold),
head-m:(42px,42px,64px,64px, 1.1,bold),
head-s:(32px,32px,56px,56px, 1.1,bold),
tit-l:(24px,24px,42px, 42px, 1.2 ,bold),
tit-m:(20px,20px,32px,32px, 1.2,bold),
tit-s:(16px,16px,20px,20px, 1.2,bold),
tit-xs:(14px,14px,14px,14px, 1.2,bold),
p-l:(18px,18px,20px,20px, 1.3,regular),
p-m:(14px, 14px,16px,16px, 1.3,regular),
p-m-b:(14px, 14px,16px ,16px, 1.3,bold),
p-s:(12px, 12px,13px ,13px, 1.3,regular),
p-s-b:(12px, 12px,13px ,13px, 1.3,bold),
p-xs:(11px, 11px,12px,12px, 1.3,regular),
p-xs-b:(11px, 11px,12px,12px, 1.3,regular),
p-xxs-b:(9px, 9px,9px,9px, 1.3,bold),
p-18-2b:(18px,18px,18px,18px, 1.3,bold),
p-18-b:(18px,18px,18px,18px, 1.3,bold),
p-xs:(14px,14px,14px,14px, 1.3,regular),
p-xs-b:(14px,14px,14px,14px, 1.3,bold),
);

 $headersFixers: (
14: (14px ,1.5),
16: (16px ,1.5),
18: (18px ,1.5),
20: (20px ,1.5),
24: (24px ,1.5),
32: (32px ,1.5),
40: (40px ,1.5),
 );

$headersFluids: (
 12: (12px ,12px ,0.9),
 14: (14px ,14px ,0.9),
 16: (16px ,16px ,2),
 18: (18px ,18px ,2),
 20: (20px ,40px ,1),
 50: (30px ,50px ,1),
 100: (50px ,200px ,1),
 150: (50px ,120px ,0.9),
 );

```

### 02. Creando la estructura

Como si se tratase de una construcción, empezaremos por los cimientos y la estructura responsive donde más adelante insertaremos los componentes flexibles.
Sections
Empezaremos maquetando por la
nuestras webs se separarán siempre por sections, muy delimitadas.

```
<section m-48 p-48 bleed-8 has-light>
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
