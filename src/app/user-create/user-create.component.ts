import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  formGroup: FormGroup = this.createFormGroup();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      userId: '',
      firstName: '',
      lastName: '',
      username: ''
    });
  }

  save(): void {
    const valueToSave = this.formGroup.value;
    console.log(valueToSave)
    this.userService.create(valueToSave)
      .subscribe(data => {
        this.back();
        console.log(data)
      }, error => console.log(error));
  }

  back(): void {
    this.router.navigateByUrl("/users");
  }
}
