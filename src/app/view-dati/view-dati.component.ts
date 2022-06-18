import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';  
import { RESTAPIService } from 'src/Services/restapiservice.service';
import { ViewData } from '../../models/viewdati';

@Component({
  selector: 'app-view-dati',
  templateUrl: './view-dati.component.html',
  styleUrls: ['./view-dati.component.css']
})
export class ViewDatiComponent implements OnInit {
  itemView: ViewData;
  idRegione: number;
  idProvincia: number;
  idComune: number;

  constructor(private callApiService: RESTAPIService, private locStorage: LocalStorageService) { }

  ngOnInit(): void {
    //retrieve using the key in string   
    this.idRegione = this.locStorage.retrieve('idRegione');
    console.log('ngOnInit - idRegione selected = ' + this.idRegione);
    this.idProvincia = this.locStorage.retrieve('idProvincia');
    console.log('ngOnInit - idProvincia selected = ' + this.idProvincia);
    this.idComune = this.locStorage.retrieve('idComune');
    console.log('ngOnInit - idComune selected = ' + this.idComune);
    this.getDatiViewFromAPI(this.idComune);
  }

  getDatiViewFromAPI(idCom) {
    console.log('getDatiViewFromAPI - Before this.callApiService.getDatiViewByIdComune');
    this.callApiService.getDatiViewByIdComune(idCom)
    .subscribe(result => {
      console.log('getDatiViewByIdComune - result: ' + result);
      this.itemView = result;
      console.log('getDatiViewByIdComune - this.itemView: ' + this.itemView);
   }, error => {
     console.log('getDatiViewByIdComune - failed call: ', error);
   });
  }

}
