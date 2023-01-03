class Palette {
    constructor() {
        this.id = Date.now();
        this.colors = [];
    };
    generateColors() {
        for (var i = 0; i < 5; i++) {
            this.colors.push(new Color());
        };
    };
    generateNewColor() {
        for (var i = 0; i < this.colors.length; i++) {
            if (!this.colors[i].locked) {
            }
        }
    }
};



// what id we changed the hex code with interpolation 

// Palatte should have: 5 colors, unique ID, able to replace colors w/ new colors, able to lock colors, only replace unlocked colors

// if all new colors are unlocked then run generate colors 
// if something is locked, then we need those colors to change