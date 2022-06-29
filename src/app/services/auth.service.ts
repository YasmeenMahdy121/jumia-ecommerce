import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jumiaAuth:AngularFireAuth, private router:Router, private jumiaDB:AngularFirestore) { }

  // login
  login(email:string, password:string){
    this.jumiaAuth.signInWithEmailAndPassword(email, password).then((userCredential)=>{
      let user = userCredential.user;
      localStorage.setItem("jumiaCurrentUserKey", JSON.stringify(user?.uid))
      this.router.navigate([""]);
    },err=>{
      console.log(err.message)
      this.router.navigate(["/login"]);
    })
  }

  // register
  register(email:string, password:string, userInfo:any){
    this.jumiaAuth.createUserWithEmailAndPassword(email, password).then((userCredential)=>{
      let user = userCredential.user;
      localStorage.setItem("jumiaCurrentUserKey", JSON.stringify(user?.uid))
      let ref = this.jumiaDB.collection("/JumiaUsers").doc(user?.uid)
      ref.set(userInfo)
      this.router.navigate([""]);
    },err=>{
      console.log(err.message)
      this.router.navigate(["/login"]);
    })
  }

  // log out
  logOut(){
    this.jumiaAuth.signOut().then(()=>{
      localStorage.removeItem('jumiaCurrentUserKey')
      this.router.navigate(["/login"]);
    },err=>{
      console.log(err.message)
      this.router.navigate(["/login"]);
    })
  }

  getUserInfo(userKey:any){
    return this.jumiaDB.collection("/JumiaUsers/"+userKey).snapshotChanges();
    // let ref = this.jumiaDB.collection("/JumiaUsers").doc(userKey)
    // ref.get()
  }

}
