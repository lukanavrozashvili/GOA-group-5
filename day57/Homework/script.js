const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const div = document.getElementById("div")
const p = document.getElementById("p")
function changeClick(){
    div.style.backgroundColor = input1.value;
    div.style.width = input2.value + "px";
    div.style.height = input3.value + "px";
    p.textContent = input4.value
}