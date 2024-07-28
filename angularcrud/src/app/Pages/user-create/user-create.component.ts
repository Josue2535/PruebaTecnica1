import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  name: string = '';
  email: string = '';

  constructor(private userService: UserService) {}

  saveUser() {
    const userData = { name: this.name, email: this.email };
    this.userService.saveUser(userData).subscribe(
      response => {
        console.log('User saved successfully', response);
      },
      error => {
        console.error('Error saving user', error);
      }
    );
  }
}
