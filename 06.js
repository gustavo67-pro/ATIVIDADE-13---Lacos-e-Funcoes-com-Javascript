let numero = prompt("Digite um número inteiro positivo:");

function calcularFatorial() {

    let resultado = 1;
    for (i = numero; i > 1; i--) {
        resultado = resultado * i;
    }

    return `O fatorial de ${numero} é ${resultado}`;
}

console.log(calcularFatorial());
