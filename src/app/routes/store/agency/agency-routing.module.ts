import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobComponent} from './job/job.component';
import {JobListComponent} from './job/job-list/job-list.component';
import {InServerComponent} from './in-server/in-server.component';
import {InServerListComponent} from './in-server/in-server-list/in-server-list.component';
import {QuasiComponent} from './quasi/quasi.component';
import {QuasiListComponent} from './quasi/quasi-list/quasi-list.component';

const routes: Routes = [
  { path: 'job', component: JobComponent, children: [
      { path: '', component:JobListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'in-server', component: InServerComponent, children: [
      { path: '', component:InServerListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'quasi', component: QuasiComponent, children: [
      { path: '', component: QuasiListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: '', redirectTo: '/job', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
