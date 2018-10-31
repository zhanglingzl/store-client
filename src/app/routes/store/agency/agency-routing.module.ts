import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobComponent} from './job/job.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card/card-list/card-list.component';
import {UpgradeListComponent} from './upgrade/upgrade-list/upgrade-list.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {JobListComponent} from './job/job-list/job-list.component';
import {AgencyCenterComponent} from './center/center.component';
import {AgencyCenterArticlesComponent} from './center/articles/articles.component';
import {AgencyCenterProjectsComponent} from './center/projects/projects.component';
import {AgencyCenterApplicationsComponent} from './center/applications/applications.component';

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
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CardListComponent, data: { title: '在职代理'}  },
      { path: 'center', component: AgencyCenterComponent,  children: [
          { path: '', redirectTo: 'articles', pathMatch: 'full' },
          {
            path: 'articles',
            component: AgencyCenterArticlesComponent,
            data: { title: '代理详情'},
          },
          {
            path: 'projects',
            component: AgencyCenterProjectsComponent,
          },
          {
            path: 'applications',
            component: AgencyCenterApplicationsComponent,
          },
        ]}
    ] },
  { path: '', redirectTo: '/job', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
