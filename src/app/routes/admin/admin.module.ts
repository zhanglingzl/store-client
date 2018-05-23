import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserComponent } from './user/user.component';

const COMPONENT_NOROUNT = [
  UserListComponent,
  UserEditComponent,
  UserViewComponent,
  UserAddComponent,
  UserComponent,
];

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class AdminModule { }
