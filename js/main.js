$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      autoplay: true,  
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      navRewind: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  })

  AOS.init({
    duration: 2000,
    easing: "ease-in-out-back"
  });


var arrow = document.querySelector('.scroll-arrow');
window.addEventListener('scroll', function(){
    var position = window.scrollY > 100;
    arrow.classList.toggle('active', position);
});

