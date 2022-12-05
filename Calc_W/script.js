var tela = document.querySelector(".tela");


function add(num){
  if(tela.innerHTML==0){
    tela.innerHTML = " ";
  } 
  $(".tela").append(num);
}

function allDel(){
 document.querySelector(".tela").innerHTML = "0";
}

function onlyDell(){
  tela.innerHTML.substring(0, tela.length -1);
}

function calculo(){
  console.log(eval(tela.innerHTML))
tela.innerHTML = eval(tela.innerHTML);

}