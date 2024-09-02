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
        }
    });
});