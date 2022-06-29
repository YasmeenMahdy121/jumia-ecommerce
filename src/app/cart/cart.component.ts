import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  userCart:any
  totalPrice:number=0
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getUserCart()
  }

  getUserCart(){
    this.productService.getUserCart().subscribe((data)=>{
      this.totalPrice=0
      this.userCart = data.map((e:any)=>{
        this.totalPrice+= e.payload.doc.data().quantity*e.payload.doc.data().price
        return e.payload.doc.data()
      })
    },(err)=>{
      console.log(err.message)
    })
  }

  increase(product:any){
    product.quantity++
    this.productService.updateProduct(product)
  }

  decrease(product:any){
    product.quantity--
    this.productService.updateProduct(product)
  }

  removeProduct(product:any){
    this.productService.removeFromUserCart(product)
  }

  checkout(){
    if(this.userCart.length){
      this.router.navigate(["/checkout"]);
    }
  }

}
