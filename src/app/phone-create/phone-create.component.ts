import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent{

  formGroup: FormGroup = this.createFormGroup();

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

    this.phoneService.createPhone(valueToSave)
      .subscribe(data => {
        this.back();
        console.log(data)
      }, error => console.log(error));
  }

  back(): void {
    this.router.navigateByUrl("/users/${phone.userId}/phones");
  }

}
