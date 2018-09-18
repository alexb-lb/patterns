/**
 * Adapter pattern
 * class-based
 *
 * Match interfaces of different classes therefore classes can work together despite incompatible interfaces
 *
 * This pattern lets classes work together that could not otherwise because of incompatible interfaces.
 * It often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them.
 * This is usually done when new implementations or code refactoring
 */

// old interface
class Shipping {
  request(zipStart, zipEnd, weight) {
    // ...
    return console.log("$49.75");
  }
}

// new interface
class AdvancedShipping {
  login(credentials) { };
  setStart(start) { };
  setDestination(destination) { };

  calculate(weight) {
    // ...
    return console.log("$39.50");
  };
}

// adapter interface
class ShippingAdapter {
  constructor(credentials) {
    this._shipping = new AdvancedShipping();
    this._shipping.login(credentials);
  }

  request(zipStart, zipEnd, weight) {
    this._shipping.setStart(zipStart);
    this._shipping.setDestination(zipEnd);
    return this._shipping.calculate(weight);
  }
}

// original shipping object and interface
const shipping = new Shipping();
let cost = shipping.request("78701", "10010", "2 lbs");

// new shipping object with adapted interface
const credentials = {token: "30a8-6ee1"};
const adapter = new ShippingAdapter(credentials);
cost = adapter.request("78701", "10010", "2 lbs");