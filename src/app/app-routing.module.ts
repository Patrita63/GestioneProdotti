import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegioniListComponent } from './regioni-list/regioni-list.component';
import { ViewDatiComponent } from './view-dati/view-dati.component';

// { path: '', component: ProductListComponent },
const routes: Routes = [
  { path: '', component: RegioniListComponent },
  { path: 'daticomune', component: ViewDatiComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
