import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Coupon } from '../../data/models/coupon.model';
import { Countdown } from '../../data/models/countdown.model';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() coupon: Coupon | null = null;
  isExpired: boolean = false;
  isNotYetAvailable: boolean = false;
  isShowingCode: boolean = false;

  timeLeft$: Observable<Countdown> = interval(1000).pipe(
    map(x => this.updateCountdown()),
    shareReplay(1)
  );

  ngOnInit() {

    this.checkIfExpired();
    this.checkIfNotYetAvailable();

    if(!this.coupon || !this.coupon?.endDate) {
      return;
    }

    const endDate = new Date(this.coupon.endDate);
    endDate.setDate(endDate.getDate() + 1); // Adding one day to include the current day.

    this.timeLeft$ = interval(1000).pipe(
      map(x => this.updateCountdown(endDate)),
      shareReplay(1)
    );
  }

  showCouponCode() {
    this.isShowingCode = true;
  }

  openInNewTab(url: string | undefined) {
    if(!url) return;
    window.open(url, "_blank");
  }

  updateCountdown(endDay: Date = new Date(2022, 0, 1)): Countdown {
    
    const dDay = endDay.valueOf();
  
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
  
    const timeDifference = dDay - Date.now();
  
    let daysToDday = Math.floor(
      timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    daysToDday < 0 && (daysToDday = 0);
  
    let hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );

    hoursToDday < 0 && (hoursToDday = 0);
  
    let minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );

    minutesToDday < 0 && (minutesToDday = 0);
    
    let secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

      secondsToDday < 0 && (secondsToDday = 0);

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

  checkIfExpired() {
    if(!this.coupon?.endDate) {
      return;
    }

    const endDate = new Date(this.coupon?.endDate);
    endDate.setDate(endDate.getDate() + 1) // Add one day to include current day.

    const today = new Date();

    if(today.getTime() > endDate.getTime()) {
      this.isExpired = true;
      console.warn("Expired coupon: ", this.coupon);
    }
    
  }

  checkIfNotYetAvailable() {
    if(!this.coupon?.startDate) {
      return;
    }

    const startDate = new Date(this.coupon?.startDate);
    const today = new Date()

    if(today.getTime() < startDate.getTime()) {
      this.isNotYetAvailable = true;
    }
  }

}
