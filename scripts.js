// Global Variables 👇
var currentPalette;
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box4 = document.querySelector('.box5')
var paletteHtml = document.querySelector('.palette')
//Event Listeners
window.addEventListener('load', function() { 
  createNewPalette(); 
})

// Functions Below 👇
//Refactor: when the user first visits the page, 
//they see a randomly generated color palette.
// pull the hex code data into css from the palette class
// tell css to use the hexcodes as box colors using the background color property
// update the DOM to change the palette on pageload using a function
function createNewPalette() {
  currentPalette = new Palette();
  return currentPalette;
};
function displayNewPalette() {

}

function newHexCode() {
  var hexCode = '';
  var hexData = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
  var randomHexArray = [];

  for (var i = 0; i < 6; i++) {
    randomHexArray.push(getRandomElement(hexData));
  };
  
  hexCode = randomHexArray.join('');
  return hexCode;
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};