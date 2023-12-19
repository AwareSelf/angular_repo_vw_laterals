//destructuing is used to extract elements from array/object
const arr = [1,2,3,4];

const [no1,no2] = arr;

console.log(no1);
console.log(no2);

const person = {
    myname:'namrata',
    myage1:41,
    mysal:5000
}

const {myname,mysal} = person;

console.log(myname);
console.log(mysal);
//console.log(myage); --gives error


//old way of writing code
let func1= (person)=>{console.log(person.age)};
func1({myname:'nisha',age:40});

//destructuring syntax for passing object to a function and extracting propertiex from it
let func= ({age})=>{console.log(age)};
func({myname:'nisha',age:40});


/* By destructuring, we simply pull out the age property and
store it in a variable/argument named age which we then
can use in the function body */

//using destructring while returning object and extracting particular properties
const func2 = ()=>{ 
                    return { myname:'nima',
                             myage:41, 
                             mygender:'female'
                            }; 
                   }

const {myage,mygender}  = func2();
console.log(myage+','+mygender);

/*
const ob = func2();
console.log(ob.myage);
*/