/**
 * Strategy pattern
 *
 * Behavioral design pattern that lets you define a family of algorithms,
 * encapsulate each one, and make them interchangeable.
 * Strategy lets the algorithm vary independently from the clients that use it.
 *
 * The Strategy pattern encapsulates alternative algorithms (or strategies) for a
 * particular task. It allows a method to be swapped out at runtime by any other
 * method (strategy) without the client realizing it.
 * Essentially, Strategy is a group of algorithms that are interchangeable.
 */

// strategies
const strategyBubbleSort =  {
  execute: function (dataset){
    // ..sorting with bubble sort
    console.log('sorted by bubble sort dataset');
  }
};
const strategyQuickSort = {
  execute: function (dataset){
    // ..sorting with quick sort
    console.log('quick sorted dataset');
  }
};

// Context (as a client) always works with strategies through a common interface.
// It does not know or care which  strategy is currently active.
const context = {
  _strategy: {},

  setStrategy: function (strategy){
    this._strategy = strategy;
  },

  executeStrategy: function (array){
    return this._strategy.execute();
  }
};

// The concrete strategy is picked on a higher level (for example, by application config)
// and passed to the client object.
// At any time, the strategy object can be replaced by a different strategy.
const sorter = dataset => {
  if(dataset.length > 5){
    context.setStrategy(strategyQuickSort);
  } else {
    context.setStrategy(strategyBubbleSort);
  }

  return context.executeStrategy(dataset)
};

// And it can be used as
const longDataSet = [1, 5, 4, 3, 2, 8];
const shortDataSet = [1, 5, 4];

const quickSorter = sorter(longDataSet);
const bubbleSorter = sorter(shortDataSet);

quickSorter(longDataSet); // Output : Sorting with quick sort
bubbleSorter(shortDataSet); // Output : Sorting with bubble sort