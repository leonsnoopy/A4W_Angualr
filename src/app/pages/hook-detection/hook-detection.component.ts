import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-detection',
  templateUrl: './hook-detection.component.html',
  styleUrls: ['./hook-detection.component.css']
})
export class HookDetectionComponent implements OnInit {

  content: String=""
  
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    window.eval = function(){
      console.log("I have been hook")
      alert("I have been hook")
    }
  }

  execute(){
    (window as any).eval(this.content);
  }

}
