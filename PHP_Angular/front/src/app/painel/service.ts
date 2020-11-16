import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AlertDom } from '../utils/alert/alert';
import { Values } from '../utils/values';
declare var jquery:any;
declare var $ :any;
declare var Materialize:any;


export class PainelService {
    http:any;
    alert:any;
    values:Values = new Values();
    constructor(http) {
      this.http = http;
      this.alert = new AlertDom();
    }

    getLocalizacao(endereco,callback){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer '+localStorage.getItem("token"));

       this.http.get(this.values.getUrl()+"/estabelecimento/buscar?endereco="+endereco,{
         headers: headers}
       ).subscribe(res => {
        console.log(res); 
        try{
          let data = JSON.parse(res._body);
          if(data.success){
            callback(data);
          }else{
            this.alert.openMsg("Ocorreu um erro interno. Por favor tente mais tarde.",3000,"erro");
            callback(false);
          }
        }catch(e){
          callback(false);
          this.alert.openMsg("Ocorreu um erro interno. Por favor tente mais tarde.",3000,"erro");
        }
       }, (err) => {
         this.alert.openMsg("Ocorreu um erro interno. Por favor tente mais tarde.",3000,"erro");
         console.log(err);
         callback(false);
       });
    }

}