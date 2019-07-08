import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from 'src/app/product.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
   product:Product[]=[];
   _listFilter = 'v';
   filteredProducts: Product[] = [];
   selectedProd:Product;
  pizzas:Product[]=[];

  constructor(public productService:ProductService,public local: LocalStorageService, public session: SessionStorageService) { }
  ngOnInit() {
    this.getProducts();    
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product;
  }  
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.product.filter((product: Product) => product.pizza.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  addToCart(pizza:Product){

    window.alert("Your Pizza is added to cart");
    this.local.set(""+pizza.prodId,pizza)
    this.productService.addToCart(pizza);
  }
 
  getProducts():void{
    this.productService
    .getProducts()
    .subscribe(product=> this.product=product);
  }

  onSelection(prod:Product){
    this.selectedProd=prod;
  }


  

}
