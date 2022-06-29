import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlashSalesCategoriesComponent } from './flash-sales-categories/flash-sales-categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { OrdersComponent } from './orders/orders.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'create_account',component:CreateAccountComponent},
  {path:'search/:keyword',component:SearchComponent},
  {path:'flash_sales',component:FlashSalesCategoriesComponent},
  {path:'categories/:category',component:CategoryComponent},
  {path:'categories/:category/:annual_offers',component:CategoryComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {
    path:'user_account',
    component:UserAccountComponent,
    children:[
          {path:'',component:AccountOverviewComponent},
          {path:'account_overview',component:AccountOverviewComponent},
          {path:'orders',component:OrdersComponent},
          {path:'saved_items',component:SavedItemsComponent},
          {path:'account_details',component:AccountDetailsComponent},
          {path:'change_password',component:ChangePasswordComponent},

        ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
