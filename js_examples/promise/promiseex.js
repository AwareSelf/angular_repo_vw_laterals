//part1: simple async operation usinf promise

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  //note:all then blocks execute if initial promise is resolved
  myPromise1.then(result => { console.log(result); return result;})
           .then(result => {
                            console.log('can chain multiple then: result:'+result);
                           }
                );


//part2:
//how to handle rejected promise/failed async/rest call using .catch                
 const myPromise2 = new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                                         reject("rejected promise2");
                                       }
                                   ,350)
                               });

      myPromise2.then(result => { console.log(result); 
                                   return result;
                                }
                    )
                 .then(result => { 
                                   console.log('can chain multiple then: result:'+result);
                                 }
                      )
                 .catch(error=>{console.log('async opp failed:errmsg:'+error)});


//part3:                 
/* The then block can take two callback funcs.first for resolve/success and 2nd for reject or failure
   even if async operation in one of the then callback fails , it falls throgh next then block 
   if error callback is already executed in one of then callbacks then catch block won;t execute
   but subsequent then will execute   
*/
//simplify this behaviour using async await
         
const myPromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
                     reject("rejected promise2");
                   }
               ,350)
           });

myPromise3.then(result => { console.log('1st then callback:result='+result); 
                              return result;
                          },
                error =>{ console.log('inside 1st then: async failed:error is:'+error); return error;}
               )
          .then(result => { 
                             console.log('inside 2nd then:success callack: result:'+result);
                             return result;
                          },
                  error =>{ console.log('inside 2nd then:async failed:error is:'+error); 
                             return error;
                          }         
                )
          .catch(error=>{console.log('catch block:async opp failed:errmsg:'+error)});                 

