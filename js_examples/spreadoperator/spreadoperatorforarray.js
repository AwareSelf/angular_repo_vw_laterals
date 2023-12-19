/*
const arr = [1,2,3];

const arr1 = [...arr,4,5]

console.log(arr1);

const oldobj = {
    name: 'nama'
}

//adding new property
const newobj = {
    ...oldobj,
    age:40
}

console.log(newobj);

//modified value of existing property
const newobj1  = {
    ...newobj,
    age:50
} 
console.log(newobj1);

let bookarr = [{bookid:1,bookname:'learn java',bookauthor:'nama'},
                 {bookid:2,bookname:'learn springboot',bookauthor:'nama1'}]
 

showBooks(bookarr);        
bookarr = addBook({bookid:3,bookname:'learn react',bookauthor:'nama2'});
console.log('after adding 1 book');
showBooks(bookarr);

function addBook(b)
{
    return [...bookarr,b];
}   

function showBooks(booklst)
{
    for(const b of booklst)
    {
      console.log(b.bookid);
      console.log(b.bookname);
      console.log(b.bookauthor);
    }
}
*/

//cloning an array using spread operator and adding extra emp object
let emparr = [{empid:1,empname:'namrata',empsal:5000}];
console.log(emparr);


let emparr1 = [...emparr,{empid:2,empname:'rahul',empsal:3000}];
console.log(emparr1);

//cloning emp object using spread operator and adding extra property to it.
let emp = {empid:1,empname:'namrata',empsal:5000};
console.log(emp);
let emp1 = {...emp,dept:10};
console.log(emp1);