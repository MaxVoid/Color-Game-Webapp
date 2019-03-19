console.log("JS FILE IS CONNECTED");

// Array that holds the 6 colors used in the game
var colors = randomizeColors(6);

// Variables that select DOM objects in HTML
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var alert = document.querySelector("#alert");

// pickedColor: this variable is the color that is chosen as the correct color
var correctColor = pickColor();

// Changes the h1 display RGB to match the correct color
colorDisplay.textContent = correctColor;

for(var i = 0; i < squares.length; i++) {
    // Add colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        console.log(`User clicked square ${squares[i]}`);
        // checks if the square was already clicked
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
    }
}

// function that picks a random number
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function randomizeColors(num) {
    // make an array
    // add num random colors to array
    // return array
    return randomColors
}