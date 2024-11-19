// 1 davaleba
let list = new Set([1,1,1,1,2,3,4,5,6,7,8,9,10])
list.add(14)
console.log(list.has(4)) // true
console.log(list.has(11)) // false
console.log(list)
// 2 davaleba
let map0 = new Map()
map0.set("hello", "name")
map0.set("how are u", "name")
console.log(map0)
// 3 davaleba
let map1 = new Map()
map1.set("name", "gio")
map1.set("age", 16)
map1.delete("age")
console.log(map1)

// 4 davaleba
let listSet = new Set()
listSet.add("A")
listSet.add("B")
listSet.clear()
console.log(listSet)
// 5 davaleba

class CollectionManager{
    constructor(){
        this.set = new Set
        this.map = new Map
    }
    addToMap(key,value){
        this.map.set(key, value)
    }
    removeFromMap(key){
        this.map.delete(key)
    }
    addToSet(item){
        this.set.add(item)
    }
    clearSet(){
        this.set.clear()
    }
    showMap(){
        this.map.forEach((value,key) =>{
            console.log(`key ${key}, value ${value}`)
        })
    }
    showSet(){
        this.set.forEach((item) =>{
            console.log(`item ${item}`)
        })
    }
}
const collection = new CollectionManager()


collection.addToMap("a", 1)
collection.addToMap("b", 2)
collection.addToSet('item1')
collection.addToSet("item2")

console.log("Map")
collection.showMap()

console.log("set")
collection.showSet()

collection.removeFromMap("a")
console.log("removing a")
collection.showMap()

collection.clearSet()
console.log("Set after clearing") 
collection.showSet()