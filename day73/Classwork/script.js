// const randomList = ["banana","apple","orange","strawberry"]
// randomList.push("pineapple")
// console.log(randomList)
// randomList.pop()
// console.log(randomList)
// randomList[0] = "berry"
// console.log(randomList[0])
// randomList[1] = "avocado"
// console.log(randomList[1])
// console.log(randomList[2])
// randomList[2] = "melon"
// console.log(randomList[3])
// console.log(randomList)

// 2 davaleba

const numbers =[10, 5, 24, 14, 15, 19, 34, 105, 254, 123]
let sumOfNumber = 0;
for(let i = 1; i < numbers.length; i++){
    sumOfNumber += numbers[i]
}
console.log(sumOfNumber)

// 3 davaleba
findName = ["gio","luka","liza","andria","ilia","nika","lika","saba","ana","aleqsandre"]
let nameToCount = "gio";
let count = 0;

for (let i = 0; i < findName.length; i++){
    if (findName[i] == nameToCount){
        count++;
    }
}

console.log("The name" + nameToCount + "appears" + count + "times");



// 4 davaleba
const number = [10, 5, 24, 14, 15, 19, 34, 105, 254, 123]
let sum = 0;
for(let i = 1; i < number.length; i++){
    sum = number[i]
    if(number[i] % 2){
        console.log(`odd ${sum}`)
    }
    else{
        console.log(`even ${sum}`)
    }
}
// 5  davaleba
const name1 = ["luka","gio","andria"]
const name2 = ["anano","anastasia","nini"]
const name3 = name1.concat(name2)
console.log(name3)
// 6 davaleba
const number1 = [1,2,3,4,5,6,7,8,9,10]
const numberOfEven = []
const numberOfOdd = []
let sumOfNumber1 = 0;
for(let i = 1; i < number1.length; i++){
    sumOfNumber1 = number1[i]
    if(number[i] % 2){
        numberOfEven.push(i)
    }
    else{
        numberOfOdd.push(i)
    }
}
console.log(numberOfEven)
console.log(numberOfOdd)
// 7 davaleba
const names = ["gio","luka","liza","andria","ilia","nika","lika","saba","ana","aleqsandre"]
const oddNames = []
for(let i = 0; i < names.length;i++){
    if(names[i] % 2 == 0){
        oddNames.push(names[i] + " even")
    }
    else{
        oddNames.push(names[i] + " odd")
    }
}
console.log(oddNames)

// // 8 davaleba
// const numb = []
// for(let i = 0; i <= 50; i++){
//     console.log(i)
// }

// // 9 davaleba
let testArray1 = [10, 20, 30, 40, 50];
let searchValue1 = 30;
let searchValue2 = 60;
let index1 = -1;
let index2 = -1;


for (let i = 0; i < testArray1.length; i++){
    if (testArray1[i] == searchValue1){
        index1 = i;
        break;
    }
}
// index of searchValue2
for (let i = 0; i < testArray1.length; i++){
    if (testArray1[i] === searchValue2) {
        index2 = i;
        break;
    }
}

console.log("Index of" + searchValue1 + ":" + index1);
console.log("Index of" + searchValue2 + ":" + index2);

// 10 davaleba

function getEvenNumbers(numbersArray){
    let evenNumbers = [];

    for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] % 2 == 0){
            evenNumbers.push(numbersArray[i])
        }
    }
    return evenNumbers;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = getEvenNumbers(testArray);

console.log(evenArray)