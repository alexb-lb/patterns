/**
 * Factory pattern
 * class-based
 *
 * It provides a generic interface that delegates the responsibility of object instantiation to its subclasses.
 * This pattern is frequently used when we need to manage or manipulate collections of objects
 * that are different yet have many similar characteristics.
 */
class MachineFactory {
  constructor() {
    this.create = function (type) {
      let machine;
      // subclasses have the same interface
      if (type === 'auto') machine = new Automobile(4, 500);

      machine.start = function () { };
      machine.stop = function () { };
      return machine;
    }
  }
}

class Automobile {
  constructor(wheels, hp) {
    this.wheels = wheels;
    this.horsePower = hp;
    // subclasses can have differ methods
    this.turnOn4x4 = function () { };
  }
}

const factory = new MachineFactory();

const car = factory.create('auto');
car.start();
car.turnOn4x4();


/**
 * Example 2 - factory as prototype for subclasses. Used in React.js
 *
 * Factory Method defines one method, createThing for instance, which is overriden by subclasses who decide
 * what to return. The Factories and Products must conform to interfaces for clients to be able to use them.
 */
class User {
  constructor() {
    this._canEditEverything = false;
  }

  get canEditEverything() {
    return this._canEditEverything;
  }
}
//Sub-class
class Administrator extends User {
  constructor() {
    super();
    this._canEditEverything = true;
  }
}
//Instantiation
let u2 = new Administrator();
u2.canEditEverything; //true