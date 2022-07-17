"use strict";
let userName = prompt("Please enter your name!");
let vg = prompt("Does Ethan like videogames? (Yes or No)(y/n)");
let coding = prompt("Does Ethan like to code in HTML, CSS, JS and C#? (Yes or No)(y/n)");
let work = prompt("Does Ethan work in finance? (Yes or No)(y/n)");
let photo = prompt("Does Ethan take portrait photos? (Yes or No)(y/n)");
let cougs = prompt("Go cougs? (Yes or No)(y/n)");
let answ0 = "yes" && "y";
let answ1 = "no" && "n"; 
function questionnaire() {
    if (vg === answ0 && coding === answ1 && work === answ0 && photo === answ1 && cougs === answ0) {
        //console.log("Thats correct!");
        window.alert("Thats correct, " + userName + "!");
    } else {
        if (vg != answ0 || coding != answ1 || work != answ0 || photo != answ1 || cougs != answ0) {
            //console.log("Incorrect :(. I love videogames! I do not like CSS. I do work in finance! I have technically taken portrait photos before, but I like landscape photos more. And yes, go cougs!");
            window.alert("Incorrect :(. I love videogames! I do not like CSS. I do work in finance! I have technically taken portrait photos before, but I like landscape photos more. And yes, go cougs! Thank you, " + userName + ".");
        }
    } 
}
questionnaire();

function displayUserName() {
    document.write('Hello ' + userName + '!');
}


/* Some of the JS in here was used from W3Schools example, but it was edited to fit my naming conventions and preferences https://www.w3schools.com/howto/howto_js_slideshow.asp */
let imgIn = 1;


// Image switch control
function switchImg(n) {
    showImg(imgIn += n);
}
function currentImg(n) {
    showImg(imgIn = n);
}
function showImg(n) {
    let i;
    let imgSelected = document.getElementsByClassName("slide-div");
    if (n > imgSelected.length) {
        imgIn = 1;
    }
    if (n < 1) {
        imgIn = imgSelected.length;
    }
    for (i = 0; i < imgSelected.length; i++) {
        imgSelected[i].style.display = "none"; //JS for no styling in CSS
    }
    imgSelected[imgIn-1].style.display = "block"; //JS for tapping into CSS block property
    
}