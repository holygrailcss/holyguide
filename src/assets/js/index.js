$(document).ready(function () {
  document.body.onscroll = function () {
      if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
          document.body.classList.add("scrolled");
      } else {
          document.body.classList.remove("scrolled");
      }
  };

  initvideo();

  $(".resize-code").on("click", function (e) {
      $(this).closest('.resize-container').toggleClass("opencode-button");
      e.preventDefault();
  });

  $(".resize-rules").on("click", function () {
      console.log("esto no funciona");
      $(this).closest('html').toggleClass("openRules");
  });

  $(".btn-anim").click(function () {
      $(this).toggleClass("is-loading");
  });

  $("#menu-toggle").click(function () {
      $("body").toggleClass("menu-open");
  });

  $(".check-new").on("click", function (e) {
      console.log("Esto funciona");
      $(this).closest('.code-view').toggleClass("bg-dark has-light");
      e.preventDefault();
  });

  // Enseñamos el primero ocultamos el resto
  $("#tabguide-nav li:first-child").addClass("active");
  $(".tabguide-content").hide().first().show();

  $("#tabguide-nav li").click(function () {
      $("#tabguide-nav li").removeClass("active");
      $(this).addClass("active");
      $(".tabguide-content").hide();
      $($(this).find("a").attr("href")).fadeIn();
      return false;
  });

  $(".opencode-button").click(function () {
      $(this).closest('.code-button-container').toggleClass("active");
      return false;
  });

  $(".openshoplook").click(function () {
      $("body").toggleClass("openshop");
      return false;
  });

  $('input[type="checkbox"]').click(function () {
      if ($(this).is(":checked")) {
          console.log("Checkbox esta seleccionado.");
      } else {
          console.log("Checkbox no esta seleccionado.");
      }
  });

  $(".nav-mainbar-close").click(function () {
      $(".nav-wrap").toggleClass("active");
  });

  //Boton que marca en rojo los iconos que no son 16x16
  $(".check-16").on("click", function () {
      document.querySelectorAll("svg").forEach(function(icon) {
          if (icon.getBoundingClientRect().width != 16 || icon.getBoundingClientRect().height != 16) {
              icon.querySelectorAll("path").forEach(function(path) {
                  path.style.fill = "red";
              });
          }
      });
  });

  $("#menlink, #womanlink").click(function () {
      var isMen = $(this).is("#menlink");
      $("body").toggleClass("menopen", isMen).toggleClass("womanopen", !isMen);
      $("#menlink").toggleClass("link-active", isMen);
      $("#womanlink").toggleClass("link-active", !isMen);
  });

  if (document.querySelector(".btncode")) {
      var clipboard = new ClipboardJS(".btncode");
      clipboard.on("success", function (e) {
          console.info("Action:", e.action);
          console.info("Text:", e.text);
          console.info("Trigger:", e.trigger);
          e.clearSelection();
      });
  }

  $("a.rtl").on("click", function () {
      console.log("rtlChange activo");
      $("body").toggleClass("is-rtl");
      $("html").attr("dir", $("body").hasClass("is-rtl") ? "rtl" : "ltr");
  });

  $(".over1, .over2, .over3").on("click", function (e) {
      var className = "open-" + $(this).attr('class');
      $(this).closest('.overlay-container').attr('class', 'overlay-container ' + className);
      e.preventDefault();
  });

  $(".to-top").on("click", function () {
      $(window).scrollTop(0);
  });



  $('.accordion-toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .accordion-content').removeClass('show');
        $this.parent().parent().find('li .accordion-content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


});

function initvideo() {
  $(".action--play").click(function () {
      $(".video-wrap").addClass("video-wrap--show").removeClass("video-wrap--hide");
      $(".video-player").attr("src", $(this).data("src")).get(0).play();
  });

  $(".action--close").click(function () {
      $(".video-wrap").addClass("video-wrap--hide").removeClass("video-wrap--show");
      $(".video-player").get(0).pause();
  });
}






function rtlChange() {
  console.log("rtlChange activo");
  let element = document.querySelector("body");
  let validation = element.classList.contains("is-rtl");
  if (validation == true) {
    element.classList.remove("is-rtl");
    document.querySelector("html").setAttribute("dir", "ltr");
  } else {
    element.classList.add("is-rtl");
    document.querySelector("html").setAttribute("dir", "rtl");
  }
}
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 15,
  slidesPerView: "1.5",
  loop: true,
  // autoHeight: true,
  pagination: {
    el: ".actuals .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-arrows .swiper-next",
    prevEl: ".swiper-arrows .swiper-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
      pagination: false,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
      loop: false,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
      loop: false,
    },
  },
});
function initvideo() {
  $(".action--play").click(function () {
    $(".video-wrap").addClass("video-wrap--show");
    $(".video-wrap").removeClass("video-wrap--hide");
    $(".video-player").attr("src", $(this).data("src"));
    $(".video-player source").attr("src", $(this).data("src"));
    $(".video-player").get(0).play();
  });
  $(".action--close").click(function () {
    $(".video-wrap").addClass("video-wrap--hide");
    $(".video-wrap").removeClass("video-wrap--show");
    $(".video-player").get(0).pause();
  });
}
const body = document.querySelector("body");
// Guardar la posición actual del scroll
let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
// Función para manejar el evento de scroll
const handleScroll = () => {
  // Obtener la nueva posición del scroll
  const newScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Comparar la posición actual con la nueva posición para determinar la dirección del scroll
  if (newScrollPosition > scrollPosition) {
    // Scroll hacia abajo
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else {
    // Scroll hacia arriba
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  // Actualizar la posición actual del scroll
  scrollPosition = newScrollPosition;
};



// Agregar el listener al evento de scroll
window.addEventListener("scroll", handleScroll);
var mySwiper = new Swiper(".swiper-container-img", {
  // If loop true set photoswipe - counterEl: false
  loop: true,
  /* slidesPerView || auto - if you want to set width by css like flickity.js layout - in this case width:80% by CSS */
  spaceBetween: 15,
  slidesPerView: "1.5",
  loop: true,
  // autoHeight: true,
  pagination: {
    el: ".actuals .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-arrows-img .swiper-next",
    prevEl: ".swiper-arrows-img .swiper-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
      pagination: false,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
      loop: false,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: false,
      loop: false,
    },
  },
});
var initPhotoSwipeFromDOM = function (gallerySelector) {
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      // create slide object
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    // find root element of slide
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "LI";
    });
    if (!clickedListItem) {
      return;
    }
    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    // define options (if needed)
    options = {
      /* "showHideOpacity" uncomment this If dimensions of your small thumbnail don't match dimensions of large image */
      //showHideOpacity:true,
      // Buttons/elements
      closeEl: true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: true,
      counterEl: false,
      arrowEl: true,
      preloaderEl: true,
      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();
        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
    };
    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    // exit if index not found
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    /* EXTRA CODE (NOT FROM THE CORE) - UPDATE SWIPER POSITION TO THE CURRENT ZOOM_IN IMAGE (BETTER UI) */
    // photoswipe event: Gallery unbinds events
    // (triggers before closing animation)
    gallery.listen("unbindEvents", function () {
      // This is index of current photoswipe slide
      var getCurrentIndex = gallery.getCurrentIndex();
      // Update position of the slider
      mySwiper.slideTo(getCurrentIndex, false);
    });
  };
  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};
// execute above function
initPhotoSwipeFromDOM(".my-gallery");
if (document.querySelector(".md-scroll-wrap")) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.saveStyles(".mobile, .desktop");
  let container = document.querySelector(".md-scroll-wrap");
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      gsap.to(".md-scroll-wrap", {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
        scrollTrigger: {
          trigger: ".md-scroll",
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth,
        },
      });
    },
  });
  // Script
  lastScroll = 0;
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $("body").addClass("scrollUp");
    } else {
      $("body").removeClass("scrollUp");
    }
    lastScroll = scroll;
  });
}
function cerrarDiv(clickedElement) {
  // Buscar el div padre (code-zone) del elemento clicado (code-title)
  var codeZoneDiv = clickedElement.closest(".code-zone");
  // Verificar si el div está visible u oculto
  if (codeZoneDiv.style.height === "30px" || codeZoneDiv.style.height === "") {
    // Si está oculto, mostrarlo ajustando su altura automáticamente
    codeZoneDiv.style.height = "auto";
  } else {
    // Si está visible, ocultarlo ajustando su altura a 0
    codeZoneDiv.style.height = "30px";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('searchcomponent');
  if (div) {
      div.onscroll = function () {
          var currentScrollTop = div.scrollTop;
          if (currentScrollTop > lastScrollTop) {
              document.body.classList.remove("scroll-up-search");
              document.body.classList.add("scroll-down-search");
          } else if (currentScrollTop < lastScrollTop) {
              document.body.classList.remove("scroll-down-search");
              document.body.classList.add("scroll-up-search");
          }
          if (div.scrollTop >= 300) {
              document.body.classList.add("is-search");
          } else {
              document.body.classList.remove("is-search");
          }
          lastScrollTop = currentScrollTop;
      };
  }
});
var lastScrollTop = 0;




document.addEventListener("DOMContentLoaded", (event) => {
  const buttons = document.querySelectorAll(".list-slide .btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover la clase is-active de todos los botones
      buttons.forEach((btn) => btn.classList.remove("is-active"));
      // Agregar la clase is-active al botón clickeado
      this.classList.add("is-active");
    });
  });
});
