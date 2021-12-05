import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { StoresComponent } from './stores/stores.component';

const routes: Routes = [
  {path: "", component: StoresComponent},
  {path: ":store", component: CouponComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
