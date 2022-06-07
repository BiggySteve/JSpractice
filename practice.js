var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertable: false,
    mileage: 12892,
    started: false,
    fuel: 0,

    start: function() {
        if (this.fuel == 0) {
            alert("The car is on empty. Fill it up before starting!")
        } else {
            this.started = true;
        }
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            } 
        }    else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertable: false,
    mileage: 1021,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertable: false,
    mileage: 281341,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

cadi.start();
cadi.drive();
cadi.stop();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();

