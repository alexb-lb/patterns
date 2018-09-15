/**
 * Mediator pattern
 *
 * Allows us to expose a unified interface through which the different parts of a system may communicate.
 *
 * The Mediator promotes loose coupling by ensuring that instead of components referring to each other explicitly,
 * their interaction is handled through this central point. This can help us decouple systems and improve
 * the potential for component reusability.
 *
 * Analogy would be DOM event bubbling and event delegation.
 * If all subscriptions in a system are made against the document rather than individual nodes,
 * the document effectively serves as a Mediator. Instead of binding to the events of the individual nodes,
 * a higher level object is given the responsibility of notifying subscribers about interaction events.
 */
class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
}

class Chatroom {
  constructor() {
    this.participants = [];
  }

  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      // single message
      to.receive(message, from);
    } else {
      // broadcast message
      for (let key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}

const yoko = new Participant("Yoko");
const john = new Participant("John");

const chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);

yoko.send("All you need is love.");
john.send("Hey, no need to broadcast", yoko);