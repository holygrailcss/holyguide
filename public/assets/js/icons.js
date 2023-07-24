
const loopprint = document.getElementById('loopicons');
const loopprint2 = document.getElementById('loopicons2');
const loopprint3 = document.getElementById('loopicons3');
const loopprint4 = document.getElementById('loopicons4');
const loopprint5 = document.getElementById('loopicons5');


let requestURL = '/assets/js/icons.json';
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
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('svg-icon');
            const imageDiv = document.createElement('div');


            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            loopprint.appendChild(myArticle);
        }
        for (let key in o) {

            const myArticle = document.createElement('article');
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('svg-icon');
            const imageDiv = document.createElement('div');


            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            loopprint2.appendChild(myArticle);
        }
        for (let key in o) {

            const myArticle = document.createElement('article');
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('svg-icon');
            const imageDiv = document.createElement('div');


            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            loopprint3.appendChild(myArticle);
        }
        for (let key in o) {

            const myArticle = document.createElement('article');
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('svg-icon');
            const imageDiv = document.createElement('div');


            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            loopprint4.appendChild(myArticle);
        }


        for (let key in o) {

            const myArticle = document.createElement('article');
            const myspan = document.createElement('div');
            const imageIcon = document.createElement('svg-icon');
            const imageDiv = document.createElement('div');


            myspan.textContent = key;
            imageDiv.innerHTML = atob(o[key]);

            myArticle.appendChild(imageIcon);
            myArticle.appendChild(myspan);
            imageIcon.appendChild(imageDiv);

            loopprint5.appendChild(myArticle);
        }
    }

    tipos(jsonObj);
}

	// Enseñamos el primero ocultamos el resto
	$("#tabguide-nav li:first-child").addClass("active");
	$(".tabguide-content").hide();
	$(".tabguide-content:first").show();
	// Click function
	$("#tabguide-nav li").click(function () {
		$("#tabguide-nav li").removeClass("active");
		$(this).addClass("active");
		$(".tabguide-content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});