// Pegando os links do menu
const menu = document.querySelectorAll('nav a');

menu.forEach(link => {   
    link.addEventListener('click', evento => {
        const href = link.getAttribute('href');

        // Verifica se o href é um link interno (que começa com #)
        if (href.startsWith('#')) {
            evento.preventDefault(); // Evita o comportamento padrão de navegação
            const alvo = document.querySelector(href);

            // Rolando a página até o id alvo
            if (alvo) {
                window.scroll({
                    top: alvo.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }
        // Caso contrário, permite a navegação normal
    });
});

// Evento de Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        menu.forEach( m =>{
            m.classList.add('shrink');
        });
    } else {
        menu.forEach( m =>{
            m.classList.remove('shrink');
        });
    }
});

