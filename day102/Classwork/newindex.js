const arrMap = [1, 2, 3, 4, 5, 6].map((item, index) => (
    item % 2 == 1
))
console.log(arrMap)

const arrFilter = [1, 2, 3, 4, 5, 6].filter((item, index) => (
    item % 2 == 1
))
console.log(arrFilter)
const findIndex = [2, 5, 1, 8, 2, 0].findIndex(item => item > 3)
console.log(findIndex)

const arrJoin = [1, 3, 4, 5, 6, 7].join("  ")
console.log(arrJoin)
console.log("foo ".repeat(3))

console.log("SoloLearn".indexOf("loL"))
console.log("SoloLearn".indexOf("Lea", 4))
console.log("SoloLearn".startsWith("Solo", 0)) // true
console.log("SoloLearn".endsWith("Solo", 4)) // true

console.log('----------------------------')
console.log("SoloLearn".includes("loLe")) // true
console.log(["a", "e"].includes("e")) // true
console.log('----------------------------')
console.log("SoloLearn".includes("olo", 1)) // true
console.log("SoloLearn".includes("olo", 2)) // false
