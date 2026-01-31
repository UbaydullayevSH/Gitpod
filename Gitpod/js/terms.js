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