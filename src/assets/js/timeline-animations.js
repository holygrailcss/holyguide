gsap.registerPlugin(ScrollTrigger);

const initTimelineAnimations = () => {
  const items = gsap.utils.toArray('.md-timeline2-point');
  
  if (!items.length) return;

  items.forEach((item) => {
    const figure = item.querySelector('.md-timeline2-point-media-figure');
    const title = item.querySelector('.md-timeline2-point-title');
    const content = item.querySelector('.md-timeline2-point-content');
    
    if (!figure) {
      return;
    }

    const figureHeight = figure.offsetHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "center bottom+=50%",
        end: "center top-=50%",
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
    
    tl.fromTo(figure, {
      ease: "none",
      scale: 0.5,
      y: -figureHeight * 0.5,
    },{
      ease: "none",
      scale: 0.75,
      y: -figureHeight * 0.13,
    })
    .to(figure,{
      ease: "none",
      scale: 1,
      y: 0,
    })
    .to(figure,{
      ease: "none",
      scale: 0.75,
      y: figureHeight * 0.13,
    })
    .to(figure,{
      ease: "none",
      scale: 0.5,
      y: figureHeight * 0.5,
    })

    if (title) {
      gsap.set(title, { autoAlpha: 0 });
      
      ScrollTrigger.create({
        trigger: item,
        start: "bottom bottom",
        end: "top top",
        onEnter: () => gsap.set(title, { autoAlpha: 1 }),
        onLeave: () => gsap.set(title, { autoAlpha: 0 }),
        onEnterBack: () => gsap.set(title, { autoAlpha: 1 }),
        onLeaveBack: () => gsap.set(title, { autoAlpha: 0 }),
      });
    }

    if (content) {
      gsap.set(content, { autoAlpha: 0 });
      
      ScrollTrigger.create({
        trigger: item,
        start: "bottom bottom",
        end: "top top",
        onEnter: () => gsap.set(content, { autoAlpha: 1 }),
        onLeave: () => gsap.set(content, { autoAlpha: 0 }),
        onEnterBack: () => gsap.set(content, { autoAlpha: 1 }),
        onLeaveBack: () => gsap.set(content, { autoAlpha: 0 }),
      });
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimelineAnimations);
} else {
  initTimelineAnimations();
}
