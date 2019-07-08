import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

// @Input()
// product:Product;
//   constructor(public route:ActivatedRoute,
//     public Service:ProductService) { }

  ngOnInit() {
  // this.getProduct();
  }
//   getProduct():void{
//     let prodId=+this.route.snapshot.paramMap.get('prodId');
//     this.Service.getProduct(prodId)
//     .subscribe(product=>this.product=product);
//   }
}
