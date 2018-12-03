import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ioaInfoUri, ioaPackageUri, ioaActivityUri, ioaSubActivityUri, ioaSubActivityLogUri, workOrderUri, stdPackageUri } from '../../shared/config/uri'
import { IoaDataService } from '../../shared';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  workorder:string;
  workordercode:string;
  stdpkg:string;
  std_pkg_code:string;
  ioa_code:string;
  filetype:string;
  formData:FormData;
  constructor(private http:Http,
              private dataservice:IoaDataService) { 
    this.formData=new FormData();
  }

  ngOnInit() {
    this.dataservice.getWorkOrderCode(workOrderUri).subscribe(result=>{
      this.workordercode=result;
    }
    ,error=>{
      console.log(error)
    })
}

  selectFileType(filetype:any){
    this.formData.append('fileType',filetype.toString())
  }

  
  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        console.log(file.name);
        //  this.formData= new FormData();
        this.formData.append('uploadFile', file, file.name);
        let headers:HttpHeaders = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
    }
  }

  workOrderChange(code){
    if(code){
      this.dataservice.getStdPackageCode(stdPackageUri,code).subscribe(result=>{
        this.std_pkg_code=result;
      }
      ,error=>{
        console.log(error)
      })
    }
  }

  submitUpload(){
    if(this.formData.get('fileType')!=null && this.formData.get('uploadFile')!=null){
      let URI:any;
      let filetype=this.formData.get('fileType')
      switch (filetype) {
        case "CR_IOA":
          URI=ioaInfoUri;
          break;
        case "CR_PACK":
          URI=ioaPackageUri;
          break;
        case "CR_ACT":
          URI=ioaActivityUri;
          break;
        case "CR_TASK":
          URI=ioaSubActivityUri;
          break;
        case "CR_TASKLOG":
          URI=ioaSubActivityLogUri;
          break;
        default:
          return;
      }
      if(this.workorder!=null && this.stdpkg!=null){
        this.formData.append('workorderioa',this.workorder);
        this.formData.append('stdpkg',this.stdpkg);
        let options = new RequestOptions();
        this.http.post(URI, this.formData, options).pipe(
          map(res => res.json()),catchError(error => Observable.throw(error))
        )
        .subscribe(
            data => console.log('success'),
            error => console.log(error)
        )
      }
      
    }
  }
  
}
