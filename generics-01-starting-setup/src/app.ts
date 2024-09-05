// const names = []
// const names = ['KO', 'KIM'];
// const names: string[] = [];
// const names: Array<string> = [];

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

const mergeObj = merge({ name: "KO" }, { age: 25 });
console.log(mergeObj.age);
function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe({ length: 123, name: "2" }));

function extractAndConvert<T extends {}, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "KO" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();
const textAndNumberStorage = new DataStorage<string | number>();

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" }
};

const obj: Readonly<string[]> = ["KO", "KIM"];
// obj.pop();
