gsap.registerPlugin(ScrollTrigger);

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

  ctx = gsap.context(() => {
    items.forEach((item) => {
      const figure = item.querySelector('.md-timeline2-point-media-figure');
      const title = item.querySelector('.md-timeline2-point-title');
      const content = item.querySelector('.md-timeline2-point-content');
      
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
        ease: 'none',
        y: () => -figure.offsetHeight * 0.35,
      }, {
        scale: 0.625,
        ease: 'none',
        y: () => -figure.offsetHeight * 0.27,
      })
      .to(figure, {
        scale: 0.75,
        ease: 'none',
        y: () => -figure.offsetHeight * 0.125,
      })
      .to(figure, {
        scale: 0.875,
        ease: 'none',
        y: () => -figure.offsetHeight * 0.068,
      })
      .to(figure, {
        scale: 1,
        ease: 'none',
        y: 0,
      })
      .to(figure, {
        scale: 0.875,
        ease: 'none',
        y: () => figure.offsetHeight * 0.068,
      })
      .to(figure, {
        scale: 0.75,
        ease: 'none',
        y: () => figure.offsetHeight * 0.125,
      })
      .to(figure, {
        scale: 0.625,
        ease: 'none',
        y: () => figure.offsetHeight * 0.27,
      })
      .to(figure, {
        scale: 0.5,
        ease: 'none',
        y: () => figure.offsetHeight * 0.35,
      });

      const toggleVisibility = (element, visible, setCurrent = false) => {
        gsap.set(element, { autoAlpha: visible ? 1 : 0 });
        if (setCurrent) {
          visible ? item.setAttribute('aria-current', 'true') : item.removeAttribute('aria-current');
        }
      };

      if (title) {
        gsap.set(title, { autoAlpha: 0 });
        
        ScrollTrigger.create({
          trigger: item,
          start: "center bottom-=11%",
          end: "center top+=11%",
          onEnter: () => toggleVisibility(title, true, true),
          onLeave: () => toggleVisibility(title, false, true),
          onEnterBack: () => toggleVisibility(title, true, true),
          onLeaveBack: () => toggleVisibility(title, false, true),
        });
      }

      if (content) {
        gsap.set(content, { autoAlpha: 0 });
        
        ScrollTrigger.create({
          trigger: item,
          start: "center bottom-=9%",
          end: "center top+=9%",
          onEnter: () => toggleVisibility(content, true),
          onLeave: () => toggleVisibility(content, false),
          onEnterBack: () => toggleVisibility(content, true),
          onLeaveBack: () => toggleVisibility(content, false),
        });
      }
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
