import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AlertDom } from '../utils/alert/alert';
import { Values } from '../utils/values';
import { Session } from '../utils/session';

declare var jquery:any;
declare var $ :any;
declare var Materialize:any;


export class HomeService {
    http:any;
    alert:any;
    session:Session = new Session();
    values:Values = new Values();
    // urlPortalServidor = "https://canalservidor-homol.sepog.fortaleza.ce.gov.br/sistema/integra/agendamento";
    constructor(http) {
      this.http = http;
      this.alert = new AlertDom();
    }

    loginUsuario(usuario,callback){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append(Values.API_KEY_ATTR,Values.API_KEY);
      console.log(usuario);
      
       this.http.post(this.values.getUrl()+"/login",JSON.stringify(usuario),{
         headers: headers}
       ).subscribe(res => {

        var response = JSON.parse(res._body);
        this.session.criarSession("vm_tk",response.token,"2038-01-19 04:14:07");
        localStorage.setItem("user",JSON.stringify(response.user));
        this.alert.openMsg("Acesso realizado com sucesso.",3000,"sucesso");
        callback(response);

       }, (err) => {
         this.alert.openMsg("Ocorreu um erro interno.",3000,"erro");
         console.log("Erro aq marilene");
         console.log(err);
         callback(false);
       });
    }

  


}
