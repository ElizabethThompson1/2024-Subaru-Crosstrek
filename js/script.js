$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 500);
    });

    // Dynamically load images from 7.png to 41.png
    const imageContainer = document.querySelector('.image-fade-container');
    const slider = document.getElementById('image-slider');
    let currentIndex = 7;

    // Dynamically create img elements and add them to the container
    for (let i = 7; i <= 41; i++) {
        const img = document.createElement('img');
        img.src = `images/car/${i}.png`;
        img.alt = `Car Angle ${i - 6}`;
        img.classList.add('header-image');
        if (i === 7) img.classList.add('active');
        imageContainer.appendChild(img);
    }

    const images = document.querySelectorAll('.header-image');

    // Function to change images based on slider input
    slider.addEventListener('input', function () {
        const newIndex = parseInt(this.value, 10) - 7;
        images[currentIndex - 7].classList.remove('active');
        images[newIndex].classList.add('active');
        currentIndex = newIndex + 7;
    });


    const carImage = document.getElementById('car-image');
    const colorSwatches = document.querySelectorAll('.color-selector ul li');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            // Remove active class from all swatches
            colorSwatches.forEach(s => s.classList.remove('active'));

            // Add active class to the clicked swatch
            this.classList.add('active');

            // Get the selected color from data attribute and update the car image
            const selectedColor = this.getAttribute('data-color');
            carImage.src = `images/colors/${selectedColor}.png`;

            // Add animation for smooth transition
            carImage.style.opacity = 0;
            setTimeout(() => {
                carImage.style.opacity = 1;
            }, 200);
        });
    });

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    $('.trim-item').hover(
        function () {
            $(this).find('.trim-overlay').stop().fadeIn(300);
        },
        function () {
            $(this).find('.trim-overlay').stop().fadeOut(300);
        }
    );

});
