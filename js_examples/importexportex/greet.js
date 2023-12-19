//import { sayHello } from "./module1;             -- use this way in react or node
//.js extension is required in plain ES6 javascript

import { sayHello,no } from "./module1.js"; //importing named export need curly braces
import greet from "./module1.js"; //importing default export doesn't need curly braces

console.log("hello everyone, no="+no);
console.log(sayHello('namrata'));
console.log(greet("Namrata","Marathe"));

import * as ob from "./module1.js"; //importing named export as something in this case ob
console.log(ob.no);
console.log(ob.sayHello("ES6 JS"));

import wish from "./module1.js";  //default export can be imported with any name
console.log(wish("Namrata","Marathe"));