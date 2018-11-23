import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoaInfoRoutingModule } from './ioa-info-routing.module';
import { IoaInfoComponent } from './ioa-info.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [IoaInfoComponent],
  imports: [
    CommonModule,
    IoaInfoRoutingModule,
    PageHeaderModule
  ]
})
export class IoaInfoModule { }
