import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobComponent} from './job/job.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card/card-list/card-list.component';
import {UpgradeListComponent} from './upgrade/upgrade-list/upgrade-list.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {JobListComponent} from './job/job-list/job-list.component';

const routes: Routes = [
  { path: 'job', component: JobComponent, children: [
      { path: '', component: JobListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'upgrade', component: UpgradeComponent, children: [
      { path: '', component: UpgradeListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'card', component: CardComponent, children: [
      { path: '', component: CardListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: '', redirectTo: '/job', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
