import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarService } from './service';
import { Http, Response } from '@angular/http';
import { AlertDom } from '../utils/alert/alert';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var $ :any;
declare var window :any;
declare var document :any;

@Component({
  selector: 'app-cadastrar-estabelecimento',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  marcarService:CadastrarService;
  negocio:any={
    nome:"",
    descricao:"",
    endereco:"",
    bairro:"",
    cidade:"",
    telefone:"",
  }
  formValid:boolean=false;
  formValidDate:boolean=false;
  alert:AlertDom = new AlertDom();
  constructor(private http: Http, private router: Router) {
      this.marcarService = new CadastrarService(this.http);
      
  }
  ngOnInit(){    

  }

  cadastrar(){
    this.openEventLoad("openLoading","Cadastrando estabelecimento...");
    console.log(this.negocio);
    this.marcarService.cadastrar(this.negocio,(resp)=>{
      this.openEventLoad("closeLoading","");
      if(resp){
      }
    });
  }

  openEventLoad(tipoEvent,value){
    var event = new CustomEvent(
      tipoEvent,
      { detail: { 'msg': value }}
    );
    document.dispatchEvent(event);
  }
}
