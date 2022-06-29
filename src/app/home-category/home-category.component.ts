import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
  @Input() category:any="";
  categoryProducts:any
  categoryProductsLen:any
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoryProducts()
  }
  goToProductDetails(id:number){
    this.router.navigate(["/product",id]);
  }

  getCategoryProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.categoryProducts = data.filter(product=>product.category==this.category)
      this.categoryProductsLen = this.categoryProducts.length
    },(err)=>{
      console.log(err.message)
    })
  }

}
