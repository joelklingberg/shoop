import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GtagModule } from 'angular-gtag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './stores/store/store.component';
import { HeaderComponent } from './header/header.component';
import { CouponComponent } from './coupon/coupon.component';
import { StoresComponent } from './stores/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    CouponComponent,
    StoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtagModule.forRoot({ trackingId: 'UA-YOUR_TRACKING_ID', trackPageviews: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
