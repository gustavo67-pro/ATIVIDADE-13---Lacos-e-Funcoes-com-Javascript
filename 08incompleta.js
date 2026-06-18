for (numero = 1; numero!==0; numero){
     let numero = Number(prompt("Digite um numero para ver qual é o maior e qual o menor digitado."))
     maiormenor(numero);

}
console.log("O maior numero digitado foi "+maior+" e o menor digitado foi "+menor)

function maiormenor(numero){
    maior = 0
    menor = 0
    if (numero>maior){
        maior = numero
    } else if (numero<menor && numero !== 0 ){
        menor = numero
    }
    return maior, menor
}

