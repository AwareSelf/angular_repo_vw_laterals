//https://angular.io/api/core/HostBinding
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mydirective]',
  standalone:true
})
export class MyDirectivetDirective {

 renderer1!:Renderer2;
 @Input() name:string = 'nisha';
 @Input() newname:string = 'arjun';


 @HostBinding('attr.value') mytext!:string; //manipulate the host-ele property
 @HostBinding('style.backgroundColor') bkcolor!:string;


  constructor(public elem: ElementRef,public  renderer: Renderer2) {
   // this.backgroundColor = 'blue';
    this.renderer1 = renderer;
   }

   ngOnChanges()
   {
    console.log('ngOnchanges of mydirective called..');
    console.log(this.name);
    console.log(this.newname);

   }

   ngOnInit()
   {
    /*
    this.renderer1.setStyle(this.elem.nativeElement,'background-color','yellow');
    let greet = this.renderer1.createText(', how are you!');
    this.renderer1.appendChild(this.elem.nativeElement, greet);
    */
     this.mytext= this.name;
     this.bkcolor = 'pink';
                
   }

   
   @HostListener('mouseenter') //listen/handle to host element events 
   mouseover(eventData:Event)
   {
    //this.renderer1.setStyle(this.elem.nativeElement,'background-color','blue');
    this.mytext =  this.newname;
 
   }
 
   @HostListener('mouseleave') 
   mouseleave(eventData:Event)
   {
   // this.renderer1.setStyle(this.elem.nativeElement,'background-color','transparent');
      this.mytext =  this.name;
   }
   

}
