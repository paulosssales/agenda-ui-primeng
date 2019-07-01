import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

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
      {label: 'Cadastro', icon: 'fas fa-chart-bar', routerLink: '/cadastro'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Pesquisa', icon: 'fa fa-fw fa-book', routerLink: '/pesquisa'},
      {label: 'Support', icon: 'far fa-life-ring'},
      {label: 'Social', icon: 'fab fa-twitter'}
  ];
  }

}
