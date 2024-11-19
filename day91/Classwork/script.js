const bro = (x, ...arr) => {
    console.log(x,arr)
}
bro(1, 12, 31 ,2312)

let arr1 = [1,23,45,6,6,7,8,8]
let arr2 = ["bro",1,23,45,6,6,7,8,8]

let newArr = [...arr1, ...arr2]
let copyNewArr1 = [...arr1]
console.log(newArr)
console.log(copyNewArr1.slice(0,3))