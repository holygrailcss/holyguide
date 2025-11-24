gsap.registerPlugin(ScrollTrigger);

const initTimelineAnimations = () => {
  const items = gsap.utils.toArray('.md-timeline2-item');
  
  if (!items.length) return;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onLeave: (self) => {
      self.scroll(1);
      ScrollTrigger.update();
    },
    onLeaveBack: (self) => {
      self.scroll(ScrollTrigger.maxScroll(window) - 1);
      ScrollTrigger.update();
    }
  });

  items.forEach((item) => {
    const figure = item.querySelector('.md-timeline2-point-media-figure');
    
    if (!figure) return;

    gsap.fromTo(figure,
      { scale: 0.5 },
      {
        scale: 1,
        repeat: 1,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "center bottom",
          end: "center top",
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
  initTimelineAnimations();
}

