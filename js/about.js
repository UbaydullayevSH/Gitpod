
const toTop = document.querySelector('.to__top');
const features = document.querySelectorAll('.features div');
const clientsSection = document.querySelector('.clients');
const faqItems = document.querySelectorAll('.faq div');
const subscribeForm = document.getElementById('subscribe__form');
const emailInput = document.getElementById('email__input');
const subscribeMessage = document.getElementById('subscribe__message');
const errorMessage = document.getElementById('error__message');
const btns = document.querySelector('.bag__btn');
const body = document.querySelector('body');

function toggleMenu() {
    const nav = document.querySelector('.nav');
    const burgerMenu = document.querySelector('.burger__menu');
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  
    if (nav.classList.contains('active')) {
      body.classList.add('no__scroll');
    } else {
      body.classList.remove('no__scroll');
    }
  }
  


window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;

        if (featureTop < triggerBottom) {
            feature.classList.add('show');
        }
    });

    const clientsTop = clientsSection.getBoundingClientRect().top;

    if (clientsTop < triggerBottom) {
        clientsSection.classList.add('show');
    }
});


faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});



emailInput.addEventListener('input', () => {
    subscribeMessage.style.display = 'none';
    errorMessage.style.display = 'none'; 
});

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();


    if (emailInput.checkValidity()) {
        subscribeMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'block';
        subscribeMessage.style.display = 'none';
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


document.addEventListener('scroll', function() {
    const section = document.querySelector('.features');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    }
});
