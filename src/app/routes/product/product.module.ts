import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAgencyListComponent } from './product-agency-list/product-agency-list.component';

const COMPONENT_NOROUNT = [
    ProductListComponent,
    ProductAgencyListComponent
];

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class ProductModule { }
