const tempObj = {
  value: 1,
  word: '',
  greeting: '',

  addHello(word){
    this.word = word;
    this.greeting = 'Hello ' + word;
    this.sayWord();
  },

  sayWord(){
    console.log(this.greeting)
    this = 123;
  },
}