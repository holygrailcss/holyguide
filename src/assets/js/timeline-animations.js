gsap.registerPlugin(ScrollTrigger);

const initTimelineAnimations = () => {
  const items = gsap.utils.toArray('.md-timeline2-item');
  
  if (!items.length) return;

  items.forEach((item) => {
    const figure = item.querySelector('.md-timeline2-point');
    
    if (!figure) {
      return;
    }

    const figureHeight = figure.offsetHeight;
    const offset = figureHeight * .77;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "center bottom+=70%",
        end: "center top-=70%",
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
    
    tl.fromTo(figure, {
      scale: 0.5,
      y: -offset * 0.72,
      ease: "none",
    },
            {
              scale: 0.6666,
              y: -offset * 0.35,
              ease: "none",
            })
                    .to(figure,{
                      scale: 0.8,
                      y: -offset * 0.14,
                      ease: "none",
                    })
                            .to(figure,{
                              scale: 0.9,
                              y: -offset * 0.07,
                              ease: "none",
                            })
                                    .to(figure, {
                                      scale: 1,
                                      y: 0, // 0 ----------------
                                      ease: "none",
                                    })
                            .to(figure, {
                              scale: 0.9,
                              y: offset * 0.07,
                              ease: "none",
                            })
                    .to(figure, {
                      scale: 0.8,
                      y: offset * 0.13,
                      ease: "none",
                    })
            .to(figure, {
              scale: 0.6666,
              y: offset * 0.35,
              ease: "none",
            })
    .to(figure, {
      scale: 0.5,
      y: offset * 0.72,
      ease: "none",
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
  initTimelineAnimations();
}

