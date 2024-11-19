window.addEventListener("keydown", function(click){
    if(click.key == "e"){
        console.log("echireba dzmao?")
    }
})
function handleClick(){
    console.log("clicked")
}
function mouseOver(){
    console.log("mouse over")
}
function mouseOut(){
    console.log("mouse out")
}
function mouseDown(){
    console.log("mouseDown")
}
function mouseUp(){
    console.log("mouseUp")
}
function load(){
    console.log("loaded")
}
const demo = document.getElementById("demo")

demo.addEventListener("click", function(){
    console.log("capture")
}, true)
const demo1 = document.getElementById("demo1")
demo1.addEventListener("click", function(){
    console.log("bubbling")
}, false)