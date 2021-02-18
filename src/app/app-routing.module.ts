import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule),
  },
  {
    path: '**',
    redirectTo: '/leave/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
