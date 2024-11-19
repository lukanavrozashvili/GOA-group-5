// for(let i = 0; i <= 10; i++){
//     console.log(i)
//     if(i % 2 == 0){
//         console.log("odd")
//     }
//     else{
//         console.log("even")
//     }
// }
let trys = 0;
const password = "my123";
let answer = false;

while(answer != true){
    const userInput = prompt("please enter your password");
    console.log(userInput)
    if(userInput == password){
        console.log(`succesedfully logined you took ${trys} try to login`);
        answer = true;
    }
    else{
        trys++;
        console.log(`Please Try Again, ${trys}`)
    }
}