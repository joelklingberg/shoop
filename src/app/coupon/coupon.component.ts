import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {

  code = "HELLO2022";
  isShowingCode: boolean = false;

  showCouponCode() {
    this.isShowingCode = true;
  }

  openInNewTab(url: string){
    window.open(url, "_blank");
  }

}
