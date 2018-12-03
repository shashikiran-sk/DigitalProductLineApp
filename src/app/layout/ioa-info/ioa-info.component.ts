import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';
import { IoaDataService } from '../../shared/services/ioa-data.service';
import { ioaInfoUri, refreshIoaUri } from '../../shared/config/uri'
import * as $ from 'jquery';
import 'datatables.net-dt';

@Component({
  selector: 'app-ioa-info',
  templateUrl: './ioa-info.component.html',
  styleUrls: ['./ioa-info.component.scss'],
  animations:[slideToRight()]
})
export class IoaInfoComponent implements OnInit {

  ioainfo:any[]=[];
  dtOptions: DataTables.Settings = {};
  constructor(private dataservice:IoaDataService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      "scrollX": true,
      "scrollY":"400px",
      "scrollCollapse": true,
    };
    this.dataservice.getioa(ioaInfoUri).subscribe(res=>{
      this.ioainfo=res;
      
      
      // $('#ioainfo').DataTable({
        
      // })
      // $('#ioainfo').DataTable({
      //   data:this.ioainfo,
      //   "scrollX": true,
      //   "scrollY":"400px",
      //   "scrollCollapse": true,
      //   columns:[
      //     {data:'SEQ_NUMBER'},
      //     {data:'WORK_ORDER_CODE'},
      //     {data:'IOA_CODE'},
      //     {data:'IOA_NAME'},
      //     {data:'PROJECT_CODE'},
      //     {data:'PROJECT_NAME'},
      //     {data:'SHARING_BCODE'},
      //     {data:'STATUS'},
      //     {data:'START_DATE'},
      //     {data:'END_DATE'},
      //     {data:'DURATION'},
      //     {data:'SUCCESS_DURATION'},
      //     {data:'FAILURE_DURATION'},
      //     {data:'CREATE_DATE'},
      //     {data:'LAST_MODIFIED_DATE'},
      //     {data:'REMARKS'},
      //   ],
      //   columnDefs:[
      //     {
      //       targets:-1,
      //       data:'REMARKS',
      //       render: function(data,type,row,meta){
      //         return '<button (click)="refresh()">Download</button>'
      //       }
      //       // defaultContent:'<button>Click!</button>'
      //     }
      //   ]
      // })
    });
  }

  refresh(ioacode){
    this.dataservice.refresh(refreshIoaUri,ioacode).subscribe(response=>{
      console.log(response)
    })
    this.ngOnInit()
  }

}
