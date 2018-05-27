import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InServerListComponent} from '../agency/in-server/in-server-list/in-server-list.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {AgencyComponent} from './agency/agency.component';
import {AgencyListComponent} from './agency/agency-list/agency-list.component';

const routes: Routes = [
  { path: '', component: ProductComponent, children: [
      { path: '', component:ProductListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'agency', component: AgencyComponent, children: [
      { path: '', component:AgencyListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },

  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
