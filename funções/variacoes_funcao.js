// #1 função COM parameto e COM retorno
function somar(a, b){
    return a +  b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30,56)}`);

// #2 funcao COM paramentros e SEM retorno
function exibirMultiplicacao(a, b){
    console.log(a * b);
}

exibirMultiplicacao(10,21);
exibirMultiplicacao(7,9);

// #3 funcao SEM paramentro e COM retorno

function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual())

// #4 funcao SEM paramentro e SEM retorno

function exibirHoraAtual(){
    console.log(new Date(). getHours());
}

exibirHoraAtual();