import { ActivatedRoute } from '@angular/router';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Coupon } from 'src/data/models/Coupon';
import { coupons } from 'src/data/coupons';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css', '../stores/store/store.component.css']
})
export class CouponComponent implements OnInit, OnDestroy {

  coupon: Coupon | undefined;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isExpired: boolean = false;
  isCouponFound: boolean = true;
  paramUrl: string = "";

  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      const store = paramMap.get('store');
      store && (this.paramUrl = store);
      console.log(store);

      if(store) {
        this.findCoupon(store);
      }
  })

    this.subscription = interval(1000)
    .subscribe(x => { this.calculateTimeLeft(); });

    this.checkIfExpired();
  }

  findCoupon(parameterUrl: string) {
    const coupon = coupons.find(coupon => coupon.parameterUrl === parameterUrl);

    if(coupon) {
      this.coupon = coupon;
    } else {
      this.isCouponFound = false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

  getLogoUrl() {
    return "url('" + this.coupon?.logoURL + "')";
  }

  calculateTimeLeft() {

    if(!this.coupon) {
      return;
    }

    const expiresDate = new Date(this.coupon.validTo);
    const today = new Date();

    const timeLeft = new Date(expiresDate.getTime() - today.getTime());

    const daysLeft = Math.floor(timeLeft.getTime() / 86400000);

    if(daysLeft < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    } else {
      this.days = daysLeft;
      this.hours = timeLeft.getHours();
      this.minutes = timeLeft.getMinutes();
      this.seconds = timeLeft.getSeconds();
    }
  }

  onCallToAction() {
    if(!this.coupon) {
      return;
    }

    window.open(this.coupon.offerPage, "_blank");
  }

  checkIfExpired() {

    if(!this.coupon) {
      return;
    }

    this.calculateTimeLeft();

    if(this.days === 0 && this.minutes === 0 && this.seconds === 0) {
      this.isExpired = true;
      console.warn("Expired coupon: ", this.coupon.offerId);
    }
  }

}
