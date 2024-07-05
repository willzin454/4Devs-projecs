function gerarCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }

    cpf += calcularDigito(cpf);
    cpf += calcularDigito(cpf);

    document.getElementById("cpfGerado").innerText = formatarCPF(cpf);
}

function calcularDigito(cpf) {
    let soma = 0;
    let peso = cpf.length + 1;

    for (let i = 0; i < cpf.length; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }

    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function formatarCPF(cpf) {
    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
}