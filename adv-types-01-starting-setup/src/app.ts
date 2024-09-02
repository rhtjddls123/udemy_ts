// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

type ElevatedEmployeeIntersection = Admin & Employee;

// interface Admin {
//   name: string;
//   privileges: string[];
// };

// interface Employee {
//   name: string;
//   startDate: Date;
// };

// interface ElevatedEmployeeIntersection extends Admin, Employee {}

const e1: ElevatedEmployeeIntersection = {
  name: "고성인",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function add(a: number | string, b: number | string) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnkownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = document.getElementById("message-output");
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
const userInputElement = document.getElementById("user-input") as HTMLInputElement;

userInputElement.value = "Hi there!";

interface ErrorContainer {
  [key: string]: string | undefined;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!"
};

console.log(errorBag.password?.charAt(1));

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number | string, b: number | string) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Ko", " SeongIn");
result.split(" ");

const fetchedUserData: { id: string; name: string; job: { title?: string; description: string } } = {
  id: "ul",
  name: "Ko",
  job: { description: "My own company" }
};

const userInput = "";
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
