import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Departament, DEPARTAMENTS, Title } from 'src/app/shared/data/mega-menu.data';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Cart } from 'src/app/shared/models/cart.model';
import { SearchProductService } from 'src/app/shared/services/search-product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {

  currentUser: User = new User();
  userFirstChar: string = "";
  cartQuantity = 0;

  departaments: Array<Departament> = DEPARTAMENTS;
  cart!: Cart;
  link: string = "";
  currentLink: string = "";

  findLaptops: Array<Product> = [];
  findBags: Array<Product> = [];
  findAll: Array<any> = [];
  searchTerm: any = "";

  product: Product = new Product();
  products: Array<Product> = [];

  isMobileMenuOpen = false;

  @ViewChild('txt') txt: ElementRef | undefined;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private searchProductService: SearchProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
  ) {
    cartService.getCartObservable().subscribe(data => {
      this.cart = data;
      this.cartQuantity = data.totalCount;
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
  }

  openCloseDepartament(departament: Departament) {
    departament.showTitle = !departament.showTitle;
  }

  openCloseTitle(title: Title) {
    title.showSubtitle = !title.showSubtitle;
  }

  closeFromSubtitles() {
    this.isMobileMenuOpen = false;
  }

  isAdmin() {
    return this.currentUser?.role === ROLE.ADMIN;
  }

  isCartPage() {
    return this.currentLink === "/cart";
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.txt?.nativeElement.contains(event.target)) {
      // console.log("INSIDE");
    } else {
      this.isMobileMenuOpen = false;
      // console.log("OUTSIDE");
    }
  }

  isEmpty() {
    return this.cart.items.length === 0;
  }

  getProduct(term: string): void {
    if (term) {
      this.router.navigate(["/search/" + term]);
    };
  }  

  getProductLinkName(cartItem: CartItem) {
    if (cartItem.product.category.startsWith("LAPTOP")) {
      this.link = "/lap/" + cartItem.product.linkName
    }
    if (cartItem.product.category.startsWith("BAG")) {
      this.link = "/bag/" + cartItem.product.linkName
    }
    if (cartItem.product.category.startsWith("CHARGER")) {
      this.link = "/chg/" + cartItem.product.linkName
    }
    if (cartItem.product.category.startsWith("HARD")) {
      this.link = "/ssd/" + cartItem.product.linkName
    }
    this.router.navigate([this.link])
      .then(() => {
        window.location.reload();
      });
  }

  removeFromCart(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.cartService.removeFromCartService(name);
  }  

  goToFavorites() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
  }

  logout() {
    this.authService.logoutService();
    this.cartService.clearCartService();
    this.router.navigate(["/"])
      .then(() => {
        window.location.reload();
      });
  }
}
