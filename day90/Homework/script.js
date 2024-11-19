const person = {
    age: "24",
    name: "luka"
}
person.country = "georgia"

const anotherPerson = {
    age: "15",
    name : "giorgi",
    lastName: "xundadze"
}
anotherPerson.country = "georgia"
anotherPerson.city = "tbilisi"

const persons = Object.assign(anotherPerson,person)
console.log(persons)

const obj = {
    a: 15,
    b: 25,
    c: 34,
}
const anotherObj = Object.assign({a: 24, d: 40}, obj)
console.log(anotherObj)


const array = [10,25,21,23]

const [a,b,c,d] = array
console.log(a)
console.log(b)
console.log(c)
console.log(d)