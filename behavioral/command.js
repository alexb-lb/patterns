/**
 * Command pattern
 *
 * The Command pattern encapsulates actions as objects.
 * Command objects allow for loosely coupled systems by separating the objects
 * that issue a request from the objects that actually process the request.
 * These requests are called events and the code that processes the requests
 * are called event handlers.
 */

// command class
const carManager = {
  // public method
  execute: function ({commandName = '', carModel = '', carId = ''}){
    switch (commandName) {
      case 'requestInfo':
        this._requestInfo(carModel, carId);
        break;
      case 'buyVehicle':
        this._buyVehicle(carModel, carId);
        break;
      default:
        console.log('unknown request');
    }
  },

  // commands
  _requestInfo: function( model, id ){
    console.log("The information for " + model + " with ID " + id + " is foobar");
  },
  _buyVehicle: function( model, id ){
    console.log("You have successfully purchased Item " + id + ", a " + model);
  },
};

class Buyer {
  constructor(){ }
  watchCar (carModel, carId){
    carManager.execute({commandName: "requestInfo", carModel, carId});
  }
  buyCar (carModel, carId){
    carManager.execute({commandName: "buyVehicle", carModel, carId});
  }
}

const buyer = new Buyer();
buyer.watchCar('Ford Mondeo', 54323);
buyer.buyCar('Ferrari', 14523);


/**
 * My example
 * we can consider Command as a Controller between View and Model in MVC
 */
class Model {
  saveTextIntoDb(obj) { }
  deleteTextFromDb(textId) { }
}

class History {
  add(obj) { }
  get() { }
}

const saveText = (clientId, text, time) => {
  const realization = Model;
  const history = History;

  // ... some logic, for example, we can add our command to history for possibility to rollback changes
  history.add({clientId, text, time});
  // save into DB
  realization.save({clientId, text, time});
};

// client
button.on('click', saveText(123, 'Hello!!', 2342342321123));