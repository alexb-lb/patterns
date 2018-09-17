/**
 * Memento pattern
 *
 * Without violating encapsulation, capture and externalize an object's internal state
 * so that the object can be restored to this state later.
 *
 * The Memento pattern provides temporary storage as well as restoration of an object.
 * The mechanism in which you store the object’s state depends on the required duration of persistence,
 * which may vary.
 */

class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store(val) { return new Memento(val) },
  restore(memento) { return memento.value }
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) { this.values.push(memento) }
  getMemento(index) { return this.values[index] }
}


/**
 * Exmaple 2
 * In JavaScript Mementos are easily implemented by serializing and de-serializing objects with JSON.
 */
class Person {
  constructor(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  hydrate() {
    return JSON.stringify(this)
  }

  dehydrate(memento) {
    const m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

const CareTaker = {
  mementos: {},
  add(key, memento) {
    this.mementos[key] = memento
  },
  get(key) {
    return this.mementos[key]
  }
};

const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
const john = new Person("John Wang", "48th Street", "San Jose", "CA");

// save
CareTaker.add(1, mike.hydrate());
CareTaker.add(2, john.hydrate());

// mess up their names
mike.name = "King Kong";
john.name = "Superman";
console.log('Mike\'s name: ', mike.name);
console.log('John\'s name: ', john.name);

// restore original state
mike.dehydrate(CareTaker.get(1));
john.dehydrate(CareTaker.get(2));
console.log('Mike\'s name: ', mike.name);
console.log('John\'s name: ', john.name);