import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { IoaInfoRoutingModule } from './ioa-info-routing.module';
import { IoaInfoComponent } from './ioa-info.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [IoaInfoComponent],
  imports: [
    CommonModule,
    IoaInfoRoutingModule,
    PageHeaderModule,
    AngularFileUploaderModule,
    DataTablesModule
  ],
  providers:[]
})
export class IoaInfoModule { }
