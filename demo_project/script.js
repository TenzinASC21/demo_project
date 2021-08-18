//logo filling
let logo = document.getElementById("logo");
logo.addEventListener("mouseover", fill);

function fill(){
    logo.src="full_health.png";
}

logo.addEventListener("mouseout", empty);

function empty(){
    logo.src = "demo_logo.png";
}

//dropdown nav bar

//home
let home = document.getElementById("home");

let divider = document.getElementById("drop");

home.addEventListener("mouseover", dropHome);

function dropHome(){
    let homeInfo = document.createElement("p");
    homeInfo.setAttribute("id", "dropInfo");
    homeInfo.innerHTML= homeText;
    divider.appendChild(homeInfo);
}

home.addEventListener("mouseout", removeHomeInfo);

function removeHomeInfo(){
    let removeHomeInfo = document.getElementById("dropInfo")
    removeHomeInfo.remove();
}

//exercise

let exercise = document.getElementById("exercise");

exercise.addEventListener("mouseover", dropExercise);

function dropExercise(){
    let exerciseInfo = document.createElement("p");
    exerciseInfo.setAttribute("id", "dropInfo");
    exerciseInfo.innerHTML= exerciseText;
    divider.appendChild(exerciseInfo);
}

exercise.addEventListener("mouseout", removeExerciseInfo);

function removeExerciseInfo(){
    let removeExerciseInfo = document.getElementById("dropInfo");
    removeExerciseInfo.remove();
}

//nutrition

let nutrition = document.getElementById("nutrition");

nutrition.addEventListener("mouseover", dropNutrition);

function dropNutrition(){
    let nutritionInfo = document.createElement("p");
    nutritionInfo.setAttribute("id", "dropInfo");
    nutritionInfo.innerHTML = nutritionText;
    divider.appendChild(nutritionInfo);
}

nutrition.addEventListener("mouseout", removeNutritionInfo);

function removeNutritionInfo(){
    let removeNutritionInfo = document.getElementById("dropInfo");
    removeNutritionInfo.remove();
}

//contact us

let contact = document.getElementById("contact");

contact.addEventListener("mouseover", dropContact);

function dropContact(){
    let contactInfo = document.createElement("p");
    contactInfo.setAttribute("id", "dropInfo");
    contactInfo.innerHTML = contactText;
    divider.appendChild(contactInfo);
}

contact.addEventListener("mouseout", removeContactInfo);

function removeContactInfo(){
    let removeContactInfo = document.getElementById("dropInfo");
    removeContactInfo.remove();
}

//dropdown nav bar text
let homeText = "Learn about why physical health is crucial and about our mission to improve the quality of life.";
let exerciseText = "Learn about different exercises, how to perform them, and their benefits.";
let nutritionText = "Understand how to provide healthy nutrition for you body.";
let contactText = "Contact us via Email";