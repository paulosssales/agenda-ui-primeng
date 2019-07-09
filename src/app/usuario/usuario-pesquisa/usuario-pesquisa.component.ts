import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsuarioFormService } from './../usuario-form/usuario-form.service';
import { Aluno } from '../usuario-form/usuario-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})
export class UsuarioPesquisaComponent implements OnInit {

  usuarios = [];
  usuario: any;
  alunoClonado: { [s: string]: Aluno; } = {};
  inscricao: Subscription;

  constructor(
    private usuarioService: UsuarioFormService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.consultar();
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params[`id`];
        this.usuario = this.usuarioService.consultarPorId(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  consultar() {
    return this.usuarioService.consultar()
      .then(dados => {
        this.usuarios = dados;
        console.log(this.usuarios);
      });
  }

  atualizar(aluno: Aluno) {
    this.usuarioService.atualizar(aluno)
    .then(alunoResponse => {
      alert(`Aluno "${alunoResponse.nome}" atualizado com sucesso !`);
      console.log(alunoResponse.nome);
      this.consultar();
    });
  }

  excluir(id: number) {
    this.usuarioService.excluir(id)
      .then(() =>
        this.consultar()
      );
    alert(id);
  }

  iniciarEditar(aluno: Aluno) {
    this.alunoClonado[aluno.id] = {...aluno};
  }

  editarCancelado(aluno: Aluno, index: number) {
    this.usuarios[index] = this.alunoClonado[aluno.id];
  }

}
