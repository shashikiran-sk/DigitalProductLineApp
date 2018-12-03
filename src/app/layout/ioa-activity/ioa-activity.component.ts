import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../router.animations';
import { IoaDataService } from '../../shared';
import { ioaActivityUri } from '../../shared/config/uri';


@Component({
  selector: 'app-ioa-activity',
  templateUrl: './ioa-activity.component.html',
  styleUrls: ['./ioa-activity.component.scss'],
  animations:[slideToLeft()]
})
export class IoaActivityComponent implements OnInit {

  ioa_activity:any[]=[];
  constructor(private dataservice:IoaDataService) { }

  ngOnInit() {
    this.dataservice.getioa(ioaActivityUri).subscribe(res=>{
      this.ioa_activity=res;
    });
  }

}
