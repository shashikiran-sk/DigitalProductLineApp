import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaActivityRoutingModule } from './ioa-activity-routing.module';
import { IoaActivityComponent } from './ioa-activity.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [IoaActivityComponent],
  imports: [
    CommonModule,
    IoaActivityRoutingModule,
    PageHeaderModule
  ]
})
export class IoaActivityModule { }
