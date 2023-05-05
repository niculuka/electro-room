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
import { MatDialogModule } from '@angular/material/dialog';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";

// dialog interogation
import { DialogOrderDeleteComponent } from './dialogs/dialog-order-delete/dialog-order-delete.component';
import { DialogItemDeleteComponent } from './dialogs/dialog-item-delete/dialog-item-delete.component';
import { DialogUserDeleteComponent } from './dialogs/dialog-user-delete/dialog-user-delete.component';
import { DialogTokenDeleteComponent } from './dialogs/dialog-token-delete/dialog-token-delete.component';
import { DialogLaptopCreateComponent } from './dialogs/dialog-laptop-create/dialog-laptop-create.component';
import { DialogLaptopUpdateComponent } from './dialogs/dialog-laptop-update/dialog-laptop-update.component';
import { DialogLaptopDeleteComponent } from './dialogs/dialog-laptop-delete/dialog-laptop-delete.component';
import { DialogLaptopBagCreateComponent } from './dialogs/dialog-laptop-bag-create/dialog-laptop-bag-create.component';
import { DialogLaptopBagUpdateComponent } from './dialogs/dialog-laptop-bag-update/dialog-laptop-bag-update.component';
import { DialogLaptopBagDeleteComponent } from './dialogs/dialog-laptop-bag-delete/dialog-laptop-bag-delete.component';
import { DialogLaptopChargerCreateComponent } from './dialogs/dialog-laptop-charger-create/dialog-laptop-charger-create.component';
import { DialogLaptopChargerUpdateComponent } from './dialogs/dialog-laptop-charger-update/dialog-laptop-charger-update.component';
import { DialogLaptopChargerDeleteComponent } from './dialogs/dialog-laptop-charger-delete/dialog-laptop-charger-delete.component';
import { DialogLaptopHardCreateComponent } from './dialogs/dialog-laptop-hard-create/dialog-laptop-hard-create.component';
import { DialogLaptopHardUpdateComponent } from './dialogs/dialog-laptop-hard-update/dialog-laptop-hard-update.component';
import { DialogLaptopHardDeleteComponent } from './dialogs/dialog-laptop-hard-delete/dialog-laptop-hard-delete.component';

// p a g e s
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';
import { NavbarMainComponent } from './navbar/navbar-main/navbar-main.component';
import { HomeComponent } from './guest/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { CartItemComponent } from './user/cart-item/cart-item.component';
import { ProfileComponent } from './user/profile/profile.component';

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
import { HelpDeskComponent } from './guest/help-desk/help-desk.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './navbar/carousel/carousel.component';
import { CarouselLaptopComponent } from './navbar/carousel-laptop/carousel-laptop.component';
import { CarouselAuxComponent } from './navbar/carousel-aux/carousel-aux.component';
import { FooterComponent } from './guest/footer/footer.component';

// a d m i n
import { AdminLaptopComponent } from './admin/admin-laptop/admin-laptop.component';
import { AdminLaptopBagComponent } from './admin/admin-laptop-bag/admin-laptop-bag.component';
import { AdminLaptopChargerComponent } from './admin/admin-laptop-charger/admin-laptop-charger.component';
import { AdminLaptopHardComponent } from './admin/admin-laptop-hard/admin-laptop-hard.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';

// a d m i n - D E M O
import { AdminDemoLaptopComponent } from './admin-demo/admin-demo-laptop/admin-demo-laptop.component';
import { AdminDemoBagComponent } from './admin-demo/admin-demo-bag/admin-demo-bag.component';
import { AdminDemoChargerComponent } from './admin-demo/admin-demo-charger/admin-demo-charger.component';
import { AdminDemoHardComponent } from './admin-demo/admin-demo-hard/admin-demo-hard.component';
import { AdminDemoOrderComponent } from './admin-demo/admin-demo-order/admin-demo-order.component';
import { AdminDemoUserComponent } from './admin-demo/admin-demo-user/admin-demo-user.component';

// products-pages
import { ProductComponent } from './products-pages/product/product.component';
import { ProductCategoryComponent } from './products-pages/product-category/product-category.component';
import { ProductDetailComponent } from './products-pages/product-detail/product-detail.component';
import { LaptopPhoneTabletComponent } from './products-pages/laptop-phone-tablet/laptop-phone-tablet/laptop-phone-tablet.component';

// others
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';
import { SearchComponent } from './guest/search/search.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoBlockComponent } from './guest/info-block/info-block.component';
import { ProductGalleryComponent } from './products-pages/product-gallery/product-gallery.component';
import { BreadcrumbComponent } from './guest/breadcrumb/breadcrumb.component';
import { LaptopAccessoryComponent } from './products-pages/laptop-phone-tablet/laptop-accessory/laptop-accessory.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogOrderDeleteComponent,
    DialogItemDeleteComponent,
    DialogUserDeleteComponent,
    DialogTokenDeleteComponent,
    DialogLaptopCreateComponent,
    DialogLaptopUpdateComponent,
    DialogLaptopDeleteComponent,
    DialogLaptopBagCreateComponent,
    DialogLaptopBagUpdateComponent,
    DialogLaptopBagDeleteComponent,
    DialogLaptopChargerCreateComponent,
    DialogLaptopChargerUpdateComponent,
    DialogLaptopChargerDeleteComponent,
    DialogLaptopHardCreateComponent,
    DialogLaptopHardUpdateComponent,
    DialogLaptopHardDeleteComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarMainComponent,
    CartComponent,
    CartItemComponent,
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
    HelpDeskComponent,
    CarouselComponent,
    CarouselLaptopComponent,
    CarouselAuxComponent,
    FooterComponent,

    AdminLaptopComponent,
    AdminLaptopBagComponent,
    AdminLaptopChargerComponent,
    AdminLaptopHardComponent,
    AdminOrderComponent,
    AdminItemComponent,
    AdminTokenComponent,
    AdminUserComponent,

    AdminDemoLaptopComponent,
    AdminDemoBagComponent,
    AdminDemoChargerComponent,
    AdminDemoHardComponent,
    AdminDemoOrderComponent,
    AdminDemoUserComponent,

    ProductComponent,
    ProductCategoryComponent,
    ProductDetailComponent,
    LaptopPhoneTabletComponent,
    LaptopAccessoryComponent,
    UnderConstructionComponent,
    SearchComponent,
    InfoBlockComponent,
    ProductGalleryComponent,
    BreadcrumbComponent,    
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
      timeOut: 5000,
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
