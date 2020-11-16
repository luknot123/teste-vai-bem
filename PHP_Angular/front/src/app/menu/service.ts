import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AlertDom } from '../utils/alert/alert';
import { Values } from '../utils/values';

declare var jquery:any;
declare var $ :any;
declare var Materialize:any;


export class MenuService {
    http:any;
    alert:any;
    values:Values = new Values();
    constructor(http) {
      this.http = http;
      this.alert = new AlertDom();

    }
    
    getDados(callback){
      let user = JSON.parse(localStorage.getItem("user"));
      let tokenPortal = user.tokenPortal;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.values.getUrl()+"getDados?tokenPortal="+tokenPortal,{
        headers: headers}
      ).subscribe(res => {
          callback(res.json());
      }, (err) => {
        this.alert.openMsg("Ocorreu um erro interno",3000,"erro");
        callback(false);
      });
    }


}
