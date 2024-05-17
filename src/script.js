// script.js

// Function to append a character to the display
function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
