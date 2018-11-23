import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-6-datatable'

import { IoaSubactivityLogRoutingModule } from './ioa-subactivity-log-routing.module';
import { IoaSubactivityLogComponent } from './ioa-subactivity-log.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [IoaSubactivityLogComponent],
  imports: [
    CommonModule,
    IoaSubactivityLogRoutingModule,
    PageHeaderModule,
    DataTableModule
  ]
})
export class IoaSubactivityLogModule { }
