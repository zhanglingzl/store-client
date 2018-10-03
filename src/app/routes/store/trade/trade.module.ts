import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { TradeListComponent } from './trade-list/trade-list.component';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    TradeComponent,
    TradeListComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TradeModule { }
