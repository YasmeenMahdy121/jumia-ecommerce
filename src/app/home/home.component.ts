import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:any

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories(){
    this.productService.getAllOffers().subscribe((data)=>{
      this.categories = Object.keys(data)
      // console.log(this.categories)
    },(err)=>{
      console.log(err.message)
    })
  }

}
