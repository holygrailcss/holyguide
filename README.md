## 🥤Massimoguide v2

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


## creación de componentes.