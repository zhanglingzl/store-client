import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleViewComponent } from './role/role-view/role-view.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
    RoleComponent,
    RoleListComponent,
    RoleViewComponent,
    RoleEditComponent
  ],
  //没有在路由中注册的component
  entryComponents: [
    UserEditComponent,
    RoleEditComponent
  ]
})
export class AdminModule { }
