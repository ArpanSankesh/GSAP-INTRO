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
    scale:1,
    stagger:1
})

tl.from('h5',{
    y:150,
    duration:0.5,
    opacity:0
})
tl.to('h5',{
    y:20,
    duration:1,
    yoyo:true,
    repeat:-1
})
tl.from('.sec-2 h3',{
    y:100,
    opacity:0.5,
    scrollTrigger:{
        trigger:'.sec-2 h3 ',
        scroller:'body',
        // markers:true,
        scrub:2,
    }
})

