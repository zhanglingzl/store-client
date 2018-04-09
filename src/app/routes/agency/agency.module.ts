import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {AgencyRoutingModule} from './agency-routing.module';
import {AgencyListComponent} from './agency-list/agency-list.component';
import {AgencyPayrollListComponent} from './payroll-agency-list/agency-payroll-list.component';
import {QuasiAgencyListComponent} from './quasi-agency-list/quasi-agency-list.component';

const COMPONENT_NOROUNT = [
    AgencyListComponent,
    AgencyPayrollListComponent,
    QuasiAgencyListComponent
];

@NgModule({
  imports: [
    SharedModule,
    AgencyRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class AgencyModule { }
