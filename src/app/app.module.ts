import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeModule } from './qr-code/qr-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
