function changeClick(){
    const input = document.getElementById("input")
    const secondInput = document.getElementById("secondInput")
    const thirdInput = document.getElementById("thirdInput")
    const div = document.getElementById("div")
    div.style.backgroundColor = input.value;
    div.style.width = secondInput.value + "px";
    div.style.height = thirdInput.value + "px";
}