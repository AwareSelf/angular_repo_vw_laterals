
const emp = {
    empid: 21,
    empname: 'ramya',
    salary: 6000,
    empsDepartmentName: 'Accounts',
    empsDepartment: { deptno: 10, deptname: 'Accounts' }
  };
async function postreq()
{
    try
    {
    const result = await fetch("http://localhost:8081/postemp",{
        method : 'POST',
        body : JSON.stringify(emp),
        headers : {
          'Content-Type' : 'application/json'
        }
       }
      );
      if(!result.ok)
      {
        throw 'post request failed.response status:'+result.status;
      }
      else
      {
       const empname = await result.text();
       console.log(empname);
      } 
    }
    catch(error)
    {
        console.log(error);
    }
}
postreq();