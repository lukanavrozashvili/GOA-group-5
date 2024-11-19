import { arr1 } from "./arrindex1.js";
import { arr2 } from "./arrindex2.js";

console.log(arr1,arr2)

import handleClick from "./funkExport.js";
import { handleOver } from "./funkExport.js";
import * as math from "./mathmodule.js"
console.log(handleClick("bro"),handleOver())
console.log(math.multiply(3,5))
console.log(math.sum(3,5))