import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar-estabelecimento/cadastrar.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuardService } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    { path: 'painel', component: PainelComponent,canActivate: [AuthGuardService]},
    { path: 'home', component: HomeComponent},
    { path: 'cadastrar', component: CadastrarComponent,canActivate: [AuthGuardService]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
