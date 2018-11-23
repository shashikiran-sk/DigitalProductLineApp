import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule' },
        { path:'ioa-info',loadChildren:'./ioa-info/ioa-info.module#IoaInfoModule' },
        { path:'ioa-package',loadChildren:'./ioa-package/ioa-package.module#IoaPackageModule' },
        { path:'ioa-activity',loadChildren:'./ioa-activity/ioa-activity.module#IoaActivityModule' },
        { path:'ioa-subactivity',loadChildren:'./ioa-subactivity/ioa-subactivity.module#IoaSubactivityModule' },
        { path:'ioa-subactivity-log',loadChildren:'./ioa-subactivity-log/ioa-subactivity-log.module#IoaSubactivityLogModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
