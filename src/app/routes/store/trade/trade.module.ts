import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { ShippingComponent } from './shipping/shipping.component';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [
  ShippingComponent
];

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    TradeComponent,
    TradeListComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TradeModule { }
