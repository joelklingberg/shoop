import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GtagModule } from 'angular-gtag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './feed/feed.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    CouponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtagModule.forRoot({ trackingId: 'UA-YOUR_TRACKING_ID', trackPageviews: true }),
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
