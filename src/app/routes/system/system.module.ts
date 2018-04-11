import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { ModuleListComponent } from './module-list/module-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import {UserListComponent} from './user-list/user-list.component';

const COMPONENT_NOROUNT = [
    UserListComponent,
    ModuleListComponent,
    RoleListComponent
];

@NgModule({
  imports: [
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class SystemModule { }
