import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-flash-sales-categories',
  templateUrl: './flash-sales-categories.component.html',
  styleUrls: ['./flash-sales-categories.component.scss']
})
export class FlashSalesCategoriesComponent implements OnInit {
  value: string = '';
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  flashSales:any
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.flashSales = data.filter(product=>product.flash_sales)
    },(err)=>{
      console.log(err.message)
    })
}

addToCart(product:any){
  this.productService.getUserCart().subscribe((data)=>{
    let isAdded = data.some((e:any)=>{
      let prod = e.payload.doc.data()
      if(product.id==prod.id){
        return true
      }
      else{
        return false
      }
    })

    if(!isAdded){
      this.productService.addToCart(product)
    }

  },(err)=>{
    console.log(err.message)
  })
}

}
