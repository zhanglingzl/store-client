import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeComponent } from './trade.component';
import { TradeListComponent } from './trade-list/trade-list.component';

const routes: Routes = [
  {path: '', component: TradeComponent, children: [
    {path: 'list', component: TradeListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
