console.log("JS FILE IS CONNECTED");

// Array that holds the 6 colors used in the game
var colors = randomizeColors(6);

// Variables that select DOM objects in HTML
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var alert = document.querySelector("#alert");
var titleDisplay = document.querySelector("#titleDisplay");

// pickedColor: this variable is the color that is chosen as the correct color
var correctColor = pickColor();

// Changes the h1 display RGB to match the correct color
colorDisplay.textContent = correctColor;

for(var i = 0; i < squares.length; i++) {
    // Add colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // checks if the square was already clicked by comparing the background color to the body background color
        if(this.style.backgroundColor === "#202020") {
        
        } else {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to correct color
            if(clickedColor !== correctColor) {
                this.style.backgroundColor = "#202020";
                alert.textContent = ("Try Again");
            } else {
                alert.textContent = ("Correct");
                changeColors(clickedColor);
            };
        };
    });
};

// function to change all the squares and titleDisplay to the correctColor when the correct square is clicked
function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        titleDisplay.style.backgroundColor = color;
    };
};

// function that picks a random number
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function randomizeColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
    // get random color and push into arr variable
        arr.push(randomColor());
    }
    // return array
    return arr;
};

// function that returns a random rgb string
function randomColor(){
    // pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    // combines the RGB variables into a string
    return `rgb(${red}, ${green}, ${blue})`;
};
