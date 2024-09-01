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

document.addEventListener('DOMContentLoaded', () => {
    const valorCPF = document.getElementById('cpf');

    valorCPF.addEventListener('input', () => {
        let valor = valorCPF.value;

        valor = valor.replace(/\D/g, '');

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length > 11) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } 

        if (valor.length > 9) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } else if (valor.length > 6) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (valor.length > 3) {
            valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }

        valorCPF.value = valor;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const valorTelefone = document.getElementById('telefone');

    valorTelefone.addEventListener('input', () => {
        let valor = valorTelefone.value.replace(/\D/g, '');
        
        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length > 7) {
            valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        } else if (valor.length > 2) {
            valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }

        valorTelefone.value = valor;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const valorTelefone = document.getElementById('telefone');
    const valorCPF = document.getElementById('cpf')
    const textArea = document.getElementById('area-texto')
    const alerta = document.getElementById('botao-alerta');
    alerta.addEventListener('click', () => {
        if(valorTelefone.value === "" || valorCPF.value === "" || textArea.value === "") {
            alert('Algum dos campos não foi preenchido.');
        }
        else {
            alert('Sua mensagem foi enviada com sucesso!');
}});
});


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

document.getElementById('download').addEventListener('click', function() {
    html2canvas(document.getElementById('secao-download'), { useCORS: true }).then(canvas => {
        const linkDownload = document.cretaeElement('a');
        linkDownload.href = canvas.toDataURL('image/png');
        linkDownload.download = 'imagem-casa.png';
        linkDownload.click();
    });
});

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