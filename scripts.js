// Global Variables 👇

var currentPalette;
var savedPalettes = [];
var mainPalette = document.querySelector('main');
var boxes = document.querySelectorAll('.boxes');
var hexCodes = document.querySelectorAll('.labels');
var savedSection = document.querySelector('.saved-palette-section')
var newPaletteBtn = document.getElementById('new-p-btn');
var savePaletteBtn = document.getElementById('save-p-btn');
var lockedIcons = document.querySelectorAll('.lock')
var unlockedIcons = document.querySelectorAll('.unlock')


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
  createNewPalette();
  displayNewPalette();
  displaySavedPalette();
  toggleLock();
});

mainPalette.addEventListener('click', function(event) {
  lockColor(event);
  toggleLock()
});

// Functions Below 👇

function createNewPalette() {
  currentPalette = new Palette();
  return currentPalette;
};

function displayNewPalette() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    hexCodes[i].innerText = currentPalette.colors[i].hex;
    boxes[i].style.backgroundColor = currentPalette.colors[i].hex;
  };
};

function savePalette() {
  savedPalettes.unshift(currentPalette);
  createNewPalette();
};

function deleteSavedPalette(id) {
  for (var i = 0; i < savedPalettes.length; i++) {
     var savedPaletteID = savedPalettes[i].id.toString()
    if (id === savedPaletteID) {
      savedPalettes.splice(i, 1);
    };
  };
  displaySavedPalette();
};

function displaySavedPalette() {
  savedSection.innerHTML = '';
  for (var i = 0; i < savedPalettes.length; i++) {
    savedSection.innerHTML += `
    <section class="mini-pals">
      <div class="mini-boxes" style="background-color:${savedPalettes[i].colors[0].hex}"></div>
      <div class="mini-boxes" style="background-color:${savedPalettes[i].colors[1].hex}"></div>
      <div class="mini-boxes" style="background-color:${savedPalettes[i].colors[2].hex}"></div>
      <div class="mini-boxes" style="background-color:${savedPalettes[i].colors[3].hex}"></div>
      <div class="mini-boxes" style="background-color:${savedPalettes[i].colors[4].hex}"></div>
      <img class="trashcan" id="${savedPalettes[i].id}" src="trash_icon.png" onclick="deleteSavedPalette(this.id)" alt="trash can icon">
    </section>
    `;
  };
};

function lockColor(event) {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if (event.target.id === `box${i}`) {
      currentPalette.lockColor(i);
    };
  };
};

function toggleLock() {
  for(var i = 0; i < lockedIcons.length; i++) {
    if(currentPalette.colors[i].locked === true) {
      lockedIcons[i].classList.remove('hidden');
      unlockedIcons[i].classList.add('hidden');
  } if(currentPalette.colors[i].locked === false) {
      lockedIcons[i].classList.add('hidden');
      unlockedIcons[i].classList.remove('hidden');
    };   
  };
};

function newHexCode() {
  var hexCode = '';
  var hexData = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
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