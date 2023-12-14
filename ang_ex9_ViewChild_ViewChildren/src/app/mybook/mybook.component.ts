import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mybook',
  standalone: true,
  imports: [],
  templateUrl: './mybook.component.html',
  styleUrl: './mybook.component.css'
})
export class MybookComponent {

  @Input() bkname!:string;

  constructor()
  {
    this.bkname = 'Angular';
  }

}
