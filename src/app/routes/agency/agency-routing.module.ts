import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgencyListComponent} from './agency-list/agency-list.component';
import {InServerAgencyListComponent} from './in-server-agency-list/in-server-agency-list.component';
import {QuasiAgencyListComponent} from './quasi-agency-list/quasi-agency-list.component';

const routes: Routes = [
    { path: '', component: AgencyListComponent },
    { path: 'in-server', component: InServerAgencyListComponent },
    { path: 'quasi', component: QuasiAgencyListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
