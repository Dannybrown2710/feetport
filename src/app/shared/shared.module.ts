import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MenuModule} from 'primeng/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    ReactiveFormsModule,
    MenuModule
  ],
  exports:[CommonModule, NavbarComponent, SidebarComponent]
})
export class SharedModule { }
