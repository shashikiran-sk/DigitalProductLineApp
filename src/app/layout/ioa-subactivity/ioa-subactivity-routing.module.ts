import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoaSubactivityComponent } from './ioa-subactivity.component';

const routes: Routes = [
  {
    path:'',component:IoaSubactivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoaSubactivityRoutingModule { }
