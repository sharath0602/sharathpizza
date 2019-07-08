import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Product } from './product/product';
import { Prodlist } from './product/product-list/product-list';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   prodlist:Product[];
   pizzas:Product[]=[];
   items:Product[]=[];
   uri = 'http://localhost:4000/product';
  constructor( private httpClient:HttpClient) { 
    //this.emplist=emplist;
   }
  //  getProducts():Observable<Product[]>{
  //   return of (Prodlist);
  // }
  getProduct(prodId:number):Observable<Product>{
    return of(Prodlist.find(prod=>prod.prodId==prodId));
  }
  // addProduct(product:Product){
  //   Prodlist.push(product);
  // }

  getProducts():Observable<Product[]>{
    console.log('service.getProducts() called');
    return this.httpClient.
    get<Product[]>(`${this.uri}`+'/allprod');
 }
  // addEmployee(empId, empName, designation) {
  //   const obj = {
  //     empId:empId,
  //   empName:empName,
  //   designation:designation,
  //   };
  //   console.log(obj);
  //   this.httpClient.post(`${this.uri}`+'/add', obj)
  //       .subscribe(res => console.log('Done'));
  // }
  // addProduct( prodId,prodName,pizza,price,base,type){
  //   const obj={prodId:prodId,prodName:prodName,pizza:pizza,price:price,base:base,type:type};
  //   console.log(obj);
  //   this.httpClient.post(`${this.uri}`+'/add', obj)
  //       .subscribe(res => console.log('Done'));
    
  //   // this.prodService.addProduct(prodId,prodName,pizza,price,base,type);
  // }


  public addToCart(pizza){
    this.pizzas.push(pizza);
    console.log(this.pizzas)
  }
  // getCartPizzas():Observable<Product[]>{
  //   console.log("Mssage"+this.pizzas);
  //   return of(this.pizzas);
    
  // }
  getCartPizzas(){
    console.log("Mssage"+this.pizzas);
    return this.pizzas;
    
  }
  public getitems():Observable<Product[]>
  {
      return of(this.items);
  }
  deleteProduct(prodId:number){
    this.httpClient.delete(`${this.uri}`+'/delete/'+`${prodId}`)
    .subscribe(res=>console.log("New Employee Added Successfully"));
  }
  deleteFromCart(prodId){
    this.items.pop();
}
  updateProduct(prodId,price):any {
    return this.httpClient.put(`${this.uri}`+'/update/'+`${prodId}`+'/'+`${price}`,{})
    .subscribe(res=>console.log("updated successfully"));
     }
}