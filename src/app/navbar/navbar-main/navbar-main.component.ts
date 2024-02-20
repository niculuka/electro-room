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
import { HandleWindow } from 'src/app/shared/models/handle-window.model';
import { OverlayerService } from 'src/app/shared/services/overlayer.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnDestroy {
  @ViewChild('brg') brg: ElementRef | undefined;
  @ViewChild('crt') crt: ElementRef | undefined;
  @ViewChild('fav') fav: ElementRef | undefined;
  handleWindow: HandleWindow = new HandleWindow();

  @ViewChild('log') log: ElementRef | undefined;
  isLogMenuOpen: boolean = false;

  currentUser: User = new User();
  userFirstChar: string = "";

  cart!: Cart;
  favorites!: Array<Product>;
  favoriteQuantity = 0;

  currentLink: string = "";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private router: Router,
    private currentUrl: CurrentUrl,
    private overlayerService: OverlayerService,
  ) {
    this.sub0 = cartService.getCartObservable().subscribe(data => {
      this.cart = data;
    });
    this.sub1 = favoriteService.getFavoritesObservable().subscribe(data => {
      this.favorites = data;
    });

    this.sub2 = this.authService.currentUser.subscribe(
      data => {
        this.currentUser = data;
        if (this.currentUser) this.userFirstChar = this.currentUser.username.charAt(0);
      });
    this.sub3 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      if (url) {
        this.currentLink = url;
        this.handleWindow.isMobileMenuOpen = false;
        this.handleOverlayerWhenLinkChanges();
      }
    });
  }

  // C L I C K - O U T ============================================================
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.brg?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - BURGER");
    }
    else {
      this.handleWindow.isMobileMenuOpen = false;
      this.handleOverlayer();
      // console.log("OUTSIDE - BURGER");
    }
    if (this.crt?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - CART");
    }
    else {
      this.handleWindow.isCartNavOpen = false;
      // console.log("OUTSIDE - CART");
    }
    if (this.fav?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - FAV");
    }
    else {
      this.handleWindow.isFavNavOpen = false;
      // console.log("OUTSIDE - FAV");
    }
    if (this.log?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - ADMIN");
    }
    else {
      this.isLogMenuOpen = false;
      // console.log("OUTSIDE - ADMIN");
    }
  }
  // ===============================================================================

  // MEGA-MENU - MOBILE ---------------------------------------------------
  toggleMobileMenu() {
    this.handleWindow.isMobileMenuOpen = !this.handleWindow.isMobileMenuOpen;
    this.handleOverlayer();
  }

  closeMobileMenu(event: any) {
    this.handleWindow.isMobileMenuOpen = event;
    this.handleOverlayer();
  }

  handleOverlayer() {
    this.overlayerService.overlayer.overlayerMain = this.handleWindow.isMobileMenuOpen;
    this.overlayerService.handleOverlayerService();
  }

  handleOverlayerWhenLinkChanges() {
    if (this.currentLink) this.overlayerService.overlayer.overlayerMain = false;
    this.overlayerService.handleOverlayerService();
  }

  // SEARCH-BAR -----------------------------------------------------------
  goToSearch(searchTerm: string): void {
    if (searchTerm) this.router.navigate(["/search/" + searchTerm]);
  }

  // CART ----------------------------------------------------------------- 
  isCartPage() {
    return this.currentLink === "/cart" || this.currentLink === "/cart/order";
  }

  toggleCartNav() {
    if (this.isCartPage()) window.location.reload();
    else this.handleWindow.isCartNavOpen = !this.handleWindow.isCartNavOpen;
  }

  isCartEmpty() {
    return this.cart.items.length === 0;
  }

  // FAVORITES ------------------------------------------------------------
  isFavoritesPage() {
    return this.currentLink === "/favorites";
  }

  toggleFavNav() {
    if (this.isFavoritesPage()) window.location.reload();
    else this.handleWindow.isFavNavOpen = !this.handleWindow.isFavNavOpen;
  }

  isFavoritesEmpty() {
    return this.favorites.length === 0;
  }

  // LOGS -----------------------------------------------------------------
  toggleLog() {
    this.isLogMenuOpen = !this.isLogMenuOpen;
  }

  isAdmin() {
    return this.currentUser?.role === ROLE.ADMIN;
  }

  logout() {
    this.authService.logoutService();
    this.cartService.clearCartService();
    this.favoriteService.clearFavoritesService();
    this.router.navigate(["/"]).then(() => window.location.reload());
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }
}
