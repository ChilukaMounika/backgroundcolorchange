
let background=document.getElementById("backgrnd");
let card=document.getElementById("card");

card.classList.add("card");
background.classList.add("bgcolor");

let blue=document.querySelector(".btn1");
let black=document.querySelector(".btn2");
let ornage=document.querySelector(".btn3");
let green=document.querySelector(".btn4"); 

blue.addEventListener("click",function(){
    background.style.backgroundColor="blue";
})
black.addEventListener("click",function(){
    background.style.backgroundColor="black";
})
ornage.addEventListener("click",function(){
    background.style.backgroundColor="rgb(255, 115, 0)";
})
green.addEventListener("click",function(){
    background.style.backgroundColor="rgb(0, 255, 68)";
})