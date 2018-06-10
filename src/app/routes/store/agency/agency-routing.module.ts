import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobComponent} from './job/job.component';
import {QuasiComponent} from './quasi/quasi.component';
import {QuasiListComponent} from './quasi/quasi-list/quasi-list.component';
import {UpgradeListComponent} from './upgrade/upgrade-list/upgrade-list.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {JobListComponent} from './job/job-list/job-list.component';

const routes: Routes = [
  { path: 'job', component: JobComponent, children: [
      { path: '', component:JobListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'upgrade', component: UpgradeComponent, children: [
      { path: '', component:UpgradeListComponent },
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
