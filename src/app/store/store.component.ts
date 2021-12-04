import { Component, Input } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { Store } from './store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  @Input() store: Store | undefined;

  constructor(private gtag: Gtag) { }

  getLogoUrl() {
    return "url('" + this.store?.logoURL + "')";
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
