# Templates 2026 – Estructura

## Carpeta `_paginas/templates-2026`

Contiene **layouts de página** (usados por los `.md` de `src/templates-2026`) y **componentes** reutilizables.

### Layouts de página (páginas del sitio)

| Layout               | Página (.md)   | Token que muestra   | URL                    |
|----------------------|----------------|---------------------|------------------------|
| `hg-home.njk`        | hg-home.md     | token-hg-home       | /templates-2026/hg-home/ |
| `viewer-hg-menu.njk` | hg-menu.md     | token-hg-menu       | /templates-2026/hg-menu/  |
| `viewer-hg-footer.njk` | hg-footer.md  | token-hg-footer     | /templates-2026/hg-footer/ |
| `viewer-hg-header.njk` | header.md    | token-hg-header (header 2026) | /templates-2026/header/ |

- Convención: el layout de las páginas con iframe (FIGMA / VER / CODE) usa el prefijo `viewer-` → `viewer-hg-menu.njk`, `viewer-hg-footer.njk`, `viewer-hg-header.njk`.

### Componentes (incluidos por otros archivos)

- `hg-header.njk` – Cabecera
- `hg-menu.njk` – Panel de menú
- `hg-footer.njk` – Pie de página

Se usan con `{% include '_paginas/templates-2026/hg-footer.njk' %}` (y análogo para header y menu).

#### Variantes del header

Conviven dos, y se eligen con la variable `hgHeaderMaxilogo`:

| Variante | Cuándo | Cómo |
|----------|--------|------|
| **Con maxilogo** (por defecto) | Solo la **home**: el logo grande se muestra sobre el contenido y, al hacer scroll, cede el sitio al logo de la barra. | `{% include '_paginas/templates-2026/hg-header.njk' %}` |
| **Sin maxilogo** | El resto de páginas: el logo ya está arriba, sin animación. | `{% set hgHeaderMaxilogo = false %}` antes del include |

La variante sin maxilogo no renderiza el bloque del logo grande ni la clase `--home-animation`, y añade `hg-header--reduced` al `<header>`, que es lo que hace visible el logo de la barra sin depender del scroll. Ejemplo de uso: `hg-denim.njk`.

> `hg-header.css` ya traía las variantes de página `is-reduced` / `is-compact` (clases en el `body`), pero nadie las usa. `hg-header--reduced` hace lo mismo desde el componente, que es quien sabe si es la home o no.

### Otros

- `_templates-2026.njk` – Layout del índice de Templates 2026.

---

## Carpeta `_tokens/preview-2026`

Contiene los **tokens** (vistas aisladas para FIGMA / VER / CODE / iframe) de Templates 2026.

### Convención

- Archivo: `token-{nombre}.njk`, donde `{nombre}` es el slug del template que muestra ese token.
- Página del token: `src/tokens-2026/token-{nombre}.md` → `layout: _tokens/preview-2026/token-{nombre}.njk`, `permalink: /token-{nombre}/`.

### Tokens actuales

| Token                 | Lo muestra la página |
|-----------------------|----------------------|
| `token-hg-home.njk`   | hg-home   |
| `token-hg-header.njk` | header (hg-header 2026) |
| `token-hg-menu.njk`   | hg-menu   |
| `token-hg-footer.njk` | hg-footer |

Cada layout de página en templates-2026 llama al token así:

`{% call insert.template('_tokens/preview-2026/','token-{nombre}', '550px','...') %}`
