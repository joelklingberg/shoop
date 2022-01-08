import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: "", component: StoreComponent},
  {path: ":store", component: CouponComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
