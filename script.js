

const timeLine = gsap.timeline( {defaults: {duration: 1}})
timeLine.from('.header',{ y: -100, ease: 'bounce'})
.from('.link',{duration:1,opacity:0 , delay:1 ,stagger:0.3})
.from('.right', { x:'-100vw', ease:'ease'})
.from('.left', { delay:1, x:'100%', ease:'ease'})
.from('.footer', { delay:1, y:'100%', ease:'elastic'})
.fromTo('.btn', { delay:1, opacity:0, scale:0, ease:'elastic', rotate:720},{
    duration:1, delay:1, opacity:1, scale:1,rotate:0
})


const btn = document.querySelector('.btn').addEventListener('click', ()=>{
    timeLine.timeScale(4)
    timeLine.reverse()
})
