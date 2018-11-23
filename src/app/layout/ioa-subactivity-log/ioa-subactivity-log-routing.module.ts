import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoaSubactivityLogComponent } from './ioa-subactivity-log.component';

const routes: Routes = [
  {
    path:'',component:IoaSubactivityLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoaSubactivityLogRoutingModule { }
