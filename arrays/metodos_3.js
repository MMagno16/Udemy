const numeros = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }


// for (const i of numeros) {
//     console.log(i)
// }


function praCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function(elemento){
    console.log(elemento)
});

numeros.forEach(function(_, i){
    console.log(i)
});

