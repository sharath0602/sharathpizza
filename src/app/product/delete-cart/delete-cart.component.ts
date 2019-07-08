import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-cart',
  templateUrl: './delete-cart.component.html',
  styleUrls: ['./delete-cart.component.css']
})
export class DeleteCartComponent implements OnInit {
  private products:Product[];
  constructor( private route:ActivatedRoute, private cartService:ProductService) { }

  ngOnInit() {
    let prodId=+this.route.snapshot.paramMap.get("prodId");
    this.deleteProduct(prodId);
  }
  deleteProduct(prodId)
  {
    this.cartService.deleteFromCart(prodId);
      this.cartService.getitems().subscribe(p=>{
        console.log(p);
      this.products=p;
  });

}
}
