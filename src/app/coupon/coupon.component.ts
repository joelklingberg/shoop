import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit, OnDestroy {

  @Input() coupon: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.calculateTimeLeft(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }


  getLogoUrl() {
    return "url('" + this.coupon.logoURL + "')";
  }

  calculateTimeLeft() {
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
    window.open(this.coupon.offerPage, "_blank");
  }

}
