const people = [
    { name: 'andria', age: 25 },
    { name: 'luka', age: 30 },
    { name: 'nika', age: 35 }
  ]
people.forEach(people  => console.log(people.name))



const obj = {
     a: 15, 
     b: 23, 
     c: 40, 
}
for (const y in obj) {
    if (obj.hasOwnProperty(y)) {
        console.log(`${y}: ${obj[y]}`);
    }
}


const Array = [1, 4, 13, 34, 59]
for (const x of Array) {
    console.log(x);
}