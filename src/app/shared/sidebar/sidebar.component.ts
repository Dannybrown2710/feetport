import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemModel } from './ItemModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  sidebarItems!: ItemModel[]
  constructor() { }
  items: MenuItem[] = [];

  ngOnInit() {
      this.sidebarItems.forEach((item:ItemModel) => {
        this.items.push( {label: item.label, icon: item.icon, routerLink:item.routerLink})
      })
  }

}
