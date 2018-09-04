/**
 * Abstract Factory pattern
 * Object-based
 *
 * The Abstract Factory Pattern provides an interface for creating families of related or dependent objects
 * without specifying their concrete classes.
 *
 * The important point here is the word “families”. Continuing with our example it could be implemented in ES6 as
 * an “interface” (a class) and many “concrete classes” (sub-classes). In TypeScript (as in c#) the interface exists as
 * a definition (without any implementation) and classes implement it. But in JS (including ES6) they don’t,
 * that’s why we use a class and sub-classes that extend it. So we could have the sub-classes “Administrator”, “Editor”,
 * “Publisher”, etc.
 */

class User {
  constructor(){
    this._canEditEverything = false;
  }
  get canEditEverything() { return this._canEditEverything; }
}
//Sub-class
class Administrator extends User {
  constructor() {
    super();
    this._canEditEverything = true;
  }
}
//Instatiation
let u2 = new Administrator();
u2.canEditEverything; //true


/**
 * Example 2 - abstract factory as factory for factory
 * In the real world, the build, createDoor and other methods are different
 */
class carFactory {
  constructor (model) {
    let car;

    switch(model) {
      case 'Cayman':
        car = new Cayman();
        break;
      case 'Panamera':
        car = new Panamera();
        break;
      default:
        car = new Cayman();
        break;
    }

    if (typeof car.printModel === 'undefined') {
      car.printModel = function () {
        console.log('This car model is:', car.model);
      }
    }

    return car;
  }
}

class Cayman {
  constructor(){
    this.model = 'Cayman';

    this.createDoor = function (side) {
      return CaymanDoor(side);
    };
  }
}

class Panamera {
  constructor(){
    this.model = 'Panamera';

    this.createDoor = function (side) {
      return PanameraDoor(side);
    };
  }
}

function CaymanDoor(side) {
  const build = function() {
    console.log(`Build a ${side} door for Cayman`);
  };

  return {
    build: build
  }
}

function PanameraDoor(side) {
  const build = function() {
    console.log(`Build a ${side} door for Panamera`);
  };

  return {
    build: build
  }
}


const factory = new carFactory();

const panameraCar = factory.createCar('Panamera');

panameraCar.printModel();
panameraCar.createDoor('right').build();
panameraCar.createDoor('left').build();
