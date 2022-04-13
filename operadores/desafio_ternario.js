const a = 8;
const b = 4;
const operacao = '/' ; // + - * /

const resultado = 
    operacao === '+' ? a + b :
        operacao === '-' ? a - b :
            operacao === '*' ? a * b : a / b;

console.log(resultado);


//NÃO É um código limpo