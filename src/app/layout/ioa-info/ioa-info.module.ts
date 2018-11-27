import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { IoaInfoRoutingModule } from './ioa-info-routing.module';
import { IoaInfoComponent } from './ioa-info.component';
import { PageHeaderModule, IoaDataService } from '../../shared';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [IoaInfoComponent],
  imports: [
    CommonModule,
    IoaInfoRoutingModule,
    PageHeaderModule,
    AngularFileUploaderModule,
    HttpModule
  ],
  providers:[
    IoaDataService
  ]
})
export class IoaInfoModule { }
