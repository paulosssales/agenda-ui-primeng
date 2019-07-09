import { Component, OnInit } from '@angular/core';

import { UsuarioFormService } from '../usuario-form/usuario-form.service';

@Component({
  selector: 'app-usuario-grid',
  templateUrl: './usuario-grid.component.html',
  styleUrls: ['./usuario-grid.component.css']
})
export class UsuarioGridComponent implements OnInit {
  dados: any;
  estudantes = [];

  constructor(
    private usuarioService: UsuarioFormService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
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
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#E7E9ED',
              '#36A2EB'
            ],
            label: 'Dashboard'
          }],
          labels: [
            'Cadastrados',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
          ]
        };
      });
  }

}
