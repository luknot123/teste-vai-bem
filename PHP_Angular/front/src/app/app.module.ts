import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar-estabelecimento/cadastrar.component';
import { PainelComponent } from './painel/painel.component';
import { ActivatedRouteSnapshot} from '@angular/router';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { NgSelect2Module } from 'ng-select2';
import { MenuComponent } from './menu/menu.component';
import { KzMaskDirective } from './utils/directive/kz-mask.directive';
// import { OnCreate } from './utils/directive/oncreate.directive';
import { AppRoutingModule } from './app.routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgxSpinnerModule } from "ngx-spinner";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarComponent,
    MenuComponent,
    KzMaskDirective,
    // OnCreate,
    PainelComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpModule,
    NgSelect2Module,
    GooglePlaceModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    AppRoutingModule
  ],
  providers: [
    MenuComponent,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
