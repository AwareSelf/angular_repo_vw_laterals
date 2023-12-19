class Person {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const otto = new Person("Otto");
  
  otto.introduce(); // Hello, my name is Otto