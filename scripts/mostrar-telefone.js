function mudarParaTelefone(evento) {
    const elementoTexto = evento.target;
    const verTelefone = elementoTexto.innerHTML === elementoTexto.getAttribute('texto-original');
    elementoTexto.innerHTML = verTelefone ? elementoTexto.getAttribute('texto-telefone') : elementoTexto.getAttribute('texto-original');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.telefone').forEach(element => {
        element.addEventListener('click', mudarParaTelefone);
    });
});