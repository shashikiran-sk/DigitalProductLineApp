import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaSubactivityRoutingModule } from './ioa-subactivity-routing.module';
import { IoaSubactivityComponent } from './ioa-subactivity.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [IoaSubactivityComponent],
  imports: [
    CommonModule,
    IoaSubactivityRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ]
})
export class IoaSubactivityModule { }
