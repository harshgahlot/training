document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const totalWidth = Array.from(images).reduce((acc, img) => acc + img.clientWidth, 0);

    // Clone images to create an infinite loop effect
    images.forEach(img => {
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Adjust the animation duration based on the total width
    const animationDuration = totalWidth / 100; // Adjust speed as needed
    carousel.style.animationDuration = `${animationDuration}s`;
});
