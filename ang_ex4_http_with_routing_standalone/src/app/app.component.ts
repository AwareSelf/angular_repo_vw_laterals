import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { RouterOutlet } from '@angular/router';
import { BookdaoService } from './bookdao.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[HttpClientModule,ReactiveFormsModule, HomeComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookdaoService]
})
export class AppComponent {
  title = 'http_crud_app';
}
