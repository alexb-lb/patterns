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

// Класс создателя должен иметь специальный метод, который
// сохраняет состояние создателя в новом объекте-снимке.
class OriginatorEditor {
  constructor(){
    this.position = {x: 0, y: 0};
    this.text = '';
  }
  setCursor(x, y) { this.position = {x, y} }
  setText(text) { this.text = text }

  createSnapshot(){
    // Снимок — неизменяемый объект, поэтому Originator
    // передаёт все своё состояние через параметры конструктора.
    return new Memento(this)
  }
}


// Снимок хранит прошлое состояние редактора.
class Memento {
  constructor (editor) {
    this._editor = editor;
    this._text = editor.text;
    this._position = editor.position
  }

  // В нужный момент владелец снимка может восстановить состояние редактора.
  restore() {
    this._editor.setCursor(this._position.x, this._position.y);
    this._editor.setText(text);
  }
}

// Как Caretaker может выступать Command. В этом случае команда сохраняет снимок состояния
// объекта-получателя, перед тем как передать ему своё действие.
// А в случае отмены команда вернёт объект в прежнее состояние.
class CaretakerCommand {
  constructor(editor){
    this._backup = null;
    this._editor = editor;
  }
  // backup into history
  makeBackup() {
    this._backup = this._editor.createSnapshot();
  }

  // restore from history
  undo(){
    if (this._backup != null) this._backup.restore();
  }
}

/**
 * Example 2
 */
class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  save(val) { return new Memento(val) },
  restore(memento) { return memento.value }
};

const CareTaker = {
  values: [],

  addMemento(val) {
    const memento = originator.save(val);
    this.values.push(memento)
  },
  getMemento(index) {
    const memento = this.values[index];
    return originator.restore(memento);
  }
};

CareTaker.addMemento('first value');
CareTaker.addMemento('second value');
console.log(CareTaker);
console.log(CareTaker.getMemento(1));


/**
 * Exmaple 3
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