let funcionariosAlfa = 150;
let funcionariosBeta = 110;
const crescimentoAlfa = 4;
const crescimentoBeta = 9;
let anos = 0;
while (funcionariosBeta <= funcionariosAlfa) {
    funcionariosAlfa += crescimentoAlfa; 
    funcionariosBeta += crescimentoBeta; 
    anos = anos + 1;                             
}
console.log(`Serão necessários ${anos} anos para a empresa Beta ultrapassar a empresa Alfa.`);
