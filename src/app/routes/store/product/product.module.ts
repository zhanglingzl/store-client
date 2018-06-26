import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {SharedModule} from '../../../shared/shared.module';
import { AgencyComponent } from './agency/agency.component';
import { AgencyListComponent } from './agency/agency-list/agency-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {Step1Component} from './product/product-edit/step1.component';
import {Step2Component} from './product/product-edit/step2.component';

const COMPONENTS_NOROUNT = [Step1Component, Step2Component];

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductListComponent, AgencyComponent, AgencyComponent, AgencyListComponent, ProductEditComponent, ...COMPONENTS_NOROUNT],
  //没有在路由中注册的component
  entryComponents: [
    ProductEditComponent,
    COMPONENTS_NOROUNT
  ]
})
export class ProductModule { }
