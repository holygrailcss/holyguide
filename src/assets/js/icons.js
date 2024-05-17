const tabguideContent = document.getElementById('tabguide-content');

// Lista de URLs de los JSON y sus respectivos títulos
const jsonFiles = [
    { url: '/assets/js/jsons/actions.json', title: 'Actions' },
    { url: '/assets/js/jsons/brands.json', title: 'Brands' },
    { url: '/assets/js/jsons/common.json', title: 'Common' },
    { url: '/assets/js/jsons/essential.json', title: 'Essential' },
    { url: '/assets/js/jsons/position.json', title: 'Position' },
    { url: '/assets/js/jsons/product.json', title: 'Product' },
    { url: '/assets/js/jsons/services.json', title: 'Services' },
    { url: '/assets/js/jsons/status.json', title: 'Status' }
];

// Función para cargar un JSON
function loadJSON(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'text';
        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject(new Error('Error loading JSON from ' + url));
            }
        };
        request.send();
    });
}

// Cargar todos los JSON
Promise.all(jsonFiles.map(file => loadJSON(file.url)))
    .then(jsonArray => {
        jsonArray.forEach((jsonObj, index) => {
            populateSection(jsonFiles[index].title, jsonObj);
        });
    })
    .catch(error => {
        console.error('Error loading one or more JSON files:', error);
    });

function populateSection(title, jsonObj) {
    // Crear un título
    const header = document.createElement('h2');
    header.textContent = title;

    // Crear un contenedor para los íconos y añadir la clase grid-6
    const section = document.createElement('section');
    section.classList.add('grid-6', 'grid-svg');

    // Crear los íconos para esta sección
    function createIcons(o) {
        for (let key in o) {
            const myArticle = document.createElement('article');
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('div');
            const imageDiv = document.createElement('div');

            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            section.appendChild(myArticle);
        }
    }

    createIcons(jsonObj);

    // Agregar el título y la sección al contenedor principal
    tabguideContent.appendChild(header);
    tabguideContent.appendChild(section);
}

// Código para manejar las pestañas (si es necesario)
$("#tabguide-nav li:first-child").addClass("active");
$(".tabguide-content").hide();
$(".tabguide-content:first").show();

$("#tabguide-nav li").click(function () {
    $("#tabguide-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tabguide-content").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
});
