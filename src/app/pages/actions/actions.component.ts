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

  actionError(){
    var a:any = {};
    console.log(a.ex())
    // try {
    //   throw new Error('Whoops!');
    // } catch (e) {
    //   console.log(e.name + ': ' + e.message+ " trace" + e.stack);
    // }
  } 

  arxanInvocation(){
    console.log("我是進入點")
  }

}


