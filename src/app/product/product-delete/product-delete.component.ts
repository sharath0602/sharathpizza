import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:ProductService) { }

  ngOnInit() {
    let prodId=this.route.snapshot.paramMap.get("prodId");
    this.deleteProduct(prodId);
  }
  deleteProduct(prodId){
    this.service.deleteProduct(prodId);
  }
}
