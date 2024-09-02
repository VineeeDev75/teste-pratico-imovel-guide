document.getElementById('menu-hamburguer').addEventListener('click', () => {
    const menu = document.getElementById('itens-menu');
    if (menu.classList.contains('fechado')) {
        menu.classList.remove('fechado')
        menu.classList.add('aberto')
        document.getElementById('menu-hamburguer').src = "imagens/menu-icon-fechar.png"
    } else if (menu.classList.contains('aberto')) {
        menu.classList.remove('aberto')
        menu.classList.add('fechado')
        document.getElementById('menu-hamburguer').src = "imagens/menu-icon.png"
    } 
});