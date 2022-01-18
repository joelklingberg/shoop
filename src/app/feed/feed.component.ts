import { Component } from '@angular/core';
import { coupons } from 'src/data/coupons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  coupons = coupons;
}
