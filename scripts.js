// Global Variables 👇

var currentPalette;
var savedPalettes = [];
var paletteHtml = document.querySelector('.palette');
var boxes = document.querySelectorAll('.boxes');
var hexCodes = document.querySelectorAll('.labels');
var newPaletteBtn = document.getElementById('new-p-btn');
var savePaletteBtn = document.getElementById('save-p-btn');

// Event Listeners 👇

window.addEventListener('load', function() { 
  createNewPalette(); 
  displayNewPalette();
});

newPaletteBtn.addEventListener('click', function() {
  currentPalette.replaceColor();
  displayNewPalette();
});

savePaletteBtn.addEventListener('click', function() {
  savePalette();
  displayNewPalette();
  // displaySavedPalette();
});

// Functions Below 👇
 
function createNewPalette() {
  currentPalette = new Palette();
  return currentPalette;
};

function displayNewPalette() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    boxes[i].style.backgroundColor = currentPalette.colors[i].hex;
    hexCodes[i].innerText = currentPalette.colors[i].hex;
  };
};

function savePalette() {
  savedPalettes.unshift(currentPalette);
  createNewPalette();
};
// create a function move the current palette object to saved palette array
// use createNewPalette to refresh instance on page

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