const personName = String(prompt("enter your name"))
const lastname = String(prompt("enter your last name"))
window.alert(`Welcome ${personName} ${lastname}`)

if(personName == "null" && lastname == "null"){
    window.alert("please enter only name and lastname")
}