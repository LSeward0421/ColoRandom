class Palette {
    constructor() {
        this.id = Date.now();
        this.colors = [new Color(), new Color(), new Color(), new Color(), new Color()];
    };

    generateColors() {
        for (var i = 0; i < 5; i++) {
            this.colors.push(new Color());
        };
    };

    lockColor(colorObj) {
        this.colors[colorObj].locked = true;
    }

    replaceColor() {
        this.colors[3].locked = true;
        console.log(this.colors[3])
        for (var i = 0; i < this.colors.length; i++) {
            if (!this.colors[i].locked) {
                this.colors[i] = new Color();
                // this.colors.splice(i, 1, new Color()); 
            };
        }
    };
};


// Palatte should have: 5 colors, unique ID, able to replace colors w/ new colors, able to lock colors, only replace unlocked colors

// if all new colors are unlocked then run generate colors 
// if something is locked, then we need the unlocked colors to change