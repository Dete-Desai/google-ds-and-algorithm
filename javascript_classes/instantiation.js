// Instantiation of a class in JavaScript

class Player {
  constructor(name, type) {
    // constructor method to initialize new objects
    this.name = name; // 'this' refers to the instance being created
    this.type = type; // setting properties on the instance
  }

  introduce() {
    // method to introduce the player
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`); // using template literals for string interpolation
  }
}

class Wizard extends Player {
  // Wizard class inherits from Player
  constructor(name, type) {
    super(name, type); // calling the parent class constructor
    console.log("Wizard", this); // logging the instance to show inheritance
  }

  Play() {
    // method specific to Wizard
    console.log(`WEEEEEE I'm a ${this.type}`); // method implementation
  }
}

const wizard1 = new Wizard("Shelly", "Healer"); // creating a new instance of Wizard
const wizard2 = new Wizard("Shawn", "Dark Magic"); // creating another instance of Wizard

wizard1.introduce(); // calling the introduce method on wizard1
wizard2.introduce(); // calling the introduce method on wizard2
wizard1.Play(); // calling the Player method on wizard1

// The above code demonstrates class instantiation, inheritance, and method definitions in JavaScript.
