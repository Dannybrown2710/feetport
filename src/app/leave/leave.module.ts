import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { SharedModule } from '../shared/shared.module';
import {PanelModule} from 'primeng/panel';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { DeleteLeaveComponent } from './delete-leave/delete-leave.component';
import { ListLeavesComponent } from './list-leaves/list-leaves.component';
import { LeaveRoutingModule } from './leave-routing.module';
import {TableModule} from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [LeaveComponent, CreateLeaveComponent, DeleteLeaveComponent, ListLeavesComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    PanelModule,
    LeaveRoutingModule,
    TableModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ToggleButtonModule
  ],
  providers:[]
})
export class LeaveModule { }
