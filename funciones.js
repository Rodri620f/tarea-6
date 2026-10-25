function saludar(){
    console.log ("hola mundo ");
}
saludar ();
function suma(){
    return 2 + 2;
}
suma();
let resultado = suma();
console.log(resultado);
console.log(suma());
let a = 2;
function sumar(a){
    return 2+2;
}
console.log(sumar(a));

function sumita (b){
    return b + 2;
}
console.log(sumita(5));
function sumas(a, b){
    return a + b;
}
console.log(sumas(4 , 5));
function sumando(c, d){
    console.log(arguments)
    return c + d
}
let res= sumando(5, 6, 1, 2, 3)
console.log(res);
console.log(typeof sumando );

/*segunda funciones */
let total = 0;
function sumadito(x , y){
    let aux = x+y;
    total= aux; 
    return total; 
}
console.log(sumadito(10, 12));

function resta(){
    return 20-7; 
} 
console.log(resta());
