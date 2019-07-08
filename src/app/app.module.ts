import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { from } from 'rxjs';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { DeleteCartComponent } from './product/delete-cart/delete-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    DeleteCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularWebStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
