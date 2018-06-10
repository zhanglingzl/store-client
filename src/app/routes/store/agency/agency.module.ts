import { NgModule } from '@angular/core';

import { AgencyRoutingModule } from './agency-routing.module';
import { JobComponent } from './job/job.component';
import {JobListComponent} from './job/job-list/job-list.component';
import {SharedModule} from '../../../shared/shared.module';
import { QuasiComponent } from './quasi/quasi.component';
import { QuasiListComponent } from './quasi/quasi-list/quasi-list.component';
import { UpgradeListComponent } from './upgrade/upgrade-list/upgrade-list.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  imports: [
    SharedModule,
    AgencyRoutingModule
  ],
  declarations: [JobComponent, JobListComponent, QuasiComponent, QuasiListComponent, UpgradeListComponent, UpgradeComponent]
})
export class AgencyModule { }
