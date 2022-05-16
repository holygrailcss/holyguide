function rtlChange(){
    console.log("rtlChange activo");

    let element = document.getElementById("guideContainer");
    let validation = element.classList.contains("is-rtl");

    if(validation == true ){
        element.classList.remove("is-rtl");
    } else{
        element.classList.add("is-rtl");
    }
}