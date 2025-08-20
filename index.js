const increasebtn=document.getElementById("increasebtn");
const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const countable=document.getElementById("count");

let count=0;
increasebtn.onclick=function (){
    count++;
    countable.textContent=count;
}
decreasebtn.onclick=function (){
    count--;
    countable.textContent=count;
}
resetbtn.onclick=function (){
    count=0;
    countable.textContent=count;
}