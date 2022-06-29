import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  userOrder:any
  userOrdersize:number=0
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.productService.getOrders().subscribe((data)=>{
      this.userOrder = data.map((e:any)=> e.payload.doc.data())
      this.userOrdersize = this.userOrder.length
    },(err)=>{
      console.log(err.message)
    })
  }
}
