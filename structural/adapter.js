/**
 * Adapter pattern
 * class-based
 *
 * This pattern lets classes work together that could not otherwise because of incompatible interfaces.
 * It often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them.
 * This is usually done when new implementations or code refactoring
 */
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return term1 + term2;
        case 'sub':
          return term1 - term2;
        default:
          return NaN;
      }
    }
  }
}

class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };

    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

class CalculatorAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return newCalc.add(term1, term2);
        case 'sub':
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    }
  }
}

adapter = new CalculatorAdapter();
adapter.operations(5, 10, 'add');