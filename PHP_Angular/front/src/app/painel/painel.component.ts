import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PainelService } from './service';
import { Http, Response } from '@angular/http';
import { Utils } from '../utils/utils'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var document;
declare var window :any;
declare var navigator:any;
declare var Chart;


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  painelService:PainelService;
  listPericias:any=[];
  listMeses:any=[];
  msgMeses:string = "";
  height:number = 70;
  user:any;
  listTotais:number[]=[];
  loadingDesp:boolean=true;
  loadingAposent:boolean=true;
  aposentInfo:any;
  vinculos:any=[];
  utils:Utils=new Utils();
  typeServidor:boolean=false;
  // cargoMatricula:number=1000;
  
  constructor(private http: Http, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"));
  
    this.painelService = new PainelService(this.http);
    // this.painelService.getMesesTotal(this.user.matricula,((result)=>{
    //   console.log(result);
    // }));
  }



  ngOnInit(){


  }
  

  
  openEventLoad(tipoEvent,value){
    var event = new CustomEvent(
      tipoEvent,
      { detail: { 'msg': value }}
    );
    document.dispatchEvent(event);
  }
  
}
