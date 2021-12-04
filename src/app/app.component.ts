import { Component } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { stores } from 'src/data/stores';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(gtag: Gtag) {
  }
  
  stores: Store[] = stores;

}
