import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoaInfoComponent } from './ioa-info.component';

const routes: Routes = [
  {
    path:'',component:IoaInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoaInfoRoutingModule { }
