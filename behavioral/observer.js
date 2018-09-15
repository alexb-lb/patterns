/**
 * Observer pattern
 *
 * Define a one-to-many dependency between objects so that when one object changes state,
 * all its dependents are notified and updated automatically.
 *
 * It is a crucial behavioural design pattern that defines one-to-many dependencies between objects
 * so that when one object (publisher) changes its state, all the other dependent objects (subscribers)
 * are notified and updated automatically. This is also called PubSub (Publisher/Subscribers) or
 * Event Dispatcher/Listeners Pattern. The Publisher is sometimes called Subject and the Subscribers are
 * sometimes called Observers.
 */

class Product {
  constructor() {
    this._price = 0;
    this._actions = [];
  }

  register(observer) {
    this._actions.push(observer);
  }

  unregister(observer) {
    this._actions.remove.filter(function (el) {
      return el !== observer;
    });
  }

  setBasePrice(val) {
    this._price = val;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(function (el) {
      el.update(this);
    }.bind(this));
  }
}

const fees = {
  update(product) {
    product.price = product.price * 1.2
  }
};

const profit = {
  update(product) {
    product.price = product.price * 2
  }
};

const product = new Product();
product.register(fees);
product.register(profit);

product.setBasePrice(115);