const realMapping = new Map([
    // cvladi // mnishvneloba
    ["name", "andria"],
    ["name1","luka"],
    ["name2", "nika"]
])
const myObj = {
    name: "gio",
    name1: "beqa"
}
console.log(realMapping.get("name"))


const personInfo = new Map([
    ["name", "giorgi"],
    ["surname","xundadze"],
    ["age", 16]
])
console.log(personInfo)

let list = [1,1,1,1,1,1,2 ,3,4,5,7,7,7,7,9,9]
let newList = [...new Set(list)]
console.log(newList)