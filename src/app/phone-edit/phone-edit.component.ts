import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneModel } from '../model/phone.model';
import { UserModel } from '../model/user.model';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

  // phone: PhoneModel | undefined;

  // constructor(private router: Router,
  //   private route: ActivatedRoute,
  //   private phoneService: PhoneService) { }

  // ngOnInit(): void {
  //   this.getPhone();
  // }

  // getPhone(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const phoneId = params.get("phoneId");
  //     const userId = params.get("userId");
  //     // this.userService.get(userId).subscribe(user => (this.user = user));
  //     if (phoneId !== null && userId !==null){
  //       this.phoneService.getPhone(phoneId, userId).subscribe(phone => (this.phone = phone));
  //     } 
  //   });
    
  // }

  // goBack(phone : PhoneModel): void {
  //   this.router.navigateByUrl("/users/"+phone.userId+ "/phones/");
  // }

  // save(phone : PhoneModel): void {
  //   if (this.phone) {
  //     this.phoneService.updatePhone(this.phone).subscribe(() => this.goBack(phone));
  //   }
  // }

  formGroup = this.createFormGroup();
  user: UserModel;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerRouteParameterChanges();
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      phoneId:'',
      userId: this.user.userId,
      phoneNumber:'',
      isVerified:false,
      phoneType:'',
      
    });
  }

  registerRouteParameterChanges(): void {
    this.route.paramMap.subscribe(params => {
      const phoneId = params.get("phoneId");
      const userId = params.get("userId");
      if (phoneId) {
        this.phoneService.getPhone(phoneId, userId).subscribe(phone => {
          this.formGroup.patchValue(phone);
        });
      }
    });
  }

  get phoneNumber(): string | null {
    return this.formGroup.get("phoneNumber").value;
  }

  get phoneType(): string | null {
    return this.formGroup.get("phoneType").value;
  }

  get phoneId(): string | null {
    return this.formGroup.get("phoneId").value;
  }

  save(): void {
    this.route.paramMap.subscribe(params =>{
      const userId = params.get("userId");
      const valueToSave = this.formGroup.value;
      this.phoneService.updatePhone(valueToSave, userId).subscribe(() => this.back());
    })

  }

  back(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      this.router.navigateByUrl("/users/"+userId+"/phones/");
    })
    
    
    
  }

}
