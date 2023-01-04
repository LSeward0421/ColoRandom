// Global Variables 👇
var currentPalette;


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