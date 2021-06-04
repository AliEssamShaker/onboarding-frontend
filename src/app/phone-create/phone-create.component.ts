import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent{

  formGroup: FormGroup = this.createFormGroup();
  user: UserModel;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private phoneService: PhoneService,
              private formBuilder: FormBuilder) {
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      phoneId:'',
      userId: '',
      phoneNumber: '', 
      isVerified: false,
      phoneType: '',
    });
  }

  
  save(): void {
    const valueToSave = this.formGroup.value;
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      console.log(valueToSave);
      valueToSave["userId"] = userId
      this.phoneService.createPhone(valueToSave, userId)
      .subscribe(data => {
        this.back();
        console.log(data)
      }, error => console.log(error));
    })
    
  }
  

  back(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      this.router.navigateByUrl("/users/"+userId+"/phones");
    })
    
  }

}
