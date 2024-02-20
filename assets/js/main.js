AOS.init({ duration: 700, offset: 100,easing: 'ease-in-out', once: false});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scrollTop', `${document.documentElement.scrollTop}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});