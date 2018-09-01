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
    this.create = function (type){
      let machine;
      // subclasses has the same interface
      if (type === 'auto') machine = new Automobile(4, 500);
      if (type === 'moto') machine = new Motorcycle(2, 200);

      machine.start = function (){ };
      machine.stop = function (){ };
      return machine;
    }
  }
}

class Automobile {
  constructor(wheels, hp) {
    this.wheels = wheels;
    this.horsePower = hp;

    this.turnOn4x4 = function (){ };
  }
}

class Motorcycle {
  constructor(wheels, hp) {
    this.wheels = wheels;
    this.horsePower = hp;
    // subclasses can have differ methods
    this.rideOnRearWheel = function (){ }
  }
}

const factory = new MachineFactory();

const bike = factory.create('moto');
const car = factory.create('auto');

bike.start();
bike.rideOnRearWheel();

car.start();
car.turnOn4x4();