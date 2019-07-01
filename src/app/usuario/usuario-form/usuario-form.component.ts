import { Component, OnInit } from '@angular/core';
import { UsuarioFormService } from './usuario-form.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  estudantes = [];
  alunoBd: Aluno;

  dados: any;

  constructor(private usuarioService: UsuarioFormService) { }

  ngOnInit() {
    this.consultar();
  }

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
              });
          }
        });
  }

  consultar(){
    this.usuarioService.consultar()
        .then(dados => {
          this.estudantes = dados;
          this.dados = {
            datasets: [{
                data: [
                    this.estudantes.length,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Cadastrados",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
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
