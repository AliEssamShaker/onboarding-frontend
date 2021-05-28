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

  deletePhone(phone: PhoneModel): void {
    this.phoneService.deletePhone(phone).subscribe();
  }

  createPhone(): void {
    this.router.navigateByUrl("/users/");
  }
}
