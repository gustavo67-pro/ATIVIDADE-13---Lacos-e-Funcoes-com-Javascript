let numero = Number(prompt("Digite um número para somar ele até o 1:"))
contador = numero
while (contador>0){
    contador = contador - 1 
    numero = numero + contador
}
total = numero
console.log("o resultado da soma é: "+total)
