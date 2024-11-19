function math(number){
    console.log(number * 2) // multiply
    console.log(number / 2) // divide
    console.log(number ** 2) // raise
}
math(10)

function changeStyle() {
    let body = document.getElementById('body');
    let background = document.getElementById('background').value;
    let color = document.getElementById('color').value;
  
    body.style.background = background;
    body.style.color = color;
};
function personInfo(){
    let name = prompt("what is ur name")
    let lastName = prompt("what is ur lastName")
    let age = prompt("how old are you")
    let country = prompt("where are you from")
    console.log(name + ' ' + lastName + ' ' + age + ' ' + country)
}
personInfo()