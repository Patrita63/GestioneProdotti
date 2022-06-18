import { Component, OnInit } from '@angular/core';
import { Regione } from '../../models/regione';
import { Provincia } from '../../models/provincia';
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
  provSelectedList: Provincia[] = []; // province;
  comSelectedList: Comune[] = []; // comuni;
  isVisibleLink = false;
  ngOnInit(): void {
    this.getAllRegioniFromAPI();
    this.provSelectedList = [];
    this.comSelectedList = [];
  }

  // tslint:disable-next-line: typedef
  getAllRegioniFromAPI() {
    console.log('getAllRegioniFromAPI - Before this.callApiService.getRegioni');
    this.callApiService.getRegioni()
    .subscribe(result => {
      console.log('getRegioni - result: ' + result);
      this.regioneList = result;
      console.log('getRegioni - this.regioneList: ' + this.regioneList);
   }, error => {
     console.log('getRegioni - failed call: ', error);
   });
  }

  // tslint:disable-next-line: typedef
  getProvinceOfIdRegioneFromAPI(idReg){
    console.log('getProvinceOfIdRegioneFromAPI - Before this.callApiService.getProvinceByIdRegione');
    
    this.callApiService.getProvinceByIdRegione(idReg)
    .subscribe(result => {
     console.log('getProvinceByIdRegione - result: ' + result);
     this.provSelectedList = result;
     console.log('getProvinceByIdRegione - this.provSelectedList: ' + this.provSelectedList);
   }, error => {
     console.log('getProvinceByIdRegione - failed call: ', error);
   });
  }

  // tslint:disable-next-line: typedef
  getComuniByIdProvinciaFromAPI(idProv){
    console.log('getComuniByIdProvinciaFromAPI - Before this.callApiService.getComuniByIdProvincia');
    
    this.callApiService.getComuniByIdProvincia(idProv)
    .subscribe((result: any) => {
      console.log('getComuniByIdProvincia - result: ' + result);
      this.comSelectedList = result;
      console.log('getComuniByIdProvincia - this.comSelectedList: ' + this.comSelectedList);
   }, error => {
     console.log('getComuniByIdProvincia - failed call: ', error);
   });
  }

  changeRegione(event: any): void {
    const idRegione = Number(event.target.value);
    console.log('changeRegione - idRegione selected = ' + idRegione);
    this.comSelectedList = [];
    this.isVisibleLink = false;
    if (idRegione === 0){
      this.provSelectedList = [];
    } else {
      /* const result = province.filter(p => p.IdRegione === idRegione);
      this.provSelected = result; */
      this.getProvinceOfIdRegioneFromAPI(idRegione);
    }
  }
  changeProvincia(event: any): void {
    const idProvincia = Number(event.target.value);
    this.isVisibleLink = false;
    if (idProvincia === 0){
      this.provSelectedList = [];
      this.comSelectedList = [];
    } else {
      /* const result = comuni.filter(p => p.IdProvincia === idProvincia);
      this.comSelected = result; */
      this.getComuniByIdProvinciaFromAPI(idProvincia)
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
