function number(arr){
    return new Promise((resolve, reject) => {
        if(arr.length < 6){
            resolve("greater")
        }
        else{
            reject(Error("!!!"))
        }
    })
}
const list = [1,2,3,4,5,6,7]
number(list)
.then(result => { 
    console.log(`list valid ${result}`)
})
.catch(error => {
    console.log(`${error}`)
});