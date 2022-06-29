import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { FooterComponent } from './footer/footer.component';
import { AnnualOffersComponent } from './annual-offers/annual-offers.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { CategoryComponent } from './category/category.component';
import { FlashSalesCategoriesComponent } from './flash-sales-categories/flash-sales-categories.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { OrdersComponent } from './orders/orders.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeHeaderComponent,
    FlashSalesComponent,
    FooterComponent,
    AnnualOffersComponent,
    HomeCategoryComponent,
    CategoryComponent,
    FlashSalesCategoriesComponent,
    LoginComponent,
    CreateAccountComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    SavedItemsComponent,
    OrdersComponent,
    UserAccountComponent,
    AccountDetailsComponent,
    ChangePasswordComponent,
    AccountOverviewComponent,
    SearchComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSliderModule,
    HttpClientModule,
    FilterPipeModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
