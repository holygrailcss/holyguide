document.addEventListener('DOMContentLoaded', () => {
    const tabguideContent = document.getElementById('tabguide-content');
    const buttons = document.querySelectorAll('#tabguide-nav li div');
    const jsonFiles = [
        { url: '/assets/js/jsons/actions.json', title: 'Actions' },
        { url: '/assets/js/jsons/brands.json', title: 'Brands' },
        { url: '/assets/js/jsons/common.json', title: 'Common' },
        { url: '/assets/js/jsons/essential.json', title: 'Essential' },
        { url: '/assets/js/jsons/position.json', title: 'Position' },
        { url: '/assets/js/jsons/product.json', title: 'Product' },
        { url: '/assets/js/jsons/productbig.json', title: 'Product Big' },
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
                populateSection(jsonFiles[index].title, jsonObj, jsonFiles[index].url);
            });
        })
        .catch(error => {
            console.error('Error loading one or more JSON files:', error);
        });

    function populateSection(title, jsonObj, url) {
        const header = document.createElement('h2');
        const link = document.createElement('a');
        link.textContent = `${title}.json`;
        link.href = url;
        link.target = '_blank'; // Esto hará que el enlace se abra en una nueva pestaña

        const icon = document.createElement('img');
        icon.src = '/assets/static/download.svg'; // Asegúrate de tener este icono en tu proyecto
        icon.alt = 'Download Icon';
        icon.classList.add('download-icon'); // Añadir una clase para estilo adicional si es necesario
        icon.style.marginLeft = '16px'; // Añadir el margen a la izquierda

        // Establecer el evento de clic en el icono para descargar el JSON
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        header.appendChild(link);
        header.appendChild(icon);

        const section = document.createElement('section');
        section.classList.add('grid-6', 'grid-svg');

        function createIcons(o) {
            for (let key in o) {
                const myArticle = document.createElement('article');
                const myspan = document.createElement('div');
                const svgIcon = document.createElement('svg-icon2');
                const imageDiv = document.createElement('div');

                myspan.textContent = key;
                imageDiv.innerHTML = atob(o[key]);

                svgIcon.appendChild(imageDiv);
                myArticle.appendChild(svgIcon);
                myArticle.appendChild(myspan);

                section.appendChild(myArticle);
            }
        }

        createIcons(jsonObj);

        tabguideContent.appendChild(header);
        tabguideContent.appendChild(section);
    }

    // Añadir solo una clase a todos los svg-icon2 al hacer clic en un div
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newClass = button.getAttribute('title');
            if (newClass) {
                document.querySelectorAll('svg-icon2').forEach(icon => {
                    // Remover todas las clases excepto las que son necesarias (puedes ajustar esto si hay clases que no deseas eliminar)
                    icon.className = ''; // Esto elimina todas las clases
                    icon.classList.add(newClass);
                });
            }
        });
    });

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
});
