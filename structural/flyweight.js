/**
 * Flyweight pattern
 * object-based
 *
 * Pattern focused on efficient data sharing through fine-grained objects.
 * It is used for efficiency and memory conservation purposes.
 *
 * This pattern can be used for any kind of caching purposes.
 * In fact, modern browsers use a variant of flyweight pattern to prevent loading same images twice.
 */

class Color {
  constructor(name){
    this.name = name
  }
}

class colorFactory {
  constructor(name){
    this.colors = {};
  }
  create(name) {
    let color = this.colors[name];
    if(color) return color;
    this.colors[name] = new Color(name);
    return this.colors[name];
  }
};