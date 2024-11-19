const p0 = document.getElementById("paragraph")
const p1 = document.getElementById("anotherparagraph")
console.log(p0)
console.log(p1)
// 2 davaleba
const myInfo = {
    name:"gio",
    lastname: "xundadze",
    age: 15,
}
const myFriend = {
    name:"random",
    lastname: "random",
    age: 123,
}

function clicks(){
    const store = paragraph0.textContent;
    paragraph0.textContent = paragraph1.textContent;
    paragraph1.textContent = store;
}


// davaleba 1
function equal(num1, num2){
    const sum = num1 + num2
}
console.log(equal(9,5))
function multiply(num1, num2){
    const sum = num1 * num2
}
console.log(multiply(39,15))

// davaleba 2
function greet(personName){
    console.log("hello" + ' ' + personName)
}
greet("gio")

// davaleba 3

function gathering(num1, num2, num3){
    console.log((num1 + num2) * num3)
}
gathering(5,3, 9)

// davaleba 4
function ItsEvenOrNo(num){
    if(num % 2){
        console.log("luwia")
    }
    else{
        console.log("kentia")
    }
}
ItsEvenOrNo(1)
// davaleba 5
function triangle(a,b,c){
    console.log(a + b > c)
    console.log(a + c > b)
    console.log(b + c > a)
}
triangle(3,2,4)

const car = {
    name: "Bmw",
    model: "e34",
    years: 1987,
    start: function(){
        console.log("car is starting");
    },
    break: function(){
        console.log("Car is stopping")
    }
}
car.start();
car.break();
const personInfo = {
    myName: "gio",
    lastname: "xundadze",
    fullInfo: function(){
        console.log("my name is " + personInfo.myName + ' ' + personInfo.lastname)
    }
}
personInfo.fullInfo();