// num1 = Number(prompt("enter first number "))
// num2 = Number(prompt("enter second number"))
// if(num1 < num2){
//     console.log(`${num1} first number is greater than second number ${num2}`)
// }
// else{
//     console.log(`${num2} second number is greater than first number ${num1}`)
// }

function test(){
    let h1 = document.getElementById("h1")
    number = Number(prompt("enter number"))

    if(number > 10){
        h1.textContent = "Goa"
    }
    else{
        h1.textContent = "no boro"
    }
}