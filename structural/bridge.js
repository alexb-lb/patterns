/**
 * Bridge pattern
 * object-based
 *
 * Decouple an abstraction from its implementation so that the two can vary independently.
 *
 * The Bridge pattern allows two components, a client and a service, to work together with each component
 * having its own interface. Bridge is a high-level architectural pattern and its main goal is
 * to write better code through two levels of abstraction. It facilitates very loose coupling of objects.
 * It is sometimes referred to as a double Adapter pattern
 *
 * The objective of the example is to show that with the Bridge pattern input and output devices can
 * vary independently (without changes to the code); the devices are loosely coupled by two levels of abstraction.
 *
 * JavaScript does not support abstract classes therefore Abstraction and Implementor are not included.
 * However, their interfaces (properties and methods) are consistently implemented in
 * RefinedAbstraction and ConcreteImplementor. In example code the Abstraction represents Input devices
 * and the Implementor represents Output devices.
 *
 * Gestures (finger movements) and the Mouse are very different input devices, but their actions map to a
 * common set of output instructions: click, move, drag, etc. Screen and Audio are very different output devices,
 * but they respond to the same set of instructions. Of course, the effects are totally different, that is,
 * video updates vs. sound effects. The Bridge pattern allows any input device to work with any output device.
 */

// input devices
class Gestures {
  constructor(output) {
    this.output = output
  }

  tap() {
    this.output.click()
  };

  swipe() {
    this.output.move()
  };

  pan() {
    this.output.drag()
  };

  pinch() {
    this.output.zoom()
  };
}

class Mouse {
  constructor(output) {
    this.output = output;
  }

  click() {
    this.output.click();
  };

  move() {
    this.output.move();
  };

  down() {
    this.output.drag();
  };

  wheel() {
    this.output.zoom();
  };
}

// output devices
class Screen {
  constructor() {
    this.click = function () {
      console.log("Screen select")
    };
    this.move = function () {
      console.log("Screen move")
    };
    this.drag = function () {
      console.log("Screen drag")
    };
    this.zoom = function () {
      console.log("Screen zoom in")
    };
  }
}

class Audio {
  constructor() {
    this.click = function () {
      console.log("Sound oink")
    };
    this.move = function () {
      console.log("Sound waves")
    };
    this.drag = function () {
      console.log("Sound screetch")
    };
    this.zoom = function () {
      console.log("Sound volume up")
    };
  }
}

const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();

/**
 * Example 2
 *
 * The remote's base class has a field that contains a reference to a device object that it controls.
 * Remotes work with devices through a common interface. It allows one remote to work with several device types
 *
 * You can change remote control classes independently from the device classes. For instance, you could create
 * a simple remote with only two buttons or sophisticated remote with a touch screen.
 *
 * Thus, the Bridge pattern allows you to break an entity into several different ones and then evolve them
 * independently from each other. Client code also remains simple. It only needs to pick an abstraction and
 * configure it with one of the implementations.
 */

// Remotes contain references to the device they control.
// Remotes delegate most of the work to their device objects.
class Remote {
  constructor(device) {
    this.device = device
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10)
  }
  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10)
  }
  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1)
  }
  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1)
  }
}

// You can extend remotes' class hierarchy independently from devices' classes.
class AdvancedRemote extends Remote {
  constructor() {
    super();
  }
  mute() {
    this.device.setVolume(0)
  }
}


// All devices follow the common interface. It makes them compatible with all types of remotes.
class Device {
  isEnabled(){}
  enable(){}
  disable(){}
  getVolume(){}
  setVolume(percent){}
  getChannel(){}
  setChannel(channel){}
}

// but each concrete device has its own implementation.
class Tv extends Device {
  getChannel(){ console.log('TV channel: BBC')}
}

class Radio extends Device {
  getChannel(){ console.log('Radio channel: Electro Swing')}
}

// client code
tv = new Tv();
remote = new Remote(tv);

radio = new Radio();
remote = new AdvancedRemote(radio);