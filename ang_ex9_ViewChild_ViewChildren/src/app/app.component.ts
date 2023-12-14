import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MybookComponent } from './mybook/mybook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MybookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'ang_ex9_ViewChild';
  arr!:MybookComponent[];

  @ViewChild(MybookComponent) bkcomp!: MybookComponent;
  @ViewChild("inpele") inpele!:ElementRef;
   // Accessing multiple native DOM elements using QueryList
 @ViewChildren(MybookComponent) myValue!: QueryList<MybookComponent>;
  
  ngAfterViewInit()
  {
     console.log(this.bkcomp.bkname);
     console.log(this.inpele.nativeElement.value);
     console.log(this.myValue.toArray());
     this.arr = this.myValue.toArray();
     console.log(this.arr[0].bkname);
     console.log(this.arr[1].bkname);
  }

  chngInptval()
  {
     this.inpele.nativeElement.value="rahul";
  }

  chngBkname(){
    this.bkcomp.bkname="React";
  }

  chngSecBkname()
  {
    this.arr[1].bkname = "Microservices";
  }


}
