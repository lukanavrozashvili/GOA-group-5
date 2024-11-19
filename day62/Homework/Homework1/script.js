num1 = Number(prompt("enter number"))
num2 = Number(prompt("enter another number"))

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
if(isNaN(num1) && isNaN(num2)){
    window.alert("enter only number")
}