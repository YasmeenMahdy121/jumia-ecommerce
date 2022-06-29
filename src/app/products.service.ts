import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  userKey:any = localStorage.getItem('jumiaCurrentUserKey')
  constructor(private http:HttpClient,private jumiaDB:AngularFirestore) {
    console.log(this.userKey)
  }


  products_url:string="https://jumia-ef19c-default-rtdb.firebaseio.com/products.json";
  offers_url:string="https://jumia-ef19c-default-rtdb.firebaseio.com/offers/annual_offers/categories.json";
  // get all products
  getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.products_url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server Error")
    }));
  }
  // get all offers
  getAllOffers():Observable<any>
  {
    return this.http.get<any>(this.offers_url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server Error")
    }));
  }

  addToCart(product:any){
    product.productId =this.jumiaDB.createId();
    let ref = this.jumiaDB.collection("usersCart/"+this.userKey+"/userCart").doc(product.productId)
    ref.set(product)
  }
  getUserCart(){
    return this.jumiaDB.collection("usersCart/"+this.userKey+"/userCart").snapshotChanges();
  }
  removeFromUserCart(product:any){
    let ref = this.jumiaDB.collection("usersCart/"+this.userKey+"/userCart").doc(product.productId);
    return ref.delete()
  }

  updateProduct(product:any){
    let ref = this.jumiaDB.collection("usersCart/"+this.userKey+"/userCart").doc(product.productId);
    return ref.update(product)
  }

  addToSavedItems(product:any){
    product.saveId =this.jumiaDB.createId();
    let ref = this.jumiaDB.collection("usersSavedItems/"+this.userKey+"/savedItems").doc(product.saveId)
    ref.set(product)
  }
  getUserSavedItems(){
    return this.jumiaDB.collection("usersSavedItems/"+this.userKey+"/savedItems").snapshotChanges();
  }
  removeFromSavedItems(product:any){
    let ref = this.jumiaDB.collection("usersSavedItems/"+this.userKey+"/savedItems").doc(product.saveId);
    ref.delete()
  }

  saveCartToOrders(userCart:any){
    userCart.forEach((product:any) => {
      let ref = this.jumiaDB.collection("usersOrders/"+this.userKey+"/userOrder").doc(product.productId)
      ref.set(product)
    });
  }
  clearUserCart(userCart:any){
    userCart.forEach((product:any) => {
      let ref = this.jumiaDB.collection("usersCart/"+this.userKey+"/userCart").doc(product.productId);
      return ref.delete()
    });
  }

  getOrders(){
    return this.jumiaDB.collection("usersOrders/"+this.userKey+"/userOrder").snapshotChanges();
  }

}
