function rtlChange(){
    console.log("rtlChange activo");

    let element = document.querySelector("body");
    let validation = element.classList.contains("is-rtl");

    if(validation == true ){
        element.classList.remove("is-rtl");
        document.querySelector("html").setAttribute("dir", "ltr");
    } else{
        element.classList.add("is-rtl");
        document.querySelector("html").setAttribute("dir", "rtl");
    }
}