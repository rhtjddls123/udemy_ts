interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;
user1 = new Person("Max");

user1.greet("Hi there - I am");
console.log(user1);
