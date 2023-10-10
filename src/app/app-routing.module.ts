import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FoodLibraryComponent } from './food-library/food-library.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterComponent } from './register/register.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { AddRestaurantComponent } from './site-admin/add-restaurant/add-restaurant.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'food', component: FoodLibraryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: LoginAdminComponent },
  { path: 'adminhome', component: SiteAdminComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
