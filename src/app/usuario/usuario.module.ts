import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/components/table/table';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioFormService } from './usuario-form/usuario-form.service';
import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    TableModule,
    ScrollingModule,
    ChartModule,
    SharedModule
  ],
  providers: [
    UsuarioFormService
  ],
  exports: [
    UsuarioFormComponent,
    UsuarioPesquisaComponent
  ]
})
export class UsuarioModule {}
