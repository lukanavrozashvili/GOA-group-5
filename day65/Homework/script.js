// 1 davaleba
function numbers(){
    let number = Number(prompt("enter number"))
    if(isNaN(number)){
        window.alert("enter only number")
    }
    if(number < 0){
        console.log("number is negative")
    }
    else if(number == 0){
        console.log("number equals 0")
    }
    else{
        console.log("ur number is positive")
    }
}
// 2 davaleba
function evenOrOdd(number){
    console.log(number)
    if(number % 2 == 0){
        console.log("odd")
    }
    else{
        console.log("even")
    }
}
evenOrOdd(2)
// 3 davaleba
function leapYear(year){
    if(year % 4 == 0 || year % 100 == 0 || year % 400 == 0){
        console.log(`${year}, is a leap year`)
    }
    else{
        console.log(`${year} is not leap year`)
    }
}
leapYear(2080)


// 4 davaleba
function largest(first,second){
    if (first > second) {
        console.log(`${first} is biggest number`)
    }
    else{
        console.log(`${second} is biggest number`)
    }
}
largest(1,5)
// 5 davaleba
function lowest(A,B,C){
    if(A < B && A < C){
        console.log(`${A} is smallest number`)
    }
    else if(B < A && B < C){
        console.log(`${B} is smallest number`)
    }
    else{
        console.log(`${C} is smallest number`)
    }
}
lowest(7,14,7)
// 6 davaleba
function length(string){
    if(string == ""){
        console.log("string has 0 length")
    }
    else{
        console.log("string has more length than 0")
    }
}
length(0)
// 7 davaleba
function palindrome(){
    let string = ["banana","apple","strawberry"]
    string.reverse();
    console.log(string)
}
palindrome()
// 8 davaleba
function convertToLetterGrade(grade){
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// 9 davaleba
function isPrime(num){
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//10 davaleba
function celsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is " + Fahrenheit + "°F");
}
//Objects
const personInfo = {
    Name:"gio",
    age:15,
    city:"tbilsi",
    anotherPersonInfo: {
        name:"123",
        age:123,
        mail:"123@gmail.com",
    }
}
const car = {
    model: "BMW E34",
    year:1989
}
car.model = "Bugatti Chiron"
console.log(car.model)
console.log(car.year)
console.log(2024 - Number(car.year))

console.log(personInfo.Name)
console.log(personInfo.age)
console.log(personInfo.city)
console.log(personInfo.anotherPersonInfo.name)
console.log(personInfo.anotherPersonInfo.age)
console.log(personInfo.anotherPersonInfo.mail)
// While loops:
// i = 1
// while(i <= 10){
//     console.log(i++)
// }
// i = 10
// while(i > 0){
//     console.log(i--)
// }
// n = 5
// while(n >= 1){
//     num = 1
//     num = num * n
//     n = n - 1
//     console.log(num)
// }
function fibonacci(n){
    let a = 0, b = 1;
    let next;
    console.log(a);
    if (n > 0) console.log(b);
    while (true) {
        next = a + b;
        if (next > n) break;
        console.log(next);
        a = b;
        b = next;
    }
}

fibonacci(50);
function reverseNumber(n){
    let reversed = 0;
    while (n != 0){
        reversed = reversed * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return reversed;
}

console.log(reverseNumber(123))
// 6
function largestDigit(n){
    let maxDigit = 0
    while (n != 0){
        let digit = n % 10
        if (digit > maxDigit){
            maxDigit = digit;
        }
        n = (n - (n % 10)) / 10
    }
    return maxDigit
}

console.log(largestDigit(4729))

// 7
function isPalindromeNumber(n){
    let original = n
    let reversed = 0
    while (n != 0){
        reversed = reversed * 10 + (n % 10)
        n = (n - (n % 10)) / 10
    }
    return original === reversed
}

console.log(isPalindromeNumber(123));


function sumOfDigits(n){
    let sum = 0;
    while (n != 0){
        sum += n % 10;
        n = (n - (n % 10)) / 10;
    }
    return sum;
}

console.log(sumOfDigits(1234))


function isPrimeNumber(n){
    if (n <= 1) 
        return false
    let i = 2;
    while (i < n){
        if (n % i === 0) 
            return false
        i++;
    }
    return true;
}

console.log(isPrimeNumber(17));
console.log(isPrimeNumber(18));


function reverseString(str){
    let reversed = ""
    let i = str.length - 1
    while (i >= 0){
        reversed += str[i]
        i--
    }
    return reversed;
}


// for loops

for(let i = 1; i <= 10; i++){
    console.log(i)
}



for(let i = 2; i <= 20; i+= 2){
    console.log(i)
}



let sum = 0
for (let i = 1; i <= 100; i++){
    sum += i
}
console.log(sum);


for (let i = 5; i <= 50; i += 5){
    console.log(i);
}



for (let i = 10; i >= 1; i--){
    console.log(i);
}



let facto = 1;
for (let i = 1; i <= 5; i++){
    facto *= i
    console.log(facto)
}



let number1 = [1, 2, 3, 4, 5];
let array = 0;
for (let i = 0; i < number1.length; i++){
    array += number1[i];
}



let secondArray = [10, 5, 8, 20, 2];
let largests = array[0];
for (let i = 1; i < secondArray.length; i++){
    if (array[i] > largests){
        largests = secondArray[i];
    }
}

let arrayNumbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < arrayNumbers.length; i++){
    total += arrayNumbers[i];
}

let sums = total / arrayNumbers.length;
console.log(sums)

//Functions


function equals(a, b){
    console.log(a + b)
}

console.log(equals(5, 3));


function multiply(a, b){
    console.log(a * b)
}

function widthHeight(width, height){
    console.log(width * height)
}

console.log(widthHeight(5, 7)); 


function calculate(radius){
    const a = 2 * 3.14159 * radius;
    console.log(a)
}

console.log(calculate(10));

function isEven(number){
    if (number % 2 === 0){
        console.log("True, Odd")
    }
    else{
        console.log("False, Even")
    }
    console.log(number)
}

console.log(isEven(124));
console.log(isEven(3));
function generateNumbersArray(n){
    let numbers = [];
    for (let i = 1; i <= n; i++){
        numbers[numbers.length] = i;
    }
    return numbers;
}

console.log(generateNumbersArray(5));

// 9
function sumArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
}

console.log(sumArray([1, 2, 3, 4, 5]));

function isPerfectNumber(number){
    if (number <= 1) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < number; i++){
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));