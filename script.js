console.log('Classes!');

// the "this" keyword
// examples

const obj = {
  foo: 'bar',
  log() {
    // this keyword is equal to "obj"
    console.log(this.foo);
  },
};
// obj.log();

const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040,
  },
  occupation: 'Front-End Developer',
};

function introduce() {
  console.log(
    `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
  );
}

person.introduce = introduce;

person.location.city = 'Houston';

// person.introduce(); // Hello, my name is Elyan Kemble, and I'm a 32-year-old Front-End Developer from Houston, Texas!

// introduce(); // Hello, my name is undefined undefined, and I'm a undefined-year-old undefined from undefined, undefined!

// Classes
//Here's a bit more OOP vocabulary for you:

// instance: An object created by a class.
// instantiate: We instantiate a class to create an object. (when we create the class)
// instantiation: The process of creating an object. (Using the class to create an object)

class Animal {
  // this = {} // this happening under the hood
  constructor(eyesP, legsP, isAwakeP, isMovingP) {
    this.eyes = eyesP;
    this.legs = legsP;
    this.isAwake = isAwakeP;
    this.isMoving = isMovingP;
  }

  static speak(sound) {
    console.log(sound);
  }

  sleep() {
    this.isAwake = false;
  }

  wake() {
    this.isAwake = true;
  }

  sit() {
    this.isMoving = false;
  }

  walk() {
    this.isMoving = true;
  }

  speak(sound) {
    console.log(sound);
  }

  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? 'is' : 'is not'
    } awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const dog1 = new Animal(2, 4, true, true);
const cow1 = new Animal(2, 4, true, false);

console.log(cat1); // Animal Class Instance

//////////////////Types of Methods///////////////////
// Example of prototype method or instance method
const array = [1, 2, 3];
array.forEach((num) => {
  // console.log(num);
});

// example of Static method
// random() is a static method on the Math class
Math.random();
/////////////////////////////////////////////////////////

//////////////////////////////
// Inheritance
//////////////////////////////

console.log(cat1.toString());

// Creating a new Cat class based on Animal
class Cat extends Animal {
  // static phrase = 'Meow...';

  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }

  static speak() {
    super.speak('Meow... Meow...');
    // this.phrase = 'Meow... Meow...';
  }

  chaseLaser() {
    this.isMoving = true;
    console.log('Going crazy to get this laser');
  }

  speak() {
    super.speak('Meow...');
  }

  toString() {
    return super.toString('Cat');
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }

  static speak() {
    super.speak('Woof!');
  }

  speak() {
    super.speak('Woof!');
  }
  toString() {
    return super.toString('Dog');
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }

  static speak() {
    super.speak('Moo.');
  }

  speak() {
    super.speak('Moo.');
  }
  toString() {
    return super.toString('Cow');
  }
}

const dog = new Dog('Black', true, true);
dog.speak();
console.log(dog.toString());

const cat3 = new Cat('white', true, false);
cat3.speak();
console.log(cat3.toString());
cat3.chaseLaser();

const cow = new Cow('white&black', true, false);
cow.speak();

//Human Class Exercise
class Human extends Animal {
  constructor(
    first,
    last,
    age,
    city,
    state,
    zip,
    occupation,
    isAwake,
    isMoving
  ) {
    super(2, 2, isAwake, isMoving);
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.location = {
      city,
      state,
      zip,
    };
    this.occupation = occupation;
  }

  introduce() {
    super.speak(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
    );
  }
}

const bob = new Human(
  'Bob',
  'The Builder',
  35,
  'New York City',
  'New York',
  28374,
  'Contractor',
  true,
  true
);

bob.introduce();

//////////////////////////////
// Encapsulation
//////////////////////////////

class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  get name() {
    return this.#name.first + ' ' + this.#name.last;
  }

  get age() {
    // do more logic in here if needed
    return this.#age + ' years old';
  }

  set name(newName) {
    this.#name = newName;
  }

  // set grades(grade) {
  //   grade = Number(grade);

  //   if (grade >= 0 && grade <= 100) {
  //     this.#grades.push(grade);
  //   }
  // }

  get grades() {
    return this.#grades;
  }

  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }

  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return (arr.reduce((a, b) => a + b) / arr.length).toFixed();
  }
}

class Grades {
  static getAverage(...grades) {
    const arr = [];

    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });

    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

// Now with the Grades class and static method, we dont have to instantiate a learner object in order to get the average.
console.log(
  'Grades average using static class: ',
  Grades.getAverage(80, 90, 78, 50, 100, 95)
);

const learner1 = new Learner('Leeroy', 'Jenkins', 18);

learner1.addGrades(87, 45, 90, 100, [78, 89, 99], 75, 97, 200);

// using the setter function for grades
// learner1.grades = 80;
// learner1.grades = 85;

console.log(learner1.average);

/////////////////Quick Reduce Lesson/////////////////////////

let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += i;
}

// reduce is a loop method just like forEach or map but it adds an extra variable (accumulator) that persists through the entire loop. Does not change upon iterations
const nums = [1, 2, 3, 4];

const sum2 = nums.reduce((accumulator, num) => {
  accumulator += num;
  return accumulator;
}, 0);

// console.log(sum2);
////////////////////////////////////////////////////////

//////////////////////////
// Testing the Learner Class
//////////////////////////

// Instantiate a new Learner.
const learner2 = new Learner('Bruce', 'Wayne', 56);
// Log the learner's name and age.
console.log(learner2.name);
console.log(learner2.age);
// Add the following grades using addGrades():
learner2.addGrades([95, 87, 66], '98', '100', -60, 88, 89, [100, 76, 88], 105);

console.log(learner2.grades);

// calculating average manually
let sum3 = 0;
let least = learner2.grades[0];

for (let i = 0; i < learner2.grades.length; i++) {
  if (learner2.grades[i] < least) {
    least = learner2.grades[i];
  }
  sum3 += learner2.grades[i];
}

sum3 -= least;

console.log('Manual Average Result: ', sum3 / (learner2.grades.length - 1));
console.log(learner2.average);

//////////////////////////////
// Abstraction
//////////////////////////////
/*
A real-world example of abstraction, to help you further understand the concept, are cars. You interact with the "methods" the car exposes to you, like the ignition, steering wheel, accelerator, and brake pedal, but you don't need to interact with any of the complex operation behind the scenes. The Car class only exposes the start(), turn(), accelerate(), and brake() methods to you, while it keeps the inner workings of these things to itself.

Abstraction and encapsulation are easy to confuse because they are so closely related. Abstraction is the hiding of the details of data and process implementation, whereas encapsulation describes how abstraction occurs within the program.

Abstraction is a design-level concept, whereas encapsulation is an implementation-level concept.
*/
class Car {
  constructor(color, make, model, year, features, maxSpeed, hp) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.features = features;
    this.maxSpeed = maxSpeed;
    this.hp = hp;
    this.engineRunning = false;
    this.speed = 0;
  }

  start() {
    this.engineRunning = true;
    console.log('Vroommmmmm...');
  }

  turn(direction) {
    console.log(`Turning ${direction}. Putting on ${direction} blinker`);
  }

  accelerateTo(num) {
    if (this.engineRunning === false) {
      console.log('Car is not started');
      return;
    }
    for (let i = 0; i < num; i++) {
      this.speed++;
      console.log(`Speed: ${this.speed}mph`);
    }
  }

  brake() {
    for (let i = this.speed; i > 0; i--) {
      this.speed--;
      console.log(`Speed: ${this.speed}mph`);
    }
    console.log('stopped');
  }
}

const pinto = new Car(
  'Orange',
  'Ford',
  'Pinto',
  '1975',
  ['Two doors', 'radio', 'casset player', 'roll down windows'],
  120,
  200
);
// console.log(pinto instanceof Car);
// console.log(pinto instanceof Object);
// console.log(pinto);

// // pinto.start();

// pinto.accelerateTo(25);

// // pinto.brake();

// // pinto.accelerateTo(25);

// // pinto.turn('right');

//////////////////////////////
// Polymorphism
//////////////////////////////
// Polymorphism is the ability of a single thing to take on many forms (poly = many; morph = change form). In the context of OOP and JavaScript, this means the ability for one object to have multiple realizations that each implement the same functionality, but work in differrent ways.
// example of parameter based polymorphism
function calculate(num1, num2, operation) {
  if (operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === '/') {
    return num1 / num2;
  } else if (operation === '*') {
    return num1 * num2;
  } else {
    throw 'Operation not recongized';
  }
}

console.log(calculate(5, 10, '-'));

//////////////////////////////
// Static Properties and Methods
//////////////////////////////

Animal.speak('Cluck Cluck');
const anotherCat = new Cat('white', true, true);
console.log(anotherCat.phrase); // prints undefined because instances cannot access static properties and methods
Cat.speak();
Cat.speak();
Dog.speak();
Cow.speak();

// class Animal {} refer to line 50
// class Cat extends Animal {} refer to line 116
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const spottedCat1 = new SpottedTabby();
const spottedCat2 = new SpottedTabby();
const spottedCat3 = new SpottedTabby();
const spottedCat4 = new SpottedTabby();

console.log(spottedCat1.breed); // undefined
console.log(spottedCat2.breed); // undefined
console.log(spottedCat3.breed); // undefined
console.log(spottedCat4.breed); // undefined

Object.getPrototypeOf(spottedCat2).breed = 'Tabby';

console.log(spottedCat1.breed); // Tabby
console.log(spottedCat2.breed); // Tabby
console.log(spottedCat3.breed); // Tabby
console.log(spottedCat4.breed); // Tabby

// New instance has the same prototype.
const cat5 = new SpottedTabby();
console.log(cat5.breed); // Tabby

cat5.breed = 'Tabby';

console.log(spottedCat1);
console.log(cat5); // Tabby

delete Object.getPrototypeOf(spottedCat1).breed;

console.log(spottedCat1.breed); // undefined
console.log(spottedCat2.breed); // undefined
console.log(spottedCat3.breed); // undefined
console.log(spottedCat4.breed); // undefined

// Creating our own array methods using protoypes
Array.prototype.min = function () {
  return Math.min(...this);
};
Array.prototype.max = function () {
  return Math.max(...this);
};

const arr = [3, 8, 1, -10, 90, 77, 42];
const min = arr.min();
const max = arr.max();

String.prototype.split = function () {
  const halfPoint = Math.floor(this.length / 2) - 1;

  return this.slice(0, halfPoint) + ' ' + this.slice(halfPoint);
};

String.prototype.yell = function () {
  return this + '!!!!';
};

const greeting = 'Hello';

console.log(greeting.yell());

console.log(greeting.split());

///////////////////////////
// Object Factories
///////////////////////////

// Factory Function
const learnerFactory = (firstName, lastName, age) => {
  const introduce = () => console.log(`Hi, I'm ${firstName} ${lastName}!`);
  return { name: firstName + ' ' + lastName, age, introduce };
};

const learner3 = learnerFactory('John', 'Seen', 46);

class LearnerFactory {
  static learners = [];

  static createLearner(first, last, age) {
    const newLearner = new Learner(first, last, age);
    this.learners.push(newLearner);
    return newLearner;
  }
}

const Max = LearnerFactory.createLearner('Max', 'Fregoso', 70);

console.log(LearnerFactory.learners);

console.log(Max);