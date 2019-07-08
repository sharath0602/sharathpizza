import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
@Input()
  product:Product;
  Products:Product[];

  constructor( private route:ActivatedRoute, private prodService:ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct():void{
    let prodId=+this.route.snapshot.paramMap.get('prodId');
    this.prodService.getProduct(prodId).subscribe(product=>this.product=product);
  }
  updateProduct(prodId:any,price:any){
    this.prodService.updateProduct(prodId,price);
  }
}
