import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from '../shared/sidebar/ItemModel';
import { FetchLeavesService } from './fetch-leaves.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeaveComponent implements OnInit {
  userContext!: string | null;
  sidebarItems!: ItemModel[];
  sidebarOptions: any = {
    leave_list: {
      label: 'List',
      icon: 'pi pi-fw pi-list',
      routerLink: ['/leave/list'],
    },
    leave_create: {
      label: 'New',
      icon: 'pi pi-fw pi-plus',
      routerLink: ['/leave/create'],
    },
    leave_delete: {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash',
      routerLink: ['/leave/delete'],
    },
  };
  constructor(private router: Router, private fetchUser: FetchLeavesService) {}

  ngOnInit(): void {
    this.userContext = sessionStorage.getItem('role');
    if (this.userContext) {
      //Validation of user context is required. Skipping this for assignment
      this.setPermission();
      //this.navigateToListLeaves();
    } else {
      this.fetchUser.fetchRole().subscribe((data: any) => {
        this.userContext = JSON.stringify(data[0]);
        sessionStorage.setItem('role', this.userContext);
        this.setPermission();
        //this.navigateToListLeaves();
      });
    }
  }
  // navigateToListLeaves() {
  //   this.router.navigateByUrl('leave/list');
  // }
  setPermission() {
    const visibleActions = JSON.parse('' + this.userContext);
    const tempPermArr: ItemModel[] = [];
    visibleActions.actions.forEach((action: any) => {
      if (action.permission) {
        action.permission.forEach((permission: any) => {
          if (permission.isPermit === 1) {
            tempPermArr.push(this.sidebarOptions[permission['name']]);
          }
        });
      }
    });
    this.sidebarItems = [...tempPermArr];
  }
}
