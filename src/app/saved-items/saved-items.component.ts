import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.scss']
})
export class SavedItemsComponent implements OnInit {

  userSavedItems:any
  userSavedItemsSize:number=0
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getSavedItems()
  }

  getSavedItems(){
    this.productService.getUserSavedItems().subscribe((data)=>{
      this.userSavedItems = data.map((e:any)=> e.payload.doc.data())
      this.userSavedItemsSize = this.userSavedItems.length
      console.log(this.userSavedItems)
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
  remove(product:any){
    this.productService.removeFromSavedItems(product)
  }
}
