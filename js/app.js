"use strict";

//let q1 = prompt('Please enter your name');
let q2 = prompt('Does Ethan like videogames? (Yes or No)(y/n)')
let q3 = prompt('Does Ethan like to code in HTML, CSS, JS and C#? (Yes or No)(y/n)');
let q4 = prompt('Does Ethan work in finance? (Yes or No)(y/n)');
let q5 = prompt('Does Ethan take portrait photos? (Yes or No)(y/n)');
let q6 = prompt('Go cougs? (Yes or No)(y/n)');


let y = 'yes' && 'y';
let n = 'no' && 'n';
const answArray = [];
const answ = answArray.push(q2, q3, q4, q5, q6);
if (answArray[0, 2, 4] == y && answArray[1, 3] == n) {
    alert('That\'s correct!');
} else {
    alert('That\'s not correct :( read my about me page!');
}
let i = 5;
let correctNum = 8;
const warmCold = ['Colder', 'Warmer'];
let correctShow = 'stranger things';
while (i > 0) {
    let q7 = prompt('Guess a number between 1-25.');
    i--;
    if (q7 != correctNum) {
        if (q7 < 6 || q7 > 10) {
            alert('That\'s not correct! Try again! ' + i + ' tries left! You are: ' + warmCold[0]);
        } else if (q7 == 6 || q7 == 7 || q7 == 8 || q7 == 9) {
            alert('That\'s not correct! Try again! ' + i + ' tries left! You are: ' + warmCold[1]); 
        }
    } else {
        alert('That\'s correct!')
    }
    let q8 = prompt('What do you think my favorite show is?');
    i--;
    if (q8 != correctShow) {
        alert('That\'s not correct! Try again! ' + i + ' tries left!'); 
    } else if (q8 == correctShow) {
        alert('That\'s correct!');
        if (answArray[0, 2, 4] == y && answArray[1, 3] == n && q7 == correctNum && q8 == correctShow) {
            alert("Congrats! You got all the questions right!")
        }
        break;
    }
}



// function displayUserName() {
//     document.write('Hello ' + userName + '!'); will use this function at a later date
// }

// Some of the JS below was used from a W3Schools example, but it was edited to fit my naming conventions and preferences https://www.w3schools.com/howto/howto_js_slideshow.asp
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
    let imgSelected = document.getElementsByClassName("slide-div"); //Selecting html element
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