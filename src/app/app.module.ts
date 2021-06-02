import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ChangeHistoryComponent } from './change-history/change-history.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { ChangeHistoryDetailComponent } from './change-history-detail/change-history-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    PhonesComponent,
    PhoneDetailComponent,
    UserEditComponent,
    PhoneEditComponent,
    UserCreateComponent,
    ChangeHistoryComponent,
    PhoneCreateComponent,
    ChangeHistoryDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


