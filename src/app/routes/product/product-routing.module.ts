import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAgencyListComponent} from './product-agency-list/product-agency-list.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'agency', component: ProductAgencyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
