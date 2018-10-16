/**
 * Builder pattern
 * Object-based
 *
 * Separate the construction of a complex object from its representation so that the same construction process can
 * create different representations.
 * Separates object construction from its representations, always creates the same type of object
 *
 * Один из вариантьов создания строителя:
 * a) клиент создает объект-распорядитель Director и конфигурирует его нужным объектом-строителем Builder;
 * б) Director уведомляет Builder о том, что нужно построить очередную часть продукта;
 * в) Builder обрабатывает запросы Director и добавляет новые части к продукту;
 * г) клиент забирает продукт у Builder.
 *
 */

class Raptor {
  constructor(build) {
    this.specimenId = build.specimenId;
    this.speed = build.speed;
    this.plumage = build.plumage;
  }

  static get Builder() {
    class Builder {
      constructor(specimenId) {
        this.specimenId = specimenId;
      }

      withSpeed(speed) {
        this.speed = speed;
        return this;
      }

      withPlumage(plumage) {
        this.plumage = plumage;
        return this;
      }

      build() {
        return new Raptor(this);
      }
    }

    return Builder;
  }
}

// We can call build unto our newly constructed builder object ...
let raptorBuilder1 = new Raptor.Builder('244E-C');
let raptor1 = raptorBuilder1.build();

// ... or pass in the builder object as an argument to Raptor.
let raptorBuilder2 = new Raptor.Builder('3998A-D');
let raptor2 = new Raptor(raptorBuilder2);

// or with chaining
let raptor3 = new Raptor.Builder('88C')
  .withSpeed(45)
  .withPlumage('heavy')
  .build();


/**
 * Example 2
 *
 */
class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

const request = RequestBuilder()
  .forUrl('https://google.com')
  .useMethod('POST')
  .payload({})
  .build();