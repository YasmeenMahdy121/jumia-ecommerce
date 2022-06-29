import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  hide = true;
  isButtonVisible = true;
  productID:any
  product:any
  isSaved:any

  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.productID=params.get('id');
      this.getProductById(this.productID)
    })
  }

  getProductById(productId:number){
    this.productService.getAllProducts().subscribe((data)=>{
      this.product =data.filter(product=>product.id==productId)[0]
      // this.isSavedItem(this.product.id)
    },(err)=>{
      console.log(err.message)
    })
  }
  saveItem(product:any){
    this.hide = !this.hide
    this.productService.getUserSavedItems().subscribe((data)=>{
      let isSaved = data.some((e:any)=>{
        let prod = e.payload.doc.data()
        if(product.saveId==prod.saveId){
          return true
        }
        else{
          return false
        }
      })
      if(!isSaved&&!this.hide){
        this.productService.addToSavedItems(product)
      }
      else if(this.hide){
        this.productService.removeFromSavedItems(product)
      }

    },(err)=>{
      console.log(err.message)
    })
  }
  // isSavedItem(productId:number){
  //   this.productService.getUserSavedItems().subscribe((data)=>{
  //     this.hide =data.some((product:any)=>{product.payload.doc.data().id==productId})
  //     // this.hide
  //   },(err)=>{
  //     console.log(err.message)
  //   })
  // }
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

