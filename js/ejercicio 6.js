let number = prompt("digite un numero");
let resultado1 = number / 3;
let resultado2 = number / 5;
if(Number.isInteger(resultado1) &&  Number.isInteger(resultado2)) {
    console.log("multiplo de 3 y de 5");
}else if (Number.isInteger(resultado1)){
    console.log("multiplo de 3");
}else if (Number.isInteger(resultado2)){
    console.log("multiplo de 5"); 
}else{
    console.log("no es multiplo de ninguno ")
}