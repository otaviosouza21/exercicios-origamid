const bola = document.querySelector(".checkbox1");
const boneca = document.querySelector(".checkbox2");
const videogame = document.querySelector(".checkbox4");
const televisao = document.querySelector(".checkbox5");
const computador = document.querySelector(".checkbox6");
const skate = document.querySelector(".checkbox7");
const caderno = document.querySelector(".checkbox8");
const celular = document.querySelector(".checkbox9");
const piao = document.querySelector(".checkbox10");
const pipa = document.querySelector(".checkbox11");
const patinete = document.querySelector(".checkbox12");
const bicicleta = document.querySelector(".checkbox3");

const bolaImg = document.querySelector(".bola");
const bonecaImg = document.querySelector(".boneca");
const bicicletaImg = document.querySelector(".bicicleta");
const videogameImg = document.querySelector(".videogame");
const televisaoImg = document.querySelector(".televisao");
const computadorImg = document.querySelector(".computador");
const skateImg = document.querySelector(".skate");
const cadernoImg = document.querySelector(".caderno");
const celularImg = document.querySelector(".celular");
const piaoImg = document.querySelector(".piao");
const pipaImg = document.querySelector(".pipa");
const patineteImg = document.querySelector(".patinete");
var popup = document.querySelector(".popup");
var popupVazio = document.querySelector(".popup-vazio");
var popupErro = document.querySelector(".popup-erro")

var nomes = [];
var objetos = [];


//Acionando funcoes das imagens
function addImg12() {
  bolaImg.classList.toggle("ativo");
  if(objetos.includes("bola")){
    objetos.splice(objetos.indexOf("bola"),1)}
  else {
    objetos.push("bola");
  }
  console.log(objetos)
}

function addImg10() {
  bonecaImg.classList.toggle("ativo");
  if(objetos.includes("boneca")){
    objetos.splice(objetos.indexOf("boneca"),1)}
  else {
    objetos.push("boneca");
  }
}

function addImg1() {
  bicicletaImg.classList.toggle("ativo");
  if(objetos.includes("bicicleta")){
    objetos.splice(objetos.indexOf("bicicleta"),1)}
  else {
    objetos.push("bicicleta");
  }
}

function addImg9() {
  videogameImg.classList.toggle("ativo");
  if(objetos.includes("videogame")){
    objetos.splice(objetos.indexOf("videogame"),1)}
  else {
    objetos.push("videogame");
  }
}

function addImg2() {
  televisaoImg.classList.toggle("ativo");
  if(objetos.includes("televisao")){
    objetos.splice(objetos.indexOf("televisao"),1)}
  else {
    objetos.push("televisao");
  }
}

function addImg7() {
  computadorImg.classList.toggle("ativo");
  if(objetos.includes("computador")){
    objetos.splice(objetos.indexOf("computador"),1)}
  else {
    objetos.push("computador");
  }
}

function addImg5() {
  skateImg.classList.toggle("ativo");
  if(objetos.includes("skate")){
    objetos.splice(objetos.indexOf("skate"),1)}
  else {
    objetos.push("skate");
  }
}

function addImg3() {
  cadernoImg.classList.toggle("ativo");
  if(objetos.includes("caderno")){
    objetos.splice(objetos.indexOf("caderno"),1)}
  else {
    objetos.push("caderno");
  }
}

function addImg6() {
  celularImg.classList.toggle("ativo");
  if(objetos.includes("celular")){
    objetos.splice(objetos.indexOf("celular"),1)}
  else {
    objetos.push("celular");
  }
}

function addImg4() {
  piaoImg.classList.toggle("ativo");
  if(objetos.includes("piao")){
    objetos.splice(objetos.indexOf("piao"),1)}
  else {
    objetos.push("piao");
  }
}

function addImg11() {
  pipaImg.classList.toggle("ativo");
  if(objetos.includes("pipa")){
    objetos.splice(objetos.indexOf("pipa"),1)}
  else {
    objetos.push("pipa");
  }
}

function addImg8() {
  patineteImg.classList.toggle("ativo");
  if(objetos.includes("patinete")){
    objetos.splice(objetos.indexOf("patinete"),1)}
  else {
    objetos.push("patinete");
  }
}

//Acionando funcoes dos nomes

function addBola() {
  bola.classList.toggle("clicado");
  if(nomes.includes("bola")){
    nomes.splice(nomes.indexOf("bola"),1)}
  else {
    nomes.push("bola");
  }
  console.log(nomes)
}

function addBoneca() {
  boneca.classList.toggle("clicado");
  if(nomes.includes("boneca")){
    nomes.splice(nomes.indexOf("boneca"),1)}
  else {
    nomes.push("boneca");
  }
}

function addBicicleta() {
  bicicleta.classList.toggle("clicado");
  if(nomes.includes("bicicleta")){
    nomes.splice(nomes.indexOf("bicicleta"),1)}
  else {
    nomes.push("bicicleta");
  }
}

function addVideogame() {
  videogame.classList.toggle("clicado");
  if(nomes.includes("videogame")){
    nomes.splice(nomes.indexOf("videogame"),1)}
  else {
    nomes.push("videogame");
  }
}

function addTelevisao() {
  televisao.classList.toggle("clicado");
  if(nomes.includes("televisao")){
    nomes.splice(nomes.indexOf("televisao"),1)}
  else {
    nomes.push("televisao");
  }
}

function addComputador() {
  computador.classList.toggle("clicado");
  if(nomes.includes("computador")){
    nomes.splice(nomes.indexOf("computador"),1)}
  else {
    nomes.push("computador");
  }
}

function addSkate() {
  skate.classList.toggle("clicado");
  if(nomes.includes("skate")){
    nomes.splice(nomes.indexOf("skate"),1)}
  else {
    nomes.push("skate");
  }
}

function addCaderno() {
  caderno.classList.toggle("clicado");
  if(nomes.includes("caderno")){
    nomes.splice(nomes.indexOf("caderno"),1)}
  else {
    nomes.push("caderno");
  }
}

function addCelular() {
  celular.classList.toggle("clicado");
  if(nomes.includes("celular")){
    nomes.splice(nomes.indexOf("celular"),1)}
  else {
    nomes.push("celular");
  }
}

function addPiao() {
  piao.classList.toggle("clicado");
  if(nomes.includes("piao")){
    nomes.splice(nomes.indexOf("piao"),1)}
  else {
    nomes.push("piao");
  }
}

function addPipa() {
  pipa.classList.toggle("clicado");
  if(nomes.includes("pipa")){
    nomes.splice(nomes.indexOf("pipa"),1)}
  else {
    nomes.push("pipa");
  }
}

function addPatinete() {
  patinete.classList.toggle("clicado");
  if(nomes.includes("patinete")){
    nomes.splice(nomes.indexOf("patinete"),1)}
  else {
    nomes.push("patinete");
  }
}







bola.addEventListener("click", addBola);
boneca.addEventListener("click", addBoneca);
bicicleta.addEventListener("click", addBicicleta);
videogame.addEventListener("click", addVideogame);
televisao.addEventListener("click", addTelevisao);
computador.addEventListener("click", addComputador);
skate.addEventListener("click", addSkate);
caderno.addEventListener("click", addCaderno);
boneca.addEventListener("click", addBoneca);
caderno.addEventListener("click", addCaderno);
celular.addEventListener("click", addCelular);
piao.addEventListener("click", addPiao);
pipa.addEventListener("click", addPipa);
patinete.addEventListener("click", addPatinete);

function verifica(){

  if(nomes.length==objetos.length  && nomes.every((value, index) => value === objetos[index]) && nomes.length!=0 &&objetos.length!=0){

popup.classList.toggle("popup-active");
}

else if(nomes.length==0 &&objetos.length==0){
  popupVazio.classList.toggle("vazio-active");
}

else{
  popupErro.classList.toggle("erro-active");

}

}

function closePop(){
  const close = document.querySelector(".xis");
  popup.classList.toggle("popup-active");
}

function closePop1(){
  const close = document.querySelector(".xis");
  popupVazio.classList.toggle("vazio-active");
}

function closePop2(){
  const close = document.querySelector(".xis");
  popupErro.classList.toggle("erro-active");
}