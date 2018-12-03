import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { IoaDataService } from '../../shared';
import { ioaSubActivityUri } from '../../shared/config/uri';

@Component({
  selector: 'app-ioa-subactivity',
  templateUrl: './ioa-subactivity.component.html',
  styleUrls: ['./ioa-subactivity.component.scss'],
  animations:[slideToTop()]
})
export class IoaSubactivityComponent implements OnInit {

  ioa_subactivity:any[]=[];
  constructor(private dataservice:IoaDataService) { }

  ngOnInit() {
    this.dataservice.getioa(ioaSubActivityUri).subscribe(res=>{
      this.ioa_subactivity=res;
    });
  }

}
