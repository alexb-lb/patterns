/**
 * Singleton pattern
 * object-based
 *
 * In this pattern only one instance of a class can exist.
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