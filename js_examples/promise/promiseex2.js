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
