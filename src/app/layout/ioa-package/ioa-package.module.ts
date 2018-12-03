import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaPackageRoutingModule } from './ioa-package-routing.module';
import { IoaPackageComponent } from './ioa-package.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [IoaPackageComponent],
  imports: [
    CommonModule,
    IoaPackageRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ]
})
export class IoaPackageModule { }
