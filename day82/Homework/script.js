// 1 davaleba
console.log(document.querySelector("p")) // მონიშნავს იმ ელემენტს რომელსაც მიუთითებ ოღონდ რომელიც პირველი შეხვდება.
console.log(document.querySelectorAll("p")) // მონიშნავს ყველა ელემენტს რომელსაც მიუთითებ
let element = document.getElementById("parent")
console.log(element.children) // შვილი ელემენტები
console.log(element.firstElementChild) // პირველი შვილი
console.log(element.lastElementChild) // ბოლო შვილი
console.log(element.nextElementSibling) // შემდეგი ელემენტი და/ძმა

let text = document.getElementById("sibling")
console.log(text.previousElementSibling) // წინა ელემენტი და/ძმა

// 2 davaleba
const elementName = prompt("Enter element name")
const newElement = document.createElement(elementName) // ვქმნით იმ ელემენტს რომელსაც მომხმარებელი მიუთითებს
let txt = prompt("Enter Text") // იმ ტექსტს ჩაწერს იმ ელემენტში რომელმაც მომხმარებელმა შემოიტანა.
newElement.textContent = txt
document.body.appendChild(newElement) // შეაქვს Body-ში იმ ელემენტს და ტექსტს რომელმაც მომხმარებელმა შემოიტანა