// Global Variables 👇

var currentPalette;
var savedPalettes = [];
var paletteHtml = document.querySelector('.palette');
var boxes = document.querySelectorAll('.boxes');
var hexCodes = document.querySelectorAll('.labels');
var savedSection = document.querySelector('.saved-palette-section')
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
  displaySavedPalette();
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

// need to loop through the savedPalettes array to access each of the properties
// use inner HTML interpolation to render mini palette for each index of the savedPalettes array


function displaySavedPalette() {
  for (var i = 0; i < savedPalettes.length; i++) {
    savedSection.innerHTML = ''
    savedSection.innerHTML += `
    <section class="mini-pals">
      <div class="mini-boxes"></div>
      <div class="mini-boxes"></div>
      <div class="mini-boxes"></div>
      <div class="mini-boxes"></div>
      <div class="mini-boxes"></div>
    </section>`
  };
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