import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AlertDom } from '../utils/alert/alert';
import { Values } from '../utils/values';
declare var jquery:any;
declare var $ :any;
declare var Materialize:any;


export class CadastrarService {
    http:any;
    alert:any;
    values:Values = new Values();
    constructor(http) {
      this.http = http;
      this.alert = new AlertDom();
    }

    cadastrar(data,callback){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer '+localStorage.getItem("token"));
      
      console.log(data);

       this.http.post(this.values.getUrl()+"/estabelecimento/save",JSON.stringify(data),{
         headers: headers}
       ).subscribe(res => {

        console.log("res do body");
        console.log(res._body);
        this.alert.openMsg(JSON.parse(res._body).success,5000,"sucesso");
        callback(true);

       }, (err) => {
         this.alert.openMsg("Ocorreu um erro interno.",3000,"erro");
         console.log("Erro aq marilene");
         console.log(err);
         callback(false);
       });
    }



}
