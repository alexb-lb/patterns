/**
 * Command pattern
 *
 * The Command pattern encapsulates actions as objects.
 * Command objects allow for loosely coupled systems by separating the objects
 * that issue a request from the objects that actually process the request.
 * These requests are called events and the code that processes the requests are called event handlers.
 *
 */
const carManager = {
  // public method
  execute: function ({commandName = '', carModel = '', carId = ''}){
    switch (commandName) {
      case 'requestInfo':
        console.log(this);
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

carManager.execute({commandName: "requestInfo", carModel: "Ford Mondeo", carId: "54323"});
carManager.execute({commandName: "buyVehicle", carModel: "Ferrari", carId: "14523"});

/// Another example - from Coursera
const Invoker = {
  paste: function (){
    PasteCommand.execute()
  }
};

const PasteCommand = {
  isReversible: true,

  execute: function (document, cursorPosition, text){
    document.insertText(cursorPosition, text);
  },

  unexecute: function (document, cursorPosition, text){
    document.deleteText(cursorPosition, text);
  },
};