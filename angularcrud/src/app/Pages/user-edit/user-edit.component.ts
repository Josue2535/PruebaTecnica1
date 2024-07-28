import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

  name: string = '';
  email: string = '';

  userId!:any
  user!:any




  constructor(private route: ActivatedRoute, private userService: UserService) {}


  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id')
    //console.log(this.userId)
    this.userService.getStudent(this.userId).subscribe((res:any) =>{
      console.log(res)
      this.user = res
    })
  }


  updateUser() {
    let inputData = { name: this.name, email: this.email };

    this.userService.updateUser(inputData,this.userId).subscribe({
      next:(res:any) => {
        console.log(res)
      },
      error:(err:any) => {
        console.error('Error updating user', err);

      }
    });
  }
}
