// m o d u l e s
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
// g u e s t
// import { InfoBlockComponent } from './guest/info-block/info-block.component';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { FavoriteComponent } from './guest/favorite/favorite.component';
import { CompareComponent } from './guest/compare/compare.component';
import { SpecialOfferComponent } from './guest/special-offer/special-offer.component';
import { CustomerSupportComponent } from './guest/customer-support/customer-support.component';
import { StoreComponent } from './guest/store/store.component';
import { StoreDetailComponent } from './guest/store-detail/store-detail.component';
import { UnauthComponent } from './guest/unauth/unauth.component';
import { NotFoundComponent } from './guest/not-found/not-found.component';
import { UnderConstructionComponent } from './guest/under-construction/under-construction.component';
// import { ElectroCardComponent } from './guest/electro-card/electro-card.component';
// u s e r
import { CartComponent } from './user/cart/cart.component';
import { OrderComponent } from './user/order/order.component';
import { MyOrderComponent } from './user/my-order/my-order.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ROLE, TYPE_URL_KEY } from 'src/app/shared/enums/electro.enum';
// p r o d u c t s - p a g e s
import { DepartmentComponent } from './products-pages/department/department.component';
import { ProductTypeComponent } from './products-pages/type/product-type/product-type.component';
import { TypeComponent } from './products-pages/type/type/type.component';
import { ProductCategoryComponent } from './products-pages/category/product-category/product-category.component';
import { ProductDetailComponent } from './products-pages/detail/product-detail/product-detail.component';
import { SearchComponent } from './products-pages/search/search.component';
// a d m i n
import { AdminComponent } from './admin/admin/admin.component';
import { AdminProductCreateComponent } from './admin/admin-create/admin-product-create/admin-product-create.component';
import { AdminProductUpdateComponent } from './admin/admin-update/admin-product-update/admin-product-update.component';
// a d m i n - D E M O
import { AdminDemoProductComponent } from './admin-demo/admin-demo-product/admin-demo-product.component';

const routes: Routes = [
  // { path: "**", component: UnderConstructionComponent },  
  // { path: "test", component: InfoBlockComponent },
  // g u e s t
  { path: "", component: HomeComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "favorites", component: FavoriteComponent },
  { path: "compare", component: CompareComponent },
  { path: "special-offer", component: SpecialOfferComponent },
  { path: "customer-support", component: CustomerSupportComponent },
  { path: "customer-support/stores", component: StoreComponent },
  { path: "customer-support/stores/:urlKey", component: StoreDetailComponent },
  { path: "401", component: UnauthComponent },
  { path: "404", component: NotFoundComponent },
  { path: "under-construction", component: UnderConstructionComponent },
  // { path: "card-electro", component: ElectroCardComponent },  
  // u s e r
  { path: "cart", component: CartComponent },
  { path: "cart/order", component: OrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "my-orders", component: MyOrderComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN, ROLE.USER] } },
  // P R O D U C T S - P A G E S
  { path: "depart/:urlKey", component: DepartmentComponent },
  { path: "type/" + TYPE_URL_KEY.LAPTOP_URL_KEY, component: ProductTypeComponent },
  { path: "type/:urlKey", component: TypeComponent },
  { path: "categ/:urlKey", component: ProductCategoryComponent },
  { path: "prod/:urlKey", component: ProductDetailComponent },
  { path: "search/:searchTerm", component: SearchComponent },
  // admin
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/product/create", component: AdminProductCreateComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  { path: "admin/product/update/:urlKey", component: AdminProductUpdateComponent, canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] } },
  // admin - D E M O
  { path: "admin/demo", component: AdminDemoProductComponent },
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
