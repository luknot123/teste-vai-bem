import { environment } from '../../environments/environment';
// environment
export class Values {
  public url:any;
  public comprovante:string;
  public licenca:string;
  accessToken:any;

  constructor() {
    if(environment.production){
      this.url = "http://127.0.0.1:8000/api";
    }else{
      this.url = "http://127.0.0.1:8000/api";
    }
  }


  static getAcessToken(){
    return localStorage.getItem("token");
  }

  getUrl(){
    return this.url;
  }

}
