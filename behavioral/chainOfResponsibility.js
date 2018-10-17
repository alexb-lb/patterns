/**
 * Chain of responsibility pattern
 *
 * Provides a chain of loosely coupled objects.
 * Each of these objects can choose to act on or handle the request of the client.
 *
 * Example of the chain of responsibility pattern is the event bubbling in DOM in which an event propagates through
 * a series of nested DOM elements, one of which may have an “event listener” attached to listen and act on the event.
 *
 * This is a common pattern that can be seen in jQuery as well where almost any method call on a jQuery object
 * returns a jQuery object so that method calls can be chained together.
 */

class CumulativeSum {
  constructor(initialValue = 0) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

// usage
const sum = new CumulativeSum();
console.log(sum.add(10).add(2).add(50).sum); // 62