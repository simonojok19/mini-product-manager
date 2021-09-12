import { NgModule } from '@angular/core';
import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './details/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './guard/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
