par=0
impar=0
for (i=1;i<9;i++){
    let numero = Number(prompt("Digite o "+i+"° número para saber se ele é impar ou par:"))
    if (numero % 2 == 0){
        par=par+1
    }else {
        impar=impar+1
    }
}
console.log("no total "+par+" números são pares e "+impar+" números são impar.")
