 let preçototal = 0
for(i=1;i<10;i++){
    let produto = Number(prompt("inisra o valor do " + i + "º produto: "))
    
     preçototal = preçototal + produto

}alert("preço final: R$" + preçototal)
