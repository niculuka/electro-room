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
import { AdminLaptopComponent } from './admin/admin-laptop/admin-laptop.component';
import { AdminLaptopBagComponent } from './admin/admin-laptop-bag/admin-laptop-bag.component';
import { AdminLaptopChargerComponent } from './admin/admin-laptop-charger/admin-laptop-charger.component';
import { AdminLaptopSsdComponent } from './admin/admin-laptop-ssd/admin-laptop-ssd.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component';
import { AdminTokenComponent } from './admin/admin-token/admin-token.component';

// a d m i n - D E M O
import { AdminDemoLaptopComponent } from './admin-demo/admin-demo-laptop/admin-demo-laptop.component';
import { AdminDemoBagComponent } from './admin-demo/admin-demo-bag/admin-demo-bag.component';
import { AdminDemoChargerComponent } from './admin-demo/admin-demo-charger/admin-demo-charger.component';
import { AdminDemoSsdComponent } from './admin-demo/admin-demo-ssd/admin-demo-ssd.component';
import { AdminDemoOrderComponent } from './admin-demo/admin-demo-order/admin-demo-order.component';
import { AdminDemoUserComponent } from './admin-demo/admin-demo-user/admin-demo-user.component';

// products-pages
import { LaptopComponent } from './products-pages/laptop/laptop.component';
import { LaptopCategoryComponent } from './products-pages/laptop-category/laptop-category.component';
import { LaptopDetailComponent } from './products-pages/laptop-detail/laptop-detail.component';
import { LaptopAuxComponent } from './products-pages/laptop-aux/laptop-aux.component';
import { LaptopBagComponent } from './products-pages/laptop-bag/laptop-bag.component';
import { LaptopBagDetailComponent } from './products-pages/laptop-bag-detail/laptop-bag-detail.component';
import { LaptopSsdComponent } from './products-pages/laptop-ssd/laptop-ssd.component';
import { LaptopSsdDetailComponent } from './products-pages/laptop-ssd-detail/laptop-ssd-detail.component';
import { LaptopChargerComponent } from './products-pages/laptop-charger/laptop-charger.component';
import { LaptopChargerDetailComponent } from './products-pages/laptop-charger-detail/laptop-charger-detail.component';


const routes: Routes = [
  // home
  { path: "", component: HomeComponent },
  // { path: "**", component: HomeComponent },

  { path: "search/:searchTerm", component: SearchComponent },

  { path: "oferta-speciala", component: SpecialOfferComponent },
  { path: "magazine", component: StoreComponent },
  // { path: "card-electro", component: ElectroCardComponent },
  { path: "ajutor-clienti", component: HelpDeskComponent },

  { path: "auth/register", component: RegisterComponent },
  { path: "auth/login", component: LoginComponent },

  // menu
  { path: "laptops", component: LaptopComponent },
  { path: "laptops/:category", component: LaptopCategoryComponent },
  { path: "lap/:linkName", component: LaptopDetailComponent },

  { path: "laptop-auxs", component: LaptopAuxComponent },

  { path: "laptop-auxs/bags", component: LaptopBagComponent },
  { path: "bag/:linkName", component: LaptopBagDetailComponent },

  { path: "laptop-auxs/chargers", component: LaptopChargerComponent },
  { path: "chg/:linkName", component: LaptopChargerDetailComponent },

  { path: "laptop-auxs/ssds", component: LaptopSsdComponent },
  { path: "ssd/:linkName", component: LaptopSsdDetailComponent },  

  // admin  
  { path: "admin/laptops", component: AdminLaptopComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/laptop-bags", component: AdminLaptopBagComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/laptop-chargers", component: AdminLaptopChargerComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/laptop-ssds", component: AdminLaptopSsdComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },  

  { path: "admin/electro-orders", component: AdminOrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/electro-items", component: AdminItemComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/users", component: AdminUserComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/tokens", component: AdminTokenComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },

  // admin - D E M O
  { path: "admin/demo/laptops", component: AdminDemoLaptopComponent },
  { path: "admin/demo/bags", component: AdminDemoBagComponent },
  { path: "admin/demo/chargers", component: AdminDemoChargerComponent },
  { path: "admin/demo/ssds", component: AdminDemoSsdComponent },
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
