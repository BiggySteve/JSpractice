function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else {
            return "large";
        }
    };
    this.toString = function() {
        return 'You have ordered a ' + this.getSize() + ' ' + this.roast + ' coffee.';
    };
}

let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());

let black = new Coffee("Black", 8);
console.log(black.toString());