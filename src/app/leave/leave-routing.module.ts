import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './../utils/auth.guard';
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
        component: CreateLeaveComponent,
        canActivate: [AuthGuard],
        data: {
          selector: 'leave_create'
        }
      },

      {
        path:'delete',
        component: DeleteLeaveComponent,
        canActivate: [AuthGuard],
        data: {
          selector: 'leave_delete'
        }
      },
      {
        path:'list',
        component:ListLeavesComponent,
        canActivate: [AuthGuard],
        data: {
          selector: 'leave_list'
        }
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
