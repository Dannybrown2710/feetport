import { Subscription } from 'rxjs';
import { Permission } from './../utils/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../utils/auth.service';
import { ItemModel } from '../shared/sidebar/ItemModel';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeaveComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.authService.userPermissionsReceived.subscribe(res => {
      this.parsePermissions(res);
    }));
  }
  parsePermissions(permission: Permission[]) {
    const tempPermArr: ItemModel[] = [];
    permission.forEach((permission: any) => {
      if (permission.isPermit === 1) {
        tempPermArr.push(this.sidebarOptions[permission['name']]);
      }
    });
    this.sidebarItems = [...tempPermArr];
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
