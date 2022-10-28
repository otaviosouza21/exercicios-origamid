function carregar(e) { //Funcao carregada ONload
  var body = document.querySelector("body");
  var msg = document.querySelector(".horas");  //Acessando o DOM dos elementos no HTML
  var img = document.querySelector(".img");
  var diaAtual = document.querySelector(".data");

  var data = new Date();
  var hora = data.getHours();      //Criando variaveis para identificar a Hora e a Data Atual da Maquina
  var mensagem = `Agora são ${hora}:${data.getMinutes()}:${data.getSeconds()}`;//Criando Mensagem de Horario 
  
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]; //Array de meses pois a funcao getMonth retorna um valor de 0 a 11
 
  //Exibindo Data atual
  diaAtual.innerHTML = `Hoje é dia ${data.getDay()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;


  if (hora >= 0 && hora < 12) {
    msg.innerHTML = "Bom dia!"+mensagem; //Se a hora for de 00:00 até 11:59 BOM DIA!!
    img.src = "./img/morning.jpg";      //Mudando imagem para o tema relacionado ao horario
    body.style.backgroundColor = "#f5cc17"; //Mudando a cor de fundo com o tema relacionado ao horario
  } 
  
  else if (hora >= 12 && hora < 18) {
    msg.innerHTML = "Boa Tarde!" +mensagem; //Se a hora for de 12:00 até 17:59 BOA TARDE!!
    img.src = "./img/afternoon.jpg";        
    body.style.backgroundColor = "#f56217";
  } 
  
  else {
    msg.innerHTML = "Boa Noite! "+mensagem
    img.src = "./img/evening.jpg";         //Se a hora for de 18:00 até 23:59 BOA TARDE!!
    body.style.backgroundColor = "#04394e";
  }
}
