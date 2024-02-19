// m o d u l e s
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ROLE, TYPE_URL_KEY } from 'src/app/shared/enums/electro.enum';
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
import { SearchComponent } from './products-pages/search/search.component';
import { SpecialOfferComponent } from './guest/special-offer/special-offer.component';
import { StoreComponent } from './guest/store/store.component';
import { StoreDetailComponent } from './guest/store-detail/store-detail.component';
import { ElectroCardComponent } from './guest/electro-card/electro-card.component';
import { CustomerSupportComponent } from './guest/customer-support/customer-support.component';
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';

// a d m i n
import { AdminProductCreateComponent } from './admin/admin-product-create/admin-product-create.component';
import { AdminProductUpdateComponent } from './admin/admin-update/admin-product-update/admin-product-update.component';

// a d m i n - D E M O
import { AdminDemoProductComponent } from './admin-demo/admin-demo-product/admin-demo-product.component';

// products-pages
import { DepartmentComponent } from './products-pages/department/department.component';
import { ProductTypeComponent } from './products-pages/type/product-type/product-type.component';
import { TypeComponent } from './products-pages/type/type/type.component';
import { ProductCategoryComponent } from './products-pages/category/product-category/product-category.component';
import { ProductDetailComponent } from './products-pages/detail/product-detail/product-detail.component';
import { InfoBlockComponent } from './guest/info-block/info-block.component';
import { FavoriteComponent } from './guest/favorite/favorite.component';
import { CompareComponent } from './guest/compare/compare.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  // home
  { path: "", component: HomeComponent },
  // { path: "**", component: HomeComponent },

  { path: "test", component: InfoBlockComponent },

  // { path: "card-electro", component: ElectroCardComponent },
  { path: "electro-card", component: UnderConstructionComponent },

  { path: "auth/register", component: RegisterComponent },
  { path: "auth/login", component: LoginComponent },

  // current user
  { path: "cart", component: CartComponent },
  { path: "cart/order", component: OrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "favorites", component: FavoriteComponent },
  { path: "compare", component: CompareComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "my-orders", component: MyOrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },

  // error
  { path: "under-construction", component: UnderConstructionComponent },
  { path: "401", component: UnauthComponent },
  { path: "404", component: NotFoundComponent },

  // S P E C I A L   O F F E R ------------------------------------------------------------
  { path: "special-offer", component: SpecialOfferComponent },

  // C U S T O M E R S   S U P P O R T ----------------------------------------------------
  { path: "customer-support", component: CustomerSupportComponent },
  { path: "customer-support/stores", component: StoreComponent },
  { path: "customer-support/stores/:urlKey", component: StoreDetailComponent },

  // P R O D U C T S ======================================================================
  { path: "depart/:urlKey", component: DepartmentComponent },
  { path: "type/" + TYPE_URL_KEY.LAPTOP_URL_KEY, component: ProductTypeComponent },
  { path: "type/:urlKey", component: TypeComponent },
  { path: "categ/:urlKey", component: ProductCategoryComponent },
  { path: "prod/:urlKey", component: ProductDetailComponent },

  // Search -----------------------------------------------------------------
  { path: "search/:searchTerm", component: SearchComponent },

  // admin --------------------------------------------------------------------------------
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/product/create", component: AdminProductCreateComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/product/update/:urlKey", component: AdminProductUpdateComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  // admin - D E M O
  { path: "demo/admin/products/:product", component: AdminDemoProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
