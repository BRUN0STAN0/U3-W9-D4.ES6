// !DESTRUCTURING

let arrStr: [string, string, string] = ["primo", "secondo", "terzo"];

let str1: string;
let str2: string;
let str3: string;

[str1, , str2] = arrStr;
// IT THE SAME THING
let [str4, str5, str6] = arrStr;

console.log(str2);

// ! DESTRUCTURING OBJ
let obj = { id: 1, nome: "Bruno", surname: "Stano" };
let { surname } = obj;
console.log(surname);

// ! SPREAD OPERATOR ...

console.log(arrStr);
console.log(arrStr[0], arrStr[1], arrStr[2]);
//Stessa cosa
console.log(...arrStr);

function testFunc(a: string, b: string, c: string) {
  console.log(a, b, c);
}

testFunc(...arrStr);
//stessa cosa
testFunc(arrStr[0], arrStr[1], arrStr[2]);

let newStrArr = [...arrStr, "quarto"];

let concArr = arrStr.concat(newStrArr);
console.log(concArr);
//stessa cosa
let altrArr = [...arrStr, ...newStrArr];
console.log(altrArr);

// ! OVERLOAD

//Prima le dichiaro
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

//poi implemento la logica
function add(a: any, b: any): any {
  return a + b;
}

add(2, 4);
add("ciao", "bruno");
add(2, "ciao");
add("ciao", 2);

//* Un altro modo con i GENERICS, posso decidere in futuro cosa passargli.
function add2<T>(a: T, b: T): void {}

add2<string>("hello", "steve");
add2<number>(22, 2);

// ! DECORATOR @

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person");
  }
}

const pers = new Person();

function Navigatore(a: Function) {
  console.log("Sto inizializzando il navigatore...");
}

@Navigatore
class Smartphone {
  name = "Max";
  constructor() {
    console.log("Creating Smartphone");
  }
}

//! Chiamata ajax
let URLapi = "https://jsonplaceholder.typicode.com/users";
let xhr = new XMLHttpRequest();
xhr.open("GET", URLapi);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let obj = JSON.parse(xhr.responseText);
  }
};

let promise = fetch(URLapi).then((response) => response.json());
console.log(promise);

// Intanto mi faccio la chiamata, poi dopo quando il Dom è pronto mi prendo la promise caricata.
promise.then((json) => console.log(json));
