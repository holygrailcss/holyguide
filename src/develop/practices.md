---
layout: _paginas/develop/_practices.njk
permalink: /practices/
page_section: develop
tags: ["Estructuras modulares", "develop", "buenas prácticas"]
titulo: Buenas Prácticas
descripcion: Guía de buenas prácticas para el desarrollo con HolyGuide
---

### Introducción

Los mínimos mandamientos a seguir en el desarrollo de componentes y templates con el sistema HolyGuide.

{% br %}

## ❌ No realizar nunca

### Estructura y Organización

- **No crear un archivo SCSS sin importar las variables de inicio** - Siempre importa las variables y mixins necesarios desde `abstract/_all.scss` o los archivos correspondientes.

- **No crear CSS para nuevos elementos sin testear** - Todos los componentes deben ser probados antes de ser incluidos en el sistema.

- **No crear componentes sin pasar por UX** - El equipo de UX debe validar y crear el componente antes de su implementación.

- **No crear componentes que no existan en el sistema** - Si no existe el componente en el Design System, no lo crees por tu cuenta. Consulta primero con el equipo.

### Código y Selectores

- **No usar clases para hacer querySelector en JavaScript** - Usa atributos `data-*` o IDs específicos para seleccionar elementos desde JavaScript.

- **No usar `class="bg-light"` o similares para comentar o crear selectores en JavaScript** - Usa clases específicas con prefijo `.js-` para elementos que se seleccionan desde JavaScript.

- **No usar comentarios HTML del tipo `<!-- xxx -->` para debuggear** - Usa comentarios SCSS `// xxx` para poder debugear la maqueta.

- **No usar `disabled` en botones a no ser que sea un caso excepcional** - Los botones deben estar habilitados para mostrar qué falta por rellenar al hacer click.

### Nomenclatura y Estándares

- **No usar nomenclatura inconsistente** - Sigue las convenciones establecidas en el sistema.

- **No crear estilos inline** - Usa siempre clases y archivos SCSS organizados.

- **No duplicar código** - Reutiliza componentes y mixins existentes.

## ✅ Buenas Prácticas

### Estructura de Archivos

- **Importar todas las clases al inicio del SCSS** - En `abstract/_all.scss` o en el archivo correspondiente, importa todas las dependencias necesarias.

- **Organizar los archivos SCSS siguiendo el patrón establecido**:
  ```scss
  // =============================================================================
  // COMPONENT NAME - Description
  // =============================================================================
  
  // Imports
  @use "../../../../node_modules/holygrail2/scss/hg-lite/abstract/_index.scss" as *;
  
  // =============================================================================
  // BASE STYLES
  // =============================================================================
  
  // =============================================================================
  // LAYOUT COMPONENTS
  // =============================================================================
  
  // =============================================================================
  // STATES
  // =============================================================================
  
  // =============================================================================
  // RESPONSIVE
  // =============================================================================
  
  // =============================================================================
  // RTL SUPPORT
  // =============================================================================
  ```

### Uso de Componentes

- **Usar los CSS que ya están testeados en la guía directamente en el HTML** - Reutiliza las clases y componentes existentes del sistema.

- **El equipo de UX creará el componente y lo introducirá en el Design System** - Sigue el proceso establecido para la creación de nuevos componentes.

### JavaScript y Selectores

- **Usar clases con prefijo `.js-` para elementos seleccionados desde JavaScript**:
  ```html
  <button class="btn js-submit-form">Enviar</button>
  ```
  
  ```javascript
  document.querySelector('.js-submit-form');
  ```

- **Usar atributos `data-*` para datos específicos**:
  ```html
  <div class="component" data-component-id="123">...</div>
  ```

### Comentarios y Debugging

- **Usar `// xxx` para poder debugear la maqueta** - Los comentarios SCSS son útiles para debugging y documentación.

- **Usar `// .js-loquesea` para identificar clases selectoras via JavaScript** - Documenta claramente qué clases se usan desde JavaScript.

### Responsive y RTL

- **Siempre considerar soporte responsive** - Usa los breakpoints definidos en `_breakpoints.scss`.

- **Implementar soporte RTL cuando sea necesario** - Agrupa todas las reglas RTL al final del archivo SCSS usando `.is-rtl`.

### Nomenclatura

- **Seguir la convención BEM cuando sea apropiado** - Usa nombres descriptivos y consistentes.

- **Usar prefijos consistentes**:
  - `.md-` para componentes del menú
  - `.token-` para tokens de diseño
  - `.js-` para clases JavaScript
  - `.is-` para estados (`.is-active`, `.is-rtl`)

### Performance

- **Evitar selectores demasiado específicos** - Mantén la especificidad baja para facilitar la sobrescritura.

- **Usar variables de Sass** - No hardcodees valores, usa las variables definidas en `_variables.scss`.

- **Optimizar imágenes** - Asegúrate de que las imágenes estén optimizadas antes de incluirlas.

### Mantenibilidad

- **Documentar código complejo** - Añade comentarios explicativos cuando el código no sea autoexplicativo.

- **Mantener el código DRY (Don't Repeat Yourself)** - Reutiliza mixins, funciones y componentes.

- **Revisar código antes de commitear** - Asegúrate de que el código sigue las convenciones del proyecto.

## 📋 Checklist antes de crear un componente

Antes de crear un nuevo componente, verifica:

- [ ] ¿Existe ya un componente similar en el sistema?
- [ ] ¿Ha sido validado por el equipo de UX?
- [ ] ¿Está documentado correctamente?
- [ ] ¿Sigue las convenciones de nomenclatura?
- [ ] ¿Tiene soporte responsive?
- [ ] ¿Tiene soporte RTL si es necesario?
- [ ] ¿Está importado correctamente en los archivos SCSS?
- [ ] ¿Ha sido probado en diferentes navegadores?
