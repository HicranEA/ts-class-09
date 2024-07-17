// Basic Types

// Number ----
let num = 10; // TS implicitly infers type of num
let num2: number = 11; // Explicit
let num3; // Variable 'num3' implicitly has an 'any' type, but a better type may be inferred from usage

// num = '10'; // Type 'string' is not assignable to type 'number'.

// String ----
let city = 'Chicago';
let city2: string = 'Chicago';
let city3; // Variable 'city3' implicitly has an 'any' type, but a better type may be inferred from usage.

// Boolean ----
let isAdmin = true;
let isAdmin2: boolean = true;
let isAdmin3; // Variable 'isAdmin3' implicitly has an 'any' type, but a better type may be inferred from usage.


// Union types ----

let statusCode: number | string;

if(statusCode == '200') {
  console.log('Status code is string')
} else if(statusCode === 200) {
  console.log('Status code is number')
} else {
  console.log('Wrong status code')
}


// Literal Types -----
let statusText: 'OK' | 'ERROR'
// statusText = 'WARNING'; // Type '"WARNING"' is not assignable to type '"OK" | "ERROR"'
let num4: 10 | 12;
// num4 = 15; // Type '15' is not assignable to type '10 | 12'

// Arrays
const arr = [1,2,3];
const arr2:Array<number> = [1,2,3];
const arr3: number[] = [1,2,3];

const arr4 = [1, 'two', true, Date]; // (string | number | boolean | DateConstructor)[]


// Functions

function getName(name: string): string {
  return name;
}

// function getName2(name: string): number {
//   return name; // Type 'string' is not assignable to type 'number'.
// }


// let today = new Date();
// let today2: Date = new Date();


// Object ----

const person: {name: string, age: number} = {
  name: 'Alex',
  age: 20
}


// Promise 

async function getPosts() {
  return await fetch('https://....');
}


