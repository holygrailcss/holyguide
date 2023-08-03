$(document).ready(function() {
  // Seleccionar todos los elementos 'a' con el atributo 'name' igual a 'modal'
  $('a[name=modal]').click(function(e) {
    e.preventDefault();

    // Obtener el ID del elemento destino del modal
    var id = $(this).attr('href');

    console.log("name: ", $(this).attr('name'));

    // Obtener el alto y ancho de la pantalla
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // Establecer el alto y ancho del fondo oscuro (mask) para que cubra toda la pantalla
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight }).show();

    // Obtener el alto y ancho de la ventana del navegador
    var winH = $(window).height();
    var winW = $(window).width();

    // Centrar la ventana modal en la pantalla
    $(id).css({

      'left': winW / 2 - $(id).outerWidth() / 2
    }).show();
  });

  // Si se hace clic en el botón de cerrar
  $('.window .closemodal').click(function(e) {
    e.preventDefault();
    $('#mask, .window').hide();
  });

  // Si se hace clic en el fondo oscuro (mask)
  $('#mask').click(function() {
    $(this).hide();
    $('.window').hide();
  });

  // Manejar el evento de clic en los botones de cambio de tamaño
  $('.size-change').click(function(e) {
    e.preventDefault();

    // Obtener el tamaño desde el atributo data-size del botón
    var size = $(this).data('size');

    // Lógica para cambiar el tamaño de la modal según el valor de size
    if (size === 'mobile') {
      resizeModal(375);
    } else if (size === 'tablet') {
      resizeModal(500);
    } else if (size === 'desktop') {
      resizeModal(1200);
    }

    // Centrar la ventana modal después de cambiar su tamaño
    var modal = $('.window');
    var winH = $(window).height();
    var winW = $(window).width();
    modal.css({

      'left': (winW - modal.outerWidth()) / 2
    });
  });

  // Función para cambiar el tamaño de la modal
  function resizeModal(width) {
    var modal = $('.window');
    modal.css('width', width + 'px');
    // También puedes ajustar la altura y otros estilos según sea necesario
  }
});

function openModal(size, margin) {

  $(".modalx-dialog")
  .removeClass("modalx-xs")
  .removeClass("modalx-sm")
  .removeClass("modalx-md")
  .removeClass("modalx-lg")
  .removeClass("modalx-xl")
  .removeClass("modalx-0")
  .removeClass("modalx-16")
  .removeClass("modalx-24")
  .removeClass("modalx-32")
  .removeClass("modalx-40")
  .removeClass("modalx-0-24")
  .removeClass("modalx-fullmobile")
  .removeClass("modalx-fullviewport")
  .removeClass("feel-bg")
  ;


  $(".modalx-close, .modal-title").removeClass("hidden");
  $(".modalx-backdrop").removeClass("bg-transparent");

  $(".start-options").removeClass("hidden");
  $(".sidebar-options").removeClass("visible");
  
  if(size === "SIZE_XS"){
    $(".modalx-dialog").addClass("modalx-xs");
  }
  else if(size === "SIZE_S" ){
    $(".modalx-dialog").addClass("modalx-sm");
  }
  else if(size === "SIZE_M" ){
    $(".modalx-dialog").addClass("modalx-md");
  }
  else if(size === "SIZE_L" ){
    $(".modalx-dialog").addClass("modalx-lg");
  }
  else if(size === "SIZE_XL" ){
    $(".modalx-dialog").addClass("modalx-xl");
  }


  if(margin === "MARGIN_0"){
    $(".modalx-dialog").addClass("modalx-0");
  }
  else if(margin === "MARGIN_16") {
    $(".modalx-dialog").addClass("modalx-16");
  }
  else if(margin === "MARGIN_24") {
    $(".modalx-dialog").addClass("modalx-24");
  }
  else if(margin === "MARGIN_32") {
    $(".modalx-dialog").addClass("modalx-32");
  }
  else if(margin === "MARGIN_40") {
    $(".modalx-dialog").addClass("modalx-40");
  }
  else if(margin === "MARGIN_0_24") {
    $(".modalx-dialog").addClass("modalx-0-24");
  }


  document.getElementById("modal-container").classList.toggle("modal-open");

};

function modalHideX(){
  $(".modalx-close").toggleClass("hidden");
  
  setTimeout(() => {
    $(".modalx-close").removeClass("hidden");
  }, 5000);
}

function modalHideTittle(){
  $(".modal-title").toggleClass("hidden");
}

function modalXfullM(){
  $(".modalx-dialog").toggleClass("modalx-fullmobile");
}

function modalFullWp(){
  $(".modalx-dialog").toggleClass("modalx-fullviewport");
}

function modalFeelBg(){
  $(".modalx-dialog").toggleClass("feel-bg");
}

function modalBgtransparent(){
  $(".modalx-backdrop").toggleClass("bg-transparent");
}

function modalOptionsToggle(){
  $(".start-options").toggleClass("hidden");
  $(".sidebar-options").toggleClass("visible");
}


function modalSizeChange(margin){

  $(".modalx-dialog")
  .removeClass("modalx-0")
  .removeClass("modalx-16")
  .removeClass("modalx-24")
  .removeClass("modalx-32")
  .removeClass("modalx-40")
  .removeClass("modalx-0-24")
  ;

  
  if(margin === "MARGIN_0"){
    $(".modalx-dialog").addClass("modalx-0");
  }
  else if(margin === "MARGIN_16") {
    $(".modalx-dialog").addClass("modalx-16");
  }
  else if(margin === "MARGIN_24") {
    $(".modalx-dialog").addClass("modalx-24");
  }
  else if(margin === "MARGIN_32") {
    $(".modalx-dialog").addClass("modalx-32");
  }
  else if(margin === "MARGIN_40") {
    $(".modalx-dialog").addClass("modalx-40");
  }
  else if(margin === "MARGIN_0_24") {
    $(".modalx-dialog").addClass("modalx-0-24");
  }
}



$(".btn-size-change").click(function () {
  $(".btn-size-change").removeClass("disabled");
  $(this).addClass("disabled");
});



// funciones modal shop the look
function openModalShopLook(){
document.getElementById("modal-container-shoplook").classList.toggle("modal-open");
$(".modalx-dialog").addClass("modalx-xxs modalx-0");
}

// cerrar modales desde la capa de opacidad
window.onclick = function(event){
console.log(event.target);
if (event.target == document.getElementById("modalx-backdrop")){
  openModalShopLook();
} else if (event.target == document.getElementById("modalx")){
  openModal();
  console.log("cierro el modal generico");
}


}