import { Component, OnInit } from '@angular/core';
declare let arxanInvocationA :any;
declare let arxanInvocationB :any;
declare let arxanInvocationC :any;
declare let arxanInvocationD :any;

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
  
  activeArxanInvocationA(){
    arxanInvocationA();
  }

  activeArxanInvocationB(){
    arxanInvocationB();
  }

  activeArxanInvocationC(){
    arxanInvocationC();
  }

  activeArxanInvocationD(){
    arxanInvocationD();
  }

  gotoHtml() {
    window.open("./assets/html/checksum/checksum.html", "_blank")
  }
}
