## 🥤Holyguide v2

A basic 🥤Massimoguide v2 boilerplate to get developing locally with a few helpful tools already set up.

Tasks included:

- HTML minify (on build)
- CSS autoprefixer
- Sass minify
- JS minify
- Image minify
- Nunjucks
- Live reload
- Babel

## How to run
Install Gulp globally (if you don't already have it). Full installation docs (https://gulpjs.com/docs/en/getting-started/quick-start).

    npm install gulp-cli -g
Install necessary packages

    npm install
Run Gulp.

    gulp

The live reload task should then initiate the project on http://localhost:3000. If that port is already taken it will default to another number such as localhost:3001.

## Building assets

To build assets without starting a local server with live reload, use the build command:

    gulp build


## creación de páginas.

en pages/
Crearemos una pagina page con el 0X_nombre.html

en molecules/
Crearemos una molecula page con el _nombreX.html

Luego crearemos los componentes independientes con sus sass
giftcard1.html
giftcard.scss


## TAblas tabulares


```
            <div class="tabguide">
                <ul id="tabguide-nav" class="tabguide-head list-inline">
                    <li><a href="#tabguide1">Simple</a></li>
                    <li><a href="#tabguide2">Error</a></li>
                    <li><a href="#tabguide3">contador</a></li>
                    <li><a href="#tabguide4">icono</a></li>
                </ul> <!-- END tabguideguide-nav -->
                <div id="tabguide-content">
                    <div id="tabguide1" class="tabguide-content">
                        <div class='form-input-label-2'>
                            <input type='email' id='Input animado' class='input Input animado'
                                placeholder='Input animado' required=''>
                            <label for='Input animado'>Input animado</label>
                        </div>
                    </div>
                    <div id="tabguide2" class="tabguide-content">
                        <div class="form-input-label-2 is-error">
                            <input type="email" id="10" class="input" placeholder="Email address" required="">
                            <label for="10">Email address</label>
                            <div class="validation-error-messages">
                                <p class="help p-xs">Mensaje extra</p>
                            </div>
                        </div>
                    </div>
                    <div id="tabguide3" class="tabguide-content">
                        <div class="form-input-label-2 is-error">
                            <input type="email" id="10" class="input" placeholder="Email address" required="">
                            <label for="10">Email address</label>
                            <div class="info-text p-xs text-right">0/3</div>
                            <div class="validation-error-messages">
                                <p class="help p-xs">Mensaje extra</p>
                            </div>
                        </div>
                    </div>
                    <div id="tabguide4" class="tabguide-content">
                        <div class='form-input-label-2 has-ico-pre'>
                            <input type='email' id='dos' class='input' placeholder='Email address' required='' />
                            <label for='dos'>Email dos</label>
                            <svg class='ico-pre' width='16px' height='16px' viewBox='0 0 16 16'>
                                <g transform='translate(0, 0)'>
                                    <circle fill='none' stroke='#000000' cx='8' cy='8' r='6'>
                                    </circle>
                                </g>
                            </svg
                        </div>
                    </div>
                </div> <!-- END tabguideguide-content -->
            </div> 
```



## insertar codigo escapado

````
{"  codigo " | escape }}

```
