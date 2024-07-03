function gerarCpf() {
    const num1 = aleatorio();
    const num2 = aleatorio();
    const num3 = aleatorio();
    const dig1 = digitoVerificador(num1, num2, num3);
    const dig2 = digitoVerificador(num1, num2, num3, dig1);

    const cpfFormatado = `${num1}.${num2}.${num3}-${dig1}${dig2}`;
    document.getElementById("cpf").value = cpfFormatado;
}

function aleatorio() {
    return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
}

function digitoVerificador(n1, n2, n3, n4 = "") {
    const nums = (n1 + n2 + n3 + n4).split("").map(Number);
    const peso = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const soma = nums.reduce((acc, num, index) => acc + num * peso[index], 0);
    const resto = soma % 11;
    const digito = resto < 2 ? 0 : 11 - resto;
    return String(digito);
}