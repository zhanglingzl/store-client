import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {RepertoryComponent} from './repertory/repertory.component';
import {RepertoryListComponent} from './repertory/repertory-list/repertory-list.component';

const routes: Routes = [
  { path: '', component: ProductComponent, children: [
      { path: '', component: ProductListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'repertory', component: RepertoryComponent, children: [
      { path: '', component: RepertoryListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },

  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
