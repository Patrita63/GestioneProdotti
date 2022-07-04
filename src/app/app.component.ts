import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
// import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service'; 
import { AppConfig } from './shared/appconfig.service';
// https://www.js-tutorials.com/javascript-tutorial/use-localstorage-sessionstorage-using-webstorage-angular4/
// npm install --save angular-webstorage-service --legacy-peer-deps
// import { AppConfig } from 'src/app-config.model';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GestioneProdotti';
  /* apiUrlHttp = '';
  apiUrlHttps = '';
  productPagerItems = 0;
  productPagerItemsPerPage = 0; */

  // sessiondata: any = [];

 /*  constructor(
    private http: HttpClient, 
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { } */

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
    console.log('AppComponent ngOnInit - AppConfig.settings.apiServer.apiUrlHttp: ' + AppConfig.settings.apiServer.apiUrlHttp);
    this.saveInLocal('apiUrlHttp', AppConfig.settings.apiServer.apiUrlHttp);
    console.log('AppComponent ngOnInit - AppConfig.settings.apiServer.apiUrlHttps: ' + AppConfig.settings.apiServer.apiUrlHttps);
    this.saveInLocal('apiUrlHttp', AppConfig.settings.apiServer.apiUrlHttps);
    //this.loadSettingsDataFromConfig(environment.name);
  }

/* loadSettingsDataFromConfig(nomefileconfig: string) {
  const jsonFile = 'assets/config/config.' + nomefileconfig + '.json';
  console.log('AppComponent loadSettingsDataFromConfig - jsonFile: ' + jsonFile);
  return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).subscribe(
        (response: IAppConfig) => {
        
          // console.log('AppComponent loadSettingsDataFromConfig - response: ' + response);
          console.log('AppComponent loadSettingsDataFromConfig - apiUrlHttp: ' + response.apiServer.apiUrlHttp);
          console.log('AppComponent loadSettingsDataFromConfig - apiUrlHttps: ' + response.apiServer.apiUrlHttps);
          this.saveInLocal('apiUrlHttp', response.apiServer.apiUrlHttp);
          this.saveInLocal('apiUrlHttps', response.apiServer.apiUrlHttps);
  
          console.log('AppComponent loadSettingsDataFromConfig - productPagerItems: ' + response.GridPager.productPagerItems);
          console.log('AppComponent loadSettingsDataFromConfig - productPagerItemsPerPage: ' + response.GridPager.productPagerItemsPerPage);
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
  } */

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

}