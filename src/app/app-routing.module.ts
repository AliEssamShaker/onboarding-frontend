import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {PhonesComponent} from './phones/phones.component';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
import {PhoneEditComponent} from './phone-edit/phone-edit.component';
import {ChangeHistoryComponent} from './change-history/change-history.component';
import {PhoneCreateComponent} from './phone-create/phone-create.component';


const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId/edit', component: UserEditComponent},
  {path: 'users/:userId/phones', component: PhonesComponent},
  {path: 'users/:userId/phones/create', component: PhoneEditComponent},
  {path: 'users/:userId/phones/:phoneId', component: PhoneDetailComponent},
  {path: 'users/:userId/phones/:phoneId/edit', component: PhoneEditComponent},
  {path: 'users/:userId/changes-history', component: ChangeHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
