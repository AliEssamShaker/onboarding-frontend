import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  formGroup = this.createFormGroup();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerRouteParameterChanges();
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      userId: '',
      firstName: '',
      lastName: '',
      username: ''
    });
  }

  registerRouteParameterChanges(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("userId");
      if (userId) {
        this.userService.get(userId).subscribe(user => {
          this.formGroup.patchValue(user);
        });
      }
    });
  }

  get firstName(): string | null {
    return this.formGroup.get("firstName").value;
  }

  get lastName(): string | null {
    return this.formGroup.get("lastName").value;
  }

  get username(): string | null {
    return this.formGroup.get("username").value;
  }
  get userId(): string | null {
    return this.formGroup.get("userId").value;
  }


  save(): void {
    const valueToSave = this.formGroup.value;
    this.userService.update(valueToSave).subscribe(() => this.back());
  }

  back(): void {
    this.router.navigateByUrl("/users");
  }
}
