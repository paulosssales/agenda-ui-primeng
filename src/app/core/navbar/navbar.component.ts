import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items1: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items1 = [
      {label: 'Usuario', icon: 'fas fa-chart-bar', routerLink: 'usuario/grid'},
      {label: 'Editar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Pesquisa', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'far fa-life-ring'},
      {label: 'Social', icon: 'fab fa-twitter'}
  ];
  }

}
