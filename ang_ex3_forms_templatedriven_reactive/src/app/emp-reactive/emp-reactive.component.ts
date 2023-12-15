import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states } from './data-model';

@Component({
  selector: 'app-emp-reactive',
  templateUrl: './emp-reactive.component.html',
  styleUrls: ['./emp-reactive.component.css']
})
export class EmpReactiveComponent implements OnInit {


  empForm!: FormGroup; // <--- heroForm is of type FormGroup
  states = states;
  
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
   // this.heroForm = this.fb.group({
   //  name: '', // <--- the FormControl called "name"
   // });
   
   this.empForm = this.fb.group({
        name: ['namrata',[Validators.required,Validators.pattern('^[a-z0-9]{5,15}$') ]],
       address: this.fb.group({ // <-- the child FormGroup
        street: ['abc marg' ,Validators.minLength(4)],
        city: '',
        state: '',
        zip: '',
        }),
       power: '',
       sidekick: ''
    });


  }

   mysubmit()
   {
      console.log('inside form mysubmit method');
      console.log(this.empForm.status);
      console.log(this.empForm.get('name')?.status)

      if(this.empForm.status=="VALID")
      {
      let empname =  this.empForm.get('name')?.value;
      let street = this.empForm.get('address.street')?.value;
        if(street)
         console.log(street);
        else
         console.log('street is undefined');
      }
      else
      {
        console.log('empform is invalid, dont extract values');
      }
     
   }
}
