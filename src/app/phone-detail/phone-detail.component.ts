import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhoneModel} from '../model/phone.model';
import {PhoneService} from '../service/phone.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  setKey = false;
  phone: PhoneModel | undefined;
  verificationFormControl = new FormControl();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.registerRouteParameterChanges();
  }

  registerRouteParameterChanges(): void {
    this.route.paramMap.subscribe(params => {
      const phoneId = params.get("phoneId");
      const userId = params.get("userId");
      if (phoneId && userId) {
        this.phoneService.getPhone(phoneId, userId).subscribe(phone => this.phone = phone);
      }
    });
  }

  back(): void {
    this.router.navigateByUrl("/users/" + this.phone.userId + "/phones/");
  }

  updatePhone(): void {
    this.router.navigateByUrl("/users/" + this.phone.userId + "/phones/" + this.phone.phoneId)
  }

  initiateVerification(): void {
    this.setKey = true;
    this.phoneService.initiateVerification(this.phone.phoneId, this.phone.userId).subscribe();
  }

  completeVerification(): void {
    this.phoneService.completeVerification(this.phone.userId, this.phone.phoneId, this.verificationFormControl.value)
      .subscribe();
  }


}
