import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arxanInvocationA(){
    console.log("我是進入點A")
  }

  arxanInvocationB(){
    console.log("我是進入點B")
  }

  arxanInvocationC(){
    console.log("我是進入點C")
  }

  arxanInvocationD(){
    console.log("我是進入點D")
  }

}


