import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Session } from '../utils/session';
import { MenuService } from './service';
import { AlertDom } from '../utils/alert/alert';
import { NgxSpinnerService } from "ngx-spinner";


declare var jquery:any;
declare var $ :any;
declare var SimpleBar :any;
declare var navigator:any;

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent {
  alert = new AlertDom();
  menuService:MenuService;
  session:Session = new Session();
  user:any={
    nome:"",
    matricula:"",
    servidor_efetivo:false
  };
  msgLoading:any="";

  constructor(private http:Http, private router: Router,private spinner: NgxSpinnerService) {
    this.menuService = new MenuService(this.http);
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    // if(!this.user.nome){
    //   this.menuService.getDados((result)=>{
    //     console.log(result);
    //     this.user.nome = result.nome;
    //     this.user.matricula = result.matricula;
    //     this.user.servidor = result.servidor_efetivo;
    //     localStorage.setItem("user",JSON.stringify(this.user));
    //   });
    // }
    
  }
  

  ngOnInit(){
    // new SimpleBar(document.getElementById('lista-desafios'));
    // $('.modal').modal({
    //      dismissible: true, // Modal can be dismissed by clicking outside of the modal
    //      opacity: .5, // Opacity of modal background
    //      inDuration: 300, // Transition in duration
    //      outDuration: 200, // Transition out duration
    //      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    //      },
    //      complete: function() {  } // Callback for Modal close
    //    }
    //  );
    $('button.navbar-toggle').sideNav({
       menuWidth: 300,
       edge: 'left',
       closeOnClick: true,
       draggable: true,
       onOpen: function(el) { },
       onClose: function(el) { },
     });
  }
  ngOnChange(){}
  logout(){
    // //clear Cache imagem
    // localStorage.removeItem("imagePerfil");
    localStorage.removeItem("user");
    this.session.deleteSession("vm_tk");
    this.router.navigate(['/']);
    // this.session.deleteSession("vm_uzr");
    // this.session.deleteSession("vm_tk");
  }
  
 
  @HostListener('document:openLoading', ['$event', '$event.detail.msg'])
  openLoading(event, msg){
    this.msgLoading = msg;
    this.spinner.show();
  }

  @HostListener('document:closeLoading', ['$event', '$event.detail.msg'])
  closeLoading(event, msg){
    this.spinner.hide();
  }
}
