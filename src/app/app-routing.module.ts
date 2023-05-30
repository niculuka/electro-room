// m o d u l e s
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ROLE } from 'src/app/shared/enums/electro.enum';

// p a g e s
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { HomeComponent } from './guest/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { NotFoundComponent } from './guest/not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { OrderComponent } from './user/order/order.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { SearchComponent } from './guest/search/search.component';
import { SpecialOfferComponent } from './guest/special-offer/special-offer.component';
import { StoreComponent } from './guest/store/store.component';
import { ElectroCardComponent } from './guest/electro-card/electro-card.component';
import { HelpDeskComponent } from './guest/help-desk/help-desk.component';
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';

// a d m i n
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';

// a d m i n - D E M O
import { AdminDemoProductComponent } from './admin-demo/admin-demo-product/admin-demo-product.component';
import { AdminDemoOrderComponent } from './admin-demo/admin-demo-order/admin-demo-order.component';
import { AdminDemoUserComponent } from './admin-demo/admin-demo-user/admin-demo-user.component';

// products-pages
import { LaptopPhoneTabletComponent } from './products-pages/laptop-phone-tablet/laptop-phone-tablet.component';
import { ProductLevelComponent } from './products-pages/product-level/product-level.component';
import { ProductTypeComponent } from './products-pages/product-type/product-type.component';
import { ProductDetailComponent } from './products-pages/product-detail/product-detail.component';


const routes: Routes = [
  // home
  { path: "", component: HomeComponent },
  // { path: "**", component: HomeComponent },

  { path: "test", component: HelpDeskComponent },

  { path: "search/:searchTerm", component: SearchComponent },

  { path: "oferta-speciala", component: SpecialOfferComponent },
  { path: "magazine", component: StoreComponent },
  // { path: "card-electro", component: ElectroCardComponent },
  { path: "ajutor-clienti", component: HelpDeskComponent },

  { path: "auth/register", component: RegisterComponent },
  { path: "auth/login", component: LoginComponent },

  // admin  
  { path: "admin/products/:product", component: AdminProductComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/electro-orders", component: AdminOrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/electro-items", component: AdminItemComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/users", component: AdminUserComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/tokens", component: AdminTokenComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },

  // admin - D E M O
  { path: "admin/demo/laptops", component: AdminDemoProductComponent },
  { path: "admin/demo/electro-orders", component: AdminDemoOrderComponent },
  { path: "admin/demo/users", component: AdminDemoUserComponent },

  // current user
  { path: "cart", component: CartComponent },
  { path: "cart/order", component: OrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "my-orders", component: MyOrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },

  // error
  { path: "under-construction", component: UnderConstructionComponent },
  { path: "401", component: UnauthComponent },
  { path: "404", component: NotFoundComponent },

  // DEPARTAMENTS -------------------------------------------------------------------------------------------
  {
    path: "lpt", component: LaptopPhoneTabletComponent, data: {
      breadcrumb: [
        { label: 'Laptopuri, Telefoane, Tablete', url: '' }
      ]
    },
  },
  {
    path: "lpt/:level", component: ProductLevelComponent, data: {
      breadcrumb: [
        { label: 'Laptopuri, Telefoane, Tablete', url: '/lpt' },
        { label: '{{customLevel}}', url: '' },
      ]
    },
  },
  {
    path: "lpt/:level/:type", component: ProductTypeComponent, data: {
      breadcrumb: [
        { label: 'Laptopuri, Telefoane, Tablete', url: '/lpt' },
        { label: '{{customLevel}}', url: '/lpt/:level' },
        { label: '{{customType}}', url: '' }
      ]
    },
  },
  {
    path: "lpt/:level/:type/:linkName", component: ProductDetailComponent, data: {
      breadcrumb: [
        { label: 'Laptopuri, Telefoane, Tablete', url: '/lpt' },
        { label: '{{customLevel}}', url: '/lpt/:level' },
        { label: '{{customType}}', url: '/lpt/:level/:type' },
        { label: '{{customLinkName}}', url: '' }
      ]
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
