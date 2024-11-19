// davaleba 1
const book = {
    title:"The GodFather",
    author:"American Gangster",
    yearPublished:1972
}
// davaleba 2
book.genre = "Crime drama"
console.log(book)
// davaleba 3
delete book.genre
console.log(book)
// davaleba 4
console.log(book.author)
// davaleba 5
if("author" in book && "yearPublished" in book){
    console.log("true!")
}
else{
    console.log("false!")
}
// davaleba 6
console.log(book.title)
console.log(book.author)
console.log(book.yearPublished)


// davaleba 7
const people = [{name: "Gocha", age: 40},{name: "Lika", age: 35},{name: "Nugazri", age: 25}];
// davaleba 8
console.log("number of properties:",book.title.length)
// davaleba 9
const personInfo = {
    name:"gio",
    age:15,
    address: {
        country:"Georgia",
        city:"Tbilisi"
    }
}
console.log(personInfo.address.country)
console.log(personInfo.address.city)
// davaleba 10
const info = Object.values(personInfo);
console.log(info)
// davaleba 11
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// davaleba 12
numbers.push(21);
console.log(numbers);
// davaleba 13
numbers.unshift(123)
console.log(numbers)
// davaleba 14
numbers.pop
console.log(numbers)
// davaleba 15
numbers.shift(123)
console.log(numbers)
// davaleba 16
console.log(numbers.length)
// davaleba 17
console.log(numbers[2])
// davaleba 18 
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
// davaleba 19
let double = []
for (let i = 0; i < numbers.length; i++){
    double.push(numbers[i] * 2);
}

// davaleba 20
console.log(numbers.reverse())