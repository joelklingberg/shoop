import { Component, OnInit } from '@angular/core';
import { Store } from './store/store';
import { stores } from 'src/data/stores';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {

  stores: Store[] = stores;

  constructor() { }

}
