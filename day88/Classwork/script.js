const helloWorld = () => {
    return "hellow vol1"
}
const helloWorldVol2 = () => (
    "hellow vol2"
)
console.log(helloWorld())
console.log(helloWorldVol2())


let newArray = [1,2,5,2,3,9,40,23]
const newArrayForEach = newArray.forEach((item , index) => console.log(item , index))