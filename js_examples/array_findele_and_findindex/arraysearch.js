let arr = ['a','b','c'];
let e = arr.find(ele => ele=='c');
console.log(e);

let loc = arr.findIndex(ele => ele=='c');
console.log("index of ele 'c' in array is:"+loc);

let books = [{id:1,name:'b1'},{id:2,name:'bk2'},{id:3,name:'bk3'}];
const mybook = books.find(b => b.id==2);
console.log(mybook);

const pos = books.findIndex(b => b.id==2);
console.log("index of an book in array with bookid 2 is "+pos);