import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaSubactivityLogRoutingModule } from './ioa-subactivity-log-routing.module';
import { IoaSubactivityLogComponent } from './ioa-subactivity-log.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IoaSubactivityLogComponent],
  imports: [
    CommonModule,
    IoaSubactivityLogRoutingModule,
    PageHeaderModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class IoaSubactivityLogModule { }
