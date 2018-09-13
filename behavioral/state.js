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
    currentState.go();
  };

  this.start = function () {
    currentState.go();
  };
};

const Red = function (light) {
  this.light = light;

  this.go = function () {
    log.add("Red --> for 1 minute");
    light.change(new Green(light));
  }
};

const Yellow = function (light) {
  this.light = light;

  this.go = function () {
    log.add("Yellow --> for 10 seconds");
    light.change(new Red(light));
  }
};

const Green = function (light) {
  this.light = light;

  this.go = function () {
    log.add("Green --> for 1 minute");
    light.change(new Yellow(light));
  }
};

// log helper
const log = (function () {
  let log = "";

  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { alert(log); log = ""; }
  }
})();

function run() {
  const light = new TrafficLight();
  light.start();

  log.show();
}