const buttons = document.querySelectorAll("button")
const slider = document.querySelector(".slider")
let counter16 = 0
buttons[0].addEventListener("click", function(){
    counter16 --
    const imgWidth = slider.clientWidth
    const sliderChildren = slider.children
    if(counter16 >= sliderChildren.length){
        counter16 = 0
    }else if(counter16 < 0){
        counter16 = 0
    }
    slider.scrollTo({
        left: imgWidth * counter16,
        behavior: "smooth"
    })
})

buttons[1].addEventListener("click", function(){
    counter16 ++
    const imgWidth = slider.clientWidth
    const sliderChildren = slider.children
    if(counter16 >= sliderChildren.length){
        counter16 = 0
    }else if(counter16 < 0){
        counter16 = 0
    }
    slider.scrollTo({
        left: imgWidth * counter16,
        behavior: "smooth"
    })
})

const obj1 = {
    a: 0,
    b: 2,
    c: 4
}
const obj2 = Object.assign({c: 8, d: 6}, obj1);
console.log(obj2.c, obj2.d);