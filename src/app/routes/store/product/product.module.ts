import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {SharedModule} from '../../../shared/shared.module';
import { RepertoryComponent } from './repertory/repertory.component';
import { RepertoryListComponent } from './repertory/repertory-list/repertory-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent,
    ProductListComponent,
    RepertoryComponent,
    RepertoryListComponent,
    ProductEditComponent],
  // 没有在路由中注册的component
  entryComponents: [
    ProductEditComponent,
  ]
})
export class ProductModule { }
