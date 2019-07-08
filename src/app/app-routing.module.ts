import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { DeleteCartComponent } from './product/delete-cart/delete-cart.component';

const routes: Routes = [
  {path:'products', component:ProductListComponent},
  {path:'prod/:prodId',component:ProductComponent},
  {path:'prod/edit/:prodId',component:ProductEditComponent},
  {path:'cart',component:ProductAddComponent},
  {path:'delete/:prodId',component:ProductDeleteComponent},
  {path:'cart/delete',component:DeleteCartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
