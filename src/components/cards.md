---
layout: _paginas/components/_component-doc.njk
permalink: /components/cards/
page_section: components

titulo: Cards
descripcion: Tarjetas seleccionables (radio) para métodos de envío, direcciones y pago. Maquetadas con HolyGrail5 y CSS (tokens --hg-*), sin clases legacy de HolyGrail2.

date: 2026-07-02
badge: new
tags: ["components"]
image: /assets/static/images/1.jpg
imageAlt: Cards component
---

<h2 id="cards">Cards</h2>

Tarjetas seleccionables con `input[type="radio"]`, usadas en checkout (método de envío, direcciones, pago).
Maquetadas con **HolyGrail5** (tokens `--hg-*`) y CSS nativo — sin `box3`, `text-l`, `c-dark-grey`, `checkbox-radio` ni demás clases de HG2.

<style>
  .hg-cards-demo { max-width: 640px; }
  .hg-card-select { position: relative; margin-bottom: 16px; }
  .hg-card-select > input { position: absolute; width: 0; height: 0; opacity: 0; }
  .hg-card-select > label { display: block; margin: 0; cursor: pointer; }

  .hg-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 48px 16px 16px;
    border: 1px solid var(--hg-color-middle-grey);
    border-radius: 4px;
    background: var(--hg-color-white);
    transition: border-color .15s ease;
  }
  .hg-card__body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
  .hg-card__muted { color: var(--hg-color-dark-grey); }
  .hg-card__badge {
    align-self: flex-start;
    margin-top: 4px;
    padding: 4px 8px;
    background: var(--hg-color-light-grey);
    color: var(--hg-color-primary);
    font-family: var(--hg-typo-font-family-primary-light);
    font-size: var(--hg-typo-font-size-10);
    letter-spacing: .16em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .hg-card__aside { flex-shrink: 0; text-align: right; }
  .hg-card__edit {
    border: 0; background: none; padding: 0; cursor: pointer;
    font-family: var(--hg-typo-font-family-primary-regular);
    font-size: var(--hg-typo-font-size-10);
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--hg-color-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .hg-card__logo { height: 32px; width: auto; }

  /* Indicador radio */
  .hg-card-select__radio {
    position: absolute;
    right: 16px;
    width: 18px; height: 18px;
    border: 1px solid var(--hg-color-middle-grey);
    border-radius: 50%;
    pointer-events: none;
  }
  .hg-card-select--center .hg-card-select__radio { top: 50%; transform: translateY(-50%); }
  .hg-card-select--top    .hg-card-select__radio { top: 16px; }

  /* Estado seleccionado */
  .hg-card-select > input:checked + label .hg-card { border-color: var(--hg-color-primary); }
  .hg-card-select > input:checked + label .hg-card-select__radio { border-color: var(--hg-color-primary); }
  .hg-card-select > input:checked + label .hg-card-select__radio::after {
    content: ""; position: absolute; inset: 3px; border-radius: 50%; background: var(--hg-color-primary);
  }

  /* Foco accesible */
  .hg-card-select > input:focus-visible + label .hg-card {
    outline: 2px solid var(--hg-color-primary);
    outline-offset: 2px;
  }
</style>

<div class="hg-cards-demo">

  <!-- Método de envío (seleccionada) -->
  <div class="hg-card-select hg-card-select--center">
    <input type="radio" name="demo-method" id="card-delivery" checked>
    <label for="card-delivery">
      <div class="hg-card">
        <div class="hg-card__body">
          <div class="hg-body-l">Entrega a domicilio</div>
          <div class="hg-body-l hg-card__muted">Mañana, 15.03.25 – martes, 18.03.25</div>
          <span class="hg-card__badge">Envío express · entrega garantizada</span>
        </div>
        <div class="hg-card__aside">
          <div class="hg-body-l">3,95 € – 4,95 €</div>
        </div>
      </div>
      <span class="hg-card-select__radio"></span>
    </label>
  </div>

  <!-- Variante con radio arriba -->
  <div class="hg-card-select hg-card-select--top">
    <input type="radio" name="demo-top" id="card-top">
    <label for="card-top">
      <div class="hg-card">
        <div class="hg-card__body">
          <div class="hg-body-l">Variante <code>--top</code></div>
          <div class="hg-body-l hg-card__muted">Selector alineado arriba, útil en listas de tarjetas con contenido de altura variable.</div>
        </div>
      </div>
      <span class="hg-card-select__radio"></span>
    </label>
  </div>

  <!-- Dirección con acción "Editar" -->
  <div class="hg-card-select hg-card-select--center">
    <input type="radio" name="demo-address" id="card-address" checked>
    <label for="card-address">
      <div class="hg-card">
        <div class="hg-card__body">
          <div class="hg-body-l">Nombre completo</div>
          <div class="hg-body-l hg-card__muted">Carrer Violeta Parra Sandoval 8, 1º1ª</div>
          <div class="hg-body-l hg-card__muted">08960 Sant Just Desvern · Barcelona</div>
        </div>
        <div class="hg-card__aside">
          <button type="button" class="hg-card__edit">Editar</button>
        </div>
      </div>
      <span class="hg-card-select__radio"></span>
    </label>
  </div>

  <!-- Método de pago -->
  <div class="hg-card-select hg-card-select--center">
    <input type="radio" name="demo-payment" id="card-visa">
    <label for="card-visa">
      <div class="hg-card">
        <div class="hg-card__body">
          <div class="hg-body-l" style="text-transform:uppercase; letter-spacing:.04em;">VISA</div>
        </div>
        <div class="hg-card__aside">
          <img class="hg-card__logo" alt="VISA" src="https://static.massimodutti.net/3/static2/itxstandard/images/payment/1_activo.png?1741879526306">
        </div>
      </div>
      <span class="hg-card-select__radio"></span>
    </label>
  </div>

</div>

## Anatomía

- **`.hg-card-select`** — envoltorio: contiene el `input[type="radio"]` (oculto), el `label` y el indicador `.hg-card-select__radio`.
- **`.hg-card`** — la tarjeta: borde, radio y `flex` (contenido a la izquierda, `aside` a la derecha).
- **`.hg-card__body`** — columna de textos (`.hg-body-l`, `.hg-card__muted` para el gris).
- **`.hg-card__aside`** — zona derecha (precio, logo o botón `Editar`).
- **`.hg-card__badge`** — etiqueta en mayúsculas (fondo `--hg-color-light-grey`).
- **Estado seleccionado** — vía `input:checked + label`: borde e indicador en `--hg-color-primary`.

### Variantes de posición del selector
- `.hg-card-select--center` — radio centrado verticalmente (por defecto en listas de dirección/pago).
- `.hg-card-select--top` — radio alineado arriba (tarjetas altas).

## Equivalencia HolyGrail2 → HolyGrail5

| HG2 (original) | HG5 / CSS (nuevo) |
|---|---|
| `box3` | `.hg-card` |
| `box3-content` | `.hg-card__body` |
| `box3-middle` / `box3-top` | `.hg-card__aside` |
| `checkbox-radio` + `<i class="ico-radio">` | `.hg-card-select` + `.hg-card-select__radio` |
| `check-center` / `check-top` | `.hg-card-select--center` / `--top` |
| `text-l` | `.hg-body-l` |
| `c-dark-grey` | `.hg-card__muted` → `var(--hg-color-dark-grey)` |
| `border-1-grey` | `border: 1px solid var(--hg-color-middle-grey)` |
| `bg-light-grey` | `var(--hg-color-light-grey)` |
| `ttu title-s` (badge) | `.hg-card__badge` |
| `btn-tertiary` | `.hg-card__edit` |

## Accesibilidad
- Selección con teclado nativa (`input[type="radio"]` real, oculto pero enfocable).
- Foco visible en la tarjeta (`:focus-visible` → `outline`).
- Cada grupo de tarjetas comparte el mismo `name` para comportarse como radiogroup.
