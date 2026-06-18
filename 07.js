let Numero = Number(prompt("Digite o número de termos que você deseja para aseqência de Fibonacci."));
console.log("0")
console.log("1")
Fibonacci(Numero);
function Fibonacci(Numero){
    let antes = 0
    let atual = 1
    for (i=Numero; i>0; i--){
    let proximo = antes + atual
    antes = atual
    atual = proximo
    console.log(atual)
    }

}
