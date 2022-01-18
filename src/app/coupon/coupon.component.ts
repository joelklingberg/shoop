import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Coupon } from '../../data/models/Coupon.model';
import { Countdown } from '../../data/models/Countdown';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  constructor() {
  }

  @Input() coupon: Coupon | null = null;
  isExpired: boolean = false;
  isShowingCode: boolean = false;

  timeLeft$: Observable<Countdown> = interval(1000).pipe(
    map(x => this.updateCountdown()),
    shareReplay(1)
  );

  ngOnInit() {

    if(!this.coupon || !this.coupon?.endDate) {
      return;
    }


    const endDate = new Date(this.coupon.endDate);

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
    
    if(this.isExpired) return { secondsToDday: 0, minutesToDday: 0, hoursToDday: 0, daysToDday: 0 };

    const dDay = endDay.valueOf();
  
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
  
    const timeDifference = dDay - Date.now();
  
    let daysToDday = Math.floor(
      timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    ) + 1; // Also including the last day.

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

    if(secondsToDday === 0 && minutesToDday === 0 && hoursToDday === 0 && daysToDday === 0) {
      this.setIsExpired();
    }

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

  setIsExpired() {
    this.isExpired = true;
    console.warn("Expired coupon: ", this.coupon);
  }

}
