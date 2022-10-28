function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nasceu = document.getElementById("txtano");
  var resposta = document.querySelector(".detectamos");
  var img = document.querySelector("img");

  var fsex = document.getElementsByName("gen");
  var idade = ano - +nasceu.value;
  console.log(fsex[1].checked);
  var genero = " ";

  if(nasceu.value.length == 0 || +nasceu.value> ano){
    alert("ERRO!! DIGITE UM VALOR VALIDO");
  } else


  if (fsex[0].checked) {
    genero = "Homem";
  } else if (fsex[1].checked) {
    genero = "Mulher";
  }

  if (idade >= 0 && idade < 10 && genero == "Mulher") {
    resposta.innerHTML = "Criança Menina de " + idade + " anos";
    img.src = "./img/baby_girl.jpg";


  } else if (idade >= 0 && idade < 10 && genero == "Homem") {
    resposta.innerHTML = "Criança Menino " + idade + " anos";
    img.src = "./img/baby_boy.jpg";


  } else if (idade >= 10 && idade < 17 && genero == "Homem") {
    resposta.innerHTML = "Adolescente Menino de " + idade + " anos";
    img.src = "./img/teen_men.jpg";


  } else if (idade >= 10 && idade < 17 && genero == "Mulher") {
    resposta.innerHTML = "Adolescente Menina de " + idade + " anos";
    img.src = "./img/teen_girl.jpg";
  }

  else if (idade >= 17 && idade < 30 && genero == "Homem") {
    resposta.innerHTML = "Homem Adulto de " + idade + " anos";
    img.src = "./img/adult_men.jpg";


  } else if (idade >= 17 && idade < 30 && genero == "Mulher") {
    resposta.innerHTML = "Mulher Adulta de " + idade + " anos";
    img.src = "./img/adult_woman.jpg";
  }

  else if (idade >= 30 && idade < 100 && genero == "Homem") {
    resposta.innerHTML = "Homem Idoso de " + idade + " anos";
    img.src = "./img/old_men.jpg";


  } else if (idade >= 30 && idade < 100 && genero == "Mulher") {
    resposta.innerHTML = "Mulher Idosa de " + idade + " anos";
    img.src = "./img/old_woman.jpg";
  }
}
