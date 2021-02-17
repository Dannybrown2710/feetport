import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { SharedModule } from '../shared/shared.module';
import {PanelModule} from 'primeng/panel';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { DeleteLeaveComponent } from './delete-leave/delete-leave.component';
import { ListLeavesComponent } from './list-leaves/list-leaves.component';
import { LeaveRoutingModule } from './leave-routing.module';

@NgModule({
  declarations: [LeaveComponent, CreateLeaveComponent, DeleteLeaveComponent, ListLeavesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PanelModule,
    LeaveRoutingModule
  ]
})
export class LeaveModule { }
