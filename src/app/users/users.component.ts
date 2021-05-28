import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : UserModel[] = [];
  constructor(
      private userService: UserService,
      private router: Router ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(): void {
    this.userService.findAll().subscribe(users => (this.users = users));
  }

  delete(user: UserModel): void {
    this.userService.delete(user.userId).subscribe();
  }

  create(): void {
    this.router.navigateByUrl("/users/create").then((e) =>{
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });

  }

  view(user: UserModel): void {
    this.router.navigateByUrl("/users/"+user.userId).then((e) =>{
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  edit(user: UserModel): void {
    this.router.navigateByUrl("/users/"+user.userId+"/edit" ).then((e) =>{
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });

  }



}
