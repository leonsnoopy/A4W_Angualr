import { ArrayType } from '@angular/compiler';
import { Component, Host, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpserviceService } from '../../service/httpservice.service';

interface host {
  hostUrl: string;
}

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})

export class hostsComponent implements OnInit {

  hostUrl:string=""
  host = {
    hostUrl:"",
  };
  listOfData: Array<host> = [];

  constructor(private httpService: HttpserviceService) {}

  ngOnInit() {
    console.log("hello")
    this.listOfData = Array.from( JSON.parse( localStorage.getItem("hosts")|| '{}') ); 
    // this.httpService.getHttp("https://api.publicapis.org/entries").toPromise().then(res =>{
    //   console.log(res)
    // })
  }
  
  addhost() {
    if(this.hostUrl.trim() == "" ){
      return;
    }
    this.host.hostUrl = this.hostUrl;
    this.listOfData.push(this.host)
    localStorage.setItem("hosts",JSON.stringify(this.listOfData));
    this.ngOnInit();
  }

  deletehost(data: any){
    console.log(data)

    this.listOfData.forEach( (el,index) => {
      if(el.hostUrl==data.hostUrl){
        this.listOfData.splice(index,1)
      }
    })

    localStorage.setItem("hosts",JSON.stringify(this.listOfData));
    this.ngOnInit();
  }
}
