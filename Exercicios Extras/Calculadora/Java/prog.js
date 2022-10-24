var inpute = document.querySelectorAll(".input");
var requirede = document.querySelectorAll(".span-required");

function Error(index){
    inpute[index].style.border = "2px solid red";
    requirede[index].style.display = "block";
}

function noError(index){
   inpute[index].style.border = " ";
   requirede[index].style.display = "none";
}

function Namevali(){
   Error(0);
}



/*function Namevali() {
  if (inpute[0].value.length < 3) {
    requirede[0].style.color = "red";
    requirede[0].innerHTML = "Nome deve conter no minimo 3 caracteres";
    inpute[0].style.border = "solid red 2px";
    inpute[0].style.borderRadius = " 2px";
  } else {
    requirede[0].style.color = "green";
    requirede[0].innerHTML = "Nome valido ";
    inpute[0].style.border = "solid green 2px";
    inpute[0].style.borderRadius = " 2px";
  }
}

function Mailvali() {
  if (inpute[1].value.includes("@")) {
    requirede[1].style.color = "green";
    requirede[1].innerHTML = "Email Valido";
    inpute[1].style.border = "solid green 2px";
    inpute[1].style.borderRadius = " 2px";
  } else {
    requirede[1].style.color = "red";
    requirede[1].innerHTML = "Email Invalido ";
    inpute[1].style.border = "solid red 2px";
    inpute[1].style.borderRadius = " 2px";
  }
}

function Passvali() {
  if (inpute[2].value.length > 8 && ) {
    requirede[1].style.color = "green";
    requirede[1].innerHTML = "Email Valido";
    inpute[1].style.border = "solid green 2px";
    inpute[1].style.borderRadius = " 2px";
  } else {
    requirede[1].style.color = "red";
    requirede[1].innerHTML = "Email Invalido ";
    inpute[1].style.border = "solid red 2px";
    inpute[1].style.borderRadius = " 2px";
  }
}