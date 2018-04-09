import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgencyListComponent} from "./agency-list/agency-list.component";
import {AgencyPayrollListComponent} from "./payroll-agency-list/agency-payroll-list.component";
import {QuasiAgencyListComponent} from "./quasi-agency-list/quasi-agency-list.component";

const routes: Routes = [
    {path: '', component: AgencyListComponent},
    {path: 'payroll', component: AgencyPayrollListComponent},
    {path: 'quasi', component: QuasiAgencyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
