import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { campaigns } from 'src/data/campaigns';
import { Campaign } from 'src/data/models/Campaign';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  {

  campaigns = campaigns;

  masonryOptions = {
    fitWidth: true,
  }

  constructor(private gtag: Gtag) {
  }

  onCallToAction(campaign: Campaign) {
    
    if(!campaign) {
      return;
    }

    this.gtag.event('Campaign', {
      method: 'Call to action',
      event_category: 'Engagement',
      event_label: campaign.trackingUrl
    });

    window.open(campaign.trackingUrl, "_blank");
  }

}
