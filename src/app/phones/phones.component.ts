import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhoneModel} from '../model/phone.model';
import {PhoneService} from '../service/phone.service';
import {UserModel} from "../model/user.model";
import {forkJoin, Subscription} from "rxjs";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones: PhoneModel[] = [];
  user: UserModel;
  loadingSubscription = Subscription.EMPTY;


  constructor(
    private phoneService: PhoneService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.registerRouteParameterChanges();
  }

  registerRouteParameterChanges(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      if (userId) {
        this.loadingSubscription = forkJoin([
          this.phoneService.findAllPhones(userId),
          this.userService.get(userId)]
        ).subscribe(([phones, user]) => {
          this.phones = phones;
          this.user = user;
        });
      }
    });
  }

  viewPhone(phone: PhoneModel): void {
    this.router.navigateByUrl("/users/"+this.user.userId+"/phones/"+phone.phoneId);
  }

  editPhone(phone: PhoneModel): void {
    this.router.navigateByUrl("/users/"+this.user.userId+"/phones/"+phone.phoneId+"/edit");
  }

  deletePhone(phoneId: string, userId: string): void {
    this.phoneService.deletePhone(phoneId, userId).subscribe();
    this.refresh();
  }

  refresh(): void {
    this.router.navigateByUrl("/user/"+this.user.userId+"/phones");
  }

  createPhone(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      this.router.navigateByUrl("/users/"+userId+"/phones/create");
    })
    
  }


  back(): void {
    this.router.navigateByUrl("/users/"+this.user.userId);
  }
}
