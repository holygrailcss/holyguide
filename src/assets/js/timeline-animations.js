gsap.registerPlugin(ScrollTrigger);

const ANIMATION_CONFIG = {
  CONTENT: {
    duration: 0.250,
    staggerDelay: 0.1,
    easeIn: 'power2.in',
    easeOut: 'power2.out'
  }
};

let ctx;

const initTimelineAnimations = () => {
  const items = gsap.utils.toArray('.md-timeline2-point');
  
  if (!items.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (ctx) {
    ctx.revert();
  }

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    ctx = gsap.context(() => {
      items.forEach((item) => {
        const figure = item.querySelector('.md-timeline2-point-media-figure');
        const title = item.querySelector('.md-timeline2-point-title');
        const galleryFigures = gsap.utils.toArray('.md-timeline2-point-content-gallery figure', item);
        const textContent = item.querySelector('.md-timeline2-point-content-text');
        
        const contentElements = [title, ...galleryFigures].filter(Boolean);
        
        contentElements.forEach(element => {
          gsap.set(element, { y: "20dvh", opacity: 0 });
        });
        
        if (textContent) {
          gsap.set(textContent, { opacity: 0 });
        }
        
        if (!figure) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "center bottom+=100%",
            end: "center top-=100%",
            scrub: true,
            invalidateOnRefresh: true,
          }
        });
        
        tl.fromTo(figure, {
          scale: 0.5,
          y: () => -figure.offsetHeight * 0.35,
          zIndex: 0,
        }, {
          scale: 0.625,
          y: () => -figure.offsetHeight * 0.27,
          zIndex: 0,
        })
        .to(figure, {
          scale: 0.75,
          y: () => -figure.offsetHeight * 0.125,
          zIndex: 0,
        })
        .to(figure, {
          scale: 0.875,
          y: () => -figure.offsetHeight * 0.063,
          zIndex: 1,
        })
        .to(figure, {
          scale: 1,
          y: 0,
          zIndex: 2,
        })
        .to(figure, {
          scale: 0.875,
          y: () => figure.offsetHeight * 0.063,
          zIndex: 1,
        })
        .to(figure, {
          scale: 0.75,
          y: () => figure.offsetHeight * 0.125,
          zIndex: 0,
        })
        .to(figure, {
          scale: 0.625,
          y: () => figure.offsetHeight * 0.27,
          zIndex: 0,
        })
        .to(figure, {
          scale: 0.5,
          y: () => figure.offsetHeight * 0.35,
          zIndex: 0,
        });

        ScrollTrigger.create({
          trigger: item,
          start: "center bottom-=9%",
          end: "center top+=9%",
          onEnter: () => {
            item.setAttribute('aria-current', 'true');
            contentElements.forEach((element, index) => {
              gsap.killTweensOf(element);
              gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: ANIMATION_CONFIG.CONTENT.duration,
                ease: ANIMATION_CONFIG.CONTENT.easeOut,
                delay: index * ANIMATION_CONFIG.CONTENT.staggerDelay
              });
            });
            if (textContent) {
              gsap.killTweensOf(textContent);
              gsap.to(textContent, {
                opacity: 1,
                duration: ANIMATION_CONFIG.CONTENT.duration,
                ease: ANIMATION_CONFIG.CONTENT.easeOut,
                delay: contentElements.length * ANIMATION_CONFIG.CONTENT.staggerDelay
              });
            }
          },
          onLeave: () => {
            item.removeAttribute('aria-current');
            contentElements.forEach(element => {
              gsap.killTweensOf(element);
              gsap.to(element, { 
                y: "-20dvh", 
                opacity: 0, 
                duration: ANIMATION_CONFIG.CONTENT.duration, 
                ease: ANIMATION_CONFIG.CONTENT.easeIn 
              });
            });
            if (textContent) {
              gsap.killTweensOf(textContent);
              gsap.to(textContent, { 
                opacity: 0, 
                duration: ANIMATION_CONFIG.CONTENT.duration, 
                ease: ANIMATION_CONFIG.CONTENT.easeIn 
              });
            }
          },
          onEnterBack: () => {
            item.setAttribute('aria-current', 'true');
            const reversedElements = [...contentElements].reverse();
            reversedElements.forEach((element, index) => {
              gsap.killTweensOf(element);
              gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: ANIMATION_CONFIG.CONTENT.duration,
                ease: ANIMATION_CONFIG.CONTENT.easeOut,
                delay: index * ANIMATION_CONFIG.CONTENT.staggerDelay
              });
            });
            if (textContent) {
              gsap.killTweensOf(textContent);
              gsap.to(textContent, {
                opacity: 1,
                duration: ANIMATION_CONFIG.CONTENT.duration,
                ease: ANIMATION_CONFIG.CONTENT.easeOut,
                delay: contentElements.length * ANIMATION_CONFIG.CONTENT.staggerDelay
              });
            }
          },
          onLeaveBack: () => {
            item.removeAttribute('aria-current');
            const reversedElements = [...contentElements].reverse();
            reversedElements.forEach(element => {
              gsap.killTweensOf(element);
              gsap.to(element, { 
                y: "20dvh", 
                opacity: 0, 
                duration: ANIMATION_CONFIG.CONTENT.duration, 
                ease: ANIMATION_CONFIG.CONTENT.easeIn 
              });
            });
            if (textContent) {
              gsap.killTweensOf(textContent);
              gsap.to(textContent, { 
                opacity: 0, 
                duration: ANIMATION_CONFIG.CONTENT.duration, 
                ease: ANIMATION_CONFIG.CONTENT.easeIn 
              });
            }
          }
        });
      });
    });
  });

  mm.add("(max-width: 767px)", () => {
    items.forEach((item) => {
      const figure = item.querySelector('.md-timeline2-point-media-figure');
      const title = item.querySelector('.md-timeline2-point-title');
      const galleryFigures = gsap.utils.toArray('.md-timeline2-point-content-gallery figure', item);
      const textContent = item.querySelector('.md-timeline2-point-content-text');
      
      if (figure) gsap.set(figure, { clearProps: "all" });
      if (title) gsap.set(title, { clearProps: "all" });
      galleryFigures.forEach(fig => gsap.set(fig, { clearProps: "all" }));
      if (textContent) gsap.set(textContent, { clearProps: "all" });
    });
  });
};

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
    initTimelineAnimations();
  }, 250);
});
