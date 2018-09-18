/**
 * Flyweight pattern
 * object-based
 *
 * Pattern focused on efficient data sharing through fine-grained objects.
 * It is used for efficiency and memory conservation purposes.
 *
 * This pattern can be used for any kind of caching purposes.
 * In fact, modern browsers use a constiant of flyweight pattern to prevent loading same images twice.
 */

class Flyweight {
  constructor(make, model, processor){
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
}

const FlyWeightFactory = {
  _flyweights: {},

  get(make, model, processor) {
    if (!this._flyweights[make + model]) {
      this._flyweights[make + model] =
        new Flyweight(make, model, processor);
    }
    return this._flyweights[make + model];
  },

  getCount() {
    let count = 0;
    for (const f in this._flyweights) count++;
    return count;
  },
};

class Computer {
  constructor(make, model, processor, memory, tag){
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
  }

  getMake() { return this.flyweight.make }
  // ...
}

class ComputerCollection {
  constructor() {
    this._computers = {};
    this._count = 0;
  }

  add(make, model, processor, memory, tag) {
    this._computers[tag] = new Computer(make, model, processor, memory, tag);
    this._count++;
  }

  get(tag) { return this._computers[tag] }
  getCount() { return this._count }
}

const computers = new ComputerCollection();
computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());