async function getreq() {
try
{
 //  const result = await fetch("http://localhost:8081/getemp"); 
   const result = await fetch("http://localhost:8081/getemp1/22");  
 //   const result = await fetch("http://localhost:8081/getemp1/21");
console.log(result.status);
if(!result.ok)
  throw 'get request failed:response status is:'+result.status;

 const emp = await result.json();
 console.log(emp); 
}
catch(error)
{
   console.log('get request failed:'+error);
}
}

getreq();

