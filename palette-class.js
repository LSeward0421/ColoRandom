class Palette {
    constructor() {
        this.id = Date.now();
        this.colors = this.generateColors();
    };

    generateColors() {
        var colors = [];
        for (var i = 0; i < 5; i++) {
            colors.push(new Color());
        };
        return colors;
    };

    lockColor(i) {
        if (!this.colors[i].locked) {
            this.colors[i].locked = true
        } else {
            this.colors[i].locked = false
        };
    };

    replaceColor() {
        for (var i = 0; i < this.colors.length; i++) {
            if (!this.colors[i].locked) {
                this.colors[i] = new Color();
            };
        };
        return this.colors
    };
};
