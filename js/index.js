const toTop = document.querySelector('.to__top');
function toggleMenu() {
  const nav = document.querySelector('.nav');
  const burgerMenu = document.querySelector('.burger__menu');
  const body = document.body;

  nav.classList.toggle('active');
  burgerMenu.classList.toggle('active');

  if (nav.classList.contains('active')) {
    body.classList.add('no__scroll'); 
    nav.scrollTop = 0; 
  } else {
    body.classList.remove('no__scroll');
  }


  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      nav.scrollTop = 0;
    }
  });
}

let currentIndex = 0;

function moveCarousel(direction) {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }


  const newTransformValue = -100 * currentIndex;
  document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  document.querySelector('.carousel').style.transform = `translateX(0%)`;
});



toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

function openNewPage() {
  window.location.href = 'info.html';
}










