import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  user: User;
  user_name:string;
  password:string;
  
  constructor(private userService: UserService) { }

  login()
  {
    const loginUser ={
      user_name: this.user_name,
      password: this.password,
    }
    this.userService.login(loginUser);
  }

 


  ngOnInit() {
   
  }

}
