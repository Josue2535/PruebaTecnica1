import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Pages/home/home.component";
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent,UserCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularcrud';
}
