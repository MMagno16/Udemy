function retornaUmmaFuncao(){

    function bomDia(){
        return 'Bom dia!!!'
    }
    return bomDia;
}
console.log(retornaUmmaFuncao);
console.log(retornaUmmaFuncao());
console.log(retornaUmmaFuncao()());

const umaFuncao = retornaUmmaFuncao();
console.log(umaFuncao());
