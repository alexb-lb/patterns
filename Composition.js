/**
 * Acquaintance
 * loose relationship
 * loose relationship between two objects, which may interact with each other for some time.
 * They are not dependent on each other - if one object is destroyed, the other can continue to exist,
 * and there can be any number of each item in the relationship.
 * One object does not belong to another, and they may have numbers that are not tied to each other.
 */
const object1 = {
  play() {
    return 'playing'
  }
};

const object2 = {
  playWithSound: object1.play,
};

object2.playWithSound();

/**
 * Delegation
 * weak relationship
 * Whole "has-a" parts that belong to it. Parts may be shared among wholes in this relationship.
 * Delegation relationships are typically weak, however. This means that although parts can
 * belong to wholes, they can also exist independently.
 */
const requestHandler = (req, logger) => {
  const data =  req.body;
  logger.write(new Date.now(), data, this)
};

const logger = {
  write (date, reqData, director){
    return console.log(reqData + ' received at ' + date)
  }
};

requestHandler({body: 'hi!'}, logger);

/**
 * Aggregation (composition)
 * strong  relationship
 * Is one of the most dependent of the decomposition relationships.
 * This relationship is an exclusive containment of parts, otherwise known as a strong “has-a” relationship.
 * In other words, a whole cannot exist without its parts, and if the whole is destroyed,
 * then the parts are destroyed too. In this relationship, you can typically only access the parts
 * through its whole. Contained parts are exclusive to the whole. An example of a composition relationship
 * is between a house and a room. A house is made up of multiple rooms, but if you remove the house,
 * the room no longer exists.
 */
const aggregator = {
  age: 21,
  name: 'Alex',
  location: {
    city: 'Kyiv',
    address: 'Khreschatic, 28'
  }
};

/**
 * Example 2: brain cannot exists without human and when human destroys, brain will be destroyed too
 */
class Brain {}

class Human {
  constructor(){
    this.brain = new Brain();
  }
}