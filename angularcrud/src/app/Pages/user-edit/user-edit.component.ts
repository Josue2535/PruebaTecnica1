import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId!: any;
  user: any = { nombre: '', email: '' };

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getStudent(this.userId).subscribe((res: any) => {
      this.user = res;
    });
  }

  updateUser() {
    console.log("Updating user with data:", this.user);
    this.userService.updateUser(this.user, this.userId).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.error('Error updating user', err);
      }
    });
  }
}
