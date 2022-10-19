const form = document.querySelector("form");
const campos = document.querySelector(".in");
const span = document.querySelector(".span-required")

function Namevali() {
 
  if(campos[1].value.length<3){

    console.log("Nome deve ter mais de 3 caracter");
  }
 else{

  console.log("nome valido")
 }


}