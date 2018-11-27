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


}
