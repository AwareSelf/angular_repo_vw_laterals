function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10
  
  console.log(sum());
  //expected output is 0


  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters