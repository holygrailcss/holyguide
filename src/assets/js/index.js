$(document).ready(function () {

  // ── Scroll state classes ──────────────────────────────────────
  var bodyElement = document.body;
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;

  var handleScroll = function () {
    var y = window.scrollY || window.pageYOffset || 0;
    var x = window.scrollX || window.pageXOffset || 0;

    bodyElement.classList.toggle("scrolled", y >= 150);
    bodyElement.classList.toggle("is-scorlling", x !== 0 || y !== 0);
    bodyElement.classList.toggle("is-scrolling-offset", y > 48);

    if (y > scrollPosition) {
      bodyElement.classList.remove("scroll-up");
      bodyElement.classList.add("scroll-down");
    } else {
      bodyElement.classList.remove("scroll-down");
      bodyElement.classList.add("scroll-up");
    }
    scrollPosition = y;
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });

  // ── Video player ──────────────────────────────────────────────
  initvideo();

  // ── Code view toggles (resize-container) ─────────────────────
  $(".resize-code").on("click", function (e) {
    $(this).closest(".resize-container")
      .removeClass("opencode-css")
      .toggleClass("opencode-button");
    e.preventDefault();
  });

  $(".resize-css").on("click", function (e) {
    $(this).closest(".resize-container")
      .removeClass("opencode-button")
      .toggleClass("opencode-css");
    e.preventDefault();
  });

  // ── Debug: marcar reglas de layout ───────────────────────────
  $(".resize-rules").on("click", function () {
    $(this).closest("html").toggleClass("openRules");
  });

  // ── Loading state en botones ──────────────────────────────────
  $(".btn-anim").click(function () {
    $(this).toggleClass("is-loading");
  });

  // ── Tab guide ─────────────────────────────────────────────────
  $("#tabguide-nav li:first-child").addClass("active");
  $(".tabguide-content").hide().first().show();

  $("#tabguide-nav li").click(function () {
    $("#tabguide-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tabguide-content").hide();
    $($(this).find("a").attr("href")).fadeIn();
    return false;
  });

  // ── Open code button ──────────────────────────────────────────
  $(".opencode-button").click(function () {
    $(this).closest(".code-button-container").toggleClass("active");
    return false;
  });

  // ── Nav sidebar ───────────────────────────────────────────────
  $(".nav-mainbar-close").click(function () {
    $(".nav-wrap").toggleClass("active");
  });

  // ── Debug: marcar iconos que no son 16×16 ─────────────────────
  $(".check-16").on("click", function () {
    document.querySelectorAll("svg").forEach(function (icon) {
      if (
        icon.getBoundingClientRect().width  !== 16 ||
        icon.getBoundingClientRect().height !== 16
      ) {
        icon.querySelectorAll("path").forEach(function (path) {
          path.style.fill = "red";
        });
      }
    });
  });

  // ── Toggle Men / Woman view ───────────────────────────────────
  $("#menlink, #womanlink").click(function () {
    var isMen = $(this).is("#menlink");
    $("body")
      .toggleClass("menopen", isMen)
      .toggleClass("womanopen", !isMen);
    $("#menlink").toggleClass("link-active", isMen);
    $("#womanlink").toggleClass("link-active", !isMen);
  });

  // ── ClipboardJS (botón .btncode) ──────────────────────────────
  if (document.querySelector(".btncode")) {
    var clipboard = new ClipboardJS(".btncode");
    clipboard.on("success", function (e) {
      e.clearSelection();
    });
  }

  // ── RTL toggle (enlace <a class="rtl">) ───────────────────────
  $("a.rtl").on("click", function () {
    $("body").toggleClass("is-rtl");
    $("html").attr("dir", $("body").hasClass("is-rtl") ? "rtl" : "ltr");
  });

  // ── Overlay sections ──────────────────────────────────────────
  $(".over1, .over2, .over3").on("click", function (e) {
    var className = "open-" + $(this).attr("class");
    $(this).closest(".overlay-container")
      .attr("class", "overlay-container " + className);
    e.preventDefault();
  });

  // ── Scroll to top ─────────────────────────────────────────────
  $(".to-top").on("click", function () {
    $(window).scrollTop(0);
  });

  // ── Accordion ─────────────────────────────────────────────────
  $(".accordion-toggle").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show").slideUp(350);
    } else {
      $this.parent().parent()
        .find("li .accordion-content")
        .removeClass("show")
        .slideUp(350);
      $this.next().toggleClass("show").slideToggle(350);
    }
  });

});

// ── Video player ──────────────────────────────────────────────────
function initvideo() {
  $(".action--play").click(function () {
    $(".video-wrap")
      .addClass("video-wrap--show")
      .removeClass("video-wrap--hide");
    $(".video-player")
      .attr("src", $(this).data("src"))
      .get(0).play();
  });

  $(".action--close").click(function () {
    $(".video-wrap")
      .addClass("video-wrap--hide")
      .removeClass("video-wrap--show");
    $(".video-player").get(0).pause();
  });
}

// ── RTL toggle (función global para onclick="rtlChange()") ───────
function rtlChange() {
  var element = document.querySelector("body");
  if (element.classList.contains("is-rtl")) {
    element.classList.remove("is-rtl");
    document.querySelector("html").setAttribute("dir", "ltr");
  } else {
    element.classList.add("is-rtl");
    document.querySelector("html").setAttribute("dir", "rtl");
  }
}

// ── Horizontal scroll GSAP (solo si existe .md-scroll-wrap) ──────
if (document.querySelector(".md-scroll-wrap")) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.saveStyles(".mobile, .desktop");

  var container = document.querySelector(".md-scroll-wrap");

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      gsap.to(".md-scroll-wrap", {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) + "px",
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

  var lastScroll = 0;
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    $("body").toggleClass("scrollUp", lastScroll - scroll > 0);
    lastScroll = scroll;
  });
}

// ── Code-zone colapsable (código antiguo de .code-zone) ──────────
function cerrarDiv(clickedElement) {
  var codeZoneDiv = clickedElement.closest(".code-zone");
  codeZoneDiv.style.height =
    codeZoneDiv.style.height === "30px" || codeZoneDiv.style.height === ""
      ? "auto"
      : "30px";
}

// ── Search component scroll state ────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var div = document.getElementById("searchcomponent");
  if (!div) return;

  div.onscroll = function () {
    var current = div.scrollTop;
    document.body.classList.toggle("scroll-down-search", current > lastScrollTop);
    document.body.classList.toggle("scroll-up-search",  current < lastScrollTop);
    document.body.classList.toggle("is-search", div.scrollTop >= 300);
    lastScrollTop = current;
  };
});

// ── List slide — active button ────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".list-slide .btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) { btn.classList.remove("is-active"); });
      this.classList.add("is-active");
    });
  });
});
