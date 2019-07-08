import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  pizzas:Product[];
  constructor(public route:ActivatedRoute,public prodService:ProductService,public local: LocalStorageService, public session: SessionStorageService) { }

  ngOnInit() {
    // this.prodService.getCartPizzas().subscribe(p=>this.pizzas=p);
    this.pizzas=this.prodService.getCartPizzas();
  
  }
 
}