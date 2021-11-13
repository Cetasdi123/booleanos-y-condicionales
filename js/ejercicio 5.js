let peso = prompt("digite su peso ");
let altura = prompt("digite su altura");
let resultado = peso / (altura ** 2);
console.log (resultado);
if(resultado < 18.5){
    console.log("bajo de peso");
}else if(18.5 >= resultado || resultado <= 24.9 ){
    console.log("normal");
}else if(25 >= resultado || resultado <= 29.9){
    console.log("sobrepeso");
}else if( resultado > 30 ){
    console.log("obeso");
}