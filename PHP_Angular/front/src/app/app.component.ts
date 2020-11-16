// import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';
import { Session } from './utils/session';
import 'rxjs/add/operator/pairwise';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


declare var jquery:any;
declare var $ :any;
declare var navigator :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  mostrarMenu: boolean = false;
  session:Session = new Session();

  constructor(private router: Router) {
   //  router.events.forEach((event) => {
   //     if(event instanceof NavigationStart) {
   //       if(this.session.getSession("vm_uzr") == null){
   //           window.location.hash = "#/home";
   //       }
   //     }
   // });

    //  if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker
    //            .register('./service-worker.js')
    //            .then(function() { console.log('Service Worker Registered'); });
    // }
  }

  ngOnInit(){
    $('.button-collapse').sideNav({
       menuWidth: 300,
       edge: 'left',
       closeOnClick: true,
       draggable: true,
       onOpen: function(el) { },
       onClose: function(el) { },
     });

    // this.authService.mostrarMenuEmitter.subscribe(
    //   mostrar => this.mostrarMenu = mostrar
    // );
  }


}
