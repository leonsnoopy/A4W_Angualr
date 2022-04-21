import { Component, OnInit } from '@angular/core';
declare let arxanInvocation :any;

@Component({
  selector: 'app-invocation',
  templateUrl: './invocation.component.html',
  styleUrls: ['./invocation.component.css']
})



export class InvocationComponent implements OnInit {
  hostname:string="?";
  constructor() { }

  ngOnInit(): void {
    this.hostname=location.hostname
  }
  

  active(){
    arxanInvocation();
  }

}
