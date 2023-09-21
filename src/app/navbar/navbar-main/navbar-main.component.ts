import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { SearchProductService } from 'src/app/shared/services/search-product.service';
import { Product } from 'src/app/shared/models/product.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent {

  @ViewChild('txt') txt: ElementRef | undefined;
  isMobileMenuOpen: boolean = false;

  currentUser: User = new User();
  userFirstChar: string = "";

  cart!: Cart;
  favorites!: Cart;
  cartQuantity = 0;
  favoriteQuantity = 0;

  currentLink: string = "";
  searchTerm: any = "";

  handleCart: string = "";
  handleFavorites: string = "";

  product: Product = new Product();
  products: Array<Product> = [];

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private router: Router,
    private searchProductService: SearchProductService,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
  ) {
    cartService.getCartObservable().subscribe(data => {
      this.cart = data;
      this.cartQuantity = data.totalCount;
    });
    favoriteService.getFavoritesObservable().subscribe(data => {
      this.favorites = data;
      this.favoriteQuantity = data.totalCount;
    });

    this.authService.currentUser.subscribe(
      data => {
        this.currentUser = data;
        if (this.currentUser) {
          this.userFirstChar = this.currentUser.username.charAt(0);
        }
      });
    this.activatedRoute.params.subscribe((params) => {
      this.currentLink = this.router.url;
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.searchProductService.searchProducts(this.searchTerm.toLowerCase())
      }
    });
    this.menuService.handleMobileMenuObservable().subscribe((data) => {
      this.isMobileMenuOpen = data;
    });
  }

  // MEGA-MENU - MOBILE ---------------------------------------------------
  displayMobileMenu() {
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

  // CART-NAV -----------------------------------------------------------
  isCartPage() {
    return this.currentLink === "/cart";
  }

  isCartEmpty() {
    return this.cart.items.length === 0;
  }

  openCart() {
    if (this.isCartPage()) {
      this.handleCart = "display: none;"
      return;
    }
    this.handleCart = "display: block;"
  }

  closeCart() {
    this.handleCart = "display: none;"
  }

  goToCart() {
    if (this.isCartPage()) {
      window.location.reload();
    }
  }

  // FAVORITES-NAV -----------------------------------------------------
  isFavoritesPage() {
    return this.currentLink === "/favorites";
  }

  isFavoritesEmpty() {
    return this.favorites.items.length === 0;
  }

  openFavorites() {
    if (this.isFavoritesPage()) {
      this.handleFavorites = "display: none;"
      return;
    }
    this.handleFavorites = "display: block;"
  }

  closeFavorites() {
    this.handleFavorites = "display: none;"
  }

  getProduct(term: string): void {
    if (term) {
      this.router.navigate(["/search/" + term]);
    };
  }

  goToFavorites() {
    if (this.isFavoritesPage()) {
      window.location.reload();
    }
  }

  // LOGS -------------------------------------------------------------
  isAdmin() {
    return this.currentUser?.role === ROLE.ADMIN;
  }

  logout() {
    this.authService.logoutService();
    this.cartService.clearCartService();
    this.favoriteService.clearFavoritesService();
    this.router.navigate(["/"])
      .then(() => {
        window.location.reload();
      });
  }
}
