let numero = Number(prompt("insira o numero desejado: "))
let divisores = primo(numero);
if(divisores === 2){
    alert("seu numero é primo!!")
}
else{
    alert("seu numero nao é primo!!")
}

function primo(numero){
    let divisores = 0;
for(let i=numero;i>0;i--){
    let resultado = numero % i;
    if(resultado === 0){
        divisores = divisores + 1;
    }
  } 
  return divisores;
}
