---
layout: _paginas/develop/_dutti.njk
permalink: /develop/checkout-rediseno/
page_section: develop
tags: ["develop", "dutti", "checkout", "holygrail5", "proceso"]
titulo: Rediseño del Checkout
descripcion: Proceso, roles, pipeline y backlog para rediseñar los 3 pasos del checkout de Massimo Dutti sobre HolyGrail5.
badge: new
date: 2026-06-19
image: /assets/static/images/1.jpg
imageAlt: Rediseño del checkout de Massimo Dutti
---

## Objetivo

Rediseñar el **checkout completo** de Massimo Dutti (`shipping → payment → summary`) sobre **HolyGrail5** como sistema canónico, sin perder ningún caso de uso ni evento de analítica, con despliegue gradual detrás de feature flag.

### Principios
- **HG5 primero**: tokens `--hg-*`, utilidades `.hg-*`, componentes de `@mdfrontw/uikit`. Nada nuevo en HG2.
- **Paridad funcional y de analítica**: el [inventario de casos de uso](#inventario-de-casos-de-uso) es el *scope congelado*.
- **Convivencia**: lo nuevo detrás del flag GrowthBook `checkout-redesign`, con lo viejo como fallback; rollout por mercado/porcentaje.

---

## Equipo y roles

| Persona | Rol | Es dueño de (DRI) |
|---|---|---|
| **Sergio** | Diseño DS · Figma · tokens | Tokens HG5 + librería de componentes del checkout en Figma; specs y documentación en HolyGuide. |
| **Pablo** | Maquetador | Maquetación HTML/SCSS (HG5/uikit) de cada pantalla; estados vacío/carga/error; responsive y RTL. |
| **Manu** | Arquitecto + lead de procesos | Arquitectura Angular (routing, unificar modos Legacy/Phase V, sacar navegación de Effects, guards, estado), integración, flags, proceso y reviews. |

---

## Proceso (fases)

0. **Base compartida** (1–2 sem, los 3): tokens + componentes transversales, contenedor + stepper, esqueleto de arquitectura y flag.
1. **Auditoría/inventario**: casos de uso, estados, analítica y componentes reutilizables.
2. **UX y flujos**: IA + wireframes → alta fidelidad en Figma con tokens HG5.
3. **Design system**: componentes en HG5/uikit, documentados aquí.
4. **Estrategia**: por pantalla, decidir *refactor* vs *rehacer*; flag y convivencia.
5. **Implementación** (pipeline, ver abajo).
6. **Validación**: Playwright e2e, paridad de analítica, a11y, RTL/CJK, SSR.
7. **Rollout**: canary GrowthBook → mercado piloto (ES) → resto, con rollback por flag.

---

## Pipeline escalonado

Cada pantalla pasa por **Diseño (Sergio) → Maqueta (Pablo) → Integración (Manu)**. Escalonado, los 3 pasos avanzan en paralelo:

| Semana | Sergio (diseño) | Pablo (maqueta) | Manu (arquitectura) |
|---|---|---|---|
| **S1** | Diseña Shipping | Contenedor + stepper | Routing + modos + flag |
| **S2** | Diseña Payment | Maqueta Shipping | Integra base + Shipping |
| **S3** | Diseña Summary | Maqueta Payment | Integra Shipping |
| **S4** | QA visual + ajustes | Maqueta Summary | Integra Payment |
| **S5** | Documenta DS | Estados / RTL / pulido | Integra Summary + confirmación |
| **S6** | — | Fixes QA | E2E, analítica, rollout canary |

### Contrato de handoff
- **Diseño → Maqueta**: componente Figma con tokens HG5, todos los estados, specs responsive y variantes por mercado.
- **Maqueta → Integración**: HTML/SCSS HG5, sin `!important`/`::ng-deep` nuevos, responsive + RTL, sin lógica.
- **Integración → Done**: cableado a estado/rutas, guards, paridad de analítica, tras el flag, e2e verde.

### Cadence
Daily 15 min · review de handoff 2×/semana · demo semanal en PRE.

---

## Inventario de casos de uso

Flujo: `shipping → payment → summary`, guards `CheckoutInitializerGuard` + `IsRouteEnabledGuard`. Navegación interna hoy vía NgRx Effects (deuda técnica → routing declarativo).

### Envío (shipping)
- **Selector** (`/shipping`): elegir método (delivery, pickup, droppoint, mail e-gift, dropbox legacy); fechas/ETA; COD; Fast Sint/Same Day. Estados: cargando/cargado/sin métodos/error. Orden y filtros por CMS/país/producto/tier.
- **Domicilio**: lista direcciones (`/delivery`), formulario alta/edición (`/delivery-address`, validación CP/mapa/short-address), resumen (`/delivery-summary`).
- **Recogida** (`/store`, `/droppoint`): búsqueda CP/geoloc, lista↔mapa, tienda↔droppoint, filtros capacidad y droppoints gratis, horarios, parámetros extra; resumen (`/pickup-summary`).
- **E-gift** (`/gift-card`): email destinatario, método `mail` automático.
- **Fast Sint** (`/fast-sint/*`): lista de tiendas (distancia/ETA/slots) y detalle.
- Errores: `DELIVERY_RESTRICTION_ERROR`, `INVALID_BILLING_DATA_ERROR`, geoloc, búsqueda.

### Pago (payment)
- Seleccionar método (40+, filtrado por mercado); tarjeta (CVV, ID gubernamental, aplazado); guardar tarjeta; wallet/tarjeta guardada (CVV, caducada); 3DS/challenge; descuentos/gift card (CAPTCHA, balance); consolidación de tarjetas.
- Métodos por mercado: Bizum (ES), iDEAL/Sofort/Bancontact/P24, Swish (SE), Alipay/WeChat/CUP (CN), UPI/RuPay (IN), KCP/Kakao/Naver (KR), PSE/OXXO (LATAM), PayPal, Apple/Google Pay, Klarna/AfterPay, COD.

### Resumen (summary)
- Revisar pedido; editar cantidades/eliminar; T&C (+ legal CN, propietarios PL); factura/NIF/eGUI; cupones (Feel); cambiar envío/pago; **place order** (éxito/error inline/reintento).

### Confirmación
- Éxito; pago pendiente (transferencia/COD); UPI Intent (IN); error (sin orderId/guest token); asociar cuenta (guest).

### Transversal
- Modos **Legacy vs Phase V** (conviven → unificar); guest vs login (`checkout-selector-drawer`); guards de inicialización y navegación; e-gift; cancelación de transacción; timeout/errores.

---

## Backlog por pantalla

Estado: ⬜ Backlog · 🎨 Diseño · 🧱 Maqueta · 🔌 Integración · 🧪 QA · ✅ Done.

| # | Pantalla | Sergio (diseño) | Pablo (maqueta) | Manu (arquitectura) | Estado |
|---|---|---|---|---|---|
| 0 | Contenedor + stepper | Stepper + layout tokens | Maqueta contenedor/stepper | Routing + modos + flag | ⬜ |
| 1 | Shipping · selector | Tarjetas de método + estados | Lista métodos + fechas/COD | Carga métodos + navegación | ⬜ |
| 2 | Shipping · lista direcciones | Address card + acciones | Lista + vacío/carga | CRUD direcciones + estado | ⬜ |
| 3 | Shipping · formulario dirección | Campos + validación + short-address | Formulario + errores | Validación mapa + guardado | ⬜ |
| 4 | Shipping · resumen envío | Bloque resumen envío | Maqueta resumen | Confirmar + editar | ⬜ |
| 5 | Shipping · pickup tienda/droppoint | Store card + mapa/lista + filtros | Buscador + lista↔mapa | Geoloc + búsqueda + filtros | ⬜ |
| 6 | Shipping · pickup resumen | Bloque resumen pickup | Maqueta resumen | Confirmar + bloqueo droppoint | ⬜ |
| 7 | Shipping · e-gift email | Form email | Maqueta form | Método mail + navegación | ⬜ |
| 8 | Shipping · fast-sint | Tienda rápida card | Lista + detalle | Guard + preselección | ⬜ |
| 9 | Payment · métodos | Payment-method item + card form | Lista métodos + form tarjeta | Carga métodos + selección | ⬜ |
| 10 | Payment · wallet/guardadas | Saved card + estados | Lista tarjetas + CVV | Wallet + caducada + 3DS | ⬜ |
| 11 | Payment · descuentos/gift | Input cupón/gift + CAPTCHA | Maqueta + errores | Balance + toggle descuento | ⬜ |
| 12 | Summary · revisar + place order | Summary rows/blocks + cupón + T&C + eGUI | Maqueta resumen + estados | Place order + errores + preview | ⬜ |
| 13 | Order confirmation | Header confirmación + estados | Maqueta éxito/pendiente/error | Datos pedido + guest-association | ⬜ |
| — | Selector guest/login | Drawer guest/login | Maqueta drawer | Guards + modos | ⬜ |

---

## Inventario de componentes DS (Sergio)

Componentes de checkout a crear/normalizar en Figma + HG5 (`@mdfrontw/uikit`), con sus tokens y estados. Documentar cada uno en HolyGuide al cerrarlo.

| Componente | Uso | Estados | Tokens clave |
|---|---|---|---|
| `checkout-stepper` | Progreso 3 pasos | actual/completado/pendiente | color, typo `label-m`, spacing |
| `shipping-option-card` | Método de envío | default/seleccionado/deshabilitado | border, `--hg-color-*`, radios |
| `address-card` | Dirección guardada | default/seleccionada/editable | border, `hg-body-m` |
| `address-form-field` | Campos dirección | vacío/válido/error | input tokens, error color |
| `pickup-store-card` | Tienda/droppoint | default/seleccionada + horarios | typo, iconografía, spacing |
| `map-view` | Mapa recogida | carga/con pines | — (Google/Baidu) |
| `payment-method-item` | Método de pago (genérico) | default/seleccionado/error | logo slot, border |
| `credit-card-form` | Datos tarjeta | vacío/válido/error/3DS | input tokens, CVV |
| `saved-card` | Tarjeta wallet | activa/caducada/CVV | badges, `--hg-color-*` |
| `coupon-input` | Cupón/gift card | vacío/aplicado/error | input, chip |
| `terms-checkbox` | T&C / legal / propietarios | on/off/error | checkbox HG5 |
| `egui-options` | Factura/NIF | membership/individual/donación | radios, inputs |
| `summary-line` | Fila de artículo | normal/out-of-stock | `hg-body-m`, precio |
| `summary-block` | Envío/pago/facturación | con datos/editar | headings, spacing |
| `price-block` | Precios/totales | normal/descuento | typo, `--hg-color-sale` |
| `inline-error` / `error-banner` | Errores | info/warning/error | `--hg-color-error/warning/info` |
| `confirmation-header` | Confirmación | éxito/pendiente/error | typo, iconografía |

---

## Reglas de equipo

1. **HG5 primero**; componentes nuevos → documentados por Sergio en HolyGuide.
2. **Paridad** funcional y de analítica (scope congelado por el inventario).
3. **Una pantalla = una rama** `feat/MDWEB-XXXX-checkout-<paso>-<pantalla>`, tras el flag `checkout-redesign`.
4. **No destructivo** en lo legacy hasta validar la convivencia.
5. Validación en móvil/desktop y en mercados especiales (CJK/árabe/RTL) cuando toque tipografía o layout.
