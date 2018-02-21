import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public result: any;

  constructor(private http: HttpClient) { }

  getTestCases(): Observable<any> {
     return this.http.get('/api/testcases')
       .map( (response: HttpResponse<any>) => response);
    }

  editTestCase(id, data): Observable<any> {
    return this.http.post('/api/testcases/edit/' + id, data)
      .map( (response: HttpResponse<any>) => response);
  }

  getTestCase(id): Observable<any>  {
    return this.http.get('/api/testcases/' + id)
      .map( (response: HttpResponse<any>) => {
        console.log(response);
        return response;
      });
  }

  addTestCase(data): Observable<any> {
    console.log('inside addTestcasae');
    return this.http.post('/api/testcases/add' , data)
      .map( (response: HttpResponse<any>) => {
        console.log(response);
        return response;
      });
  }
}
