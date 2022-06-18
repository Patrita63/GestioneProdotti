import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RegioniListComponent } from './regioni-list/regioni-list.component';
import { ViewDatiComponent } from './view-dati/view-dati.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    RegioniListComponent,
    ViewDatiComponent
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
