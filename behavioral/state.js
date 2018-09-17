/**
 * State pattern
 *
 * It is a behavioural design pattern that allows an object to alter its behaviour based on changes to its internal state.
 * The object returned by a State pattern class seems to change its class. It provides state-specific logic to a
 * limited set of objects in which each object type represents a particular state.
 */
const TrafficLight = function () {
  let count = 0;
  let currentState = new Red(this);

  this.change = function (state) {
    // limits number of changes
    if (count++ >= 10) return;
    currentState = state;
    currentState.start();
  };

  this.start = function () {
    currentState.start();
  };
};

class Red {
  constructor(light){
    this.light = light;
  }
  start(){
    console.log("Red --> for 1 minute");
    this.light.change(new Green(this.light));
  }
}

class Green {
  constructor(light){
    this.light = light;
  }
  start() {
    console.log("Green --> for 1 minute");
    this.light.change(new Yellow(this.light));
  }
}

class Yellow  {
  constructor(light){
    this.light = light;
  }
  start() {
    console.log("Yellow --> for 10 seconds");
    this.light.change(new Red(this.light));
  }
}

const light = new TrafficLight();
light.start();