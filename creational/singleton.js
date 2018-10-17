/**
 * Singleton pattern
 * object-based
 *
 * Ensure a class has only one instance and provide a global point of access to it.
 *
 * If no instance of the singleton class exists then a new instance is created and returned
 * but if an instance already exists then the reference to the existing instance is returned.
 *
 * This pattern using in Mongoose
 *
 * Use of this pattern doesn't recommend in JS and usually indicates that we need to architecture refactor.
 * This may indicate that modules have high coupling and Singleton usage may produce bugs if application
 * works in multithreading
 */
class Database {
  constructor(data) {
    if (Database.exists) return Database.instance;

    this._data = data;
    // Вместо this используем только имя класса!
    // Иначе каждый раз будут создаваться новые обьекты
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData(){ return this._data }
  setData(data){ this._data = data}
}

const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo;

/**
 * Example 2. Singleton like factory from addyosmani.com
 * When the sole instance should be extensible by subclassing, and clients should be able to use
 * an extended instance without modifying their code.
 **/
class SingletonFactory {
  constructor(type){
    if ( this._instance === null ) {
      if (type === 'foo') {
        this._instance = new FooSingleton();
      } else {
        this._instance = new BasicSingleton();
      }
    }
    return this._instance;
  }
};

/**
 * Example 3. Singleton in Function Expression (Module-like)
 */
const SingletonModule = (function () {

  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {
    options = options || {};
    // set some properties for our singleton
    this.name = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  let instance;

  // an emulation of static variables and methods
  return {
    name: "SingletonTester",
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }
      return instance;
    }
  };
})();

const singletonTest = SingletonModule.getInstance({ pointX: 5 });
console.log( singletonTest.pointX ); // Log the output of pointX just to verify it is correct