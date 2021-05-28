import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: UserModel | undefined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      if (userId !== null ){
        this.userService.get(userId).subscribe(user => (this.user = user));
      } 
    });
    
  }

  goBack(): void {
    this.router.navigateByUrl("/users");
  }

  edit(user: UserModel): void {
    this.router.navigateByUrl("/users/" + user.userId + "/edit");
  }

  getPhones(user: UserModel):  void {
    this.router.navigateByUrl('/users/'+user.userId + '/phones');
  }

}
