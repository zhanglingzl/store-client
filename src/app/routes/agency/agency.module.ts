import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { QuasiAgencyListComponent } from './quasi-agency-list/quasi-agency-list.component';
import { InServerAgencyListComponent } from './in-server-agency-list/in-server-agency-list.component';

const COMPONENT_NOROUNT = [
    AgencyListComponent,
    InServerAgencyListComponent,
    QuasiAgencyListComponent
];

@NgModule({
  imports: [
    SharedModule,
    AgencyRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class AgencyModule { }
