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
