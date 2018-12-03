import { Component, OnInit } from '@angular/core';
import { slideToBottom } from '../../router.animations';
import { IoaDataService } from '../../shared';
import { ioaPackageUri } from '../../shared/config/uri';
import 'datatables.net-dt';

@Component({
  selector: 'app-ioa-package',
  templateUrl: './ioa-package.component.html',
  styleUrls: ['./ioa-package.component.scss'],
  animations:[slideToBottom()]
})
export class IoaPackageComponent implements OnInit {

  ioapackage:any[]=[];
  
  constructor(private dataservice:IoaDataService) { }

  ngOnInit() {
    this.dataservice.getioa(ioaPackageUri).subscribe(res=>{
      this.ioapackage=res;
    });
  }

}
