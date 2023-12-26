import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorTrack',
  templateUrl: './errorTrack.component.html',
  styleUrls: ['./errorTrack.component.css']
})
export class ErrorTrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actionError(){
    var arxanError:any = {};
    console.log("Hi，請用 Arxan 防護完成後，可以找到我在哪？")
    console.log("舉例：我在 哪個檔案？ 哪個 Function？ 哪一行？")
    console.log(arxanError.ex())
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


