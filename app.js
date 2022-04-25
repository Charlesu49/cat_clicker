

// local database to be used
const cat_model = 
{
    cats: [
        {
            name : "Baby Cat",
            cat_link : "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            cat_counter : 0,
            id: 0
        },
        {
            name : "Innocent Cattie",
            cat_link : "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
            cat_counter : 0,
            id: 1
        },
        {
            name : "Cutie Cattie",
            cat_link : "https://images.unsplash.com/photo-1591621211041-a3d8b1a4e43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            cat_counter : 0,
            id: 2
        },
        {
            name : "Angry Cat",
            cat_link : "https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0dG98ZW58MHx8MHx8&w=1000&q=80",
            cat_counter : 0,
            id: 3
        },
        {
            name : "Yellow Eyes",
            cat_link : "https://images.unsplash.com/photo-1573592919522-cb19b002d543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTIwaGVhZHxlbnwwfHwwfHw%3D&w=1000&q=80",
            cat_counter : 0,
            id: 4
        }]
};

// get elements from the dom
const count_statement = "Count: ";
let current_cat = 0;
let catNameElem = document.getElementById('cat_name');
let catImageElem = document.getElementById('cat-img');
let countElem = document.getElementById('count1');
let resetBtn = document.getElementById('reset-btn');
let catListElem = document.getElementById('cat_buttons'); // get a conatiner thats box all the cats (image)

var cat_process = {
    initialize: function() {
        update(current_cat);
        catList();
    }
};

function update(i){

    // let catId = document.getElementById()

    catNameElem.textContent = cat_model.cats[i].name;
    catImageElem.src = cat_model.cats[i].cat_link; // update src url
    catImageElem.className = i; // update id
   countElem.textContent = count_statement + cat_model.cats[i].cat_counter.toString();

};

function catList(){
    
    for (i = 0; i < cat_model.cats.length; i++) { // adds all button that help user navigate to a new cat
       
       let cat = cat_model.cats[i];

        // make a new cat list item and set its text
        elem = document.createElement('button');
        elem.textContent = cat.name;
        elem.id = cat.id;
        catListElem.appendChild(elem);
        };
};

cat_process.initialize(); // initialize app for the first time

catImageElem.addEventListener('click', ()=>{ // this event listener function handles any cat click and handle the increment the counter
    let indexClass = catImageElem.className; // get the class eg 1,2,3,4
    indexClass = Number(indexClass); // convert the value to a number
    cat_model.cats[indexClass].cat_counter++ // increment its value
    countElem.textContent = count_statement + cat_model.cats[indexClass].cat_counter.toString(); // update increment on ui dom
    
});

// add an event listener to the button parent element
catListElem.addEventListener('click', (e)=> {
const clickedButtonId = e.target.id; // get the id of the button that was clicked
update(clickedButtonId); // update value on the ui dom
})

resetBtn.addEventListener('click', () => {
    //Loop throungh all the cats array and reset its value to 0;
    for (i = 0; i < cat_model.cats.length; i++) { //        
        let cat = cat_model.cats[i];
        cat.cat_counter = 0;
    }; 
    // call update() with index 0 to reset ui dom to its initial value when app loaded for the first
    update(current_cat);
})




