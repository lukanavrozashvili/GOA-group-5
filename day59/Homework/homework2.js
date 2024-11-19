const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const p = document.getElementById("paragraph")
function changeClick(){
    p.style.backgroundColor = input1.value;
    p.style.color = input2.value;
    p.textContent = input3.value;
}