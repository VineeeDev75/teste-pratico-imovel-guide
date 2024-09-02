document.addEventListener('DOMContentLoaded', () => {
    const valorUm = document.getElementById('regra-um');
    const valorDois = document.getElementById('regra-dois');
    const valorTres = document.getElementById('regra-tres');
    const valorQuatro = document.getElementById('regra-quatro');
    const calcular = document.getElementById('botao-regra');

    calcular.addEventListener('click', () => {
        valorQuatro.value = ((valorTres.value * valorDois.value) / valorUm.value).toFixed(2);
    });

    document.getElementById('regra').addEventListener('submit', function(evento) {
        evento.preventDefault();
    });

});