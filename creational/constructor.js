/**
 * Constructor pattern or Simple factory
 * class-based
 *
 * A simple factory is an object which encapsulates the creation of another object.
 *
 * Constructors are special functions that can be used to instantiate new objects
 * with methods and properties defined by that function.
 *
 * It is not one of the classic design patterns. In fact, it is more of a basic language construct
 * than a pattern in most object-oriented languages.
 * But in JS, objects can be created on the fly without any constructor functions or "class" definition.
 */
class Hero {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;

    this.getDetails = function (){
      return `${this._name} can ${this._specialAbility}`
    }
  }
};
const Superman = new Hero('Superman', 'fly');
Superman.getDetails();