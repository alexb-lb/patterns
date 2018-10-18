/**
 * Mediator pattern
 *
 * Allows us to expose a unified interface through which the different parts of a system may communicate.
 *
 * The Mediator promotes loose coupling by ensuring that instead of components referring to each other explicitly,
 * their interaction is handled through this central point. This can help us decouple systems and improve
 * the potential for component reusability.
 */

class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

const tower = new TrafficTower();
const plane = new Airplane({lat: 123123, lng: 1213213}, tower);
