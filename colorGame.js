console.log("JS FILE IS CONNECTED");

var mode = 6;
// Array that holds the 6 colors used in the game
var colors = randomizeColors(mode);

// Variables that select DOM objects in HTML
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var alert = document.querySelector("#alert");
var titleDisplay = document.querySelector("#titleDisplay");
var reset = document.querySelector("#resetBtn");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
var howToPlay = document.querySelector("#howToPlay");
var modal = document.querySelector("#htpModal");
var close = document.querySelector("#close");


// pickedColor: this variable is the color that is chosen as the correct color
var correctColor = pickColor();

// Changes the h1 display RGB to match the correct color
colorDisplay.textContent = correctColor;

// for loop that handles initial square coloring, and then adds event listeners to each square
for(var i = 0; i < squares.length; i++) {
    // Add colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // checks if the square was already clicked by comparing the background color to the body background color
        if(this.style.backgroundColor === "#232323") {
        
        } else {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to correct color
            if(clickedColor !== correctColor) {
                this.style.backgroundColor = ("#232323");
                this.style.border = ("4px solid #232323");
                alert.textContent = ("TRY AGAIN");
            } else {
                alert.textContent = ("CORRECT!");
                changeColors(clickedColor);
                reset.textContent = ("PLAY AGAIN?");
            };
        };
    });
};

// reset button functionality
reset.addEventListener("click", function(){
    // generates new colors, adds them to squares, and chooses a correctColor
    colors = randomizeColors(mode);
    correctColor = pickColor();
    colorization();
    // resets displays for new game
    colorDisplay.textContent = correctColor;
    titleDisplay.style.backgroundColor = ("steelblue");
    reset.textContent = ("NEW COLORS");
    alert.textContent = ("");
});

// easy mode button functionality
easy.addEventListener("click", function(){
    if(mode === 3) {
        // if mode is already easy then nothing happens, else it performs the switch to easy
    } else {
        mode = 3;
        // switches highlighted button
        easy.classList.add("selected");
        hard.classList.remove("selected");
        // generates 3 new colors, adds them to first 3 squares, hides the  last 3 squares, and chooses a correctColor
        colors = randomizeColors(3);
        correctColor = pickColor();
        colorization();
        // resets displays for new game
        colorDisplay.textContent = correctColor;
        titleDisplay.style.backgroundColor = ("steelblue");
        reset.textContent = ("NEW COLORS");
        alert.textContent = ("");
        for(var i = 3; i < 6; i++) {
            squares[i].style.display = ("none");
        };
    };
});

// hard mode button functionality
hard.addEventListener("click", function(){
    if(mode === 6) {
        // if mode is already hard then nothing happens, else it performs the switch to hard
    } else {
        mode = 6;
        // switches highlighted button
        hard.classList.add("selected");
        easy.classList.remove("selected");
        // generates new colors, adds them to squares, shows last 3 squares if  they are hidden, and chooses a correctColor
        colors = randomizeColors(6);
        correctColor = pickColor();
        colorization();
        // resets displays for new game
        colorDisplay.textContent = correctColor;
        titleDisplay.style.backgroundColor = ("steelblue");
        reset.textContent = ("NEW COLORS");
        alert.textContent = ("");
        for(var i = 3; i < 6; i++) {
            squares[i].style.display = ("block");
        };
    };
});

// modal functionality
// When the user clicks on the button, open the modal 
howToPlay.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// function to change all the squares and titleDisplay to the correctColor when the correct square is clicked
function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        squares[i].style.border = ("4px solid white");
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
    };
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

// function for adding colors to squares
function colorization() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.border = ("4px solid white");
    };
};


// look into making a modal for How To Play button! https://www.w3schools.com/howto/howto_css_modals.asp