function infoJoin(myName,lastname,age,location){
    const info = (myName + ' ' + lastname + ' ' + age  + ' '+ location)
    console.log(info)
    return info
}
infoJoin("gio","xundadze",15,"saqartvelo tbilisi")
// davaleba 2
function ageCheck(a,b,c,d){
    const operator = b > a
    const secondOperator = a > c
    const thirdOperator = a == d
    console.log(operator,secondOperator,thirdOperator)
}
ageCheck(18,19,16,18)
// davaleba 3 
function alerter(){
    alert("Clicked")
}
// davaleba 4 
function colorChanger(){
    const p = document.getElementById("paragraph");
    p.style.color = "green"
}
// davaleba 5
const paragraphtext = document.getElementById("paragraph0");
const text = document.getElementById("paragraph1");
const sometext = document.getElementById("paragraph2");
const paragraph = document.getElementById("paragraph3");
paragraphtext.style.color = "orangered"
text.style.color = "orange"
sometext.style.color = "blue"
paragraph.style.color = "green"