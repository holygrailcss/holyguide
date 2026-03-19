---
layout: _paginas/foundations/_foundations.njk
permalink: /videos/

titulo: Videos
descripcion: Guía de vídeos en loop para background — formatos, peso máximo, frame rate y canal de audio.

page_section: foundations
badge: updated
date: 2023-06-19
fecha: 19 de junio de 2023

tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/videos.jpg
---

## Uso básico

Para que los vídeos se inicien en `autoplay`, es obligatorio añadir los atributos `muted` y `playsinline`.

```html
<video autoplay loop muted playsinline>
  <source src="/assets/video/hero.mp4" type="video/mp4" />
  <source src="/assets/video/hero.webm" type="video/webm" />
</video>
```

**Todo vídeo deberá seguir las siguientes pautas:**

---

## Duración

Nunca deberá superar los **6 segundos** de vídeo en loop.

Si se necesita un vídeo de mayor duración con audio, se debe abrir en una modal con un visualizador minimalista para no interrumpir la navegación.

## Formatos

Se entregarán **dos versiones como mínimo**: `mp4` y `webm`. La versión `ogg` es opcional.

| Formato | Compatibilidad | Notas |
|---|---|---|
| `.mp4` (H.264) | Todos los navegadores | Obligatorio |
| `.webm` (VP9) | Chrome, Firefox, Edge | Obligatorio |
| `.ogg` | Firefox | Opcional |

> **Herramienta recomendada**: [Handbrake](https://handbrake.fr/) — compresor gratuito y de los mejores del mercado.

## Peso

Un vídeo en loop **no debería superar los 6 MB**. Por encima de ese peso bloqueará y ralentizará la web.

## Frame rate

Usar framerates de **24 fps** o **30 fps**.

## Canal de audio

Si el vídeo no tiene sonido, **eliminar el canal de audio** en la exportación para reducir el peso del archivo.

## Tabla de especificaciones

| Parámetro | Valor recomendado |
|---|---|
| Duración máxima en loop | 6 segundos |
| Peso máximo | 6 MB |
| Frame rate | 24 fps / 30 fps |
| Formatos mínimos | mp4 + webm |
| Atributos HTML | `autoplay loop muted playsinline` |
| Audio en vídeo mudo | Eliminar canal de audio |
