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

document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector('.projetos-image');

    window.addEventListener('scroll', function() {
        // Altura do contêiner
        var containerHeight = document.querySelector('.container-projetos').offsetHeight;
        
        // Posição atual do rolo
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Opacidade máxima
        var maxOpacity = 1;

        // Calcula a opacidade com base na posição de rolagem
        var opacity = scrollPosition / containerHeight;

        // Limita a opacidade ao intervalo [0, 1]
        opacity = Math.max(0, Math.min(opacity, maxOpacity));

        // Aplica a opacidade à imagem
        image.style.opacity = opacity;
    });
});

