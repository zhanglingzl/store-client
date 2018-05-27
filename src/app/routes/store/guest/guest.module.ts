import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest/guest.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    GuestRoutingModule
  ],
  declarations: [GuestComponent, GuestListComponent]
})
export class GuestModule { }
