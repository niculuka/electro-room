// i m p o r t s   -   principal modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";

// dialog interogation
import { DialogOrderDeleteComponent } from './dialogs/dialog-order-delete/dialog-order-delete.component';
import { DialogItemDeleteComponent } from './dialogs/dialog-item-delete/dialog-item-delete.component';
import { DialogUserDeleteComponent } from './dialogs/dialog-user-delete/dialog-user-delete.component';
import { DialogTokenDeleteComponent } from './dialogs/dialog-token-delete/dialog-token-delete.component';
import { DialogProductDeleteComponent } from './dialogs/dialog-product-delete/dialog-product-delete.component';
import { DialogProductFilterComponent } from './dialogs/dialog-product-filter/dialog-product-filter.component';
import { DialogProductsSorterComponent } from './dialogs/dialog-products-sorter/dialog-products-sorter.component';

// p a g e s
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';
import { NavbarMainComponent } from './navbar/navbar-main/navbar-main.component';
import { HomeComponent } from './guest/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { CartItemComponent } from './user/cart-item/cart-item.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CartNavComponent } from './navbar/cart-nav/cart-nav.component';
import { FavoriteNavComponent } from './navbar/favorite-nav/favorite-nav.component';

import { NotFoundComponent } from './guest/not-found/not-found.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { OrderComponent } from './user/order/order.component';
import { PaymentFormComponent } from './user/payment-form/payment-form.component';
import { OrderUserDetailComponent } from './user/order-user-detail/order-user-detail.component';
import { OrderAgreementComponent } from './user/order-agreement/order-agreement.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { NavbarDesktopComponent } from './navbar/navbar-desktop/navbar-desktop.component';
import { SpecialOfferComponent } from './guest/special-offer/special-offer.component';
import { ElectroCardComponent } from './guest/electro-card/electro-card.component';
import { StoreComponent } from './guest/store/store.component';
import { StoreDetailComponent } from './guest/store-detail/store-detail.component';
import { HelpDeskComponent } from './guest/help-desk/help-desk.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './navbar/carousel/carousel.component';
import { CarouselOwlComponent } from './navbar/carousel-owl/carousel-owl.component';
import { CarouselOwlLptLaptopComponent } from './navbar/carousel-owl-lpt/carousel-owl-lpt.component';
import { CarouselOwlDpsComponent } from './navbar/carousel-owl-dps/carousel-owl-dps.component';
import { FooterComponent } from './guest/footer/footer.component';

// a d m i n
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductCreateComponent } from './admin/admin-product-create/admin-product-create.component';
import { AdminProductUpdateComponent } from './admin/admin-product-update/admin-product-update.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';

// a d m i n - D E M O
import { AdminDemoProductComponent } from './admin-demo/admin-demo-product/admin-demo-product.component';
import { AdminDemoOrderComponent } from './admin-demo/admin-demo-order/admin-demo-order.component';
import { AdminDemoUserComponent } from './admin-demo/admin-demo-user/admin-demo-user.component';

// products-pages
import { DepartmentComponent } from './products-pages/department/department.component';
import { ProductTypeComponent } from './products-pages/product-type/product-type.component';
import { ProductCategoryComponent } from './products-pages/product-category/product-category.component';
import { ProductFilterComponent } from './products-pages/product-filter/product-filter.component';
import { ProductSorterComponent } from './products-pages/product-sorter/product-sorter.component';
import { ProductDisplayComponent } from './products-pages/product-display/product-display.component';
import { ProductDetailComponent } from './products-pages/product-detail/product-detail.component';
import { CardTitleComponent } from './products-pages/card-title/card-title.component';

// others
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';
import { SearchComponent } from './guest/search/search.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoBlockComponent } from './guest/info-block/info-block.component';
import { CarouselGalleryComponent } from './products-pages/carousel-gallery/carousel-gallery.component';
import { BreadcrumbComponent } from './guest/breadcrumb/breadcrumb.component';
import { MegaMenuMobileComponent } from './navbar/mega-menu-mobile/mega-menu-mobile.component';
import { MegaMenuDesktopComponent } from './navbar/mega-menu-desktop/mega-menu-desktop.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogOrderDeleteComponent,
    DialogItemDeleteComponent,
    DialogUserDeleteComponent,
    DialogTokenDeleteComponent,
    DialogProductDeleteComponent,
    DialogProductFilterComponent,
    DialogProductsSorterComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarMainComponent,
    CartComponent,
    CartItemComponent,
    FavoriteComponent,
    ProfileComponent,
    NotFoundComponent,
    UnauthComponent,
    OrderComponent,
    PaymentFormComponent,
    OrderUserDetailComponent,
    MyOrderComponent,
    OrderAgreementComponent,
    NavbarDesktopComponent,
    SpecialOfferComponent,
    ElectroCardComponent,
    StoreComponent,
    StoreDetailComponent,
    HelpDeskComponent,
    CarouselComponent,
    CarouselOwlComponent,
    CarouselOwlLptLaptopComponent,
    CarouselOwlDpsComponent,
    FooterComponent,
    CartNavComponent,
    FavoriteNavComponent,

    AdminProductComponent,
    AdminProductCreateComponent,
    AdminProductUpdateComponent,
    AdminOrderComponent,
    AdminItemComponent,
    AdminTokenComponent,
    AdminUserComponent,

    AdminDemoProductComponent,
    AdminDemoOrderComponent,
    AdminDemoUserComponent,

    DepartmentComponent,
    CardTitleComponent,
    ProductTypeComponent,
    ProductCategoryComponent,
    ProductFilterComponent,
    ProductSorterComponent,
    ProductDisplayComponent,
    ProductDetailComponent,
    UnderConstructionComponent,
    SearchComponent,
    InfoBlockComponent,
    CarouselGalleryComponent,
    BreadcrumbComponent,
    MegaMenuMobileComponent,
    MegaMenuDesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-center-center',
      newestOnTop: false
    }),
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    NgDynamicBreadcrumbModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
