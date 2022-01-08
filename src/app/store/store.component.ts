import { Component, Input, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { Product } from 'src/data/models/product';
import { products } from 'src/data/products';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() product: Product | undefined;
  filledStars: number[] = [];
  unfilledStars: number[] = [];
  products = products;

  masonryOptions = {
    fitWidth: true
  }

  constructor(private gtag: Gtag) {
  }

  ngOnInit() {
    console.log(this.product);
  }

  onCallToAction() {
    /*
    if(!this.store) {
      return;
    }

    this.gtag.event('Store', {
      method: 'Call to action',
      event_category: 'Engagement',
      event_label: ""
    });

    window.open(this.store.trackingURL, "_blank");
    */
  }

}
