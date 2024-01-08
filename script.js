const tl = gsap.timeline();
tl.from(".logo, .nav-buttons button, .nav-items h3", {
  y: -100,
  duration: 0.5,
  delay: 0.2,
  opacity:0,
  stagger:0.2,
  ease:'Power2.out'
});

tl.from('.hero h1',{
    y:100,
    duration:0.5,
    opacity:0
})

tl.from('.hero img',{
    opacity:0,
    scale:0
})


