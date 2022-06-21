let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let taxiParams = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

let fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

let testCarParams = {
    make: "Webville Motors",
    model: "Test Car",
    year: 2014,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21
};

let limoParams = {
    make: "Webville Motors",
    model: "Limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

function CreateCar(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    }

    this.stop = function() {
        this.started = false;
    }

    this.drive = function() {
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes Zoom Zoom!');
        } else {
            console.log('Start the engine first!');
        }
    }
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

let chevy = new CreateCar(chevyParams);
let cadi = new CreateCar(cadiParams);
if (cadi instanceof CreateCar) {
    console.log("Congrats, it's a Car!");
} //displays first in the console
let taxi = new CreateCar(taxiParams);
let fiat = new CreateCar(fiatParams);
let testCar = new CreateCar(testCarParams);
let limo = new CreateCar(limoParams);
let limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

let cars = [chevy,cadi, taxi, fiat, testCar, limo];
for(let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

console.log(limo.make + " " + limo.model + " is an " + typeof limo);
console.log(limoDog.name + " is an " + typeof limoDog);