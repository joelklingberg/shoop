import { Component } from '@angular/core';
import { coupons } from 'src/data/coupons';
import { Coupon } from './coupon/coupon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  coupons: Coupon[] = this.sortCouponsByDate();

  sortCouponsByDate(): Coupon[] {
    coupons.sort(function(a,b){
      return new Date(a.validTo).getTime() - new Date(b.validTo).getTime();
    });
    return coupons;
  }

}
