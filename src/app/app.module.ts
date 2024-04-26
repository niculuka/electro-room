// d e c l a r a t i o n s ===========================================================
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// n a v i g a t i o n
import { NavbarMainComponent } from './navigation/navbar-main/navbar-main.component';
import { NavbarDesktopComponent } from './navigation/navbar-desktop/navbar-desktop.component';
import { MegaMenuMobileComponent } from './navigation/mega-menu-mobile/mega-menu-mobile.component';
import { MegaMenuDesktopComponent } from './navigation/mega-menu-desktop/mega-menu-desktop.component';
import { CartNavComponent } from './navigation/cart-nav/cart-nav.component';
import { FavoriteNavComponent } from './navigation/favorite-nav/favorite-nav.component';
import { CompareNavComponent } from './navigation/compare-nav/compare-nav.component';
import { BreadcrumbComponent } from './navigation/breadcrumb/breadcrumb.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { CarouselComponent } from './navigation/carousel/carousel.component';
import { CarouselOwlComponent } from './navigation/carousel-owl/carousel-owl.component';
// g u e s t
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';
import { HomeComponent } from './guest/home/home.component';
import { FavoriteComponent } from './guest/favorite/favorite.component';
import { CompareComponent } from './guest/compare/compare.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { NotFoundComponent } from './guest/not-found/not-found.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { SpecialOfferComponent } from './guest/special-offer/special-offer.component';
import { StoreComponent } from './guest/store/store.component';
import { StoreDetailComponent } from './guest/store-detail/store-detail.component';
import { CustomerSupportComponent } from './guest/customer-support/customer-support.component';
import { ElectroCardComponent } from './guest/electro-card/electro-card.component';
import { InfoBlockComponent } from './guest/info-block/info-block.component';
// u s e r
import { CartComponent } from './user/cart/cart.component';
import { CartItemComponent } from './user/cart-item/cart-item.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrderComponent } from './user/order/order.component';
import { OrderUserDetailComponent } from './user/order-user-detail/order-user-detail.component';
import { OrderAgreementComponent } from './user/order-agreement/order-agreement.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { PaymentFormComponent } from './user/payment-form/payment-form.component';
// p r o d u c t s - p a g e s
import { DepartmentComponent } from './products-pages/department/department.component';
import { ProductTypeComponent } from './products-pages/type/product-type/product-type.component';
import { TypeComponent } from './products-pages/type/type/type.component';
import { ProductCategoryComponent } from './products-pages/category/product-category/product-category.component';
import { ProductFilterComponent } from './products-pages/category/product-filter/product-filter.component';
import { ProductSorterComponent } from './products-pages/category/product-sorter/product-sorter.component';
import { ProductDisplayComponent } from './products-pages/category/product-display/product-display.component';
import { ProductDetailComponent } from './products-pages/detail/product-detail/product-detail.component';
import { ProductMainComponent } from './products-pages/detail/product-main/product-main.component';
import { CarouselGalleryComponent } from './products-pages/detail/carousel-gallery/carousel-gallery.component';
import { ProductDescriptionComponent } from './products-pages/detail/product-description/product-description.component';
import { ProductSpecificationComponent } from './products-pages/detail/product-specification/product-specification.component';
import { SearchComponent } from './products-pages/search/search.component';
// d i a l o g
import { DialogOrderDeleteComponent } from './dialogs/dialog-order-delete/dialog-order-delete.component';
import { DialogItemDeleteComponent } from './dialogs/dialog-item-delete/dialog-item-delete.component';
import { DialogUserDeleteComponent } from './dialogs/dialog-user-delete/dialog-user-delete.component';
import { DialogTokenDeleteComponent } from './dialogs/dialog-token-delete/dialog-token-delete.component';
import { DialogProductDeleteComponent } from './dialogs/dialog-product-delete/dialog-product-delete.component';
import { DialogProductFilterComponent } from './dialogs/dialog-product-filter/dialog-product-filter.component';
import { DialogProductsSorterComponent } from './dialogs/dialog-products-sorter/dialog-products-sorter.component';
import { DialogCartComponent } from './dialogs/dialog-cart/dialog-cart.component';
// a d m i n
import { AdminComponent } from './admin/admin/admin.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductCreateComponent } from './admin/admin-create/admin-product-create/admin-product-create.component';
import { AdminProductUpdateComponent } from './admin/admin-update/admin-product-update/admin-product-update.component';
import { AdminUpdateMainComponent } from './admin/admin-update/admin-update-main/admin-update-main.component';
import { AdminUpdateGalleryComponent } from './admin/admin-update/admin-update-gallery/admin-update-gallery.component';
import { AdminUpdateDescriptionComponent } from './admin/admin-update/admin-update-description/admin-update-description.component';
import { AdminUpdateSpecificationComponent } from './admin/admin-update/admin-update-specification/admin-update-specification.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
// a d m i n - D E M O
import { AdminDemoProductComponent } from './admin-demo/admin-demo-product/admin-demo-product.component';
import { AdminDemoOrderComponent } from './admin-demo/admin-demo-order/admin-demo-order.component';
import { AdminDemoUserComponent } from './admin-demo/admin-demo-user/admin-demo-user.component';
// i m p o r t s =====================================================================
// m a i n
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// m a t
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
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// n p m  -  b o o t s t r a p
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// p r o v i d e r s =================================================================
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    // n a v i g a t i o n
    NavbarMainComponent,
    NavbarDesktopComponent,
    MegaMenuMobileComponent,
    MegaMenuDesktopComponent,
    CartNavComponent,
    FavoriteNavComponent,
    CompareNavComponent,
    BreadcrumbComponent,
    FooterComponent,
    CarouselComponent,
    CarouselOwlComponent,
    // g u e s t  
    UnderConstructionComponent,
    HomeComponent,
    FavoriteComponent,
    CompareComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UnauthComponent,
    SpecialOfferComponent,
    StoreComponent,
    StoreDetailComponent,
    CustomerSupportComponent,
    ElectroCardComponent,
    InfoBlockComponent,
    // u s e r
    CartComponent,
    CartItemComponent,
    ProfileComponent,
    OrderComponent,
    OrderUserDetailComponent,
    OrderAgreementComponent,
    MyOrderComponent,
    PaymentFormComponent,
    // p r o d u c t s - p a g e s
    DepartmentComponent,
    ProductTypeComponent,
    TypeComponent,
    ProductCategoryComponent,
    ProductFilterComponent,
    ProductSorterComponent,
    ProductDisplayComponent,
    ProductDetailComponent,
    ProductMainComponent,
    CarouselGalleryComponent,
    ProductDescriptionComponent,
    ProductSpecificationComponent,
    SearchComponent,
    // d i a l o g
    DialogOrderDeleteComponent,
    DialogItemDeleteComponent,
    DialogUserDeleteComponent,
    DialogTokenDeleteComponent,
    DialogProductDeleteComponent,
    DialogProductFilterComponent,
    DialogProductsSorterComponent,
    DialogCartComponent,
    // a d m i n
    AdminComponent,
    AdminProductComponent,
    AdminProductCreateComponent,
    AdminProductUpdateComponent,
    AdminUpdateMainComponent,
    AdminUpdateGalleryComponent,
    AdminUpdateDescriptionComponent,
    AdminUpdateSpecificationComponent,
    AdminItemComponent,
    AdminTokenComponent,
    AdminOrderComponent,
    AdminUserComponent,
    // a d m i n - D E M O
    AdminDemoProductComponent,
    AdminDemoOrderComponent,
    AdminDemoUserComponent,
  ],
  imports: [
    // m a i n    
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // m a t
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
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    // n p m  -  b o o t s t r a p    
    CarouselModule,
    NgDynamicBreadcrumbModule,
    NgbCarouselModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-center-center',
      newestOnTop: false,
      preventDuplicates: true,
    }),
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
