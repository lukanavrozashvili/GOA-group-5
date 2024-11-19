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
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const photo = document.getElementById("photo")
let index = 0

function photoUpdate(){
    photo.src = images[index]
}
let images = [
    "http://4.bp.blogspot.com/-4-aCisEElb8/T0pljCigd_I/AAAAAAAAB2Q/y2ebF_90HOk/s1600/beautiful+nature+photo.jpg",
    "https://wallpapercave.com/wp/7LHjcyg.jpg",
    "https://wallpapercave.com/wp/wp2787397.jpg"
]
previous.onclick = function(){
    index = (index - 1 + images.length) % images.length
    photoUpdate()
}
next.onclick = function(){
    index = (index + 1) % images.length
    photoUpdate()
}