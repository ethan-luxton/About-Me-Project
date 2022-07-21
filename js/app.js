"use strict";

//    //let q1 = prompt('Please enter your name');
//    let q2 = prompt('Does Ethan like videogames? (Yes or No)(y/n)')
//    let q3 = prompt('Does Ethan like to code in HTML, CSS, JS and C#? (Yes or No)(y/n)');
//    let q4 = prompt('Does Ethan work in finance? (Yes or No)(y/n)');
//    let q5 = prompt('Does Ethan take portrait photos? (Yes or No)(y/n)');
//    let q6 = prompt('Go cougs? (Yes or No)(y/n)');


//    let y = 'yes' && 'y';
//    let n = 'no' && 'n';
//const answArray = [];
// const answ = answArray.push(q2, q3, q4, q5, q6);
//    if (answArray[0, 2, 4] == y && answArray[1, 3] == n) {
//        alert('That\'s correct!');
//    } else {
//        alert('That\'s not correct :( read my about me page!');
//    }
function questionnaire(message, answer1, answer2) {
    let answer = prompt(message).toLowerCase();
    if (answer === answer1 || answer === answer2) {
        alert('That\'s correct');
        return;
    }
    alert('Sorry, that isn\'t correct!');

}
questionnaire('Does Ethan like videogames? (Yes or No)','y', 'yes');
questionnaire('Does Ethan like to code in HTML, CSS, JS and C#? (Yes or No)','n', 'no');
questionnaire('Does Ethan work in finance? (Yes or No)','y', 'yes');
questionnaire('Does Ethan take portrait photos? (Yes or No)','n', 'no');
questionnaire('Go cougs? (Yes or No)','y', 'yes');

function guessingGames() {
    // Random number guessing game
    let correctNum = Math.floor(Math.random()* 26) + 1;
    console.log(correctNum);
    for (let i = 4; i > 0; i--) {
        //console.log(i);
        let q7 = prompt('Guess a number between 1-25. You have 4 attempts:');
        const tooHighLow = ['too high!', 'too low!'];
        if (q7 < correctNum && q7 != correctNum) {
            alert('That\'s not correct! Try again! ' + i + ' tries left! You are ' + tooHighLow[1]);
        } else if (q7 > correctNum && q7 != correctNum) {
            alert('That\'s not correct! Try again! ' + i + ' tries left! You are ' + tooHighLow[0]);
        } else if (q7 = correctNum) {
            alert('That is correct!');
            //answArray.push(q7);
            //console.log(answArray);
            break;
        } 
    }
    // if (answArray[5] != correctNum) {
    //     alert('The correct number was: ' + correctNum);
    //}
    // Favorite show guessing game
    const correctShow = ['stranger things', 'altered carbon', 'the boys'];
    for(let i = 6; i > 0; i--) {
        let q8 = prompt('Can you guess one of my favorite shows? You have 6 attempts').toLowerCase();
        if (q8 == correctShow[0] || q8 == correctShow[1] || q8 == correctShow[2]) {
            alert("That is correct!");
            //answArray.push(q8);
            //console.log(answArray);
            // Alert if user gets all questions right!
            alert('My favorite shows were: ' + correctShow)
            break;
            } else {
            alert('That\'s not correct! Try again! ' + i + ' tries left!');
        }
    }
    
}
guessingGames();

// // Some of the JS below was used from a W3Schools example, but it was edited to fit my naming conventions and preferences https://www.w3schools.com/howto/howto_js_slideshow.asp
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