import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  value: string = '';
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }


  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute) { }

  category:string|null=''
  annual_offers:string|null=''
  categoryProducts:any
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.category=params.get('category');
      this.annual_offers=params.get('annual_offers');
      if(this.annual_offers){
        this.getoffers(this.category)
      }
      else{
        this.getProducts(this.category)
      }
    })
  }


  getProducts(category:any){
      this.productService.getAllProducts().subscribe((data)=>{
        this.categoryProducts = data.filter(product=>product.category==category)
      },(err)=>{
        console.log(err.message)
      })
  }
  getoffers(category:any){
    this.productService.getAllProducts().subscribe((data)=>{
      this.categoryProducts = data.filter(product=>product.category==category&&product.annual_offers)
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
