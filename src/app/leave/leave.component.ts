import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private router: Router){
    this.router.navigateByUrl('leave/list')
  }

  ngOnInit(): void {
  }
  sidebarItems = [
    {label: 'List', icon: 'pi pi-fw pi-list', routerLink:['/leave/list']},
    {label: 'New', icon: 'pi pi-fw pi-plus', routerLink:['/leave/create']},
    {label: 'Delete', icon: 'pi pi-fw pi-trash', routerLink:['/leave/delete']},
];

}
