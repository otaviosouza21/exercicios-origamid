const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const resul = document.querySelector(".resultado");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");

console.log(n1);

function soma(e){
  resul.innerHTML.style.backgroundColor = "blue"

function subtracao(){
  const sub = +n1.value - +n2.value;
  resul.innerHTML = sub;
}

function multiplicacao(){
  const mult = +n1.value * +n2.value;
  resul.innerHTML = mult;
}


function divisao(){
  const div = +n1.value / +n2.value;
  resul.innerHTML = div;
}








add.addEventListener("click",soma);
sub.addEventListener("click",subtracao);
mult.addEventListener("click",multiplicacao);
div.addEventListener("click",divisao);
