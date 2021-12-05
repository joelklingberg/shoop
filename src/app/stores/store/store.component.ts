import { Component, Input, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { Store } from './store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() store: Store | undefined;
  filledStars: number[] = [];
  unfilledStars: number[] = [];

  constructor(private gtag: Gtag) {
  }

  ngOnInit() {
    this.calculateStars();
  }

  getLogoUrl() {
    return "url('" + this.store?.logoURL + "')";
  }

  calculateStars() {
    if(!this.store?.priceLevel) {
      return;
    }

    this.filledStars = Array(this.store?.priceLevel).fill(0).map((x,i)=>i);

    const numberOfUnfilledStars = 5 - this.store?.priceLevel;

    this.unfilledStars = Array(numberOfUnfilledStars).fill(0).map((x,i)=>i);
  }

  onCallToAction() {
    if(!this.store) {
      return;
    }

    this.gtag.event('Store', { 
      method: 'Call to action',
      event_category: 'Engagement',
      event_label: this.store.programId.toString()
    });

    window.open(this.store.trackingURL, "_blank");
  }

}
