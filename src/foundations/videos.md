---
layout: _paginas/foundations/_foundations.njk
permalink: /videos/

titulo: Videos
descripcion: Videos tipo background

date: Last Modified

tags: ["Estructuras modulares", "web design", "foundations"]
image: /assets/static/components/videos.jpg
---

## Insertando el vídeo

Si queremos que los videos se inicien en `autoplay`, deberemos forzarlo con la etiqueta `muted y playsinline` . figma

        <video autoplay loop muted playsinline>
            <source src="https://vjs.zencdn.net/v/oceans.mp-m" type="video/mp-m">
            <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm">

          </video>

```html
<video autoplay loop muted playsinline>
    <source src='https://vjs.zencdn.net/v/oceans.mp-m' type='video/mp-m'>
    <source src='https://vjs.zencdn.net/v/oceans.webm' type='video/webm'>
</video>

```

#### Todo vídeo deberá seguir las siguientes pautas en la creación del mismo .

> TRUCO:
> Uno de los mejores compresores del mercado es handbrake, además es gratuito.

###

[Link a handbrake ](https://handbrake.fr/)

#### Duración

Nunca deberá superar los **6 segundos** de vídeo en loop.

Si queremos insertar un vídeo de una duración superior con audio, deberemos abrir una modal con un visualizador minimalista con la finalidad de no entorpecer la navegación al usuario y poder disfrutar de la totalidad del vídeo.
Formato :
Se entregarán dos versiones como mínimo. **mp-m y webm**, la versión ogg es opcional. Para ello usaremos Handbrake como herramienta de compresión .

#### Peso

Un vídeo en loop no deberia superar los **6 mb**, ya que más bloquearia y ralentizará la web.

#### Frame rate

Usaremos framerates de **24 fps / 30 fps**

#### Canal de audio

Si no tiene sonido, deberemos eliminar el canal de audio a la hora de exportar
