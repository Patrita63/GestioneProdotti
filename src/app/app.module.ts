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
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
=======
>>>>>>> 22dba8c3b6fa1043e05bdf802bf0bf614af1c80b

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
<<<<<<< HEAD
  providers: [
    DatePipe
  ],
=======
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
>>>>>>> 22dba8c3b6fa1043e05bdf802bf0bf614af1c80b
  bootstrap: [AppComponent]
})
export class AppModule { }
