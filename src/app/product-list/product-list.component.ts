import { Component, OnInit } from '@angular/core';

import { products } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList = products;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  share(prodName: string) {
    window.alert('The product ' + prodName + ' has been shared!');
  }

  // tslint:disable-next-line: typedef
  onNotify(priceProd: number) {
    window.alert('You will be notified when the product goes on sale. - Product price is ' + priceProd);
  }

}
