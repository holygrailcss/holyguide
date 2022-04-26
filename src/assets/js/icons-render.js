
    const loopprint = document.getElementById('loopicons');

    let requestURL = '/icons/icons.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();


    request.onload = function () {
        const iconsText = request.response;
        const icons = JSON.parse(iconsText);
        populateHeader(icons);
        //   showHeroes(icons);
    }

    function populateHeader(jsonObj) {
        function tipos(o) {
            for (let key in o) {

                const myArticle = document.createElement('article');
                const myH2 = document.createElement('h2');
                const imageIcon = document.createElement('img');

                myH2.textContent = key;
                imageIcon.textContent = o[key];
                imageIcon.src = "data:image/svg+xml;base64, " + o[key];

                myArticle.appendChild(imageIcon);
                myArticle.appendChild(myH2);
                loopprint.appendChild(myArticle);
            }
        }

        tipos(jsonObj);
    }


