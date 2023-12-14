import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { Changefontsize1Directive1 } from './changefontsize1.directive';
import { ChangefontsizeDirective } from './changefontsize.directive';
import { MyDirectivetDirective } from './mydirective.directive';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[ HighlightDirective,
    MyDirectivetDirective,
    ChangefontsizeDirective,
    Changefontsize1Directive1,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirecticeEx';

}
