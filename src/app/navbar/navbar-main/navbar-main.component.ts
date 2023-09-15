import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { SearchProductService } from 'src/app/shared/services/search-product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ToastrService } from 'ngx-toastr';
import { ScreenBlockedService } from 'src/app/shared/services/screen-blocked.service';

@Component({
  selector: 'navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {

  currentUser: User = new User();
  userFirstChar: string = "";
  cartQuantity = 0;

  cart!: Cart;
  favorites!: Cart;
  currentLink: string = "";

  searchTerm: any = "";
  
  handleCart: string = "";
  handleFavorites: string = "";

  product: Product = new Product();
  products: Array<Product> = [];

  isMobileMenuOpen: boolean = false;

  @ViewChild('txt') txt: ElementRef | undefined;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private router: Router,
    private searchProductService: SearchProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private screenBlockedService: ScreenBlockedService,
  ) {
    cartService.getCartObservable().subscribe(data => {
      this.cart = data;
      this.cartQuantity = data.totalCount;
    });
    favoriteService.getFavoritesObservable().subscribe(data => {
      this.favorites = data;
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
  }

  ngOnInit(): void {
  }

  displayMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.screenBlockedService.isScreenBlocked = this.isMobileMenuOpen;
    this.screenBlockedService.blockScreen();
  }

  isAdmin() {
    return this.currentUser?.role === ROLE.ADMIN;
  }

  isCartPage() {
    return this.currentLink === "/cart";
  }

  isFavoritesPage() {
    return this.currentLink === "/favorites";
  }

  isCartEmpty() {
    return this.cart.items.length === 0;
  }

  isFavoritesEmpty() {
    return this.favorites.items.length === 0;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.txt?.nativeElement.contains(event.target)) {
      // console.log("INSIDE");
    } else {
      this.isMobileMenuOpen = false;
      this.screenBlockedService.isScreenBlocked = this.isMobileMenuOpen;
      this.screenBlockedService.blockScreen();
      // console.log("OUTSIDE");
    }
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

  goToCart() {
    if (this.isCartPage()) {
      this.router.navigate(["/cart"])
        .then(() => {
          window.location.reload();
        });
      return;
    }
    this.router.navigate(["/cart"]);
  }

  goToFavorites() {
    if (this.isFavoritesPage()) {
      this.router.navigate(["/favorites"])
        .then(() => {
          window.location.reload();
        });
      return;
    }
    this.router.navigate(["/favorites"]);
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
