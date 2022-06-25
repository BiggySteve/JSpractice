function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

function Game() {
    this.level = 0;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.speak = function() {
    alert("Warning, warning!!");
};

Robot.prototype.makeCoffee = function() {
    alert("Let me serve you some coffee!");
};

Robot.prototype.blinkLights = function() {
    alert("Blink blink!");
};

Robot.prototype.reportError = function() {
    console.log(this.name + " says " + this.errorMessage);
};

Robot.prototype.spillWater = function() {
    this.errorMessage = "I appear to have a short circuit!"
};

Robot.prototype.toString = function() {
    return this.name + " Robot belonging to " + this.owner;
};

SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = () => alert(this.name + " says Sir, If I may venture an opinion...");
SpaceRobot.prototype.pilot = () => alert(this.name + " says Thrusters? Are they important?");

Game.prototype.play = function() {
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
};

Game.prototype.unlock = function() {
    if (this.level === 42) {
        Robot.prototype.deployLaser = function() {
            console.log(this.name + " is blasting you with laser beams.");
        }
    }
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
console.log(robby.toString());
console.log("Robot is: " + robby);
let rosie = new Robot("Rosie", 1962, "George Jetson");
let c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
let simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
let game = new Game();

while (game.level < 42) {
    game.play();
}

robby.onOffSwitch = true;
robby.makeCoffee = function() {
    alert("Let me run to Starbucks really quick!");
};

rosie.cleanHouse = function() {
    alert("The house will be shiny soon!");
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
robby.deployLaser();
robby.reportError();
robby.spillWater();
robby.reportError();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
rosie.deployLaser();
rosie.reportError();
rosie.reportError();

c3po.speak();
c3po.pilot();

simon.makeCoffee();
simon.blinkLights();
simon.speak();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));
console.log(c3po.name + " was made by " + c3po.maker);