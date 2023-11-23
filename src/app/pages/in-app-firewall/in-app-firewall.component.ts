import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../service/httpservice.service';

@Component({
  selector: 'app-in-app-firewall',
  templateUrl: './in-app-firewall.component.html',
  styleUrls: ['./in-app-firewall.component.css']
})
export class InAppFirewallComponent implements OnInit {
  content1:string='';
  content2:string='';
  content3:string='';

  constructor(private httpService: HttpserviceService) {}

  ngOnInit(): void {
  }

  apiGetForServer(){
    this.httpService.getHttp("/api/getData").toPromise().then( (res:any) =>{
      console.log(res)
      this.content1=JSON.stringify(res) ;
  })}

  apiGet2(){
    this.httpService.getHttp("https://jsonplaceholder.typicode.com/todos/1").toPromise().then( (res:any) =>{
      console.log(res)
      this.content2=JSON.stringify(res) ;
  })}

  apiGet3(){
    this.httpService.getHttp("https://api.publicapis.org/random").toPromise().then( (res:any) =>{
      console.log(res)
      this.content3=JSON.stringify(res) ;
  })}
}
