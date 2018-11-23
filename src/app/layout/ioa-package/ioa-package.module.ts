import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaPackageRoutingModule } from './ioa-package-routing.module';
import { IoaPackageComponent } from './ioa-package.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [IoaPackageComponent],
  imports: [
    CommonModule,
    IoaPackageRoutingModule,
    PageHeaderModule
  ]
})
export class IoaPackageModule { }
