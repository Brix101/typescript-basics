// Basic Typres

let id: number = 34343
let fullName: string = 'Brixter Porras'
let isActive: boolean = false
let x: any = 'Hello'

// array
let ids: number[]  = [1,2,3,4,5]
let arr: any[]  = [1,"string",true]

// tuples 
let person: [number, string, boolean] = [1,"Hello",true]
// tuple Array

let employee: [ number , string] []

employee = [
    [1,"brix"],
    [2,"john"],
    [3,"jane"],
]

//Union
let pID: string | number

pID = 34
pID = "34"

// enum
enum Directions1{
    Up,
    Down,
    Left,
    Right
}


// type
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 12,
    name: "Brix"
}

let cID: any = 1
let customerId = <number>cID
// let customerId = cID as number

// function
function addNum(x:number, y:number): number{
    return x + y
}

// funtion void
function log(message: string | number): void{
    console.log(message)
}

// Interfaces

interface UserInterface {
    id: number,
    // readonly id: number, //readonly Property
    name: string,
    age?: number //Optional
}

const user1: UserInterface = {
    id: 12,
    name: "Brix"
}

// interface funtion
interface MathFucn {
    (x:number , y: number):number
}

const add: MathFucn = (x:number, y:number): number => x+y

const sub: MathFucn = (x:number, y:number): number => x-y


// Classes
// class Person{
//     private id: number
//     name: string

//     constructor(id:number, name:string){
//         this.id = id
//         this.name = name
//     }

//     register(){
//         return `${this.name} is Now Register`
//     }
// }
interface PersonInterface{
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    id:number
    name: string

    constructor (id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is Now Register`
    }
}


const brix = new Person(1234,"Brix Porras")

// Sub clases
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name) //calling the var on Person class
        this.position = position
    }
}

const newEmp = new Employee(324,"Brix Porras","Developer");

// console.log(newEmp.register(), newEmp)

// Generics "T" for type
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(["a","b","d","e"])
