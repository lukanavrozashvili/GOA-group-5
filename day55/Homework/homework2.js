function changeColorText(){
    let input = document.getElementById("input").value
    let secondInput = document.getElementById("secondInput").value
    let paragraph = document.getElementById("paragraph")
    paragraph.textContent = input
    paragraph.style.color = secondInput;
}