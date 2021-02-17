import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { DeleteLeaveComponent } from './delete-leave/delete-leave.component';
import { LeaveComponent } from './leave.component';
import { ListLeavesComponent } from './list-leaves/list-leaves.component';


const routes: Routes = [
  {
    path: '',
    component: LeaveComponent,
    children:[
      {
        path:'create',
        component: CreateLeaveComponent
      },

      {
        path:'delete',
        component: DeleteLeaveComponent
      },
      {
        path:'list',
        component:ListLeavesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
