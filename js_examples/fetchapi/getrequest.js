
fetch("http://localhost:8081/getemp")
.then(result=>{
    console.log(result.status);
    return result.json();
})
.then(result=>console.log(result))
.catch(error=>{console.log("req failed:"+error)});

     