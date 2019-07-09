import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioComponent } from './usuario.component';
import { UsuarioGridComponent } from './usuario-grid/usuario-grid.component';

const usuarioRoutes: Routes = [
  { path: 'usuario', redirectTo: 'grid', pathMatch: 'full'},
  { path: 'usuario' , component: UsuarioComponent, children: [
    { path: 'pesquisa', component: UsuarioPesquisaComponent},
    { path: 'grid', component: UsuarioGridComponent},
    { path: 'novo', component: UsuarioFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
