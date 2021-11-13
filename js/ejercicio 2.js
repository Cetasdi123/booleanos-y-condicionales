let number = prompt("digite un numero entre el 1 y el 10");
let start = 1;
let end = 10;
let randon = start + Math.floor(Math.random() * end);
console.log(randon);
if(number == randon){
    console.log("Felicitaciones, ese era!");
}else{
    console.log("Lo siento, intenta nuevamente!");
}