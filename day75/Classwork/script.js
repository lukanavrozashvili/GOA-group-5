// const d = new Date()
// console.log(d)
// setTimeout(function(){
//     console.log("2 seconds passed")
// },2000)

// let seconds = 0
// const interval = setInterval(function(){
//     seconds++
//     if(seconds == 10){
//         clearInterval(interval)
//     }
//     console.log(seconds,"1 seconds passed")
// }, 1000);
// // 1davaleba
setTimeout(function(){
    console.log("5 seconds passed")
}, 5000);
// 2davaleba
let second = 0
const interval1 = setInterval(function(){
    second++
    if(second == 60){
        clearInterval(interval1)
    }
    console.log(second,"1 seconds passed")
}, 1000);
// 3 davaleba
setInterval(function(){
    let date = new Date()
    console.log(date)
    console.log(date.getSeconds(1))
},1000)


console.log(Math.trunc(Math.random() * 5))

// //Math.pow(x, y) = გვიბრუნებს x ხარისხად y 

// Math.sqrt() = გვიბრუნებს ფესვს რიცხვიდან

// Math.min(0, 1, 15, 27, 18) = პოულობს გადაცემული მასივიდან ყველაზე მცირე რიცხვს 

// Math.max(0, 1, 15, 27, 18) = პოულობს გადაცემული მასივიდან ყველაზე დიდ რიცხვს 
// sqrt = square root
// cbrt = cube root
// Math.random() აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე 0 - 0.(9)//
// Math.round() = ამრგვალებს უახლოეს მთელ რიცხვამდე

// Math.ceil() = ამრგვალებს მაღლა უახლოეს მთელ რიცხვამდე

// Math.floor() = ამრგვალებს დაბლა უახლოეს მთელ რიცხვამდე