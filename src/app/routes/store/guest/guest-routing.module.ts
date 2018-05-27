import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestListComponent} from './guest/guest-list/guest-list.component';
import {GuestComponent} from './guest/guest.component';

const routes: Routes = [
  { path: '', component: GuestComponent, children: [
      { path: '', component: GuestListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '用户详情'} }
    ] },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
