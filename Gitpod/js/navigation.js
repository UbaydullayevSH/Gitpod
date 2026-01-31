
document.getElementById('start__button').addEventListener('click', function() {
    const newSection = document.getElementById('new__section');
    newSection.style.display = 'block';
    setTimeout(() => {
        newSection.style.opacity = '1';
    }, 10);
});

function toggleMenu() {
    const body = document.querySelector('body');
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
  

window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer__content');
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (footerPosition < screenPosition) {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }
});

