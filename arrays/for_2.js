const notas = [7, 8, 3, 5, 10, 9, 8, 8];


let valores = '';
//foreach
for(let nota of notas){
    valores += nota + ' ';
}

console.log(valores)


let indices = '';
for(let i in notas){
    indices += i + ' ';
}

console.log(indices)