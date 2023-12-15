import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-template',
  templateUrl: './emp-template.component.html',
  styleUrls: ['./emp-template.component.css']
})
export class EmpTemplateComponent implements OnInit {


  ename_pattern:string = "^[a-z0-9_-]{5,15}$";

  emp!:{empid:number,empname:string,empsalary:number,empcity:string};

  city = ['Bombay', 'Delhi',
  'Goa', 'UP'];


  constructor()
  {
    this.emp = {empid:1,empname:'rahul',empsalary:20000.9,empcity:'Bombay'}
  }
  ngOnInit(): void {
  }


  addEmp()
  {
    console.log('add emp called');
  }

  onSubmit(f:any)
  {
    console.log('form got submitted');
    console.log(f);
    console.log(f.status);
    console.log(f.value.empname);

    if(f.value.pristine==true && f.value.touched==false)
       console.log('no one has yet tried to make entry in the form');
  //    console.log('someone has tried to touch and enter value in form');

    const myname = f.value.empname;
    console.log('my name is '+myname);
  }

}
