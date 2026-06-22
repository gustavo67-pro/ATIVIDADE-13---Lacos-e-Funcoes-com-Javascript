let numero = Number(prompt("Digite um numero para ver qual é o maior e qual o menor digitado."))
while (numero != 0){
     let numero = Number(prompt("Digite um numero para ver qual é o maior e qual o menor digitado."))
     maiormenor(numero);

}
maiorr = maiormenor(numero);
menorr = maiormenor(numero);
console.log("O maior numero digitado foi "+maiorr+" e o menor digitado foi "+menorr)

function maiormenor(numero){
    maior = 0
    menor = 0
    if (numero>maior){
        maior = numero
    } else if (numero<menor && numero !== 0 ){
        menor = numero
    }
    return maior
    return menor
}
