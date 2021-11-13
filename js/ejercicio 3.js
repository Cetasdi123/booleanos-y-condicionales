let number = prompt("digite un número");
let div = number /5;
if (Number.isInteger(div)) {
    console.log("Si, el número" +" "+ number +" "+" es múltiplo 5");
}else{
    console.log("No, el número" +" "+ number +" "+" no es múltiplo de 5");
}