


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
    autoplayTimeout: 5000, // Change slide every 5 seconds
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });
});



  
// Change slide every 5 seconds


    document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');

    const loadImage = (img) => {
        const src = img.getAttribute('data-src');
        if (!src) return;
        img.src = src;
    };

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px"
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });
});

// Change slide every 5 seconds

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-full');
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});





// Change slide every 5 seconds




  


