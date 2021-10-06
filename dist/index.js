"use strict";
// Basic Typres
let id = 34343;
let fullName = 'Brixter Porras';
let isActive = false;
let x = 'Hello';
// array
let ids = [1, 2, 3, 4, 5];
let arr = [1, "string", true];
// tuples 
let person = [1, "Hello", true];
// tuple Array
let employee;
employee = [
    [1, "brix"],
    [2, "john"],
    [3, "jane"],
];
//Union
let pID;
pID = 34;
pID = "34";
// enum
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 0] = "Up";
    Directions1[Directions1["Down"] = 1] = "Down";
    Directions1[Directions1["Left"] = 2] = "Left";
    Directions1[Directions1["Right"] = 3] = "Right";
})(Directions1 || (Directions1 = {}));
const user = {
    id: 12,
    name: "Brix"
};
let cID = 1;
let customerId = cID;
// let customerId = cID as number
// function
function addNum(x, y) {
    return x + y;
}
// funtion void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 12,
    name: "Brix"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is Now Register`;
    }
}
const brix = new Person(1234, "Brix Porras");
// Sub clases
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //calling the var on Person class
        this.position = position;
    }
}
const newEmp = new Employee(324, "Brix Porras", "Developer");
// console.log(newEmp.register(), newEmp)
// Generics "T" for type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["a", "b", "d", "e"]);
