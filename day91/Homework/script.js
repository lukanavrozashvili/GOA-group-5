// 1 davaleba

function number(x, ...y){
    console.log(x,y)
}
number(211, 44, 23 ,14)




// 2 davaleba
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10)
}

const numberList = [5,8,10,12,14,16,18,20,4]
const filtered = filterGreaterThanTen(numberList)
console.log(filtered)


// 3 davaleba

function highlightWord(word){
    const paragraph = document.getElementById("text")
    const highlightedText = paragraph.textContent.replace(word, <mark>${word}</mark>)
    paragraph.innerHTML = highlightedText
}




// 4 davaleba


function removeDuplicates(arr) {
    return [...new Set(arr)] // ქმნის ახალ Set ობიექტს მასივიდან. Set ობიექტი ავტომატურად შლის დუბლიკატურ მნიშნელობას მასივიდან. რადგან ის აბრუნებს მხოლოდ უნიკალურ მნიშნელობას .
}
const numberList0 = [1, 2, 2, 3, 4, 4, 5, 5 , 8]
const uniqueNumbers = removeDuplicates(numberList0)
console.log(uniqueNumbers)


// 5 davaleba


function findMin(...numberss) {
    console.log(Math.min(...numberss))
}

findMin(5, 3, 8, 1, 7)