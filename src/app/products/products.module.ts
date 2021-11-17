import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListFilterComponent } from './components/product-list-filter/product-list-filter.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductItemComponent } from './components/product-item/product-item.component';


@NgModule({
  declarations: [
    ProductsPage,
    ProductListComponent,
    ProductListFilterComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[ProductsPage]
})
export class ProductsModule { }
