import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  add(event:any){
    this.count +=1
    console.log(this.add)
  }

  change_1(){
    this.add = function(){
      this.count +=1
    }
  }
  change_2(){
    this.add = function(){
      this.count +=2
    }
  }
}
