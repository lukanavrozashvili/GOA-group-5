// Document Object Model - HTML-ის ყველა ელემენტი რომელიც ჩაშენებულია HTML-ში

// let p = document.getElementById("p1")

setTimeout(function(){
    p.textContent = "Hello";
    p.style.color = "green";
    p.style.backgroundColor = "orange";
},3000)







let p = document.getElementById("p1")// getElementById - წამოიღებს იმ ელემენტს HTML-დან რომელ იდსაც გამოიძახებ
let p1 = document.getElementsByClassName("p1")// getElementsByClassName - წამოიღებს იმ ელემენტს HTML-დან რომელ კლასაც გამოიძახებ
let p2 = document.getElementsByTagName("p1")// getElementsByTagName - წამოიღებს იმ ელემენტს HTML-დან რომელ ელემენტს გამოიძახებ
let p3 = document.querySelector("p1")// querySelector - წამოიღებს იმ ელემენტს HTML-დან იმ პირველ ელემენტს რომელსაც გამოიძახებ
let p4 = document.querySelectorAll("p1")// querySelectorAll წამოიღებს იმ ელემენტს HTML-დან რომელ ელემენტს გამოიძახებ