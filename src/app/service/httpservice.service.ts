import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getHttp(url: string){
    return this.http.get(url);
  }

  post(url:string, body:any, options?:any){
    return this.http.post(url,body,options);
  }
  
  
}
