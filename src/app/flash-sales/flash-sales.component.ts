import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.scss']
})
export class FlashSalesComponent implements OnInit {

  flashSalesProducts:any

  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getflashSalesProducts()
  }
  goToProductDetails(id:number){
    this.router.navigate(["/product",id]);
  }

  getflashSalesProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.flashSalesProducts =data.filter(product=>product.flash_sales==true)
      console.log(this.flashSalesProducts)
    },(err)=>{
      console.log(err.message)
    })
  }

}
