import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPesquisaComponent } from './usuario/usuario-pesquisa/usuario-pesquisa.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full'},
  { path: 'cadastro', component: UsuarioFormComponent},
  { path: 'cadastro/:id', component: UsuarioFormComponent},
  { path: 'pesquisa', component: UsuarioPesquisaComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
