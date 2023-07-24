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
