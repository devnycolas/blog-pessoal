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

document.addEventListener("DOMContentLoaded", function () {

    var image = document.querySelector('.projetos-image');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar-menu');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
    var links = document.querySelectorAll('.text-ul-sidebar a');

    window.addEventListener('scroll', function() {
        // Altura do contêiner
        var containerHeight = document.querySelector('.container-projetos').offsetHeight;
        
        // Posição atual do scroll
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

    function openSidebar() {
        sidebar.style.width = '600px';
        document.documentElement.style.overflow = 'hidden';
    }
    
    function closeSidebar() {
        sidebar.style.width = '0';
        document.documentElement.style.overflow = 'auto';
    }
    
    hamburgerBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = 120;
                var targetPosition = targetElement.offsetTop - offset;

                // Animação suave usando JavaScript
                scrollToSmooth(targetPosition);

                // Fechar o sidebar após clicar em um link
                closeSidebar();
            }
        });
    });

    function scrollToSmooth(targetPosition) {
        var startPosition = window.scrollY || document.documentElement.scrollTop;
        var distance = targetPosition - startPosition;
        var startTime;
        var duration = 800; //Milisegundos

        function animate(currentTime) {
            if (startTime === undefined) startTime = currentTime;
            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);
            var easeInOutCubic = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeInOutCubic);

            if (elapsedTime < duration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

});
