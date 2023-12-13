import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangefontsize1]',
  standalone:true
})
export class Changefontsize1Directive1 {

  @HostBinding('style.fontSize') fontSize!:string;

  @Input('appChangefontsize1') startingFontSize!:string;
  @Input('clkfont') onclickFontSize!:string;

  constructor() { }


  ngOnInit()
  {
    //this.fontSize = '300%';
    this.fontSize = this.startingFontSize;
  }

  @HostListener('click')
  onclick()
  {
    //this.fontSize = '100%';
    this.fontSize = this.onclickFontSize;
  }
  

}
