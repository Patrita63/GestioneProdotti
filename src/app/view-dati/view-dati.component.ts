<<<<<<< HEAD
import { formatDate }  from '@angular/common';
import { Component, OnInit, Inject,  LOCALE_ID } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 22dba8c3b6fa1043e05bdf802bf0bf614af1c80b
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

<<<<<<< HEAD
  // curr = formatDate("03-march-2022", 'yyyy-dd-MM', this.locale);

  constructor(private callApiService: RESTAPIService, private locStorage: LocalStorageService, @Inject(LOCALE_ID) public locale: string) { }
=======
  constructor(private callApiService: RESTAPIService, private locStorage: LocalStorageService) { }
>>>>>>> 22dba8c3b6fa1043e05bdf802bf0bf614af1c80b

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

<<<<<<< HEAD
  formattaData(dataDaFormattare: Date, formato: string): any {
    return formatDate(dataDaFormattare, formato, this.locale);
  }

=======
>>>>>>> 22dba8c3b6fa1043e05bdf802bf0bf614af1c80b
}
