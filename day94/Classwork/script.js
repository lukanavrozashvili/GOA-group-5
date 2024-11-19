
                        // parameters
// const handleArr = (a, b , c , d, e ,f) => {
//     return [a, b , c , d, e ,f]
// }

const handleArr = (a, b , ...arr) => {

    // arr - ის კოპირება შეუძლია / დამატება
    const copyArr = [...arr, 2]
    return copyArr
}
                    // (argument მაგალითები)
console.log(handleArr(1,2,3,4,5,6))