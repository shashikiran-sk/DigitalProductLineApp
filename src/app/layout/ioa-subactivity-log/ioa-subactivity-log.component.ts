import { Component, OnInit,ViewChild,OnDestroy,AfterViewInit } from '@angular/core';
import { slideToRight } from '../../router.animations';
import { IoaDataService } from '../../shared';
import { ioaSubActivityLogUri, searchUri } from '../../shared/config/uri';
import { FormBuilder,Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-ioa-subactivity-log',
  templateUrl: './ioa-subactivity-log.component.html',
  styleUrls: ['./ioa-subactivity-log.component.scss'],
  animations:[slideToRight()]
})
export class IoaSubactivityLogComponent implements OnInit,AfterViewInit,OnDestroy {
  data:any;
  ioa_subactivitylog:any[]=[];
  public isCollapsed = false;
  dtTrigger: Subject<any> = new Subject();
  searchForm = this.fb.group({
    searchField:['',Validators.required],
    searchText:['',Validators.required]
  })

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  constructor(private dataservice:IoaDataService,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.dataInit()
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  advancedSearch(){
    if(this.searchForm.valid){
      let data={
        field:this.searchForm.get('searchField').value,
        text:this.searchForm.get('searchText').value
      }
      this.dataservice.search(searchUri,data).subscribe(res => {
        this.ioa_subactivitylog=res;
        // this.dtTrigger.next();
      })
    }
  }

  dataInit(){
    this.dataservice.getioa(ioaSubActivityLogUri).subscribe(res=>{
      this.ioa_subactivitylog=res;
      // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //   // Destroy the table first
      //   dtInstance.destroy();
      //   this.dtTrigger.next();
      // })
    });
  }
}
