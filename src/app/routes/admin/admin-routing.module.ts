import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
      {path: 'user', component: UserListComponent},
      {path: 'user/:id', component: UserViewComponent},
      {path: 'user/add', component: UserAddComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
