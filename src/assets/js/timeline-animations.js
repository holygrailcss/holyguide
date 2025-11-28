gsap.registerPlugin(ScrollTrigger);

const initTimelineAnimations = () => {
  const items = gsap.utils.toArray('.md-timeline2-point');
  
  if (!items.length) return;

  items.forEach((item) => {
    const figure = item.querySelector('.md-timeline2-point-media-figure');
    
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
        onEnter: (self) => {
          const distance = self.end - self.start;
          console.log('Distancia total de scroll:', distance, 'px');
        }
      }
    });
    
    tl.fromTo(figure, {
      scale: 0.5,
      y: -offset * 0.9,
      borderLeft: "solid 1px black",
      ease: "none",
    },
            {
              scale: 0.6666,
              y: -offset * 0.40,
              ease: "none",
              borderLeft: "solid 10px red",
            })
                    .to(figure,{
                      scale: 0.8,
                      y: -offset * 0.15,
                      ease: "none",
                      borderLeft: "solid 1px blue",
                    })
                            .to(figure,{
                              scale: 0.9,
                              y: -offset * 0.06,
                              ease: "none",
                              borderLeft: "solid 10px green",
                            })
                                    .to(figure, {
                                      scale: 1,
                                      y: 0, // 0 ----------------
                                      ease: "none",
                                      borderLeft: "solid 1px orange",
                                    })
                            .to(figure, {
                              scale: 0.9,
                              y: offset * 0.06,
                              ease: "none",
                              borderLeft: "solid 10px green",
                            })
                    .to(figure, {
                      scale: 0.8,
                      y: offset * 0.15,
                      ease: "none",
                      borderLeft: "solid 1px blue",
                    })
            .to(figure, {
              scale: 0.6666,
              y: offset * 0.40,
              ease: "none",
              borderLeft: "solid 10px red",
            })
    .to(figure, {
      scale: 0.5,
      y: offset * 0.9,
      borderLeft: "solid 1px black",
      ease: "none",
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
  initTimelineAnimations();
}

