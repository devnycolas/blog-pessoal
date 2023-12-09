window.addEventListener('scroll', function () {
    const navContainer = document.querySelector('.nav-container');
    const scrollTop = window.scrollY;

    if (scrollTop > 10) {
        navContainer.style.backgroundColor = 'rgba(15, 2, 17, 0.5)';
        navContainer.style.boxShadow = '0 2px 10px rgba(92, 22, 101, 0.8)';
    } else {
        navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        navContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.8)';
    }
});