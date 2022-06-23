
/* take this out to work on prototypes
function dogCatcher(obj) {
    if (obj instanceof Dog) {
        return true;
    };  
} */

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let meow = new Cat("Meow", "Siamese", 10);
let whiskers = new Cat("Whiskers", "Mixed", 12);
/*
let fido = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
}; */

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight); 
    this.handler = handler;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() { 
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function() {
    console.log("Run!");
};

Dog.prototype.wag = () => 
    console.log("Wag!");

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = () => console.log("Stack");
ShowDog.prototype.bait = () => console.log("Bait");
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
} 
ShowDog.prototype.groom = () => console.log("Groom");

let barnaby = new Dog("Barnaby", "Basset Hound", 55);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
    console.log(this.name + " says WOOF!");
}
let ferdy = new Dog("Ferdy", "Mixed", 38);
let fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) { 
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) { 
    console.log("Fido is a ShowDog");
}

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) { 
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) { 
    console.log("Scotty is a ShowDog");
}

let bowwow = new ShowDog("Bow Wow", "Pitbull", 100, "Steve-O");
let dogs = [meow, whiskers, fido, fluffy, spot];

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

barnaby.sit();
spot.sit();
barnaby.sit();
ferdy.sit();
spot.sit();

ferdy.bark();
ferdy.run();
ferdy.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

scotty.stack();
scotty.gait("Runn")
scotty.bark();

bowwow.gait("Walk");
bowwow.sit();
bowwow.groom();

/* took this out to work on prototypes 
for (let i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
} */