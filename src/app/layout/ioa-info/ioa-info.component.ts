import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';
import { IoaDataService } from '../../shared/services/ioa-data.service';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ioaInfoUri } from '../../shared/config/uri'

@Component({
  selector: 'app-ioa-info',
  templateUrl: './ioa-info.component.html',
  styleUrls: ['./ioa-info.component.scss'],
  animations:[slideToRight()]
})
export class IoaInfoComponent implements OnInit {

  ioainfo:any[]=[];

  constructor(private http:Http,
              private dataservice:IoaDataService) { }

  ngOnInit() {
    this.dataservice.getioa(ioaInfoUri).subscribe(res=>{
      this.ioainfo=res;
    });
  }

  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        console.log(file.name);
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers:HttpHeaders = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        let options = new RequestOptions();
        this.http.post(ioaInfoUri, formData, options).pipe(
            map(res => res.json()),catchError(error => Observable.throw(error))
          )
          .subscribe(
              data => console.log('success'),
              error => console.log(error)
          )
    }
  }

}
