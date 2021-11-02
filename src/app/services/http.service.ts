import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  control(ip:string, target:string,  status: string): Observable<any> {

    return this.http.get(`${ip}/${target}=${status}`,);

  }

  

}
