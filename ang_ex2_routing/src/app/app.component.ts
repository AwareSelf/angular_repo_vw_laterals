import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RegisterComponent } from './components/register.component';
import { ListComponent } from './components/list.component';
import { PageNotFoundComponent } from './components/not-found.component';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RegisterComponent,ListComponent,PageNotFoundComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  providers:[HeroService]
})
export class AppComponent {
  title = 'module_lazy';
}
