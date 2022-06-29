import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKeyword:any
  searchedProducts:any
  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.searchKeyword=params.get('keyword');
      this.productService.getAllProducts().subscribe((data)=>{
        this.searchedProducts =data.filter((product:any)=>{
          if(product.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) || product.brand.toLowerCase().includes(this.searchKeyword.toLowerCase())){
            return true
          }
          return false
        })
      },(err)=>{
        console.log(err.message)
      })
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
