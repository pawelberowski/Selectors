const paragraphs = document.querySelectorAll('p');
const changeColorButton = document.querySelector('#change-color-button');

if (changeColorButton) {
    changeColorButton.addEventListener('click', function() {
        paragraphs.forEach(function(paragraph) {
            if (paragraph.style.color === 'green') {
                paragraph.style.color = 'black';
            } else {
                paragraph.style.color = 'green';
            }
        })
    })
}

const userInput = document.querySelector('input');
const resetButton = document.querySelector('#reset-button');

if (userInput) {
    document.addEventListener('click', function() {
        if (userInput.value.length > 0) {
            resetButton.innerText = userInput.value;
        } else {
            resetButton.innerText = 'Click';
        }
    })
}

if (resetButton) {
    resetButton.addEventListener('click', function() {
        userInput.value = '';
    })
}

const colorfullButton = document.querySelector('#colorfull-button');

if (colorfullButton) {
    colorfullButton.addEventListener('click', function() {
        if (colorfullButton.style.backgroundColor === 'red') {
            colorfullButton.style.backgroundColor = 'yellow';
        } else {
            colorfullButton.style.backgroundColor = 'red';
        }
    })
}

let clickCounter = 0;
const clickCounterDisplay = document.querySelector('#click-counter-display');
const clickCounterButton = document.querySelector('#click-counter-button');


if (clickCounterButton) {
    clickCounterButton.addEventListener('click', function() {
        clickCounter += 1;
        clickCounterDisplay.innerText = clickCounter;
    })
}

const whichButtonDisplay = document.querySelector('#which-button-display');
const buttonOne = document.querySelector('#button-one');
const buttonTwo = document.querySelector('#button-two');

if (buttonOne) {
    buttonOne.addEventListener('click', function() {
        whichButtonDisplay.innerText = 'Button 1 clicked';
    })
}

if (buttonTwo) {
    buttonTwo.addEventListener('click', function() {
        whichButtonDisplay.innerText = 'Button 2 clicked';
    })
}

const hoverStation = document.querySelector('#hover-station');

if (hoverStation) {
    hoverStation.addEventListener('mouseover', function() {
        hoverStation.value = 'The input is hovered over';
    })
    hoverStation.addEventListener('mouseout', function() {
        hoverStation.value = '';
    })
}