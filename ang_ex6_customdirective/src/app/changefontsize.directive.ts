import { Directive, HostBinding, HostListener, Input } from '@angular/core';

/*
Note:see that as we use @HostBinding annotation we do not need to inject
element-ref and renderer to change element UI dom.
*/
@Directive({
  selector: '[appChangefontsize]',
  standalone:true
})
export class ChangefontsizeDirective {

  @HostBinding('style.fontSize') fontSize!:string;

  @Input() startingFontSize!:string;
  @Input('clkfont') onclickFontSize!:string;

  constructor() { }


  ngOnInit()
  {
    //this.fontSize = '300%';
    console.log('starting font-size:'+this.startingFontSize);
    this.fontSize = this.startingFontSize;
  }

  @HostListener('click')
  onclick()
  {
    //this.fontSize = '100%';
    this.fontSize = this.onclickFontSize;
  }
  



}
