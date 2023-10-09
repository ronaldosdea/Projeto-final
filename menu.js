function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#menu');

    menu.classList.toggle('active');
}

// Adicione um ouvinte de eventos para exibir/ocultar o menu responsivo quando o ícone do menu for clicado
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
