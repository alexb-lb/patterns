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
const User = function(name) {
  this.name = name;

  this.say = function() {
    log.add("User: " + this.name);
  };
};

const DecoratedUser = function(user, street, city) {
  this.user = user;
  this.name = user.name;  // ensures interface stays the same
  this.street = street; // extend interface
  this.city = city; // extend interface

  this.say = function() {
    log.add("Decorated User: " + this.name + ", " +
      this.street + ", " + this.city);
  };
};

// logging helper
const log = (function() {
  let log = "";

  return {
    add: function(msg) { log += msg + "\n"; },
    show: function() { alert(log); log = ""; }
  }
})();

function run() {
  const user = new User("Kelly");
  user.say();

  const decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.say();

  log.show();
}


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

const logList = [];
work = makeLogging(work, logList);

work(1); // 1
work(5); // 5