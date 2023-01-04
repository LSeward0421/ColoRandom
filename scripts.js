// Global Variables 👇
var currentPalette;


// Functions Below 👇

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