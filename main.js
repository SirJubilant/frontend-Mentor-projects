let menu = document.querySelector('#menu__bar');
let navbar = document.querySelector('.header__links');



menu.addEventListener("click", () => {
    navbar.classList.toggle('active');
});

window.onscroll = ()=> {
    navbar.classList.remove('active');
}

///Animations

const timeline = gsap.timeline({ defaults: { duration: 1}} );
timeline
.from ('.header', { x: '-100%', duration: 1.5, ease:'power2'})
.from('.header__nav-item', {opacity:0, y: '-100%', stagger: .3},'<.2')
.from('.header__text', { opacity: 0, duration: 2, skewX: -10, skewY: 10 }, '<.2')
.to('.flex__content', { opacity: 1, ease:'bounce'}, '<.2' )
.to('.flex__image', { opacity: 1}, '>.1')



//scroll trigger

let tl = gsap.timeline ({
    scrollTrigger: {
        trigger: '.design__section',
        start: 'top center', 
        scrub: 1
        
    }
});

tl.from('.design', { opacity: 0, x: '-100%', stagger: '.3', ease:"elastic"})
.from('.design__content', { opacity:0, y:'200',  ease: "bounce" })
.to('.testimonial', { opacity:1, y:'0',  ease: 'circ'}, '-=2')
.from('.testimonial__content', { opacity:0, x:'-100vw', ease: 'circ', stagger: '.4'})
.from('.image__gallery', { opacity: 0, y: '200', skewY: 20, skewX: -20 })