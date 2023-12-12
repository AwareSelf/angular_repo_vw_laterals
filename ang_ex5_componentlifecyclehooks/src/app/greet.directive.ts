import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGreet]',
  standalone:true
})
export class GreetDirective {

  WhatsUp = 'How Are You?';



  constructor(elem: ElementRef, renderer: Renderer2) {
    let greet = renderer.createText('Hello, ');
    renderer.appendChild(elem.nativeElement, greet);

  }

}
