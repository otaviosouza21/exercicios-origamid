

const circle = document.querySelector(".circle-seletor");
const alt1 = document.querySelector(".p-alt-1");
const alt2 = document.querySelector(".p-alt-2")
const alt3 = document.querySelector(".p-alt-3")

function move(){
    circle.classList.toggle("circle-selector-on");

    if(alt1.innerHTML == "R$ 47/mes"){
        alt1.innerHTML = "R$ 520/ano";
        alt2.innerHTML = "R$ 740/ano";
        alt3.innerHTML = "R$ 920/ano";
    }
    
    else {
        alt1.innerHTML = "R$ 47/mes";
         alt2.innerHTML = "R$ 63/mes";
          alt3.innerHTML = "R$ 79/mes";
    }
}


$(".add1").click(function(){
    $(".add1").toggleClass("bk");
})

$(".add2").click(function(){
    $(".add2").toggleClass("bk");
})

$(".add3").click(function(){
    $(".add3").toggleClass("bk");
})



select1.addEventListener('click',mudabg)
circle.addEventListener('click',move);


