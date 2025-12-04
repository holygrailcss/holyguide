# HolyGuide - Sistema de Diseño

Sistema de diseño completo construido con **Eleventy** y **Nunjucks** que proporciona todas las herramientas necesarias para diseñar y desarrollar productos digitales, desde componentes reutilizables hasta documentación completa para diseñadores y desarrolladores.

## 📋 Descripción

**HolyGuide** es un sistema de diseño agnóstico que permite crear interfaces consistentes y escalables. Incluye:

- 🎨 **Componentes reutilizables** - Biblioteca completa de componentes UI
- 📐 **Templates y layouts** - Plantillas predefinidas para diferentes casos de uso
- 🎯 **Tokens de diseño** - Sistema de tokens para mantener consistencia
- 📚 **Documentación completa** - Guías para diseñadores y desarrolladores
- 🧩 **Sistema de parrillas** - Grid system flexible y responsive
- 🌐 **Soporte RTL** - Compatibilidad con idiomas de derecha a izquierda

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (Eleventy + Sass)
npm start

# Compilar para producción
npm run build
```

El proyecto estará disponible en `http://localhost:8080`

## 📜 Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo (watch mode)
npm start

# Solo compilar Eleventy
npm run watch:eleventy

# Solo compilar Sass
npm run watch:sass
```

### Producción

```bash
# Compilar todo el proyecto
npm run build

# Compilar solo Eleventy
npm run build:eleventy

# Compilar solo Sass
npm run build:sass
```

### Generación de Componentes

```bash
# Crear un nuevo componente
npm run component nombreDelComponente

# Crear un nuevo token de componente
npm run tokencomponent nombreDelToken

# Crear un nuevo template
npm run template nombreDelTemplate

# Crear un nuevo token de template
npm run tokentemplate nombreDelToken
```

### Formateo

```bash
# Formatear archivos Markdown y SCSS
npm run format
```

## 🏗️ Estructura del Proyecto

```
holyguide/
├── src/
│   ├── _includes/          # Templates y componentes Nunjucks
│   │   ├── _components/    # Componentes reutilizables
│   │   ├── _tokens/        # Tokens de diseño
│   │   ├── _paginas/       # Layouts de páginas
│   │   └── _macros/        # Macros Nunjucks
│   ├── assets/
│   │   ├── sass/           # Estilos SCSS
│   │   ├── js/             # JavaScript
│   │   └── static/         # Imágenes y recursos estáticos
│   ├── components/         # Componentes del sistema
│   ├── templates/          # Templates del sistema
│   ├── tokens/             # Tokens de diseño
│   ├── foundations/        # Fundamentos del diseño
│   ├── design/             # Documentación para diseñadores
│   └── develop/            # Documentación para desarrolladores
└── public/                 # Archivos generados (build)
```

## 🎨 Tecnologías Utilizadas

- **[Eleventy](https://www.11ty.dev/)** - Generador de sitios estáticos
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Motor de plantillas
- **[Sass](https://sass-lang.com/)** - Preprocesador CSS
- **[Holygrail2](https://www.npmjs.com/package/holygrail2)** - Framework CSS base
- **[GSAP](https://greensock.com/gsap/)** - Animaciones
- **[Swiper](https://swiperjs.com/)** - Sliders y carruseles

## 📖 Documentación

### Para Diseñadores

Visita la sección de [Design](/start-design/) para conocer los principios de diseño, la nomenclatura y cómo trabajar con el sistema.

### Para Desarrolladores

Visita la sección de [Develop](/develop/) para aprender a usar el sistema, crear componentes y seguir las mejores prácticas.

## 🧩 Componentes y Templates

El sistema incluye una amplia gama de componentes y templates:

- **Headers** - Diferentes variantes de cabeceras
- **Menús** - Sistemas de navegación
- **Productos** - Componentes para PDP (Product Detail Pages)
- **Formularios** - Inputs, selects, checkboxes, etc.
- **Modales** - Ventanas modales y overlays
- **Timeline** - Componentes de línea de tiempo
- **Grids** - Sistemas de parrillas y layouts

## 🎯 Características Principales

- ✅ **Sistema de diseño modular** - Componentes reutilizables y escalables
- ✅ **Documentación completa** - Guías para diseñadores y desarrolladores
- ✅ **Responsive design** - Diseño adaptable a todos los dispositivos
- ✅ **RTL Support** - Soporte para idiomas de derecha a izquierda
- ✅ **Animaciones** - Integración con GSAP para animaciones avanzadas
- ✅ **Accesibilidad** - Componentes accesibles y semánticos
- ✅ **Performance** - Optimizado para velocidad y SEO

## 🔧 Configuración

### Variables de Entorno

El proyecto utiliza variables de Sass definidas en `src/assets/sass/abstract/_variables.scss` y breakpoints en `src/assets/sass/abstract/_breakpoints.scss`.

### Personalización

Puedes personalizar el sistema modificando:

- Variables de Sass en `src/assets/sass/abstract/`
- Templates en `src/_includes/`
- Componentes en `src/components/`

## 📝 Notas de Desarrollo

### Proceso mediante Iconos

- ✅: Finalizado y revisado
- 👀: En revisión
- ⚙️: En progreso
- ❌: Rechazado
- ⚰️: Descartado
- ⚪: Por hacer
- ✍️: Trabajo en progreso

### Creación de Parrillas

Para crear una nueva parrilla:

1. Crear un archivo SCSS en `src/assets/sass/parrillas/` tipo `_ncc.scss`
2. Importarlo en `all.scss` de parrillas
3. Crear template en `src/templates/parrillas/` como `_ncc.njk`

## 🤝 Contribuir

Este es un proyecto interno. Para contribuir, sigue las guías de diseño y desarrollo incluidas en la documentación.

## 📄 Licencia

ISC

## 👤 Autor

[Manuel Ruiz](https://digitalstrategy.es)

---

## 📚 Referencias Útiles

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [GSAP Documentation](https://greensock.com/docs/)
- [Swiper Documentation](https://swiperjs.com/)

## 🔗 Enlaces de Interés

- [Mindmaps](https://www.mindmaps.app/) - Crea mapas mentales visuales
- [Snippet Generator](https://snippet-generator.app/) - Genera snippets de código
- [ASCII Flow](https://asciiflow.com/#/) - Crea diagramas en texto plano
- [Tables Generator](https://www.tablesgenerator.com/markdown_tables) - Genera tablas en Markdown
