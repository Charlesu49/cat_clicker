//declaring variables

//the variable storing the no of cat clicks
let counter_1 = 0;
let counter_2 = 0;

//variable for counter elements for both cats
const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");

//variable for the cat images
const first_cat = document.getElementById("cat1");
const second_cat = document.getElementById("cat2");

//variable for the reset button
const resetBtn = document.querySelector("button");



//functions
first_cat.addEventListener('click', function(){
    counter_1 = counter_1 + 1;
    count1.textContent = "Click Counter : " + counter_1.toString();

});

second_cat.addEventListener('click', function(){
    counter_2 = counter_2 + 1;
    count2.textContent = "Click Counter : " + counter_2.toString();

});


//the below function resets the counter to 0
resetBtn.addEventListener('click', function(){
    counter_1 = 0;
    counter_2 = 0;
    count1.textContent = "Click Counter : " + counter_1.toString();
    count2.textContent = "Click Counter : " + counter_2.toString();

});