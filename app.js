//declaring variables
let count = 0;
const counter = document.getElementById("count");
const image = document.querySelector("img");
const resetBtn = document.querySelector("button");

image.addEventListener('click', function(){
    count = count + 1;
    counter.textContent = "Click Counter : " + count.toString();

});


//the below function resets the counter to 0
resetBtn.addEventListener('click', function(){
    count = 0;
    counter.textContent = "Click Counter : " + count.toString();

});