import { Component } from '@angular/core';
import { UserService, UserRespnse } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  constructor(private userService:UserService){
    console.log("Start")

  }
  users!: UserRespnse[]


  ngOnInit() {
    console.log("Getting data");
    this.getUserLists();
  }

  getUserLists(){
    console.log("before entering")
    this.userService.getUserLists().subscribe((res:any) => {
      console.log(res)
      this.users = res
    })
  }
}
