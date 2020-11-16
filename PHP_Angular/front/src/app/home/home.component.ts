import { Component, OnInit } from '@angular/core';
import { HomeService } from './service';
import { Session } from '../utils/session';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $ :any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  session:Session = new Session();
  usuario:any ={
    email:"",
    password:""
  };
 
  homeService:any;
  logado:boolean = false;
  mensagemLoading:String="";
  constructor(private http: Http, private router: Router,private spinner: NgxSpinnerService) {
    this.homeService = new HomeService(this.http);
    
  } 
  
  ngOnInit(){
  
  }

  fazerLogin(){
    this.mensagemLoading = "Acessando...";
    this.spinner.show();
    console.log(this.usuario);
    this.homeService.loginUsuario(this.usuario,(response)=>{
      console.log("response aq marilene");
      console.log(response);
      if(response){
        this.router.navigate(['/painel']);
      }
      this.spinner.hide();
    });
  }
  
  eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

}
