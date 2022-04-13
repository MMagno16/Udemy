function executar(funcao){
    if(typeof funcao === "function"){
        console.log(funcao()); // <---- função como paramentro
    }
}

function bomDia(){
    return "Bom dia!"
}


executar(3);
executar(bomDia); // <---- funcão como parametro

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);