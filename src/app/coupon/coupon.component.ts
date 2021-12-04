import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Coupon } from './coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit, OnDestroy {

  @Input() coupon: Coupon | undefined;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isExpired: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.calculateTimeLeft(); });

    this.checkIfExpired();
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
