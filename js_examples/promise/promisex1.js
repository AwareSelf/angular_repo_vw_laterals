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