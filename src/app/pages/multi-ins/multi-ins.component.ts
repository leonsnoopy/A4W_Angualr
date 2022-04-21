import { Component, OnInit } from '@angular/core';
declare let arxanInvocation :any;

@Component({
  selector: 'app-multi-ins',
  templateUrl: './multi-ins.component.html',
  styleUrls: ['./multi-ins.component.css']
})
export class MultiInsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editEval(){
    window.eval = function(){
      console.log("eval has been change")
    }
  }
  execEval(){
    window.eval('alert("Hi Eval")');
  }

  active(){
    arxanInvocation();
  }
}
