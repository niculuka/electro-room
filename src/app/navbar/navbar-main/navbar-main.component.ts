import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Product } from 'src/app/shared/models/product.model';
import { CurrentUrl } from 'src/app/shared/services/current-url.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnDestroy {

  @ViewChild('txt') txt: ElementRef | undefined;
  isMobileMenuOpen: boolean = false;

  currentUser: User = new User();
  userFirstChar: string = "";

  cart!: Cart;
  favorites!: Array<Product>;
  cartQuantity = 0;
  favoriteQuantity = 0;

  currentLink: string = "";

  handleCart: string = "";
  handleFavorites: string = "";

  product: Product = new Product();
  products: Array<Product> = [];

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private router: Router,
    private currentUrl: CurrentUrl,
    private menuService: MenuService,
  ) {
    this.sub0 = cartService.getCartObservable().subscribe(data => {
      this.cart = data;
      this.cartQuantity = data.totalCount;
    });
    this.sub1 = favoriteService.getFavoritesObservable().subscribe(data => {
      this.favorites = data;
    });

    this.sub2 = this.authService.currentUser.subscribe(
      data => {
        this.currentUser = data;
        if (this.currentUser) {
          this.userFirstChar = this.currentUser.username.charAt(0);
        }
      });
    this.sub3 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      if (url) {
        this.currentLink = url;
      }
    });
    this.sub4 = this.menuService.getMobileMenuObservable().subscribe((data) => {
      this.isMobileMenuOpen = data;
    });
  }

  // MEGA-MENU - MOBILE ---------------------------------------------------
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.menuService.isMobileMenuOpen = this.isMobileMenuOpen;
    this.menuService.handleMobileMenuService();
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.txt?.nativeElement.contains(event.target)) {
      // console.log("INSIDE");
    } else {
      this.isMobileMenuOpen = false;
      this.menuService.isMobileMenuOpen = this.isMobileMenuOpen;
      this.menuService.handleMobileMenuService();
      // console.log("OUTSIDE");
    }
  }

  // SEARCH - BAR -----------------------------------------------------------
  getProduct(searchTerm: string): void {
    if (searchTerm) {
      this.router.navigate(["/search/" + searchTerm]);
    };
  }

  // CART - NAV -----------------------------------------------------------
  isCartPage() {
    return this.currentLink === "/cart";
  }

  refreshCart() {
    if (this.isCartPage()) {
      window.location.reload();
    }
  }

  isCartEmpty() {
    return this.cart.items.length === 0;
  }

  // FAVORITES - NAV -----------------------------------------------------
  isFavoritesPage() {
    return this.currentLink === "/favorites";
  }

  refreshFavorites() {
    if (this.isFavoritesPage()) {
      window.location.reload();
    }
  }

  isFavoritesEmpty() {
    return this.favorites.length === 0;
  }

  // LOGS -------------------------------------------------------------
  isAdmin() {
    return this.currentUser?.role === ROLE.ADMIN;
  }

  logout() {
    this.authService.logoutService();
    this.cartService.clearCartService();
    this.favoriteService.clearFavoritesService();
    this.router
      .navigate(["/"])
      .then(() => window.location.reload());
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }
}
