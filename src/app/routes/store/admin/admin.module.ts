import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserViewComponent,
    UserEditComponent
  ],
  //没有在路由中注册的component
  entryComponents: [
    UserEditComponent
  ]
})
export class AdminModule { }
