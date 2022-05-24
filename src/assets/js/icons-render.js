
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
                const imageIcon = document.createElement('svg-icon');
                const imageDiv = document.createElement('div');


                myH2.textContent = key;
                imageDiv.innerHTML = atob(o[key]);

                myArticle.appendChild(imageIcon);
                myArticle.appendChild(myH2);
                imageIcon.appendChild(imageDiv);
                loopprint.appendChild(myArticle);
            }
        }

        tipos(jsonObj);
    }