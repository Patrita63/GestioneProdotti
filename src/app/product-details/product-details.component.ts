import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../models/products';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    // To access the route parameters, we use route.snapshot,
    // which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if ( isNaN(productIdFromRoute) ) {
      console.log('productId FromRoute IS NOT a number');
    } else
    {
      console.log('productId FromRoute: ' + productIdFromRoute);
    }
    // Find the product that correspond with the id provided in route.
    this.product = products.find(x => x.id === productIdFromRoute);
    this.product.dateofproductiondisplay = this.datePipe.transform(this.product.dateofproduction, 'dd-MM-yyyy');
    // https://stackoverflow.com/questions/58540498/no-provider-for-datepipe
    // this.product.dateofproduction.toLocaleString();
    // > "11/10/2016, 11:49:36 AM"
  }

}
