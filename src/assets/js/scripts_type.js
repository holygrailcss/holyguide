


    //PESOS BUTTONS

    const buttonFontPeso1 = document.querySelector('.button-condensed-family-peso');
    const buttonFontPeso2 = document.querySelector('.button-compressed-family-peso');
    const buttonFontPeso3 = document.querySelector('.button-daily-family-peso');
    const buttonFontPeso4 = document.querySelector('.button-extended-family-peso');
    const buttonFontPeso5 = document.querySelector('.button-wide-family-peso');
    const buttonFontPeso6 = document.querySelector('.button-condensed-italic-family-peso');
    const buttonFontPeso7 = document.querySelector('.button-compressed-italic-family-peso');
    const buttonFontPeso8 = document.querySelector('.button-daily-italic-family-peso');

    function removeActiveClassPeso() {
        var els = document.getElementsByClassName('c-familia_pesos_button-active');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('c-familia_pesos_button-active');
        }
       // Temp Fix for old Safari
    }

    function removeContainerPeso() {
        var els = document.querySelectorAll('.c-pesos_item svg');
        for (var i = 0; i < els.length; i++) {
            els[i].style.display = 'none';
            els[i].style.opacity = '0';
        }
       // Temp Fix for old Safari
    }


    function addContainerPeso(el) {
        el.style.opacity = 0;
        var tick = function () {
            el.style.opacity = '1';
            el.style.display = 'block';
           // Temp Fix for old Safari 
        };
        tick();
    }





    buttonFontPeso1.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso1.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        //fadeIn(document.querySelector('.peso-condensed'), 800);
        addContainerPeso(document.querySelector('.peso-condensed'));
    });
    buttonFontPeso2.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso2.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-compressed'));
    });
    buttonFontPeso3.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso3.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-daily'));
    });
    buttonFontPeso4.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso4.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-extended'));
    });
    buttonFontPeso5.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso5.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-wide'));
    });
    buttonFontPeso6.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso6.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-condensed-italic'));
    });
    buttonFontPeso7.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso7.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-compressed-italic'));
    });
    buttonFontPeso8.addEventListener('click', (event) => {
        removeActiveClassPeso();
        buttonFontPeso8.classList.add('c-familia_pesos_button-active');
        removeContainerPeso();
        addContainerPeso(document.querySelector('.peso-daily-italic'));
    });

    

	function followMouse(e) {
        var x = e.clientX;
        var y = e.clientY;
        var letter = e.target.getAttribute('class');
        letter = letter.substring(letter.indexOf('-') + 1);

        document.querySelector('.bubble-' + letter).style.left = x + 'px';
        document.querySelector('.bubble-' + letter).style.top = y + 'px';
    }

    const pesoExtrabold = document.querySelectorAll('.peso-extrabold');
    const pesoBold = document.querySelectorAll('.peso-bold');
    const pesoSemibold = document.querySelectorAll('.peso-semibold');
    const pesoMedium = document.querySelectorAll('.peso-medium');
    const pesoRegular = document.querySelectorAll('.peso-regular');
    const pesoLight = document.querySelectorAll('.peso-light');
    const pesoExtralight = document.querySelectorAll('.peso-extralight');



    pesoExtrabold.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-extrabold").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-extrabold").style.opacity = "0", document.querySelector(".bubble-extrabold").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-extrabold").style.opacity = "0", document.querySelector(".bubble-extrabold").style.top = "0"
        }));
    })), pesoBold.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-bold").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-bold").style.opacity = "0", document.querySelector(".bubble-bold").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-bold").style.opacity = "0", document.querySelector(".bubble-bold").style.top = "0"
        }))
    })), pesoSemibold.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-semibold").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-semibold").style.opacity = "0", document.querySelector(".bubble-semibold").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-semibold").style.opacity = "0", document.querySelector(".bubble-semibold").style.top = "0"
        }))
    })), pesoMedium.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-medium").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-medium").style.opacity = "0", document.querySelector(".bubble-medium").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-medium").style.opacity = "0", document.querySelector(".bubble-medium").style.top = "0"
        }))
    })), pesoRegular.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-regular").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-regular").style.opacity = "0", document.querySelector(".bubble-regular").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-regular").style.opacity = "0", document.querySelector(".bubble-regular").style.top = "0"
        }))
    })), pesoLight.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-light").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-light").style.opacity = "0", document.querySelector(".bubble-light").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-light").style.opacity = "0", document.querySelector(".bubble-light").style.top = "0"
        }))
    })), pesoExtralight.forEach((function(e) {
        e.addEventListener("mousemove", (function(e) {
            document.querySelector(".bubble-extralight").style.opacity = "1", followMouse(e);
            isIpadOS ? setTimeout(() => { document.querySelector(".bubble-extralight").style.opacity = "0", document.querySelector(".bubble-extralight").style.top = "0" }, 4000) : null;
        })), e.addEventListener("mouseout", (function(e) {
            document.querySelector(".bubble-extralight").style.opacity = "0", document.querySelector(".bubble-extralight").style.top = "0"
        }))
    }));



