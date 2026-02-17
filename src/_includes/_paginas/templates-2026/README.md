# Templates 2026 – Estructura

## Carpeta `_paginas/templates-2026`

Contiene **layouts de página** (usados por los `.md` de `src/templates-2026`) y **componentes** reutilizables.

### Layouts de página (páginas del sitio)

| Layout           | Página (.md)   | Token que muestra   | URL                    |
|------------------|----------------|---------------------|------------------------|
| `hg-home.njk`    | hg-home.md     | token-hg-home       | /templates-2026/hg-home/ |
| `hg-menu-page.njk` | hg-menu.md   | token-hg-menu       | /templates-2026/hg-menu/  |
| `hg-footer-page.njk` | hg-footer.md | token-hg-footer | /templates-2026/hg-footer/ |
| `header.njk`     | header.md      | token-hg-header (header 2026) | /templates-2026/header/ |

- Convención: el layout se llama `{nombre}.njk` (slug del template).
- Excepción: si ya existe un **componente** con ese nombre (ej. `hg-menu.njk`, `hg-footer.njk`), el layout de la página usa el sufijo `-page` → `hg-menu-page.njk`, `hg-footer-page.njk`.

### Componentes (incluidos por otros archivos)

- `hg-header.njk` – Cabecera
- `hg-menu.njk` – Panel de menú
- `hg-footer.njk` – Pie de página

Se usan con `{% include '_paginas/templates-2026/hg-footer.njk' %}` (y análogo para header y menu).

### Otros

- `_templates-2026.njk` – Layout del índice de Templates 2026.

---

## Carpeta `_tokens/tokens-2026`

Contiene los **tokens** (vistas aisladas para FIGMA / VER / CODE / iframe) de Templates 2026.

### Convención

- Archivo: `token-{nombre}.njk`, donde `{nombre}` es el slug del template que muestra ese token.
- Página del token: `src/tokens-2026/token-{nombre}.md` → `layout: _tokens/tokens-2026/token-{nombre}.njk`, `permalink: /token-{nombre}/`.

### Tokens actuales

| Token                 | Lo muestra la página |
|-----------------------|----------------------|
| `token-hg-home.njk`   | hg-home   |
| `token-hg-header.njk` | header (hg-header 2026) |
| `token-hg-menu.njk`   | hg-menu   |
| `token-hg-footer.njk` | hg-footer |

Cada layout de página en templates-2026 llama al token así:

`{% call insert.template('_tokens/tokens-2026/','token-{nombre}', '550px','...') %}`
