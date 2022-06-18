import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Regione } from 'src/models/regione';
import { Provincia } from 'src/models/provincia';
import { Comune } from 'src/models/comune';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  public myhead = new HttpHeaders().set('Content-Type', 'application/json');

  baseUrlAPI = 'https://localhost:44325';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRegioni(): Observable<Regione[]> {
    const urlAPI = this.baseUrlAPI + '/Api/getAllRegioni';
    console.log('getRegioni - urlAPI: ' + urlAPI);
    // debugger;
    return this.http.get<Regione[]>(urlAPI, { headers: this.myhead })
      /* .pipe(map((response: any) => {
        const val = response;
      })); */
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

  // tslint:disable-next-line: typedef
  getProvince(model: any) {
    const urlAPI = this.baseUrlAPI + '/Api/getAllProvince';
    return this.http.get(urlAPI, model)
      .pipe(map((response: any) => {
        const val = response;
      }));
  }

  // tslint:disable-next-line: typedef
  getComuni(model: any) {
    const urlAPI = this.baseUrlAPI + '/Api/getAllComuni';
    return this.http.get(urlAPI, model)
      .pipe(map((response: any) => {
        const val = response;
      }));
  }
}
