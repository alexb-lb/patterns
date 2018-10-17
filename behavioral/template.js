/**
 * Template pattern
 *
 * Defines the skeleton of the algorithm or implementation of an operation, but deferring some steps to subclasses.
 * It lets subclasses redefine certain steps of an algorithm without changing the algorithm’s outward structure.
 */

class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  work() {
    this.enterTheOffice();
    this.prepareToWork();
    this.talkWithTeamLead()
  }
  // Some of these steps may be implemented right in a base class.
  enterTheOffice(){
    return this._name + ' enters an office'
  }

  // And some of them may be defined as abstract.
  prepareToWork(){ }
  talkWithTeamLead(){ }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  prepareToWork() {
    return 'Make coffee and start PC';
  }

  // details handled by subclass
  talkWithTeamLead() {
    return 'Go to talk with C.J.';
  }
}

// usage
const dev = new Developer('Nathan', 100000);
console.log(dev.work());