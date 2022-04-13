const futuro  = Date.now() + 10000
let quantidade = 0;


while(Date.now() < futuro){
    quantidade++;
}

console.log('Quantidade: ' + quantidade); //Date.now data de referencia é de 01/01/1970 data usada no sistema operacional unix.

