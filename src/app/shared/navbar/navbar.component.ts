import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}
  title = 'feetport-task';

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        icon: 'pi pi-fw pi-arrow-left',
      },
      {
        label: 'Create',
      },
    ];
  }

  // update() {
  //     this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  // }

  // delete() {
  //     this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  // }
}
