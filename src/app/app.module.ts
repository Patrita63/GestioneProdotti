import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RegioniListComponent } from './regioni-list/regioni-list.component';
import { ViewDatiComponent } from './view-dati/view-dati.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    RegioniListComponent,
    ViewDatiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
