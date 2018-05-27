import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserComponent } from './user/user.component';
import {RoleViewComponent} from './role/role-view/role-view.component';
import {RoleListComponent} from './role/role-list/role-list.component';
import {RoleComponent} from './role/role.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserViewComponent, data: { title: '用户详情'} }
    ] },
  { path: 'role', component: RoleComponent, children: [
      { path: '', component: RoleListComponent },
      { path: ':id', component: RoleViewComponent, data: { title: '角色详情'} }
    ] },
  { path: '', redirectTo: '/user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
