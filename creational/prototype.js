/**
 * Prototype pattern
 * object-based
 *
 * We use a sort of a “skeleton” of an existing object to create or instantiate new objects.
 *
 * This pattern is specifically important and beneficial to JavaScript because it utilizes
 * prototypal inheritance instead of a classic object-oriented inheritance.
 * Hence, it plays to JavaScript’s strength and has native support.
 */

const Car = {
  start() {  },
  stop() {  },
};

// new method added - "turbo" function
const bmw = Object.create(Car, {turbo: () => { }});
console.log(bmw.__proto__); // Car

// Also we can implement this pattern through class, in that case there is no difference between "constructor" pattern
  class Sheep {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }

    clone() {
      return new Sheep(this.name, this.weight);
    }
  }
const dolly = Sheep.clone("Dolly", 60);
