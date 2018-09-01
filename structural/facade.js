/**
 * Facade pattern
 * object-based
 *
 * It is used to provide a unified and simpler public facing interface for ease of use
 * that shields away from the complexities of its consisting subsystems or subclasses.
 * The use of this pattern is very common in libraries like jQuery.
 */
class ShopFacade {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount {
  calc(value) { return value * 0.9 }
}

class Shipping {
  calc() { return 5 }
}

class Fees {
  calc(value) { return value * 1.05 }
}

const shop = new ShopFacade();
shop.calc(100)