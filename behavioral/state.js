/**
 * State pattern
 *
 * It is a behavioural design pattern that allows an object to alter its behaviour based on changes to its internal state.
 * The object returned by a State pattern class seems to change its class. It provides state-specific logic to a
 * limited set of objects in which each object type represents a particular state.
 */
class TrafficLight  {
  constructor(){
    this.count = 0;
    this.currentState = new Red(this);
  }

  change (state) {
    // limits number of changes
    if (this.count++ >= 10) return;
    this.currentState = state;
    this.currentState.start();
  }

  start () { this.currentState.start() };
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