// Type alises
  //  - Reusablility
  // - Cleaner way to type objects
  // - Typing nested Objects
  // - Extending (Intersection) Types

type Shape = {
  area: number,
  perimeter: number
}

const square: Shape = {
  area: 18,
  perimeter: 17
}

const rectangle: Shape = {
  area: 40,
  perimeter: 18
}

// ---- Nested Objects ---
type Address = {
  line1: string,
  zipCode: number
}

type MathStudent = {
  name: string,
  age: number,
  address: Address
}

type HistoryStudent = {
  name: string,
  age: number,
  teacherName: string,
  address: Address
}

const mathStudent: MathStudent = {
  name: 'Alex',
  age: 20,
  address: {
    line1: '1111 Address 6000',
    zipCode: 1111
  }
}

const historyStudent: HistoryStudent = {
  name: 'Alex',
  age: 20,
  teacherName: 'Bob',
  address: {
    line1: '1111 Address 6000',
    zipCode: 1111
  }
}

// --- Extending Type Aliases ---
type Address1 = {
  line1: string,
  zipCode: number
}

type Student = {
  name: string,
  age: number,
  address: Address
}

type MathStudent1 = Student;

type HistoryStudent1 = {
  teacherName: string,
} & Student; // extends is happening here <-

const mathStudent1: MathStudent1 = {
  name: 'Alex',
  age: 20,
  address: {
    line1: '1111 Address 6000',
    zipCode: 1111
  }
}

const historyStudent1: HistoryStudent1 = {
  name: 'Alex',
  age: 20,
  teacherName: 'Bob',
  address: {
    line1: '1111 Address 6000',
    zipCode: 1111
  }
}