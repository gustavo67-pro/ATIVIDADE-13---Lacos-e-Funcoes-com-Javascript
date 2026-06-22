let numero
let maior = 0 
let menor = 0
while (numero != 0){
    numero = Number(prompt("Digite um numero para no final ver qual foi o maior e o menor digitado (digite 0 para parar)"))
    if (numero>maior){
     maior = numero
    } else if (numero<maior && numero!=0){
     menor = numero
    }
}
console.log("O maior número digiado foi "+maior+" e o menor foi "+menor+".")
alert("O maior número digiado foi "+maior+" e o menor foi "+menor+".")
