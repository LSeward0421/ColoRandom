// functions below 👇

var currentPalette = new Palette();
console.log(currentPalette);

// var color1 = new Color();

// currentPalette.colors.push(color1);
// console.log(currentPalette)
// currentPalette.lockColor(currentPalette.colors[0]);
// console.log(currentPalette);

// function createNewPalette() {
//   currentPalette = new Palette;
//   currentPalette.generateColors();
//   return currentPalette;
// }



setTimeout(() => {
  currentPalette.replaceColor()
  console.log(currentPalette);
}, 2000)



function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
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

