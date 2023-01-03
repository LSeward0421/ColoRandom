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
};


// Be able to lock colors