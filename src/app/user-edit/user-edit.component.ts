import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserModel | undefined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  // createForm: FormGroup 
  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      // this.userService.get(userId).subscribe(user => (this.user = user));
      if (userId !== null ){
        this.userService.get(userId).subscribe(user => (this.user = user));
      } 
    });
    
  }
      
  goBack(): void {
    this.router.navigateByUrl("/users");
  }

  save(): void {
    if (this.user) {
      this.userService.update(this.user).subscribe(() => this.goBack());
    }
  }

}
