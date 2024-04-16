---
layout: _paginas/develop/_practices.njk
permalink: /practices/
page_section: develop
tags: ["Estructuras modulares", "develop", ""]
titulo: Buenas Practicas
descripcion: Buenas prácticas
---
### Intro

Los mínimos mandamientos a seguir en maqueta.
{% br %}

## No realizar nunca  ❌

No Usar clases para hacer querySelector

No Crear un archivo sass sin importar las variables de inicio

No Crear css para nuevos elementos sin testear, y sin pasar por UX

Si no existe el componente no lo creo .

No Usaremos **:host** para usar las clases de forma global .

No Usaremos disabled en botones a no ser que sea un caso excepcional.

No usaremos /_ xxx _/ para comentar el HTML

No usaremos class="bg-light" para comentar crear un selector en javascript.


## Buenas practicas  ✅

Usar clases nativas de Angular para seleccionar elementos (ViewChild, ElementRef)importar todas las clases al inicio del sass abstract/all

Usaremos los css que ya están testeados en la guia directamente en el html

El equipo de ux creará el componente, y lo introducirá en el ds system de art digital

:host, no funciona en la web. Debemos trabajar el encapsulation: ViewEncapsulation.None

Los botones estarán habilitados para saber que nos falta por rellenar al hacer click.

Usaremos // xxx para poder debugar la maqueta

 Usaremos // .js-loquesea para poder identificar que es una clase selector via js.
