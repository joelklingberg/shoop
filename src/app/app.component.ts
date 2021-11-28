import { Component } from '@angular/core';
import { coupons } from 'src/data/coupons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  coupons = coupons;

}
