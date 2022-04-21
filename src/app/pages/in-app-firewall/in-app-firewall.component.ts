import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../service/httpservice.service';

@Component({
  selector: 'app-in-app-firewall',
  templateUrl: './in-app-firewall.component.html',
  styleUrls: ['./in-app-firewall.component.css']
})
export class InAppFirewallComponent implements OnInit {
  content:string='';
  content2:string='';

  constructor(private httpService: HttpserviceService) {}

  ngOnInit(): void {
  }

  apiGet(){
    this.httpService.getHttp("https://api.publicapis.org/entries").toPromise().then( (res:any) =>{
      console.log(res)
      this.content=JSON.stringify(res.entries[0]) ;
  })}

  apiGet2(){
    this.httpService.getHttp("https://parallelum.com.br/fipe/api/v1/carros/marcas").toPromise().then( (res:any) =>{
      console.log(res)
      this.content2=JSON.stringify(res) ;
  })}


  


}
