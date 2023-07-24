---
layout: _paginas/develop/_practices.njk
permalink: /practices/
page_section: develop

titulo: Buenas Practicas
descripcion: Lo que nunca deberemos hacer
---

### Creando buenos patrones

Los mínimos mandamientos a seguir en maqueta.

| ❌ No                                                                      | ✅ Si                                                                                   |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| No Usar clases para hacer querySelector                                    | Usar clases nativas de Angular para seleccionar elementos (ViewChild, ElementRef)       |
| No Crear un archivo sass sin importar las variables de inicio              | importar todas las clases al inicio del sass abstract/all                               |
| No Crear css para nuevos elementos sin testear, y sin pasar por UX         | Usaremos los css que ya están testeados en la guia directamente en el html              |
| Si no existe el componente no lo creo .                                    | El equipo de ux creará el componente, y lo introducirá en el ds system de art digital   |
| No Usaremos :host para usar las clases de forma global .                   | :host, no funciona en la web. Debemos trabajar el encapsulation: ViewEncapsulation.None |
| No Usaremos disabled en botones                                            | Los botones estarán habilitados para saber que nos falta por rellenar al hacer click.   |
| No usaremos /_ xxx _/ para comentar el HTML                                | Usaremos // xxx para poder debugar la maqueta                                           |
| No usaremos class="bg-light" para comentar crear un selector en javascript | Usaremos // .js-loquesea para poder identificar que es una clase selector via js.       |
