import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { RoleListComponent } from './role-list/role-list.component';

const COMPONENT_NOROUNT = [
    UserListComponent,
    ModuleListComponent,
    RoleListComponent
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
