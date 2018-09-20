/**
 * Visitor pattern
 *
 * Represent an operation to be performed on the elements of an object structure.
 * Visitor lets you define a new operation without changing the classes of the
 * elements on which it operates.
 *
 * Visitors are useful when building extensibility in a library or framework.
 * If the objects in your project provide a 'visit' method that accepts a
 * Visitor object which can make changes to the receiving object then you are
 * providing an easy way for clients to implement future extensions.
 *
 * In most programming languages the Visitor pattern requires that the original
 * developer anticipates functional adjustments in the future.
 * This is done by including methods that accept a Visitor and let it operate
 * on the original collection of objects.
 *
 * Visitor is not important to JavaScript because it offers far more flexibility
 * by the ability to add and remove methods at runtime.
 */

const Employee = function (name, salary, vacation) {
  const self = this;

  // encapsulated methods
  this.accept = function (visitor) {
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };

  this.getVacation = function () {
    return vacation;
  };

  this.setVacation = function (vac) {
    vacation = vac;
  };
};

const ExtraSalary = function () {
  this.visit = function (emp) {
    // visitor can access encapsulated methods and fields
    emp.setSalary(emp.getSalary() * 1.1);
  };
};

const ExtraVacation = function () {
  this.visit = function (emp) {
    emp.setVacation(emp.getVacation() + 2);
  };
};


const employees = [
  new Employee("John", 10000, 10),
  new Employee("Mary", 20000, 21),
  new Employee("Boss", 250000, 51)
];

const visitorSalary = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (let i = 0, len = employees.length; i < len; i++) {
  const emp = employees[i];

  emp.accept(visitorSalary);
  emp.accept(visitorVacation);
  console.log(emp.getName() + ": $" + emp.getSalary() +
    " and " + emp.getVacation() + " vacation days")
}