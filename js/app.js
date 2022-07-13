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