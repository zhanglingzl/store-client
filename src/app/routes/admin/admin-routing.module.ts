import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {RoleListComponent} from "./role-list/role-list.component";

const routes: Routes = [
    {path: 'user', component: UserListComponent},
    {path: 'module', component: ModuleListComponent},
    {path: 'role', component: RoleListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
