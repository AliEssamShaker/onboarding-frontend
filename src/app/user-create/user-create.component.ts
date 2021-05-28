import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: UserModel= new UserModel();
  submitted = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.submitted = false;
  }


  usersaveform=new FormGroup({  
    firstName:new FormControl('' , [Validators.required , Validators.minLength(2), Validators.maxLength(12) ] ),  
    lastName:new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(12)]),  
    username:new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(12)]) 
  });  

  
  saveUser(){  
    this.user=new UserModel();     
    this.user.firstName=this.firstName.value;  
    this.user.lastName=this.lastName.value;  
    this.user.username=this.username.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userService.create(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new UserModel();  
  }  
  
  get firstName(){  
    return this.usersaveform.get('firstName');  
  }  
  
  get lastName(){  
    return this.usersaveform.get('lastName');  
  }  
  
  get username(){  
    return this.usersaveform.get('username');  
  }  
  
  goBack(): void {
    this.router.navigateByUrl("/users");
  }

  // save(): void {
  //   if (this.user) {
  //     this.userService.create(this.user).subscribe(() => this.goBack());
  //   }
  // }

}
