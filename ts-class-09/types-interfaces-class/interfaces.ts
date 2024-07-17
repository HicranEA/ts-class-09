// Interface 

interface Shape2 {
  area: number,
  perimeter: number
}

const square2: Shape2 = {
  area: 18,
  perimeter: 17
}

const rectangle2: Shape2 = {
  area: 40,
  perimeter: 18
}


// Extend Interfaces

interface Circle extends Shape2 {
  radius: number;
  getRadius(): number
}

const circle = {
  radius: 10,
  area: 20,
  perimeter: 21,
  getRadius: () => this.radius
}


// Implementing Interfaces from classes

interface Color {
  color: string
}

interface Drivable {
  drive(): void;
}

class Bike implements Color {
  constructor(public color: string){
    // 
  }
}

class Car implements Color, Drivable {
  constructor(public color: string) {
    // 
  }

  drive() {
    console.log('Car is drivable');
  }
}



