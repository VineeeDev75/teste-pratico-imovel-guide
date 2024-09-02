document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('tela-modal');
    const abrirModal = document.getElementById('botao-modal');
    const fecharModal = document.getElementById('fechar-modal');

    abrirModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});