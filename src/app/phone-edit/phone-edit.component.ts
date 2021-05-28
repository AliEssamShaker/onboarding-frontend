import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneModel } from '../model/phone.model';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

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
      // this.userService.get(userId).subscribe(user => (this.user = user));
      if (phoneId !== null && userId !==null){
        this.phoneService.getPhone(phoneId, userId).subscribe(phone => (this.phone = phone));
      } 
    });
    
  }

  goBack(phone : PhoneModel): void {
    this.router.navigateByUrl("/users/"+phone.userId+ "/phones/");
  }

  save(phone : PhoneModel): void {
    if (this.phone) {
      this.phoneService.updatePhone(this.phone).subscribe(() => this.goBack(phone));
    }
  }

}
