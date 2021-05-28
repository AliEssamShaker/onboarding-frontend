import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneModel } from '../model/phone.model';
import { UserModel } from '../model/user.model';
import { PhoneService } from '../service/phone.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones : PhoneModel[] = [];
  constructor(
      private phoneService: PhoneService,
      private router: Router, 
      private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getAllPhones()
  }

  getAllPhones(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      if (userId !== null){
        this.phoneService.findAllPhones(userId).subscribe(phones => (this.phones = phones));
      }
    })
    
  }

  deletePhone(phone: PhoneModel): void {
    this.phoneService.deletePhone(phone).subscribe();
  }

  createPhone(): void {
    this.router.navigateByUrl("/users/");

  }



}
