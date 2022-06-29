import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userCart:any
  constructor(private fb: FormBuilder, private productService:ProductsService, private router:Router) { }

  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9]+(.com|.net|.eg|.gov|.org)$')]],
    number: ['', [Validators.required, Validators.minLength(11)]],
    address: ['', Validators.required],
    cardName: ['', [Validators.required, Validators.minLength(3)]],
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
    exDate: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.minLength(3)]],
  })

  get firstName() {
    return this.checkoutForm.get('firstName');
  }
  get lastName() {
    return this.checkoutForm.get('lastName');
  }
  get number() {
    return this.checkoutForm.get('number');
  }
  get email() {
    return this.checkoutForm.get('email');
  }
  get address() {
    return this.checkoutForm.get('address');
  }

  visaForm = this.fb.group({

  })

  get cardName() {
    return this.checkoutForm.get('cardName');
  }
  get cardNumber() {
    return this.checkoutForm.get('cardNumber');
  }
  get exDate() {
    return this.checkoutForm.get('exDate');
  }
  get cvv() {
    return this.checkoutForm.get('cvv');
  }


  getUserCart(){
    this.productService.getUserCart().subscribe((data)=>{
      this.userCart = data.map((e:any)=>e.payload.doc.data())
    },(err)=>{
      console.log(err.message)
    })
  }

Checkbtn(from:any){
  if(this.checkoutForm.valid){
    this.productService.getUserCart().subscribe((data)=>{
      this.userCart = data.map((e:any)=>e.payload.doc.data())
      if(this.userCart.length){
        this.productService.saveCartToOrders(this.userCart)
        this.productService.clearUserCart(this.userCart)
        console.log(' button clicked ')
        this.router.navigate(["/user_account","orders"]);
      }
    },(err)=>{
      console.log(err.message)
    })
  }
}

  ngOnInit(): void {
  }

}
