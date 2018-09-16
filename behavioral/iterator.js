/**
 * Iterator pattern
 *
 * Provide a way to access the elements of an aggregate object sequentially
 * without exposing its underlying representation.
 *
 * Example - .each method in jQuery, which can iterate both arrays and objects
 */
class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }

  next() { return this.items[this.index++] }

  hasNext() { return this.index <= this.items.length }

  reset(){ this.index = 0 }

  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

const items = ["one", 2, "circle", true, "Applepie"];
const iterator = new Iterator(items);

// using for loop
for (let item = iterator.first(); iterator.hasNext(); item = iterator.next()) {
  console.log(item)
}

// using Iterator's each method
iterator.each(item => console.log(item));