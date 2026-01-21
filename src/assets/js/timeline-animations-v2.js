/**
 * TIMELINE ANIMATIONS
 * 
 * Este archivo maneja las animaciones del componente timeline.
 * Las animaciones se activan cuando el usuario hace scroll y los elementos entran en la vista.
 */

gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// CONFIGURACIÓN DE BREAKPOINTS
// =============================================================================

const BREAKPOINTS = {
  small: 768,    // Hasta 767px
  medium: 1280   // Desde 768px hasta 1279px
};

const isSmall = () => window.innerWidth < BREAKPOINTS.small;
const isMedium = () => window.innerWidth >= BREAKPOINTS.small && window.innerWidth < BREAKPOINTS.medium;
const isLarge = () => window.innerWidth >= BREAKPOINTS.medium;

// =============================================================================
// CONFIGURACIÓN DE ANIMACIONES
// =============================================================================

const ANIMATION_CONFIG = {
  duration: 0.2,        // Duración de la animación en segundos
  staggerDelay: 0,     // Retraso entre cada elemento (efecto cascada)
  easeIn: 'power2.in',   // Easing cuando los elementos desaparecen
  easeOut: 'power2.out'  // Easing cuando los elementos aparecen
};

// Configuración de ScrollTrigger por breakpoint
const SCROLL_TRIGGER_CONFIG = {
  small: { start: 'center bottom-=16.6666%', end: 'center top+=16.6666%' },
  medium: { start: 'center bottom-=16.6666%', end: 'center top+=16.6666%' },
  large: { start: 'center bottom-=9%', end: 'center top+=9%' }
};

function getScrollTriggerConfig() {
  if (isSmall()) return SCROLL_TRIGGER_CONFIG.small;
  if (isMedium()) return SCROLL_TRIGGER_CONFIG.medium;
  return SCROLL_TRIGGER_CONFIG.large;
}

// =============================================================================
// VARIABLES GLOBALES
// =============================================================================

let animationContext = null;

// =============================================================================
// FUNCIONES AUXILIARES
// =============================================================================

/**
 * Anima un elemento para que aparezca (se mueve hacia arriba y se hace visible)
 */
function animateElementIn(element, delay = 0) {
  gsap.killTweensOf(element);
  gsap.to(element, {
    y: 0,                    // Posición final (sin desplazamiento)
    opacity: 1,              // Visible
    duration: ANIMATION_CONFIG.duration,
    ease: ANIMATION_CONFIG.easeOut,
    delay: delay
  });
}

/**
 * Anima un elemento para que desaparezca (se mueve y se oculta)
 */
function animateElementOut(element, direction = 'up') {
  gsap.killTweensOf(element);
  const yValue = direction === 'up' ? '-20dvh' : '20dvh';
  gsap.to(element, {
    y: yValue,               // Se mueve hacia arriba o abajo
    opacity: 0,              // Se oculta
    duration: ANIMATION_CONFIG.duration,
    ease: ANIMATION_CONFIG.easeIn
  });
}

/**
 * Anima el texto para que aparezca (solo fade, sin movimiento)
 */
function animateTextIn(textElement, delay = 0) {
  gsap.killTweensOf(textElement);
  gsap.to(textElement, {
    opacity: 1,              // Solo cambia la opacidad
    duration: 0,
    ease: "none",
    delay: delay
  });
}

/**
 * Anima el texto para que desaparezca (solo fade)
 */
function animateTextOut(textElement) {
  gsap.killTweensOf(textElement);
  gsap.to(textElement, {
    opacity: 0,              // Solo cambia la opacidad
    duration: 0,
    ease: "none"
  });
}

// =============================================================================
// ANIMACIÓN DE LA IMAGEN PRINCIPAL (FIGURE)
// =============================================================================

/**
 * Crea la animación de la imagen principal que se escala y mueve según el scroll
 * Diferente para small (< 768px), medium (768-1279px) y large (>= 1280px)
 */
function createFigureAnimation(figure, item) {
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      scroller: ".md-timeline2-list",
      start: "center bottom+=100%",
      end: "center top-=100%",
      scrub: true,              // La animación sigue el scroll
      invalidateOnRefresh: true,
    }
  });
  
  if (isSmall()) {
    // ANIMACIÓN PARA SMALL (< 768px)
    timeline
      .fromTo(figure, 
        { scale: 0.40, y: () => -figure.offsetHeight * 0.6, zIndex: 1, ease: 'none' },
            { scale: 0.40, y: () => -figure.offsetHeight * 0.6, zIndex: 2, ease: 'none' }
      )
                .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.6, zIndex: 3, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.5, zIndex: 4, ease: 'none'})
                        .to(figure, { scale: 0.5, y: () => -figure.offsetHeight * 0.38, zIndex: 5, ease: 'none' })
                            .to(figure, { scale: 0.6, y: () => -figure.offsetHeight * 0.2, zIndex: 6, ease: 'none' })
                                .to(figure, { scale: 0.7, y: () => -figure.offsetHeight * 0.12, zIndex: 7, ease: 'none' })
                                    .to(figure, { scale: 0.8, y: () => -figure.offsetHeight * 0.1, zIndex: 8, ease: 'none' })
                                        .to(figure, { scale: 0.9, y: () => -figure.offsetHeight * 0.08, zIndex: 9, ease: 'none' })
                                        
                                            .to(figure, { scale: 1, y: 0, zIndex: 10, ease: 'none' })  // Estado central (más grande y visible)
                                        
                                        .to(figure, { scale: 0.9, y: () => figure.offsetHeight * 0.08, zIndex: 9, ease: 'none' })
                                    .to(figure, { scale: 0.8, y: () => figure.offsetHeight * 0.1, zIndex: 8, ease: 'none' })
                                .to(figure, { scale: 0.7, y: () => figure.offsetHeight * 0.12, zIndex: 7, ease: 'none' })
                            .to(figure, { scale: 0.6, y: () => figure.offsetHeight * 0.2, zIndex: 6, ease: 'none' })
                        .to(figure, { scale: 0.5, y: () => figure.offsetHeight * 0.38, zIndex: 5, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.5, zIndex: 4, ease: 'none' })
                .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.6, zIndex: 3, ease: 'none' })
            .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.6, zIndex: 2, ease: 'none' })
        .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.6, zIndex: 1, ease: 'none'  });
  } else if (isMedium()) {
    // ANIMACIÓN PARA MEDIUM (768px - 1279px)
    timeline
      .fromTo(figure, 
        { scale: 0.40, y: () => -figure.offsetHeight * 0.72, zIndex: 1, ease: 'none' },
            { scale: 0.40, y: () => -figure.offsetHeight * 0.72, zIndex: 2, ease: 'none' }
      )
                .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.72, zIndex: 3, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.61, zIndex: 4, ease: 'none'})
                        .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.48, zIndex: 5, ease: 'none' })
                            .to(figure, { scale: 0.4, y: () => -figure.offsetHeight * 0.3, zIndex: 6, ease: 'none' }) // Ok
                                .to(figure, { scale: 0.55, y: () => -figure.offsetHeight * 0.2, zIndex: 7, ease: 'none' })
                                    .to(figure, { scale: 0.7, y: () => -figure.offsetHeight * 0.153, zIndex: 8, ease: 'none' }) // OK
                                        .to(figure, { scale: 0.85, y: () => -figure.offsetHeight * 0.1, zIndex: 9, ease: 'none' })
                                        
                                            .to(figure, { scale: 1, y: 0, zIndex: 10, ease: 'none' })  // Estado central (más grande y visible)
                                        
                                        .to(figure, { scale: 0.85, y: () => figure.offsetHeight * 0.1, zIndex: 9, ease: 'none' })
                                    .to(figure, { scale: 0.7, y: () => figure.offsetHeight * 0.153, zIndex: 8, ease: 'none' }) // OK
                                .to(figure, { scale: 0.55, y: () => figure.offsetHeight * 0.2, zIndex: 7, ease: 'none' })
                            .to(figure, { scale: 0.4, y: () => figure.offsetHeight * 0.3, zIndex: 6, ease: 'none' }) // Ok
                        .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.48, zIndex: 5, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.61, zIndex: 4, ease: 'none' })
                .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.72, zIndex: 3, ease: 'none' })
            .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.72, zIndex: 2, ease: 'none' })
        .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.72, zIndex: 1, ease: 'none'  });
  } else {
    // ANIMACIÓN PARA LARGE (>= 1280px)
    timeline
      .fromTo(figure, 
        { scale: 0.40, y: () => -figure.offsetHeight * 0.65, zIndex: 1, ease: 'none' },
            { scale: 0.40, y: () => -figure.offsetHeight * 0.65, zIndex: 2, ease: 'none' }
      )
                .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.65, zIndex: 3, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.487, zIndex: 4, ease: 'none' })
                        .to(figure, { scale: 0.40, y: () => -figure.offsetHeight * 0.313, zIndex: 5, ease: 'none' })
                            .to(figure, { scale: 0.4, y: () => -figure.offsetHeight * 0.276, zIndex: 6, ease: 'none' }) // Ok
                                .to(figure, { scale: 0.55, y: () => -figure.offsetHeight * 0.195, zIndex: 7, ease: 'none' })
                                    .to(figure, { scale: 0.7, y: () => -figure.offsetHeight * 0.178, zIndex: 8, ease: 'none' }) // OK
                                        .to(figure, { scale: 0.85, y: () => -figure.offsetHeight * 0.1, zIndex: 9, ease: 'none' })
                                        
                                            .to(figure, { scale: 1, y: 0, zIndex: 10, ease: 'none' })  // Estado central (más grande y visible)
                                        
                                        .to(figure, { scale: 0.85, y: () => figure.offsetHeight * 0.1, zIndex: 9, ease: 'none' })
                                    .to(figure, { scale: 0.7, y: () => figure.offsetHeight * 0.178, zIndex: 8, ease: 'none' }) // OK
                                .to(figure, { scale: 0.55, y: () => figure.offsetHeight * 0.195, zIndex: 7, ease: 'none' })
                            .to(figure, { scale: 0.4, y: () => figure.offsetHeight * 0.276, zIndex: 6, ease: 'none' }) // Ok
                        .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.313, zIndex: 5, ease: 'none' })
                    .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.487, zIndex: 4, ease: 'none' })
                .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.65, zIndex: 3, ease: 'none' })
            .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.65, zIndex: 2, ease: 'none' })
        .to(figure, { scale: 0.40, y: () => figure.offsetHeight * 0.65, zIndex: 1, ease: 'none' });
  }
}

// =============================================================================
// ANIMACIÓN DE CONTENIDO (TÍTULO, GALERÍA, TEXTO)
// =============================================================================

/**
 * Configura las animaciones cuando los elementos entran o salen de la vista
/**
 * Configura las animaciones cuando los elementos entran o salen de la vista
 */
function setupContentAnimations(item, title, galleryFigures, textContent) {
  const elementsWithFade = [];

  if (title) {
    elementsWithFade.push(title);
  }

  if (galleryFigures && galleryFigures.length) {
    elementsWithFade.push(...galleryFigures);
  }

  if (textContent) {
    elementsWithFade.push(textContent);
  }

  elementsWithFade.forEach(element => {
    gsap.set(element, { opacity: 0 });
  });

  const triggerConfig = getScrollTriggerConfig();
  ScrollTrigger.create({
    trigger: item,
    scroller: ".md-timeline2-list",
    start: triggerConfig.start,
    end: triggerConfig.end,
    
    onEnter: () => {
      item.setAttribute('aria-current', 'true');
      elementsWithFade.forEach((element, index) => {
        const delay = index * ANIMATION_CONFIG.staggerDelay;
        animateTextIn(element, delay);
      });
    },
    
    onLeave: () => {
      item.removeAttribute('aria-current');
      elementsWithFade.forEach(element => {
        animateTextOut(element);
      });
    },
    
    onEnterBack: () => {
      item.setAttribute('aria-current', 'true');
      const reversedFade = [...elementsWithFade].reverse();
      reversedFade.forEach((element, index) => {
        const delay = index * ANIMATION_CONFIG.staggerDelay;
        animateTextIn(element, delay);
      });
    },
    
    onLeaveBack: () => {
      item.removeAttribute('aria-current');
      elementsWithFade.forEach(element => {
        animateTextOut(element);
      });
    }
  });
}

// =============================================================================
// FUNCIÓN PRINCIPAL
// =============================================================================

/**
 * Calcula y asigna la variable CSS --md-timeline2-point-margin-top
 */
function setTimelineMarginVariable() {
  const timelineList = document.querySelector('.md-timeline2-list');
  const firstPoint = document.querySelector('.md-timeline2-point');
  
  if (timelineList && firstPoint) {
    const firstPointHeight = firstPoint.offsetHeight;
    const marginTopValue = firstPointHeight * -0.3;
    timelineList.style.setProperty('--md-timeline2-point-margin-top', `${marginTopValue}px`);
  }
}

/**
 * Inicializa todas las animaciones del timeline
 */
function initTimelineAnimations() {
  setTimelineMarginVariable();
  
  const timelineItems = gsap.utils.toArray('.md-timeline2-point');
  
  if (!timelineItems.length) return;
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  if (animationContext) {
    animationContext.revert();
  }
  
  animationContext = gsap.context(() => {
    timelineItems.forEach((item) => {
      const figure = item.querySelector('.md-timeline2-point-media');
      const title = item.querySelector('.md-timeline2-point-title');
      const galleryFigures = gsap.utils.toArray('.md-timeline2-point-content-gallery figure', item);
      const textContent = item.querySelector('.md-timeline2-point-content-text');
      
      if (!figure) return;
      
      createFigureAnimation(figure, item);
      setupContentAnimations(item, title, galleryFigures, textContent);
    });
  });
}

// =============================================================================
// INICIALIZACIÓN
// =============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
  initTimelineAnimations();
}

ScrollTrigger.config({ ignoreMobileResize: true });

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    setTimelineMarginVariable();
    initTimelineAnimations();
  }, 250);
});
