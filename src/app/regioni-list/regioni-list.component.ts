import { Component, OnInit } from '@angular/core';
import { Regione } from '../../models/regione';
import { Provincia, province } from '../../models/provincia';
import { Comune, comuni } from '../../models/comune';

import { RESTAPIService } from '../../Services/restapiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regioni-list',
  templateUrl: './regioni-list.component.html',
  styleUrls: ['./regioni-list.component.css']
})
export class RegioniListComponent implements OnInit {

  constructor(private callApiService: RESTAPIService) { }

  // this.regioneList = regioni;
  regioneList: Regione[] = [];
  provSelected = province;
  comSelected = comuni;
  isVisibleLink = false;
  ngOnInit(): void {
    this.getAllRegioniFromAPI();
    this.provSelected = [];
    this.comSelected = [];
  }

  // tslint:disable-next-line: typedef
  getAllRegioniFromAPI() {
    console.log('getAllRegioniFromAPI - Before this.callApiService.getRegioni');
    this.callApiService.getRegioni()
    .subscribe(result => {
      console.log('result: ' + result);
      this.regioneList = result;
      console.log('this.regioneList: ' + this.regioneList);
   }, error => {
     console.log('failed calc', error);
   });
  }

  // tslint:disable-next-line: typedef
  getAllProvinceFromAPI(){
    this.callApiService.getProvince(this.provSelected)
    .subscribe((result: any) => {
     this.provSelected = result;
   }, error => {
     console.log('failed calc', error);
   });
  }

  // tslint:disable-next-line: typedef
  getAllComuniFromAPI(){
    this.callApiService.getComuni(this.comSelected)
    .subscribe((result: any) => {
     this.comSelected = result;
   }, error => {
     console.log('failed calc', error);
   });
  }

  changeRegione(event: any): void {
    const idRegione = Number(event.target.value);
    this.comSelected = [];
    this.isVisibleLink = false;
    if (idRegione === 0){
      this.provSelected = [];
    } else {
      const result = province.filter(p => p.IdRegione === idRegione);
      this.provSelected = result;
    }
  }
  changeProvincia(event: any): void {
    const idProvincia = Number(event.target.value);
    this.isVisibleLink = false;
    if (idProvincia === 0){
      this.provSelected = [];
      this.comSelected = [];
    } else {
      const result = comuni.filter(p => p.IdProvincia === idProvincia);
      this.comSelected = result;
    }
  }
  changeComune(event: any): void {
    const idComune = Number(event.target.value);
    this.isVisibleLink = false;
    if (idComune > 0) {
      this.isVisibleLink = true;
    }
  }

}
