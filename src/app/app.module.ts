import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantLibraryComponent } from './restaurant-library/restaurant-library.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodLibraryComponent } from './food-library/food-library.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantOrderComponent } from './restaurant-order/restaurant-order.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { AdminRestaurantCardComponent } from './site-admin/admin-restaurant-card/admin-restaurant-card.component';
import { AdminUserCardComponent } from './site-admin/admin-user-card/admin-user-card.component';
import { AddRestaurantComponent } from './site-admin/add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    RestaurantCardComponent,
    RestaurantLibraryComponent,
    LoginComponent,
    FoodItemComponent,
    FoodLibraryComponent,
    ResetPasswordComponent,
    LoginAdminComponent,
    RegisterComponent,
    RestaurantOrderComponent,
    UserOrderComponent,
    OrderCardComponent,
    SiteAdminComponent,
    AdminRestaurantCardComponent,
    AdminUserCardComponent,
    AddRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
