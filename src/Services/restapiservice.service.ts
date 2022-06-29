import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Regione } from 'src/models/regione';
import { Provincia } from 'src/models/provincia';
import { Comune } from 'src/models/comune';
import { ViewData } from 'src/models/viewdati';
import { IAppConfig } from 'src/app-config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  public myhead = new HttpHeaders().set('Content-Type', 'application/json');

  // PATRIZIO informazione presa dalla sessione
  baseUrlAPI = "" // 'https://localhost:44325';

  constructor(private http: HttpClient) { 
    if(this.baseUrlAPI == "" || this.baseUrlAPI == null || this.baseUrlAPI == undefined) {
      this.getAllDataFromConfig();
    }
  }

  getAllDataFromConfig() {
    do {
      this.baseUrlAPI = sessionStorage.getItem("apiUrlHttps");
      console.log('RESTAPIService getAllDataFromConfig - this.baseUrlAPI: ' + this.baseUrlAPI);
      if(this.baseUrlAPI == "" || this.baseUrlAPI == null || this.baseUrlAPI == undefined) {
        this.loadSettingsDataFromConfig(environment.name);
      }
    }
    while (this.baseUrlAPI == "");
  }

  loadSettingsDataFromConfig(nomefileconfig: string) {
    const jsonFile = 'assets/config/config.' + nomefileconfig + '.json';
    console.log('RESTAPIService loadSettingsDataFromConfig - jsonFile: ' + jsonFile);
    return new Promise<void>((resolve, reject) => {
        this.http.get(jsonFile).subscribe(
          (response: IAppConfig) => {
          
          // console.log('RESTAPIService loadSettingsDataFromConfig - response: ' + response);
          console.log('RESTAPIService loadSettingsDataFromConfig - apiUrlHttp: ' + response.apiServer.apiUrlHttp);
          console.log('RESTAPIService loadSettingsDataFromConfig - apiUrlHttps: ' + response.apiServer.apiUrlHttps);
          this.saveInLocal('apiUrlHttp', response.apiServer.apiUrlHttp);
          this.saveInLocal('apiUrlHttps', response.apiServer.apiUrlHttps);
  
          console.log('RESTAPIService loadSettingsDataFromConfig - productPagerItems: ' + response.GridPager.productPagerItems);
          console.log('RESTAPIService loadSettingsDataFromConfig - productPagerItemsPerPage: ' + response.GridPager.productPagerItemsPerPage);
          this.saveInLocal('productPagerItems', response.GridPager.productPagerItems);
          this.saveInLocal('productPagerItemsPerPage', response.GridPager.productPagerItemsPerPage);
          resolve();
  
        },
        (err: any) => {
          console.log(err);
          reject(`Could not load file '${jsonFile}': ${JSON.stringify(err)}`);
        }
        )
      });
    }
  
    saveInLocal(key, val): void {
      console.log('saveInLocal - RECEIVED key: ' + key + ' - value: ' + val);
      sessionStorage.setItem(key, val);
      /* this.storage.set(key, val);
      this.sessiondata[key] = this.storage.get(key); */
    }
  
    getFromLocal(key): any {
      // console.log('getFromLocal - RECEIVED key: ' + key); // + ' - value:' + this.sessiondata[key]);
      // this.sessiondata[key] = this.storage.get(key);
      console.log('getFromLocal - RECEIVED key: ' + key + ' - value:' + sessionStorage.getItem(key));
      return sessionStorage.getItem(key);
      /* console.log(this.sessiondata);
      return this.sessiondata[key]; */
    }

  // tslint:disable-next-line: typedef
  getRegioni(): Observable<Regione[]> {
    if(this.baseUrlAPI == "" || this.baseUrlAPI == null || this.baseUrlAPI == undefined) {
      this.getAllDataFromConfig();
    };

    if(this.baseUrlAPI != null) {
      const urlAPI = this.baseUrlAPI + '/Api/getAllRegioni';
      console.log('getRegioni - urlAPI: ' + urlAPI);
      // debugger;
      return this.http.get<Regione[]>(urlAPI, { headers: this.myhead })
        /* .pipe(map((response: any) => {
          const val = response;
        })); */
    }
    
  }
  
  getProvinceByIdRegione(idReg): Observable<Provincia[]> {
    const urlAPI = this.baseUrlAPI + '/Api/getProvinciaByIdRegione/' + idReg;
    console.log('getProvinceByIdRegione - urlAPI: ' + urlAPI);
    return this.http.get<Provincia[]>(urlAPI, { headers: this.myhead })
  }

  getComuniByIdProvincia(idProv): Observable<Comune[]> {
    const urlAPI = this.baseUrlAPI + '/Api/getComByIdProvincia/' + idProv;
    console.log('getComuniByIdProvincia - urlAPI: ' + urlAPI);
    return this.http.get<Comune[]>(urlAPI, { headers: this.myhead })
  }

  getDatiViewByIdComune(idCom): Observable<ViewData> {
    const urlAPI = this.baseUrlAPI + '/Api/getDatiView/' + idCom;
    console.log('getDatiViewByIdComune - urlAPI: ' + urlAPI);
    return this.http.get<ViewData>(urlAPI, { headers: this.myhead })
  }
}
