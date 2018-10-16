/**
 * Decorator pattern
 * object-based
 *
 * Add behaviour or functionalities to existing classes dynamically, alternative to sub-classing.
 * The decorator type behaviour is very easy to implement in JavaScript
 * because JavaScript allows us to add methods and properties to object dynamically.
 *
 * Decorator allows to extend interface of the decorated class
 */

// Example 1
class User {
  constructor(name) {
    this.name = name;
  }

  say(){ return 'User: ' + this.name }
}

class DecoratedUser {
  constructor(userObj, street, city){
    this.name = userObj.name;  // ensures interface stays the same
    this.street = street; // extend interface
    this.city = city; // extend interface
  }

  say(){ return `Decorated User: ${this.name}, ${this.street}, ${this.city}` }
}

const user = new User("Kelly");
console.log(user.say());

const decorated = new DecoratedUser(user, "Broadway", "New York");
console.log(decorated.say());


/**
 * My example
 */
const calculator = {
  sum: 0,
  add(a, b) { this.sum = a + b }
};

// prototype inheritance decorator
const calculatorMultipleDecorator = Object.assign(calculator, {
  multiple(number){ this.sum = this.sum * number },
});

// decorator as function to save memory
const calculatorSubtractDecorator = (calcObj, number) => {
  calcObj.sum = calcObj.sum - number;
};

calculator.add(2, 3);
console.log(calculator.sum);

calculatorMultipleDecorator.multiple(5);
console.log(calculator.sum);

calculatorSubtractDecorator(calculatorMultipleDecorator, 5);
console.log(calculator.sum);