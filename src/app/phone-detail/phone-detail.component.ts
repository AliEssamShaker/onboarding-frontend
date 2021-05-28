import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneModel } from '../model/phone.model';
import { PhoneVerificationModel } from '../model/phoneVerification.model';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  setKey = false;
  phone: PhoneModel | undefined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    this.route.paramMap.subscribe(params => {
      const phoneId = params.get("phoneId");
      const userId = params.get("userId");
      if (phoneId !== null && userId!==null){
        this.phoneService.getPhone(phoneId,userId).subscribe(phone => (this.phone = phone));
      } 
    });
    
  }

  goBack(phone: PhoneModel): void {
    this.router.navigateByUrl("/users/"+ phone.userId + "/phones/");
  }

  updatePhone(phone: PhoneModel): void {
    this.router.navigateByUrl("/users/" + phone.userId + "/phones/" + phone.phoneId)
  }

  initiateVerification(phone: PhoneModel): void {
    this.setKey = true;
    this.phoneService.initiateVerification(phone).subscribe();
  }

  completeVerification(dto:PhoneVerificationModel, phone: PhoneModel): void {
    this.phoneService.completeVerification(phone, dto).subscribe();
  }


}
