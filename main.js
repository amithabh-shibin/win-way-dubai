
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
});
    const toggleButton = document.getElementById('nav-toggle');
    const navLInks = document.getElementById('nav-links');
    const chemicalbannerimg = document.getElementById('chemical-banner-img');
    toggleButton.addEventListener('click',() =>{
        navLInks.classList.toggle('active');
    } );

    $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, 
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });
});















  


