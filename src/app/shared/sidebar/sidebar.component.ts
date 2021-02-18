import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemModel } from './ItemModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor() {}
  items: MenuItem[] = [];
  @Input() set sidebarItems(value: ItemModel[]) {
    this.items = value;
  }
}
