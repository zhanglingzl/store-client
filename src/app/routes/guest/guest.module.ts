import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestListComponent } from './guest-list/guest-list.component';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    GuestRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      GuestListComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class GuestModule { }
