import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioFormService } from './usuario-form.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  estudantes = [];
  alunoBd: Aluno;

  constructor(
    private usuarioService: UsuarioFormService,
    private router: Router
  ) { }

  ngOnInit() {}

  adicionar(aluno: any) {
    this.alunoBd = new Aluno();
    this.alunoBd.nome = aluno.value.nome;
    this.alunoBd.email = aluno.value.email;
    this.alunoBd.telefone = aluno.value.telefone;
    console.log(aluno);

    this.usuarioService.consultarEmail(aluno.value.email)
        .then(resp => {
          if (resp != null) {
            alert(`Response  ${resp.email}`);
          } else {
            this.usuarioService.salvar(this.alunoBd)
              .then(estudanteResponse => {
                alert(`Estudante "${estudanteResponse.nome}
                " adicionado com código ${estudanteResponse.id}!`);
                this.router.navigate(['usuario/pesquisa']);
              });
          }
        });
  }
}

export class Aluno {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}
