import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {SharedModule} from '../../../shared/shared.module';
import { AgencyComponent } from './agency/agency.component';
import { AgencyListComponent } from './agency/agency-list/agency-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductListComponent, AgencyComponent, AgencyComponent, AgencyListComponent, ProductEditComponent],
  //没有在路由中注册的component
  entryComponents: [
    ProductEditComponent
  ]
})
export class ProductModule { }
