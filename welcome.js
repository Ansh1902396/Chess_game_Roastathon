document.addEventListener('DOMContentLoaded', function () {
    const parallaxTitle = document.querySelector('.parallax-title');
    const parallaxContent = document.querySelector('.parallax-content');
    
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        parallaxTitle.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        parallaxTitle.style.opacity = 1 - scrollPosition / 600;
        parallaxContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        parallaxContent.style.opacity = 1 - scrollPosition / 600;
    });
});
