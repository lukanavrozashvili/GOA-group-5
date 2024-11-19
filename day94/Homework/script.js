// 1 davaleba
class Person {
    constructor(name , age){
        this.name = name
        this.age = age
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
}
const newPerson = new Person("გიორგი", 16)
console.log(newPerson.greet())
// 2 davaleba
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    study(){
        return `${this.name} is studying on  ${this.grade} grade`
    }
}
const newStudent = new Student("გიორგი",16, 11)
console.log(newStudent.study())
// 3 davaleba

class Calculator {
    static add(a, b) {
      return a + b
    }
    static minus(a, b){
        return a - b
    }
    static multiply(a, b){
        return a * b
    }
    static divide(a, b){
        return a / b
    }
}
console.log(Calculator.add(14, 5))       
console.log(Calculator.minus(9, 5))   
console.log(Calculator.multiply(5, 5))
console.log(Calculator.divide(25, 5))

// 4 davaleba
class Car {
    constructor(maded, model, year) {
      this.maded = maded
      this.model = model
      this.year = year
    }
  
    startEngine() {
      return 'Engine started'
    }
  
    stopEngine() {
      return 'Engine stopped'
    }
}

const car1 = new Car("Mercedes", "Cls", 2004)
const car2 = new Car("Bmw" ,"E34" ,1995)
const car3 = new Car("Ford" ,"Mustang" ,1964)

console.log(car1.startEngine())
console.log(car1.stopEngine())


// 5 davaleba
class Animal{
    constructor(type, sound, width, color){
        this.type = type
        this.sound = sound
        this.width = width
        this.color = color
    }
    animalType(){
        return `${this.type} ${this.sound} წონაში არის ${this.width}  მისი ფერი არის ${this.color}`
    }
}
const dog = new Animal("ძაღლი", "ყეფავს", "20kg", "black")
console.log(dog.animalType())
const cat = new Animal("კატა", "კნავის", "10kg","white")
console.log(cat.animalType())
