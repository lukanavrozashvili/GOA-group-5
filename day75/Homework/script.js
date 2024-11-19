// // Date

// // 1 davaleba
// const d = new Date()
// console.log(d)
// // 2 davaleba
// console.log(d.toTimeString())
// // 3 davaleba
// running = true;
// while(running){
//     day = parseInt(prompt("enter between 1 and 7"))
//     if(day > 7 || day <= 0){
//         window.alert("Please Enter Between 1 and 7")
//     }
//     else if(isNaN(day)){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         if(day == 1){
//             console.log("Monday")
//         }
//         else if(day == 2){
//             console.log("Tuesday")
//         }
//         else if(day == 3){
//             console.log("Wednesday")
//         }
//         else if(day == 4){
//             console.log("Thursday")
//         }
//         else if(day == 5){
//             console.log("Friday")
//         }
//         else if(day == 6){
//             console.log("Saturday")
//         }
//         else if(day == 7){
//             console.log("Sunday")
//         }
//         running = false
//     }
// }
// // 4 davaleba
// let date1 = new Date("04/09/2023")
// let date2 = new Date("01/04/2022")
// console.log(date1.getTime() - date2.getTime())
// // 5 davaleba
// // const d = new Date()
// console.log(d.toLocaleDateString())
// // 6 davaleba
// const firstDate =  new Date("2021-04-09")
// const secondDate = new Date("2021-05-19")

// if(firstDate < secondDate){
//     console.log(`${firstDate} is more earlier than + ${secondDate}`) 
// } 
// else if(firstDate > secondDate){
//     console.log(`${firstDate} is more late than ${secondDate}`)
// } 
// else{
//     console.log(`${firstDate} and ${secondDate} are the same`)
// }
// // 7 davaleba
// function days(month, year){
//     return new Date(year, month,0).getDate()
// }

// console.log(days(4, 2010))
// // 8 davaleba
// function timeAgo(date){
//     const now = new Date()
//     const pastDate = new Date(date);
//     const diffInSeconds = Math.floor((now - pastDate) / 1000)

//     const intervals = [
//         {label: "year", seconds: 214123423},
//         {label: "month", seconds: 1243453},
//         {label: "day", seconds: 2352345},
//         {label: "hour", seconds: 3678},
//         {label: "minute", seconds: 60},
//         {label: "second", seconds: 1},
//     ]

//     for (let i = 0; i < intervals.length; i++){
//         const interval = intervals[i];
//         const count = Math.floor(diffInSeconds / interval.seconds)
//         if (count >= 1){
//             return count + ' ' + interval.label + (count > 1 ? "s" : "") + "ago"
//         }
//     }
//     return "just now";
// }

// console.log(timeAgo("2024-05-03"))


// // 9  davaleba
// const birthday = new Date(2015, 3, 5)

// const today = new Date()
// birthday.setFullYear(today.getFullYear())
// if (today > birthday) {
//   birthday.setFullYear(today.getFullYear() + 1)
// }

// console.log(Math.floor((birthday - today) / (1000*60*60*24)))
// // 10 davaleba
// function getAge(dateString) {
//     const today = new Date()
//     const birthDate = new Date(dateString)
//     const age = today.getFullYear() - birthDate.getFullYear()
//     const m = today.getMonth() - birthDate.getMonth()
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--
//     }
//     return age
// }

// console.log(getAge('2010/04/29'))

// // Math
// // 1 davaleba
// function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(getRandomInt(1, 8))
// // 2 davaleba
// function squareRoot(number){
//     return Math.sqrt(number)
// }

// console.log(squareRoot(9))
// // 3 davaleba
// function roundNumber(number){
//     return Math.round(number)
// }

// console.log(roundNumber(5.5))
// // 4 davaleba
// function roundDown(number){
//     return Math.floor(number)
// }

// console.log(roundDown(5.3))

// // 5 davaleba
// function roundUp(number){
//     return Math.ceil(number)
// }

// console.log(roundUp(2.3))

// // 6 davaleba
// function c(A, B){
//     return Math.pow(A, B)
// }

// console.log(c(2, 3))
// // 7 davaleba
// function absolute(number){
//     return Math.abs(number)
// }

// console.log(absolute(-5))
// // 8 davaleba
// function getMaxNumber(array){
//     return Math.max(null, array)
// }

// console.log(getMaxNumber([1, 2, 3, 4, 5]))

// // 9 davaleba
// function randomBoolean(){
//     return Math.random() >= 0.5
// }

// console.log(randomBoolean())

// // 10 davaleba
// function randomRGBColor(){
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     return "rgb(' + r + ',' + g + ',' + b + ')"
// }

// console.log(randomRGBColor())

// // setInterval
// // 1 davaleba
// let seconds = 10
// const interval = setInterval(function(){
//     console.log(seconds + "second remaining")
//     seconds--
//     if (seconds < 0){
//          clearInterval(interval)
//         console.log("Time's over")
//     }
// }, 1000)
// // 2 davaleba
// const now = new Date()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// const second = now.getSeconds()
// const interval = setInterval(function(){
//     if (hours < 10){
//         hours = "0" + hours
//     }
//     if (minutes < 10){
//         minutes = "0" + minutes
//     }
//     if (second < 10){
//         second = "0" + second
//     }

//     console.log(hours + "," + minutes + "," + seconds)
// }, 1000)

// // 3 davaleba
// const interval = setInterval(function(){
//     const randomNumber = Math.floor(Math.random() * 100)
//     console.log(randomNumber)
// }, 2000)

// // 4 davaleba
// const interval = setInterval(function(){
//     let date = new Date()
//     let hrs = date.getHours()
//     let mins = date.getMinutes()
//     let secs = date.getSeconds()
//     let time = `${hrs}:${mins}:${secs}`
//     console.log(time)
// }, 1000)

// // 5 davaleba
// const words = ["a", "b", "c", "d", "e", "f", "g"];

// const interval = setInterval(function(){
//     const randomIndex = Math.floor(Math.random() * words.length)
//     console.log(words[randomIndex])
// }, 2000)

// setTimeout
// 1 davaleba
// const interval = setTimeout(function(){
//     alert("Hello")
// }, 2000)

// 2 davaleba
// let count = 6
// const interval = setInterval(function(){
//     count--   
//     console.log(count)
//     if(count <= 1){
//         clearInterval(interval)
//     }
// }, 1000)
// 3 davaleba

setTimeout(function(){
    console.log("Successs message hidden");
}, 5000);