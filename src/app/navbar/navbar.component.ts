import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private authListenerSubs!: Subscription;
  cartItemCount = 0;
  private cartListenerSubs!: Subscription;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      });
    this.cartItemCount = this.cartService.getCartItems().length;
    this.cartListenerSubs = this.cartService
      .getCartUpdateListener()
      .subscribe((cartItems: any) => {
        this.cartItemCount = cartItems.length;
      });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
