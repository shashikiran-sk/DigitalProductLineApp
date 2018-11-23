import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoaPackageComponent } from './ioa-package.component';

const routes: Routes = [
  {
    path:'',component:IoaPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IoaPackageRoutingModule { }
