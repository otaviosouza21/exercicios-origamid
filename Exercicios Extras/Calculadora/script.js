/*function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function clean(){
  document.getElementById("resultado").innerHTML = " ";
}

function limpa(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);

}

function calcula(){
  var resultado = document.getElementById("resultado").innerHTML;

  if(resultado){
    document.getElementById("resultado").innerHTML = eval(resultado);
  }
else{
  document.getElementById('resuldado').innerHTML = ("Nada")
}
}
*/
function insert(num){
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean(){
  document.getElementById("resultado").innerHTML = " ";
} 
function limpa(){
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcula(){
  var resultado = document.getElementById("resultado").innerHTML;

  if(resultado){
    document.getElementById("resultado").innerHTML = eval(resultado);
    
  }
  
else{
  document.getElementById("resultado").innerHTML = ("Não há");
}
}