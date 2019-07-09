import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Cadastrar',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'Novo',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Usuario', icon: 'pi pi-fw pi-user-plus', routerLink: 'novo'},
                      {label: 'Filtro', icon: 'pi pi-fw pi-filter', routerLink: 'grid'}
                  ]
              },
              {label: 'Open', icon: 'pi pi-fw pi-external-link'},
              {separator: true},
              {label: 'Quit', icon: 'pi pi-fw pi-times'}
          ]
      },
      {
          label: 'Editar',
          icon: 'pi pi-fw pi-pencil',
          items: [
              // {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Atualizar', icon: 'pi pi-fw pi-refresh', routerLink: 'pesquisa'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Contents',
                  icon: 'pi pi-pi pi-bars'
              },
              {
                  label: 'Search', 
                  icon: 'pi pi-pi pi-search', 
                  items: [
                      {
                          label: 'Text', 
                          items: [
                              {
                                  label: 'Workspace'
                              }
                          ]
                      },
                      {
                          label: 'User',
                          icon: 'pi pi-fw pi-file',
                      }
              ]}
          ]
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      }
  ];
  }

}
