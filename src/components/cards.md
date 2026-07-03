---
layout: _paginas/components/_component-doc.njk
permalink: /components/cards/
page_section: components

titulo: Cards
descripcion: Tarjetas seleccionables (radio) para métodos de envío, direcciones y pago. Layout con utilidades HG5 (hg-d-flex, hg-gap, hg-px/py…) y CSS mínimo solo para lo que el DS no cubre.

date: 2026-07-02
badge: new
tags: ["components"]
image: /assets/static/images/1.jpg
imageAlt: Cards component
---

<h2 id="cards">Cards</h2>

Tarjetas seleccionables con `input[type="radio"]` (checkout: envío, direcciones, pago). El **layout y los colores usan utilidades de HG5** a modo Tailwind (`hg-d-flex`, `hg-flex-column`, `hg-justify-between`, `hg-items-start`, `hg-flex-1`, `hg-gap-*`, `hg-px-16`, `hg-py-16`, `hg-text-right`, `hg-c-dark-grey`, `hg-bg-light-grey`). El `<style>` solo lleva lo que HG5 no cubre: el **recuadro del selector**, el **borde** de la tarjeta y el **badge** (padding + mayúsculas).

<style>
  .hg-cards-demo { max-width: 640px; }
  .hg-card-select { position: relative; }
  .hg-card-select label { position: relative; display: block; margin: 0; cursor: pointer; }
  .hg-card-select input[type="radio"] { position: absolute; width: 1px; height: 1px; margin: -1px; clip: rect(0 0 0 0); overflow: hidden; }

  .hg-card { position: relative; min-height: 58px; background: var(--hg-color-white); }
  .hg-card--border { border: 1px solid var(--hg-color-middle-grey); }
  .hg-card-select label:has(input:checked) .hg-card--border { border-color: var(--hg-color-primary); }
  .hg-card-select label:has(input:focus-visible) .hg-card { outline: 2px solid var(--hg-color-primary); outline-offset: 2px; }

  .hg-card__badge { align-self: flex-start; padding: 4px 8px; font-size: var(--hg-typo-font-size-10); letter-spacing: .16em; text-transform: uppercase; white-space: nowrap; }
  .hg-card__edit { border: 0; background: none; padding: 0; cursor: pointer; font-size: var(--hg-typo-font-size-10); letter-spacing: .16em; text-transform: uppercase; color: var(--hg-color-primary); }
  .hg-card__logo { max-width: 60px; height: auto; }

  /* Indicador (recuadro + punto), como ico-radio */
  .hg-card__check { position: absolute; z-index: 1; width: 14px; height: 14px; box-sizing: border-box; border: 1px solid var(--hg-color-primary); pointer-events: none; }
  .hg-card__check::after { content: ""; position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; background: var(--hg-color-primary); opacity: 0; transform: translate(-50%, -50%) scale(0); transition: all .15s ease; }
  .hg-card-select label:has(input:checked) .hg-card__check::after { opacity: 1; transform: translate(-50%, -50%) scale(1); }

  .hg-card-select--center .hg-card__check { top: 50%; left: 16px; transform: translateY(-50%); }
  .hg-card-select--center .hg-card__content { padding-left: 30px; }
  .hg-card-select--top .hg-card__check { top: 16px; right: 16px; }
  .hg-card-select--top .hg-card__content { padding-right: 30px; }
  .hg-card-select--none .hg-card__check { display: none; }
</style>

<div class="hg-cards-demo hg-d-flex hg-flex-column hg-gap-16">
  <div class="hg-card-select hg-card-select--none">
    <label>
      <input type="radio" name="demo-method" checked>
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--border hg-d-flex hg-justify-between hg-items-start hg-px-16 hg-py-16">
        <div class="hg-card__content hg-flex-1 hg-d-flex hg-flex-column hg-justify-center hg-gap-4">
          <div class="hg-body-l">Entrega a domicilio</div>
          <div class="hg-body-l hg-c-dark-grey">Mañana, 15.03.25 – martes, 18.03.25</div>
          <span class="hg-card__badge hg-bg-light-grey">Envío express · entrega garantizada</span>
        </div>
        <div class="hg-text-right"><div class="hg-body-l">3,95 € – 4,95 €</div></div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--top">
    <label>
      <input type="radio" name="demo-top">
      <span class="hg-card__check"></span>
      <div class="hg-card hg-d-flex hg-justify-between hg-items-start">
        <div class="hg-card__content hg-flex-1 hg-d-flex hg-flex-column hg-justify-center hg-gap-4">
          <div class="hg-body-l">.hg-card-select--top</div>
          <div class="hg-body-l hg-c-dark-grey">Selector arriba, sin borde. Útil en listas de tarjetas con contenido de altura variable.</div>
        </div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--center">
    <label>
      <input type="radio" name="demo-address" checked>
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--border hg-d-flex hg-justify-between hg-items-start hg-px-16 hg-py-16">
        <div class="hg-card__content hg-flex-1 hg-d-flex hg-flex-column hg-justify-center hg-gap-4">
          <div class="hg-body-l">Nombre completo</div>
          <div class="hg-body-l hg-c-dark-grey">Carrer Violeta Parra Sandoval 8, 1º1ª</div>
          <div class="hg-body-l hg-c-dark-grey">08960 Sant Just Desvern · Barcelona</div>
        </div>
        <div class="hg-d-flex hg-flex-column hg-items-end"><button type="button" class="hg-card__edit">Editar</button></div>
      </div>
    </label>
  </div>
  <div class="hg-card-select hg-card-select--center">
    <label>
      <input type="radio" name="demo-payment">
      <span class="hg-card__check"></span>
      <div class="hg-card hg-card--border hg-d-flex hg-justify-between hg-items-center hg-px-16 hg-py-16">
        <div class="hg-card__content hg-flex-1"><div class="hg-body-l" style="text-transform:uppercase;letter-spacing:.04em;">VISA</div></div>
        <div class="hg-text-right"><img class="hg-card__logo" alt="VISA" src="https://static.massimodutti.net/3/static2/itxstandard/images/payment/1_activo.png?1741879526306"></div>
      </div>
    </label>
  </div>
</div>

## Qué usa cada cosa

- **Layout → utilidades HG5** (a modo Tailwind): `hg-d-flex`, `hg-flex-column`, `hg-justify-between`, `hg-justify-center`, `hg-items-start` / `hg-items-center` / `hg-items-end`, `hg-flex-1`, `hg-gap-4` / `hg-gap-16`, `hg-px-16`, `hg-py-16`, `hg-text-right`.
- **Tipografía y color → HG5**: `.hg-body-l`, `.hg-c-dark-grey`, `.hg-bg-light-grey`.
- **CSS propio (mínimo)** solo para lo que el DS no cubre: `.hg-card` (posición + min-height), `.hg-card--border`, `.hg-card__check` (recuadro selector), `.hg-card__badge` (padding + mayúsculas), `.hg-card__edit`.

### Variantes del selector
- `.hg-card-select--center` — recuadro a la izquierda, centrado (contenido con `padding-left:30px`).
- `.hg-card-select--top` — recuadro arriba-derecha.
- `.hg-card-select--none` — sin recuadro; selección solo por el borde negro (`check-no`).

## Equivalencia HolyGrail2 → HolyGrail5

| HG2 (original) | HG5 (nuevo) |
|---|---|
| `box3` + `is-flex` | `.hg-card` + `hg-d-flex hg-justify-between` |
| `box3-content` | `hg-flex-1 hg-d-flex hg-flex-column hg-justify-center hg-gap-4` |
| `box3-middle` / `box3-top` | `hg-text-right` / `hg-d-flex hg-flex-column hg-items-end` |
| `p-16` | `hg-px-16 hg-py-16` |
| `checkbox-radio` + `ico-radio` | `.hg-card-select` + `.hg-card__check` (recuadro 14px + punto 4px) |
| `check-center` / `check-top` / `check-no` | `--center` / `--top` / `--none` |
| `border-1-grey` | `.hg-card--border` (`--hg-color-middle-grey` → `--hg-color-primary` al seleccionar) |
| `text-l` | `.hg-body-l` |
| `c-dark-grey` | `hg-c-dark-grey` |
| `bg-light-grey` | `hg-bg-light-grey` |
| `btn-tertiary` | `.hg-card__edit` |

## Notas
- Selector **cuadrado** (recuadro + punto sin `border-radius`), como el `ico-radio` de HG2.
- Estado seleccionado y foco con `:has()` — sin JS.
- Cada grupo comparte `name` (radiogroup accesible).
