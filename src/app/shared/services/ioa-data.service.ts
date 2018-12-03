import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IoaDataService {

  constructor(private http:Http) { }

  getioa(uri){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(uri, {headers: headers})
      .pipe(
        map(res => res.json())
      );
  }

  getWorkOrderCode(uri){
    return this.http.get(uri)
      .pipe(
        map(res => res.json())
      );
  }

  getStdPackageCode(uri,code){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri,{code:code},{headers:headers})
      .pipe(
        map(res => res.json())
      );
  }

  refresh(uri,code){
    return this.http.get(uri + '/' + code)
      .pipe(
        map(res => res.text())
      );
  }

  search(uri,data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(uri,data,{headers:headers}).pipe(
      map(res => res.json())
    )
  }

}
