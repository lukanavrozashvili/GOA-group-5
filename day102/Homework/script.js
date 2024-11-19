// 3 davaleba

const arr1 = [1, 2, 3, 4, 5, 6].map((item, index) => (
    item % 3 == 0
))
console.log(arr1)

const arr2 = [4, 2, 12, 40, 24, 8,10].map((item, index) => (
    item % 4 == 0
))
console.log(arr2)


const arrFilter = [1, 2, 10, 4, 5, 7].filter((item, index) => (
    item % 3 == 1
))
console.log(arrFilter)
const arrAnotherFilter = [4, 2, 10, 22, 5, 7,13].filter((item, index) => (
    item % 2 == 0
))
console.log(arrAnotherFilter)

const find = [12, 5, 1, 8, 2, 0].find(item => item > 3);
console.log(find)

const anotherFind = [24, 10, 9, 3, 12, 3].find(item => item > 9);
console.log(anotherFind)

const findIndex = [4, 5, 9, 18, 22, 0].findIndex(item => item > 20);
console.log(findIndex)

const anotherFindIndex = [1, 2, 3, 35, 19, 28, 42].findIndex(item => item > 40);
console.log(anotherFindIndex)

const arrJoin = [1, 3, 4, 5, 6, 7,8,9].join(" hi ")
console.log(arrJoin)
const join = [2,3,4,9,14,32,12,33,44].join("       ")
console.log(join)

console.log("!goa".indexOf("goa"))
console.log("goaBestAcademy".indexOf('B',3))

console.log("goaBestAcademy".startsWith("goa",0))
console.log("goaBestAcademy".startsWith("Best",3))
console.log("goaBestAcademy".endsWith("goa",3))
console.log("goaBestAcademy".startsWith("Best",3))

console.log("goaBestAcademy".includes("goa"))
console.log("goaBestAcademy".includes("Best"))
console.log(["Goa","Best"].includes("Goa"))
