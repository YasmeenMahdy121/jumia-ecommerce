import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userCartSize:any
  searchKeyword:string=""
  isLogedIn:boolean=localStorage.getItem('jumiaCurrentUserKey')?true:false
  userKey:any=localStorage.getItem('jumiaCurrentUserKey')||null
  user:any

  constructor(private productService:ProductsService,private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.getUserCart()
    // this.gettUserInfo()

  }

  search(){
    if(this.searchKeyword){
      this.router.navigate(["/search",this.searchKeyword]);
      this.searchKeyword=''
    }
  }

  getUserCart(){
    this.productService.getUserCart().subscribe((data)=>{
      this.userCartSize =data.length
    },(err)=>{
      console.log(err.message)
    })
  }

  goToCart(){
    this.router.navigate(["/cart"]);
  }

  logout(){
    this.authService.logOut()
  }

  gettUserInfo(){
    this.authService.getUserInfo(this.userKey).subscribe((data)=>{
      this.user = data
      console.log(this.user)
    },(err)=>{
      console.log(err.message)
    })

  }
}
