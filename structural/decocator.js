/**
 * Decorator pattern
 * object-based
 *
 * Add behaviour or functionalities to existing classes dynamically, alternative to sub-classing.
 * The decorator type behaviour is very easy to implement in JavaScript
 * because JavaScript allows us to add methods and properties to object dynamically.
 *
 * In this example, we create a Book class. We further create two decorator functions that accept
 * a book object and returns a "decorated" book object — giftWrap that adds one new attribute
 * and one new function and hardbindBook that adds one new attribute and edits the value of one
 * existing attribute.
 */

// Example 1
class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this.price = price;
  }
  getDetails() { return `${this._title} by ${this._author}` }
}


// decorator
function hardbindBook(book) {
  book.isHardbound = true;
  book.price += 5;
  return book;
}

// usage
const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15));
console.log(inferno.isHardbound); // true
console.log(inferno.price); // 20


// Example 2 - logger
function work(a) {
  /*...*/ // work - random function with 1 parameter
}

function makeLogging(f, log) {

  function wrapper(a) {
    log.push(a);
    // bindindg context in 'this' needed if method passed with object, like:
    // user.method = makeLogging(user.method, log);
    return f.call(this, a);
  }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1
work(5); // 5