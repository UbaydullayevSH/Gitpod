const faqItems = document.querySelectorAll('.faq div');
let currentIndex = [0, 0, 0, 0];
let carouselCount = 4;

function showSlide(index, carouselIndex) {
  let images = document.querySelectorAll(`#carousel${carouselIndex} .carousel__images img`);
  let dots = document.querySelectorAll(`#carousel${carouselIndex} .dot`);

  if (index >= images.length) {
    currentIndex[carouselIndex - 1] = 0;
  } else if (index < 0) {
    currentIndex[carouselIndex - 1] = images.length - 1;
  } else {
    currentIndex[carouselIndex - 1] = index;
  }

  images.forEach((img, i) => {
    img.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === currentIndex[carouselIndex - 1]) {
      img.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  for (let i = 1; i <= carouselCount; i++) {
    currentIndex[i - 1]++;
    showSlide(currentIndex[i - 1], i);
  }
}

function currentSlide(index, carouselIndex) {
  showSlide(index - 1, carouselIndex);
}

setInterval(nextSlide, 5000);

for (let i = 1; i <= carouselCount; i++) {
  showSlide(currentIndex[i - 1], i);
}

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
