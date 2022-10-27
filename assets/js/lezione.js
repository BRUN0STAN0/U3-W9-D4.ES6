"use strict";
// !DESTRUCTURING
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let arrStr = ["primo", "secondo", "terzo"];
let str1;
let str2;
let str3;
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
function testFunc(a, b, c) {
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
//poi implemento la logica
function add(a, b) {
    return a + b;
}
add(2, 4);
add("ciao", "bruno");
add(2, "ciao");
add("ciao", 2);
//* Un altro modo con i GENERICS, posso decidere in futuro cosa passargli.
function add2(a, b) { }
add2("hello", "steve");
add2(22, 2);
// ! DECORATOR @
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
function Navigatore(a) {
    console.log("Sto inizializzando il navigatore...");
}
let Smartphone = class Smartphone {
    constructor() {
        this.name = "Max";
        console.log("Creating Smartphone");
    }
};
Smartphone = __decorate([
    Navigatore
], Smartphone);
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
