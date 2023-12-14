import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})
export class HighlightDirective {

 renderer1!:Renderer2;
 @Input() defaultColor:string = 'transparent';
 @Input() highlightColor:string = 'dodgerblue';

 @HostBinding('style.backgroundColor') backgroundColor!:string; //manipulate the host-ele property

   div!:any;
  constructor(public elem: ElementRef,public  renderer: Renderer2) {
   // this.backgroundColor = 'blue';
    this.renderer1 = renderer;
   }

   ngOnInit()
   {
    
   // this.renderer1.setStyle(this.elem.nativeElement,'background-color','yellow');
    let greet = this.renderer1.createText(', how are you!');
    this.renderer1.appendChild(this.elem.nativeElement, greet);

    
     this.backgroundColor = this.defaultColor;
                
   }

   
   @HostListener('mouseenter') //listen/handle to host element events 
   mouseover(eventData:Event)
   {
    //this.renderer1.setStyle(this.elem.nativeElement,'background-color','blue');
    this.backgroundColor =  this.highlightColor;
    
    //add the child element to host element-div
     this.div = this.renderer1.createElement('div');
    const text = this.renderer1.createText('Inserted at bottom');
    this.renderer1.appendChild(this.div, text);    
    this.renderer1.appendChild(this.elem.nativeElement, this.div);
 
   }
 
   @HostListener('mouseleave') 
   mouseleave(eventData:Event)
   {
   // this.renderer1.setStyle(this.elem.nativeElement,'background-color','transparent');
      this.backgroundColor =  this.defaultColor;

      //remove the added child-element from the host element div.
      this.renderer1.removeChild(this.elem.nativeElement,this.div);
   }
   

}
