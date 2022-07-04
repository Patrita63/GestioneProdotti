/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  constructor() { }
} */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAppConfig } from '../../models/app-config.model'; 

@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    constructor(private http: HttpClient) {}
    load() {
        console.log('AppConfig - environment.name: ' + environment.name);
        const jsonFile = `assets/config/config.${environment.name}.json`;
        console.log('AppConfig - jsonFile: ' + jsonFile);
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
               AppConfig.settings = <IAppConfig>response;
               resolve();
            }).catch((response: any) => {
               reject(`AppConfig - Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}