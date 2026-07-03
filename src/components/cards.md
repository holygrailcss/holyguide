---
layout: _paginas/components/_component-doc.njk
permalink: /components/cards/
page_section: components

titulo: Cards
descripcion: Tarjetas seleccionables (radio) para métodos de envío, direcciones y pago. Maquetadas con HolyGrail5 y CSS (tokens --hg-*), replicando el comportamiento del box3 / checkbox-radio de HolyGrail2.

date: 2026-07-02
badge: new
tags: ["components"]
image: /assets/static/images/1.jpg
imageAlt: Cards component
---

<h2 id="cards">Cards</h2>

Tarjetas seleccionables con `input[type="radio"]`, usadas en checkout (método de envío, direcciones, pago).
Replican el `box3` + `checkbox-radio` de HolyGrail2 pero maquetadas con **HolyGrail5** (tokens `--hg-*`) y CSS nativo. El indicador de selección es un **recuadro** (14px con punto de 4px), igual que el `ico-radio` original.

<style>
  .hg-cards-demo { max-width: 640px; }

  .hg-card-select { position: relative; margin-bottom: 16px; }
  .hg-card-select label { position: relative; display: block; margin: 0; cursor: pointer; }
  .hg-card-select input[type="radio"] { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; border: 0; clip: rect(0 0 0 0); overflow: hidden; }

  /* box3 */
  .hg-card { position: relative; display: flex; width: 100%; min-height: 58px; box-sizing: border-box; background: var(--hg-color-white); }
  .hg-card--pad { padding: 16px; }
  .hg-card--border { border: 1px solid var(--hg-color-middle-grey); }
  .hg-card__content { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 4px; word-break: break-word; }
  .hg-card__aside { width: 100px; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; }
  .hg-card__top { padding-left: 16px; display: flex; flex-direction: column; align-items: flex-end; }
  .hg-card__muted { color: var(--hg-color-dark-grey); }
  .hg-card__badge {
    align-self: flex-start;
    padding: 4px 8px;
    background: var(--hg-color-light-grey);
    color: var(--hg-color-primary);
    font-family: var(--hg-typo-font-family-primary-light);
    font-size: var(--hg-typo-font-size-10);
    letter-spacing: .16em; text-transform: uppercase; white-space: nowrap;
  }
  .hg-card__edit {
    border: 0; background: none; padding: 0; cursor: pointer;
    font-family: var(--hg-typo-font-family-primary-regular);
    font-size: var(--hg-typo-font-size-10);
    letter-spacing: .16em; text-transform: uppercase; color: var(--hg-color-primary);
  }
  .hg-card__logo { max-width: 60px; height: auto; }

  /* Indicador (recuadro + punto), como ico-radio */
  .hg-card__check { position: absolute; z-index: 1; width: 14px; height: 14px; box-sizing: border-box; border: 1px solid var(--hg-color-primary); pointer-events: none; }
  .hg-card__check::after { content: ""; position: absolute; top: 3px; left: 3px; width: 4px; height: 4px; background: var(--hg-color-primary); opacity: 0; transform: scale(0); transition: all .15s ease; }
  .hg-card-select label:has(input:checked) .hg-card__check::after { opacity: 1; transform: scale(1); }

  /* Posición del check + hueco en el contenido */
  .hg-card-select--center .hg-card__check { top: 50%; left: 16px; transform: translateY(-50%); }
  .hg-card-select--center .hg-card__content { padding-left: 30px; }
  .hg-card-select--top .hg-card__check { top: 16px; right: 16px; }
  .hg-card-select--top .hg-card__content { padding-right: 30px; }
  .hg-card-select--none .hg-card__check { display: none; }

  /* Seleccionado -> borde negro (como border-1-grey :checked) */
  .hg-card-select label:has(input:checked) .hg-card--border { border-color: var(--hg-color-primary); }
  /* Foco accesible */
  .hg-card-select label:has(input:focus-visible) .hg-card { outline: 2px solid var(--hg-color-primary); outline-offset: 2px; }
</style>

<div class="hg-cards-demo">
  <div class="hg-card-select hg-card-select--none">
    <label>
      <input type="radio" name="demo-method" checked>
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--pad hg-card--border">
        <div class="hg-card__content">
          <div class="hg-body-l">Entrega a domicilio</div>
          <div class="hg-body-l hg-card__muted">Mañana, 15.03.25 – martes, 18.03.25</div>
          <span class="hg-card__badge">Envío express · entrega garantizada</span>
        </div>
        <div class="hg-card__aside"><div class="hg-body-l">3,95 € – 4,95 €</div></div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--top">
    <label>
      <input type="radio" name="demo-top">
      <span class="hg-card__check"></span>
      <div class="hg-card">
        <div class="hg-card__content">
          <div class="hg-body-l">.hg-card-select--top</div>
          <div class="hg-body-l hg-card__muted">Selector arriba, sin borde. Útil en listas de tarjetas con contenido de altura variable.</div>
        </div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--center">
    <label>
      <input type="radio" name="demo-address" checked>
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--pad hg-card--border">
        <div class="hg-card__content">
          <div class="hg-body-l">Nombre completo</div>
          <div class="hg-body-l hg-card__muted">Carrer Violeta Parra Sandoval 8, 1º1ª</div>
          <div class="hg-body-l hg-card__muted">08960 Sant Just Desvern · Barcelona</div>
        </div>
        <div class="hg-card__top"><button type="button" class="hg-card__edit">Editar</button></div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--center">
    <label>
      <input type="radio" name="demo-payment">
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--pad hg-card--border">
        <div class="hg-card__content"><div class="hg-body-l" style="text-transform:uppercase;letter-spacing:.04em;">VISA</div></div>
        <div class="hg-card__aside"><img class="hg-card__logo" alt="VISA" src="https://static.massimodutti.net/3/static2/itxstandard/images/payment/1_activo.png?1741879526306"></div>
      </div>
    </label>
  </div>
</div>

## Anatomía

- **`.hg-card-select`** — envoltorio: `label` + `input[type="radio"]` oculto + `.hg-card__check` (recuadro).
- **`.hg-card`** — la tarjeta (`box3`): `flex`, `min-height:58px`. Sin borde por defecto.
  - **`.hg-card--border`** — añade el borde gris (`--hg-color-middle-grey`); al seleccionar pasa a negro (`--hg-color-primary`).
  - **`.hg-card--pad`** — padding de 16px.
- **`.hg-card__content`** — columna de textos (`.hg-body-l`; `.hg-card__muted` para el gris).
- **`.hg-card__aside`** — zona derecha de 100px (precio o logo).
- **`.hg-card__top`** — acción arriba-derecha (botón `Editar`).
- **`.hg-card__badge`** — etiqueta en mayúsculas (fondo `--hg-color-light-grey`).

### Variantes de posición del selector
- `.hg-card-select--center` — recuadro a la **izquierda**, centrado (direcciones, pago). El contenido lleva `padding-left:30px`.
- `.hg-card-select--top` — recuadro **arriba-derecha** (tarjetas altas).
- `.hg-card-select--none` — **sin** recuadro visible; la selección se indica solo con el borde negro (equivale a `check-no`).

## Equivalencia HolyGrail2 → HolyGrail5

| HG2 (original) | HG5 / CSS (nuevo) |
|---|---|
| `box3` | `.hg-card` |
| `box3-content` | `.hg-card__content` |
| `box3-middle` | `.hg-card__aside` |
| `box3-top` | `.hg-card__top` |
| `checkbox-radio` + `<i class="ico-radio">` | `.hg-card-select` + `.hg-card__check` (recuadro 14px + punto 4px) |
| `check-center` / `check-top` / `check-no` | `.hg-card-select--center` / `--top` / `--none` |
| `border-1-grey` (#a9a9a9 → #000 al seleccionar) | `.hg-card--border` → `var(--hg-color-middle-grey)` / `var(--hg-color-primary)` |
| `p-16` | `.hg-card--pad` |
| `text-l` | `.hg-body-l` |
| `c-dark-grey` | `.hg-card__muted` → `var(--hg-color-dark-grey)` |
| `bg-light-grey` | `var(--hg-color-light-grey)` |
| `ttu title-s` (badge) | `.hg-card__badge` |
| `btn-tertiary` | `.hg-card__edit` |

## Notas
- El indicador es **cuadrado** (borde y punto sin `border-radius`), igual que el `ico-radio` de HG2.
- Estado seleccionado y foco resueltos con `:has()` (CSS moderno) — sin JS.
- Cada grupo de tarjetas comparte el mismo `name` (radiogroup accesible).
