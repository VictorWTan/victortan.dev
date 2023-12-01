let body = document.body
let html = document.documentElement
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const arrowDisappear = () => {
    let button = document.getElementsByClassName('button-container')[0]
    let scrollTop = html.scrollTop
    button.style.opacity = 1 - (scrollTop / button.offsetHeight / 3)
    // console.log(`${button.style.opacity}, ${button.offsetHeight}, ${html.scrollTop}`)
}

const experienceAppear = () => {
    let experience = document.getElementsByClassName('experience')
    let scrollTop = html.scrollTop
    // experience.style.opacity = 0 + ( scrollTop / experience.offsetHeight)
    // console.log(`${experience.style.opacity}, ${experience.offsetHeight}, ${html.scrollTop}`)
}

const fadeInAndOut = () => {
    arrowDisappear()
    experienceAppear()
}

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});



window.addEventListener('scroll', fadeInAndOut)

const hamburgerInput = document.getElementById('checks');

hamburgerInput.addEventListener('change', () => {
    console.log('Event fired')
    if (hamburgerInput.checked) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
})

//GH Pages not working