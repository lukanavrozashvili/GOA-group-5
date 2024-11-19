function* generateNumber(){
    let num = 0
    while(true){
        yield num
        num += 2
    }
}
const numberGenerator = generateNumber()
for(let i = 0; i < 10; i++){
    console.log(numberGenerator.next().value)
}


// 2 davaleba

function* generateEvenNumbers(){
    let num1 = 0
    while(true){
        yield num1
        num1++
    }
}
const evenNumberGenerators = generateEvenNumbers()
for(let i = 0; i < 10; i++){
    console.log(numberGenerator.next().value)
}

function* generateRandomNumbers() {
    while(true) {
        yield Math.random()
    }
}

const randomNumberGenerator = generateRandomNumbers()


for (let i = 0; i < 10; i++) {
    console.log(randomNumberGenerator.next().value)
}

// 3 davaleba
function* generateLetters(word){
    for(let i = 0; i < word.length; i++){ 
        yield word.charAt(i)
    }
}
const word = "გამარჯობა";
const letterGenerator = generateLetters(word)

for(letter of letterGenerator){
    console.log(letter)
}
// 4 davaleba
let numbers = "0123456789"
let randomNumbers = ''

for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random() * numbers.length)
    randomNumbers += numbers[random]
}

console.log(randomNumbers)