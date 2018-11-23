import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoaActivityComponent } from './ioa-activity.component';

const routes: Routes = [
  {
    path:'',component:IoaActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoaActivityRoutingModule { }
