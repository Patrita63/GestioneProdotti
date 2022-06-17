import { Component, OnInit } from '@angular/core';

import { ViewData } from '../../models/viewdati';

@Component({
  selector: 'app-view-dati',
  templateUrl: './view-dati.component.html',
  styleUrls: ['./view-dati.component.css']
})
export class ViewDatiComponent implements OnInit {
  itemView: ViewData;

  constructor() { }

  ngOnInit(): void {
  }

}
