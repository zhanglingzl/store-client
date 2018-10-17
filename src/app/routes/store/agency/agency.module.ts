import { NgModule } from '@angular/core';

import { AgencyRoutingModule } from './agency-routing.module';
import { JobComponent } from './job/job.component';
import {JobListComponent} from './job/job-list/job-list.component';
import {SharedModule} from '../../../shared/shared.module';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { UpgradeListComponent } from './upgrade/upgrade-list/upgrade-list.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {InServerComponent} from './in-server/in-server.component';
import {InServerListComponent} from './in-server/in-server-list/in-server-list.component';
import {GenderPipe, LevelPipe} from '../pipe';

const AGENCY_PIPE = [
  GenderPipe,
  LevelPipe
];

@NgModule({
  imports: [
    SharedModule,
    AgencyRoutingModule
  ],
  declarations: [
    JobComponent,
    JobListComponent,
    CardComponent,
    CardListComponent,
    UpgradeListComponent,
    UpgradeComponent,
    InServerComponent,
    InServerListComponent,
    ...AGENCY_PIPE
  ]
})
export class AgencyModule { }
