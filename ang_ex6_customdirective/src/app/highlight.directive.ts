import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})
export class HighlightDirective {

 renderer1!:Renderer2;
 @Input() defaultColor:string = 'transparent';
 @Input() highlightColor:string = 'dodgerblue';

 @HostBinding('style.backgroundColor') backgroundColor!:string;


  constructor(public elem: ElementRef,public  renderer: Renderer2) {
   // this.backgroundColor = 'blue';
    this.renderer1 = renderer;
   }

   ngOnInit()
   {
    /*
    this.renderer1.setStyle(this.elem.nativeElement,'background-color','yellow');
    let greet = this.renderer1.createText(', how are you!');
    this.renderer1.appendChild(this.elem.nativeElement, greet);
    */
     this.backgroundColor = this.defaultColor;
                
   }

   
   @HostListener('mouseenter') 
   mouseover(eventData:Event)
   {
    //this.renderer1.setStyle(this.elem.nativeElement,'background-color','blue');
    this.backgroundColor =  this.highlightColor;
 
   }
 
   @HostListener('mouseleave') 
   mouseleave(eventData:Event)
   {
   // this.renderer1.setStyle(this.elem.nativeElement,'background-color','transparent');
      this.backgroundColor =  this.defaultColor;
   }
   

}
