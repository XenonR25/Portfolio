

//Typing Effect
  
var typingEffect = new Typed(".typedText",{
    strings:["Software Engineer","Learner","Gamer"],
    loop: true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000
})

// Scroll animation
// Home
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:2000,
    reset:true
})
sr.reveal('.TEXT_CARD',{})
sr.reveal('.NAME',{delay:100})
sr.reveal('.textinfo',{delay:200})
sr.reveal('.text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured_image',{delay:300})



// Project
sr.reveal('.pbox',{interval:200})

// headings
// sr.reveal('.top',{})

// ABOUT & CONTACT
const srLeft= ScrollReveal({
    origin:'left',
    distance: '80px',
    duration:2000,
    reset:true
})

srLeft.reveal('.about',{delay:100})
srLeft.reveal('.contact-info',{delay:100})

// SKILLS AND FORM BOX
const srRight = ScrollReveal({
    origin: 'right',
    distance:'80px',
    duration: 2000,
    reset:true
})
srRight.reveal('.skills',{delay:100})
srRight.reveal('.form_control',{delay:100})