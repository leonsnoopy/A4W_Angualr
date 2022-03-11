import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../service/httpservice.service';

interface host {
  hostUrl: string;
  token?: string | "";
}

@Component({
  selector: 'app-login-cx',
  templateUrl: './login-cx.component.html',
  styleUrls: ['./login-cx.component.css']
})
export class LoginCxComponent implements OnInit {

  listOfData: Array<host> = [];
  selected:any;
  account: string="";
  password: string="";
  
  constructor(private httpService: HttpserviceService) {}

  ngOnInit(): void {
    this.listOfData = JSON.parse( localStorage.getItem("hosts")|| '{}');
  }

  login(){
    console.log(this.selected)
    var url = this.selected;
    url+="cxrestapi/identity/connect/token";
    var body = {
      username:this.account,
      password:this.password,
      grant_type:"'password",
      scope:"'sast_rest_api",
      client_id:"'resource_owner_client",
      client_secret:"014DF517-39D1-4453-B7B3-9930C563627C"
    }

    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':'x-www-form-urlencoded',
      'Referer':'http://2ucx-940/'
    });
    let options = {
      headers
    };
    this.httpService.post(url,body,options).toPromise().then(res =>{
      console.log(res)
    })

  }

}
