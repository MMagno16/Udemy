const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; // AND
console.log( 'Vamos comprar a  TV 50"? ' , t1 && t2); 

let comprarTV32 = t1 !== t2; // XOR
console.log( 'Vamos comprar a  TV 50"? ' , t1 !== t2);

let tomarSorvete = t1 || t2; // OR
console.log( 'Vamos comprar a  TV 50"? ' , tomarSorvete); 

let ficarEmCasa = !tomarSorvete; //NOT
console.log( 'Vamos comprar a  TV 50"? ' , ficarEmCasa); 



// console.log( '""')
// console.log( "''")